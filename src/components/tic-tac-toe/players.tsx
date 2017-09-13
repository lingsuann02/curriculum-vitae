interface IPlayer {
    name: string;
    // change name
}

interface IBot {
    // move
    // checkNextBestMove
}

interface IHuman {
    // move
}

class Bot implements IBot, IPlayer {
    name: string;
    mark: string;

    constructor(name?: string, mark?: string) {
        this.name = name ? name : 'AI';
        this.mark = mark ? mark : 'O';
    }
}

class Human implements IHuman, IPlayer {
    name: string;
    mark: string;

    constructor(name?: string, mark?: string) {
        this.name = name ? name : 'You';
        this.mark = mark ? mark : 'X';
    }
}

export {
    IPlayer,
    Bot,
    Human
};