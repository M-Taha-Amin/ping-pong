const leftBar = new Bar('left');
const rightBar = new Bar('right');
const ball = new Ball();

async function draw() {
  clearCanvas();
  drawScore();
  checkWinner();

  if (winner) {
    await sleep(200);
    gameOverScreen.style.opacity = 1;
    gameOverScreen.querySelector(
      '.winner-text'
    ).textContent = `${winner} Player Wins!`;
    gameOverSound.play();
    return;
  }

  drawNet();

  leftBar.checkVerticalCollision();
  rightBar.checkVerticalCollision();

  checkKeyPresses();

  ball.draw();
  ball.update();
  ball.checkForVerticalCollision();
  leftBar.draw();
  rightBar.draw();

  if (ball.velocityX < 0 && ball.isLeftCollision()) {
    ball.velocityX = -ball.velocityX;
    ballHitSound.play();
  }

  if (ball.velocityX > 0 && ball.isRightCollision()) {
    ball.velocityX = -ball.velocityX;
    ballHitSound.play();
  }

  if (ball.isOutFromLeftBound()) {
    await sleep(250);
    reInitGameObjects();
    scoreRight++;
  }

  if (ball.isOutFromRightBound()) {
    await sleep(250);
    reInitGameObjects();
    scoreLeft++;
  }

  requestAnimationFrame(draw);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawScore() {
  document.getElementById('scoreLeft').textContent = scoreLeft;
  document.getElementById('scoreRight').textContent = scoreRight;
}

function drawNet() {
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
}

function checkWinner() {
  if (scoreLeft >= MAX_SCORE) winner = 'Left';
  if (scoreRight >= MAX_SCORE) winner = 'Right';
}

function reInitGameObjects() {
  leftBar.initAtPosition('left');
  rightBar.initAtPosition('right');
  ball.initAtCenter();
}

function restartGame() {
  scoreLeft = 0;
  scoreRight = 0;
  winner = undefined;
  leftBar.initAtPosition('left');
  rightBar.initAtPosition('right');
  ball.initAtCenter();
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
