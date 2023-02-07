// One square represent a case in the board.
// a square share one line with each of its neighbors, except if
// it is on the edge.
struct Square {
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

#[derive(PartialEq, Eq, Debug)]
enum Side {
    Top,
    Bottom,
    Left,
    Right,
}

impl Square {
    fn new(x: u32, y: u32, side: &Side, name: String) -> Self {
        Square {
            x,
            y,
            left: side.get_string_or_none(Side::Left, name.to_string()),
            top: side.get_string_or_none(Side::Top, name.to_string()),
            right: side.get_string_or_none(Side::Right, name.to_string()),
            bottom: side.get_string_or_none(Side::Bottom, name.to_string()),
            owner: None,
        }
    }

    fn update(&self, side: &Side, name: String) -> Result<&Self, String> {
        // get the line to interract with
        let line: &mut Option<String> = match side {
            Side::Top => &mut self.top,
            Side::Bottom => &mut self.bottom,
            Side::Left => &mut self.left,
            Side::Right => &mut self.right,
        };

        // the line need to be unclicked
        if let Some(_) = line {
            Err("already clicked".to_string())
        } else {
            *line = Some(name.to_string());
            Ok(self)
        }
    }
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
        x >= self.size_x || y >= self.size_y
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

    // TODO : custom error type
    pub fn update_square(
        &mut self,
        x: u32,
        y: u32,
        side: Side,
        name: &str,
    ) -> Result<&Square, String> {
        if !self.is_out(x, y) {
            // check whether or not the square already had interraction(s)
            match self.find(x, y) {
                // square already exists -> try updating it
                Some(s) => s.update(&side, name.to_string()),

                None => {
                    // Create a new square
                    let new_square = Square::new(x, y, &side, name.to_string());
                    self.squares.push(new_square);
                    Ok(self.squares.last().unwrap())
                }
            }
        } else {
            Err("coordinates are not in the board".to_string())
        }
    }

    pub fn update_board(&mut self, x: u32, y: u32, side: Side, name: &str) -> Result<(), String> {
        let first_square = self.update_square(x, y, side, name);
        let (x2, y2) = self.get_other_coordinates(x, y, &side);
        self.update_square(x2, y2, Side::get_opposite(&self))
    }
}

fn is_square_full(square: &Square) -> bool {
    square.left.is_some()
        && square.right.is_some()
        && square.top.is_some()
        && square.bottom.is_some()
}

impl Side {
    fn get_string(&self) -> String {
        match self {
            Side::Top => "top".to_owned(),
            Side::Bottom => "bottom".to_owned(),
            Side::Left => "left".to_owned(),
            Side::Right => "right".to_owned(),
        }
    }

    fn get_string_or_none(&self, excepted_side: Side, name: String) -> Option<String> {
        if excepted_side == *self {
            return Some(name);
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
        let mut board = Board::new(5, 5);
        let result: Result<(), String> = board.update_square(3, 2, Side::Right, "test");
    }

    #[test]
    fn side_test() {
        assert_eq!(Side::Left.get_string(), "left");
        assert_eq!(
            Side::Top.get_string_or_none(Side::Left, "aaa".to_string()),
            None
        );
        assert_eq!(
            Side::Top.get_string_or_none(Side::Top, "test".to_string()),
            Some("top".to_string())
        );
        assert_eq!(Side::Bottom.get_opposite(), Side::Top);
    }
}
