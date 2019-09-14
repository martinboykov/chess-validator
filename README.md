# __**Chess Validator**__

## __**Description**__
The game of chess is a two-player game and each player start with one king, one queen, two rooks, two knights, two bishops, and eight pawns. Each piece type moves differently:
### __**King**__
The king moves one square in any direction. The king also has a special move called castling that involves also moving a rook.
### __**Rook**__
The rook can move any number of squares along a rank or file but cannot leap over other pieces. Along with the king, a rook is involved during the king's castling move.
### __**Bishop**__
The bishop can move any number of squares diagonally but cannot leap over other pieces.
### __**Queen**__
The queen combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
### __**Knight**__
The knight moves to any of the closest squares that are not on the same rank, file, or diagonal. (Thus, the move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically.) The knight is the only piece that can leap over other pieces.
### __**Pawn**__
The pawn can move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file, provided both squares are unoccupied (black dots in the diagram); or the pawn can capture an opponent's piece on a square diagonally in front of it on an adjacent file, by moving to that square (black "x"s). A pawn has two special moves: the en passant capture and promotion.

### __**Board**__
The game is played on a square board of eight rows (called ranks, denoted 1 to 8 from bottom to top according to White's perspective) and eight columns (called files, denoted a to h from left to right according to White's perspective).

## __**Task**__
Implement code that validates the moves of the two players. If all the moves are valid return string “All moves are valid”. If you find any invalid move, then validation and return the wrong move: “Wrong move: {wrong_move}” where {wrong_move} is the invalid move you’ve found.

## __**Examples**__
### __**Example 1**__:
#### Input 1
1. e2-e4   g7-g6
2. d2-d3   d7-d6
3. f2-f3   g8-f6
4. g2-g3   b8-c6
5. d1-d2   c8-e6
6. f1-e2   a8-b8
7. h2-h3   h7-a5
8. c2-c3   Bf8-h6
#### Result 1: ` Wrong move: h7-a5 `

### __**Example 2**__:
#### Input 2
1. e2-e4   g7-g6
2. d2-d3   d7-d6
3. f2-f3   g8-f6
4. g2-g3   b8-c6
#### Result 2: `All moves are valid`
