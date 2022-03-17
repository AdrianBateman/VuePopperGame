export function setTitle(newString) {
    this.state.title = newString;
}

export function setNumberPoppers(newInt) {
    this.state.game.numberPoppers = newInt;
}

export function setRemainingPoppers(newInt) {
    this.state.game.remainingPoppers = newInt;
}

export function decreaseRemainingPoppers() {
    this.state.game.remainingPoppers--;
}