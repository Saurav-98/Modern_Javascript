function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}
const expected = [7, 2, 3];

console.log(setItem(expected, 0, 7));

console.log("Volkswagen Beetle" < "Volkswagen Golf");

//

function birdsInWeek(birdsPerDay, week) {
  const starter = 7 * (week - 1);
  const terminator = starter + 7;
  let count = 0;

  for (let i = starter; i < terminator; i++) {
    count += birdsPerDay[i];
  }
  return count;
}
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);

//

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  console.log(birdsPerDay);
}

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);
