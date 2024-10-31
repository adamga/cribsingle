const PIXI = require('pixi.js');

class CribbageBoard {
  constructor() {
    this.app = new PIXI.Application({ width: 800, height: 600 });
    document.body.appendChild(this.app.view);

    this.board = new PIXI.Graphics();
    this.app.stage.addChild(this.board);

    this.drawBoard();
  }

  drawBoard() {
    this.board.beginFill(0x00FF00);
    this.board.drawRect(50, 50, 700, 500);
    this.board.endFill();

    // Draw pegs and holes
    for (let i = 0; i < 121; i++) {
      const x = 60 + (i % 10) * 60;
      const y = 60 + Math.floor(i / 10) * 40;
      this.board.beginFill(0x000000);
      this.board.drawCircle(x, y, 5);
      this.board.endFill();
    }
  }

  updateBoard(playerScore, aiScore) {
    // Update the board based on the player and AI scores
  }
}

module.exports = CribbageBoard;
