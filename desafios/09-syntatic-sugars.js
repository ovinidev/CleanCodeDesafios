function getFirstFiveRatings(ratings) {
  if (ratings.length >= 5) {
    return ratings.slice(0, 5);
  }

  return false;
}

function sumFirstFiveRatings(ratings) {
  const hasRatings = Boolean(ratings);

  if (!hasRatings) return { error: "ratings is required" };

  const firstFiveRatings = getFirstFiveRatings(ratings);

  if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

  const sumOfRatings = firstFiveRatings.reduce((acc, currentValue) => {
    console.log(acc);
    return acc + Number(currentValue);
  }, 0);

  const currentDateInTimestamp = new Date().getTime();

  return { sumOfRatings, created_at: currentDateInTimestamp };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];
const sum = sumFirstFiveRatings(appRatings);
console.log(sum);
