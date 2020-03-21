class TicTacToe {
    /*    winningPatterns = [
            // (rows) i=n && j && J+1 && j+2 == symbol
            // (col) j=n && i && i+1 && i+2 == sybmol
            // (diag top) (i==j) && (i+1 == j+1) && (i=2 == j+2)
            // (diag bottom) = (i=0 && j=arr.len-i) && (i+1 && j=arr.len-i)
        ];*/


    constructor() {
        this.moves = [];

        this.board = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ];
    }


    getPlayerInput(player, i, j) {
        this.makeMove(player, i, j);
    }

    makeMove(player, i, j) {
        if (this.board[i][j] === undefined) {
            this.board[i][j] = player;
        }

        this.checkForWinner(player);
    }


    checkForWinner(player, i, j) {
        let winner = false;
        winner = this.checkDiagonalWin(player, i, j) ||
            this.checkHorizontalWin(player, i, j) ||
            this.checkVerticalWin(player, i, j);

        console.log('winner, board ', winner, this.board);
    }

    checkDiagonalWin(player, i, j) {
        let row = 0, col = 0;
        let diagonalWin = false;

        for (row; row < this.board.length; row++, col++) {
            diagonalWin = this.board[row][col] === player
        }

        if (diagonalWin === true) {
            console.log('..diag win ', diagonalWin);
            return diagonalWin;
        }

        for (row = this.board.length - 1; row > 0; row--, col--) {
            diagonalWin = this.board[row][col] === player;
        }
        if (diagonalWin === true) {
            console.log('..diag win ', diagonalWin);
            return diagonalWin;
        }


        // diagonalWin =
        //     (this.board[0][0] === player) && (this.board[1][1] === player) && (this.board[2][2] === player)
        //     ||
        //     (this.board[2][2] === player) && (this.board[1][1] === player) && (this.board[0][0] === player);
        //
        // return diagonalWin;
    }

    checkVerticalWin(player, i, j) {
        let col = 0, columnWin = false;

        while (col < 3) {
            for (let row = 0; row < this.board[col].length; row++) {
                columnWin = this.board[row][col] === player;
            }
            if (columnWin === true) {
                console.log('....1 ', columnWin);
                return columnWin;
            }
            col++;
        }

    }

    checkHorizontalWin(player) {
        let horizontalWin =
            ((this.board[0][0] === player) &&
                (this.board[0][1] === player) &&
                (this.board[0][2] === player)) ||
            ((this.board[1][0] === player) &&
                (this.board[1][1] === player) &&
                (this.board[1][2] === player)) ||
            ((this.board[2][0] === player) &&
                (this.board[2][1] === player) &&
                (this.board[2][2] === player));
    }
}

game = new TicTacToe();
