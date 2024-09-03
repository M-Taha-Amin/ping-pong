addEventListener('keydown', e => {
  if (controlKeys.includes(e.code)) {
    keysMap.set(e.code, true);
  }
});
addEventListener('keyup', e => {
  if (controlKeys.includes(e.code)) {
    keysMap.set(e.code, false);
  }
});

addEventListener('keypress', e => {
  if (e.code === 'Enter' && winner) {
    playAgainButton.click();
  }
});

playAgainButton.addEventListener('click', () => {
  gameOverScreen.style.opacity = 0;
  restartGame();
});

function checkKeyPresses() {
  if (keysMap.get('KeyW') && leftBar.yPosition > PADDING) {
    leftBar.yPosition -= BAR_SPEED;
  }
  if (
    keysMap.get('KeyS') &&
    leftBar.yPosition < canvas.height - (PADDING + leftBar.height)
  ) {
    leftBar.yPosition += BAR_SPEED;
  }
  if (keysMap.get('ArrowUp') && rightBar.yPosition > PADDING) {
    rightBar.yPosition -= BAR_SPEED;
  }
  if (
    keysMap.get('ArrowDown') &&
    rightBar.yPosition < canvas.height - (PADDING + rightBar.height)
  ) {
    rightBar.yPosition += BAR_SPEED;
  }
}
