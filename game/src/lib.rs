use crate::board::Board;

pub mod board;

pub struct Player {
    name: String,
    score: u16,
}

pub struct Game {
    board: Board,
    player1: Player,
    Player2: Player,
}

impl Game {
    pub fn new(board: Board, player1: Player, Player2: Player) -> Self {
        Self {
            board,
            player1,
            Player2,
        }
    }
}
