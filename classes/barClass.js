class Bar {
  constructor(side) {
    this.width = BAR_WIDTH;
    this.height = BAR_HEIGHT;
    this.yPosition = canvas.height / 2 - this.height / 2;
    this.xPosition =
      side === 'left' ? PADDING : canvas.width - (BAR_WIDTH + PADDING);
  }
  checkVerticalCollision() {
    if (this.yPosition <= PADDING) {
      this.yPosition = PADDING;
    }
    if (this.yPosition >= canvas.height - (this.height + PADDING)) {
      this.yPosition = canvas.height - (this.height + PADDING);
    }
  }
  draw() {
    ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
  initAtPosition(side) {
    this.xPosition =
      side === 'left' ? PADDING : canvas.width - (BAR_WIDTH + PADDING);
    this.yPosition = canvas.height / 2 - this.height / 2;
  }
}
