function randomDirection() {
  return Math.random() < 0.5 ? -1 : 1;
}

async function sleep(timeout) {
  return new Promise(resolve => setTimeout(() => resolve(), timeout));
}
