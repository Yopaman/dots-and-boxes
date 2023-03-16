mod board;

use crate::board::*;
use board::Side;
use rand::Rng;

pub struct Player {
    name: String,
    score: u16,
}

pub struct Game {
    board: Board,
    turn: u8,
    players: Vec<Player>,
}

impl Player {
    pub fn new(name: &str) -> Self {
        Player {
            name: name.to_string(),
            score: 0,
        }
    }
}

impl Game {
    pub fn new(board_size: u32, player1: &str, player2: &str) -> Self {
        Self {
            board: Board::new(board_size, board_size),
            turn: rand::thread_rng().gen_range(0..1),
            players: vec![Player::new(player1), Player::new(player2)],
        }
    }

    fn next_turn(&mut self) {
        if self.turn == 0 {
            self.turn = 1
        } else {
            self.turn = 0
        }
    }

    pub fn play_turn(&mut self, x: u32, y: u32, side_num: u8) -> Result<&Self, BoardError> {
        let mut player: &mut Player = &mut self.players[self.turn as usize];
        let side: Side = Side::from_num(side_num)?;
        let line_state = match self.turn {
            0 => Line::ClickedBy1,
            1 => Line::ClickedBy2,
            _ => Line::Unclicked,
        };
        self.board.set_line(x, y, side, line_state)?;
        player.score += 1;
        if !self.board.is_square_full(x, y) {
            self.next_turn();
        }
        Ok(self)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn new_game_test() {
        let game = Game::new(3, "bonjour", "test");
        assert_eq!(game.players[0].name, "bonjour");
        assert_eq!(game.players[0].score, 0);
        assert_eq!(game.players[1].name, "test");
        assert_eq!(game.players[1].score, 0)
    }

    #[test]
    fn next_turn_test() {
        let mut game = Game::new(3, "bonjour", "test");
        assert_eq!(game.turn, 0);
        game.next_turn();
        assert_eq!(game.turn, 1);
    }

    #[test]
    fn play_test() {
        let mut game = Game::new(3, "bonjour", "test");
        let _ = game.play_turn(2, 2, 0);
        assert_eq!(game.board.is_square_full(2, 2), false);
        let _ = game.play_turn(2, 2, 1);
        assert_eq!(game.board.is_square_full(2, 2), false);
        let _ = game.play_turn(2, 2, 2);
        assert_eq!(game.board.is_square_full(2, 2), false);
        let _ = game.play_turn(2, 2, 3);
        assert_eq!(game.board.is_square_full(2, 2), true);
    }
}
