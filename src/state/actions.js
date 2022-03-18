export function startCreatePlayers() {
    [
        {
            name: 'Player One',
            remainingTurns: 5,
            wins: 0,
        },
        {
            name: 'Player Two',
            remainingTurns: 5,
            wins: 0,
        },
    ]
        .forEach((player) => this.addPlayer(player));

        this.setCurrentPlayer(0);
}

export function startDecrecePlayerTurn(playerId) {
    const {
        remainingTurns,
    } = this.state.players[this.state.game.currentPlayer];

    if (remainingTurns > 1) {
        this.decreasePlayerTurn(playerId);
    } else {
        this.setPlayerTurn({
            playerId,
            turns: 5,
        });

        this.startChangePlayer();
    }
}

export function startChangePlayer() {
    this.state.game.currentPlayer = (
                this.state.game.currentPlayer === (this.state.players.length - 1)
    )
        ? 0
        : this.state.game.currentPlayer + 1;
}