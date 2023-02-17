#[repr(u8)]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum Line {
    Unclicked = 0,
    ClickedBy1 = 1,
    ClickedBy2 = 2,
}

#[derive(Debug, PartialEq)]
pub struct Board {
    lines: Vec<Line>,
    size_x: u32,
    size_y: u32,
}

#[derive(Debug, Eq, PartialEq)]
pub enum BoardError {
    OutOfBoardError,
    AlreadyClickedError,
}

pub enum Side {
    Right,
    Left,
    Top,
    Bottom,
}

impl Board {
    pub fn new(size_x: u32, size_y: u32) -> Self {
        let lines = vec![Line::Unclicked; (size_x * size_y + size_y) as usize];
        Board {
            lines,
            size_x,
            size_y,
        }
    }

    fn in_board(&self, x: u32, y: u32) -> bool {
        x < self.size_x && y < self.size_y
    }

    fn get_line_index(&self, x: u32, y: u32, side: Side) -> usize {
        match side {
            Side::Top => (y * 3 * (self.size_x - 1) + x + y) as usize,
            Side::Bottom => {
                (y * 3 * (self.size_x - 1) + x + y + 3 * (self.size_x - 1) + 1) as usize
            }
            Side::Right => (y * 3 * (self.size_x - 1) + x + y + 2 * (self.size_x - 1)) as usize,
            Side::Left => (y * 3 * (self.size_x - 1) + x + y + 2 * (self.size_x - 1) - 1) as usize,
        }
    }

    pub fn set_line(
        &mut self,
        x: u32,
        y: u32,
        side: Side,
        player: Line,
    ) -> Result<&Self, BoardError> {
        if self.in_board(x, y) {
            let i = self.get_line_index(x, y, side);
            if self.lines[i] == Line::Unclicked {
                self.lines[i] = player;
                Ok(self)
            } else {
                Err(BoardError::AlreadyClickedError)
            }
        } else {
            Err(BoardError::OutOfBoardError)
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
        for l in board.lines {
            assert_eq!(l, Line::Unclicked);
        }
    }

    #[test]
    fn get_line_index_test() {
        let board = Board::new(3, 3);

        assert_eq!(board.get_line_index(1, 1, Side::Top), 8);
        assert_eq!(board.get_line_index(2, 2, Side::Bottom), 23);
        assert_eq!(board.get_line_index(1, 0, Side::Right), 5);
        assert_eq!(board.get_line_index(1, 2, Side::Left), 18);
    }

    #[test]
    fn set_line_test() {
        let mut board = Board {
            lines: vec![
                Line::Unclicked,
                Line::Unclicked,
                Line::ClickedBy1,
                Line::ClickedBy1,
                Line::Unclicked,
                Line::Unclicked,
                Line::ClickedBy1,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::ClickedBy1,
                Line::Unclicked,
                Line::Unclicked,
                Line::Unclicked,
                Line::ClickedBy1,
                Line::Unclicked,
                Line::ClickedBy1,
                Line::ClickedBy1,
                Line::ClickedBy1,
                Line::ClickedBy2,
            ],
            size_x: 3,
            size_y: 3,
        };
        assert_eq!(
            board.set_line(2, 2, Side::Bottom, Line::ClickedBy1),
            Err(BoardError::AlreadyClickedError)
        );
        let _ = board.set_line(0, 0, Side::Top, Line::ClickedBy2);
        assert_eq!(board.lines[0], Line::ClickedBy2);
    }
}
