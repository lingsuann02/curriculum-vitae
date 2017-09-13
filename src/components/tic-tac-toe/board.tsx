import * as React from 'react';
import { IPlayer, Bot, Human } from './players';

interface ISquare {
    occupiedBy?: IPlayer;
}

interface IBoard {
    squares: Array<ISquare>;
    turns: number;
    restart: Function;
    status: string;
    bot: Bot;
    human: Human;
    winningCombinations: Array<Array<number>>;
}

class Square implements ISquare {
    occupiedBy?: IPlayer;
    status: string;

    constructor(occupiedBy?: IPlayer) {
        this.occupiedBy = occupiedBy;
    }

    setOccupiedBy(occupiedBy: IPlayer) {
        this.occupiedBy = occupiedBy;
    }

    setWinner() {
        this.status = 'winner';
    }
}

class Row {
    squares: Array<number>;
    score: number;
  
    constructor(squares: Array<number>, score: number) {
      this.squares = squares;
      this.score = score;
    }
}

class Board implements IBoard {
    squares: Array<Square>;
    turns: number;
    status: string;
    bot: Bot;
    human: Human;
    winningCombinations: Array<Array<number>>;

    constructor() {
        this.squares = new Array(9).fill(null).map(square => new Square());
        this.winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
        this.turns = 9;
        this.bot = new Bot();
        this.human = new Human();
        this.status = '';        
    }

    selectSquare = (square: number, player: IPlayer) => {
        this.squares[square].setOccupiedBy(player);
        return this.squares;
    }

    highlightWinningRow = (row: Row) => {
        for (let i = 0; i < 3; i++) {
            this.squares[row.squares[i]].setWinner();
        }
        return this.squares;
    }

    restart = (): Board => {
        this.squares = new Array(9).fill(null).map(square => new Square());
        this.turns = 9;
        this.status = '';
        return this;
    }
}

export default class BoardComponent extends React.Component<object, Board> {
    constructor(props: object) {
        super(props);

        this.state = new Board();
    }

    restart(): void {
        this.setState(this.state.restart());
    }

    selectSquare(square: number, player: IPlayer): void {
        let squares = this.state.selectSquare(square, player);
        this.setState({squares: squares});
    }

    onSquareSelect(square: number) : void {
        if (this.state.turns == 0 || this.state.squares[square].occupiedBy) {
            return;
        }
    
        this.selectSquare(square, this.state.human);
        this.setState({turns: this.state.turns-1});
        let bestCombination: Row = this.checkBoard(this.state.human);
        if (bestCombination.score == 3) {
            this.highlightWinningRow(bestCombination);
            this.setState({status: `You have won.`});
            this.setState({turns: 0});
        }
        else {
            this.botMove();
        }
    }

    botMove(): void {
        let bestCombination: Row = this.checkNextBestMove(this.state.bot);
        for (let i = 0; i < 3; i++) {
          if (!this.state.squares[bestCombination.squares[i]].occupiedBy) {
            this.selectSquare(bestCombination.squares[i], this.state.bot);
            this.setState({turns: this.state.turns-1});
            break;
          }
        }
        if (this.checkRowComplete(this.state.bot, bestCombination) === 3) {
            this.highlightWinningRow(bestCombination);
            this.setState({status: `You have lost.`});
            this.setState({turns: 0});
        }
        if (this.state.turns === 0) {
            this.setState({status: `It's a draw!`});
        }
    }

    checkNextBestMove(player: IPlayer): Row {
        let strongestHumanCombination = this.checkBoard(this.state.human);
        let strongestBotCombination = this.checkBoard(this.state.bot);
    
        if (strongestBotCombination.score >= strongestBotCombination.score) {
          return strongestBotCombination;
        }
        return strongestHumanCombination;
    }

    highlightWinningRow(row: Row): void {
        this.setState({squares: this.state.highlightWinningRow(row)});
    }

    checkRowComplete(player: IPlayer, row: Row): number {
        let score = 0;
        if (this.state.squares[row.squares[0]].occupiedBy === player) {
          score++;
        }
        if (this.state.squares[row.squares[1]].occupiedBy === player) {
          score++;
        }
        if (this.state.squares[row.squares[2]].occupiedBy === player) {
          score++;
        }
        return score;
    }

    checkBoard(player: IPlayer): Row {
        let strongestCombination = 0;
        let highestScore = 0;
    
        for (let i = 0; i < this.state.winningCombinations.length; i++) {
            let score = 0;
        
            if (this.state.squares[this.state.winningCombinations[i][0]].occupiedBy === player) {
                score++;
            }
            // don't bother working out the rest of the score as the player can't win with this row
            if (this.state.squares[this.state.winningCombinations[i][0]].occupiedBy 
                && this.state.squares[this.state.winningCombinations[i][0]].occupiedBy !== player) {
                continue;
            }
            if (this.state.squares[this.state.winningCombinations[i][1]].occupiedBy === player) {
                score++;
            }
            if (this.state.squares[this.state.winningCombinations[i][1]].occupiedBy 
                && this.state.squares[this.state.winningCombinations[i][1]].occupiedBy !== player) {
                continue;
            }
            if (this.state.squares[this.state.winningCombinations[i][2]].occupiedBy === player) {
                score++;
            }
            if (this.state.squares[this.state.winningCombinations[i][2]].occupiedBy 
                && this.state.squares[this.state.winningCombinations[i][2]].occupiedBy !== player) {
                continue;
            }
        
            if (score > highestScore) {
                strongestCombination = i;
                highestScore = score;
        
                if (score === 3) {
                break;
                }
            }
        }
        return new Row(this.state.winningCombinations[strongestCombination], highestScore);
    }

    render() {
        return (
            <div>
                <div className="game-restart text-center">
                    <span onClick={() => { this.restart(); }}>Restart</span>
                </div>
                <div className="game-title text-center">
                    <p>Tic Tac Toe</p>
                </div>

                <div className="game-board center-block">
                {
                    this.state.squares.map((square, i) => {
                        let squareClass: string = `square sq-${i}`;
                        let mark: string = '';

                        if (square.occupiedBy === this.state.bot) {
                            squareClass = `square sq-${i} bot`;
                            mark = this.state.bot.mark;
                        }
                        if (square.occupiedBy === this.state.human) {
                            squareClass = `square sq-${i} human`;
                            mark = this.state.human.mark;
                        }
                        return(
                            <div key={`sq-${i}`} className={squareClass}
                                onClick={() => {
                                    if (!square.occupiedBy) {
                                        this.onSquareSelect(i);
                                    }
                                }}>
                                <span className={`marked ${square.status}`}>{mark}</span>
                            </div>
                        );
                    })
                }
                </div>

                <div className="game-status text-center">
                    <p>{this.state.status}</p>
                </div>
            </div> 
        );
    }
}

export {
    BoardComponent
};