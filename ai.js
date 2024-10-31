class AIOpponent {
  constructor(game) {
    this.game = game;
    this.playedCards = [];
  }

  makeMove() {
    // Implement the logic for the AI opponent to make a move
  }

  evaluateHand(hand) {
    // Implement the logic for the AI opponent to evaluate its hand
  }

  chooseCribCards(hand) {
    // Implement the logic for the AI opponent to choose cards for the crib
  }

  trackPlayedCard(card) {
    this.playedCards.push(card);
  }

  getPlayedCards() {
    return this.playedCards;
  }
}

module.exports = AIOpponent;
