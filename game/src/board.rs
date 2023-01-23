use std::error::Error;

// One square represent a case in the board.
// a square share one line with each of its neighbors, except if
// it is on the edge.
pub struct Square {
    x: u32,
    y: u32,
    left: Option<String>,
    top: Option<String>,
    right: Option<String>,
    bottom: Option<String>,
    owner: Option<String>,
}

pub struct Board {
    size_x: u32,
    size_y: u32,
    squares: Vec<Square>,
}

#[derive(PartialEq, Eq)]
pub enum Side {
    Top,
    Bottom,
    Left,
    Right,
}

impl Board {
    pub fn new(size_x: u32, size_y: u32) -> Self {
        Board {
            size_x,
            size_y,
            squares: vec![],
        }
    }

    fn is_out(&self, x: u32, y: u32) -> bool {
        x >= self.size_x || y >= self.size_y || x < 0 || y < 0
    }

    fn find(&mut self, x: u32, y: u32) -> Option<&mut Square> {
        self.squares.iter_mut().find(|s| s.x == x && s.y == y)
    }

    fn get_other_coordinates(&self, x: u32, y: u32, side: &Side) -> Option<(u32, u32)> {
        match side {
            Side::Left if self.is_out(x - 1, y) => None,
            Side::Left => Some((x - 1, y)),
            Side::Right if self.is_out(x + 1, y) => None,
            Side::Right => Some((x + 1, y)),
            Side::Top if self.is_out(x, y - 1) => None,
            Side::Top => Some((x, y - 1)),
            Side::Bottom if self.is_out(x, y + 1) => None,
            Side::Bottom => Some((x, y + 1)),
        }
    }

    // TODO : Custom error type
    pub fn update_square(&mut self, x: u32, y: u32, side: Side, name: &str) -> Result<(), String> {
        if !self.is_out(x, y) {
            // check whether or not the square already had interraction(s)
            match self.find(x, y) {
                Some(s) => {
                    let line: &mut Option<String> = match side {
                        Side::Top => &mut s.top,
                        Side::Bottom => &mut s.bottom,
                        Side::Left => &mut s.left,
                        Side::Right => &mut s.right,
                    };

                    if let Some(_) = line {
                        Err("already clicked".to_string())
                    } else {
                        *line = Some(name.to_string());
                        Ok(())
                    }
                }
                None => {
                    let new_square = Square {
                        x,
                        y,
                        left: side.get_side_string_or_none(Side::Left),
                        top: side.get_side_string_or_none(Side::Top),
                        right: side.get_side_string_or_none(Side::Right),
                        bottom: side.get_side_string_or_none(Side::Bottom),
                        owner: None,
                    };
                    self.squares.push(new_square);
                    if let Some((x2, y2)) = self.get_other_coordinates(x, y, &side) {
                        match self.find(x2, y2) {
                            Some(s2) => {}
                            None => {
                                let other_square = Square {
                                    x: x2,
                                    y: y2,
                                    left: side.get_opposite().get_side_string_or_none(Side::Left),
                                    right: side.get_opposite().get_side_string_or_none(Side::Right),
                                    top: side.get_opposite().get_side_string_or_none(Side::Top),
                                    bottom: side
                                        .get_opposite()
                                        .get_side_string_or_none(Side::Bottom),
                                    owner: None,
                                };
                                self.squares.push(other_square);
                            }
                        }
                    }
                    Ok(())
                }
            }
        } else {
            Err("coordinates are not in the board".to_string())
        }
    }
}

impl Side {
    fn get_side_string(&self) -> String {
        match self {
            Side::Top => "top".to_owned(),
            Side::Bottom => "bottom".to_owned(),
            Side::Left => "left".to_owned(),
            Side::Right => "right".to_owned(),
        }
    }

    fn get_side_string_or_none(&self, excepted_side: Side) -> Option<String> {
        if excepted_side == *self {
            return Some(self.get_side_string());
        } else {
            None
        }
    }

    fn get_opposite(&self) -> Self {
        match self {
            Side::Top => Side::Bottom,
            Side::Bottom => Side::Top,
            Side::Left => Side::Right,
            Side::Right => Side::Left,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn new_board_test() {
        let board = Board::new(2, 5);
        assert_eq!(board.size_x, 2);
        assert_eq!(board.size_y, 5);
        assert_eq!(board.squares.len(), 0);
    }

    #[test]
    fn click_test() {
        let board = Board::new(5, 5);
        let result: Option<(), String> = board.update_square(3, 2, Side::Right, "test");
    }
}
