class Ball {
  constructor() {
    this.xPosition = canvas.width / 2 - BALL_RADIUS / 2;
    this.yPosition = canvas.height / 2 - BALL_RADIUS;
    this.radius = BALL_RADIUS;
    this.speed = 10;
    this.velocityX = this.speed * randomDirection();
    this.velocityY = this.speed * randomDirection();
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.xPosition += this.velocityX;
    this.yPosition += this.velocityY;
  }
  checkForVerticalCollision() {
    if (this.yPosition >= canvas.height - this.radius) {
      this.velocityY = -this.velocityY;
    }
    if (this.yPosition <= PADDING) {
      this.velocityY = -this.velocityY;
    }
  }
  isLeftCollision() {
    return (
      leftBar.xPosition < this.xPosition + this.radius &&
      leftBar.xPosition + leftBar.width > this.xPosition &&
      leftBar.yPosition < this.yPosition + this.radius &&
      leftBar.yPosition + leftBar.height > this.yPosition
    );
  }
  isRightCollision() {
    return (
      this.xPosition - this.radius < rightBar.xPosition + rightBar.width &&
      this.xPosition + this.radius > rightBar.xPosition &&
      this.yPosition < rightBar.yPosition + rightBar.height &&
      this.yPosition + this.radius > rightBar.yPosition
    );
  }
  initAtCenter() {
    this.xPosition = canvas.width / 2 - BALL_RADIUS / 2;
    this.yPosition = canvas.height / 2 - BALL_RADIUS;
    this.velocityX = this.speed * randomDirection();
    this.velocityY = this.speed * randomDirection();
  }
  isOutFromLeftBound() {
    return this.xPosition + this.radius < 0;
  }
  isOutFromRightBound() {
    return this.xPosition > canvas.width + this.radius;
  }
}
