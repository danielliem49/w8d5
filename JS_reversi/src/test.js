Board.prototype._positionsToFlip = function (pos, color, dir, piecesToFlip = []) {
    const newPos = [pos[0] + dir[0], pos[1] + dir[1]];
    if (!this.isValidPos(newPos)) return [];
    let otherPiece = this.getPiece(newPos);
    if (otherPiece && otherPiece.oppColor() === color) {
        piecesToFlip.push(newPos);
        return this._positionsToFlip(newPos, color, dir, piecesToFlip);
    }
    else if (otherPiece.color === color) return [];
    return piecesToFlip;
};