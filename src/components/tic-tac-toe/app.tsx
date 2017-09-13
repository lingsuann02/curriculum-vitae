import * as React from 'react';
// import { IPlayer, Bot, Human } from './players';
import { BoardComponent } from './board';
import './app.css';

export default class TicTacToeApp extends React.Component<object, BoardComponent> {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <div id="tic-tac-toe" className="area-block">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <BoardComponent />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
