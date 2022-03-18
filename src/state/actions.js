export function startCreatePlayers() {
    [
        {
            name: 'Player One',
            remainingTurns: 5,
        },
        {
            name: 'Player Two',
            remainingTurns: 5,
        },
    ]
        .forEach((player) => this.addPlayer(player));

        this.setCurrentPlayer(0);
}