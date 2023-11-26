export const generateWeightedRandomNumber = () => {
  // Define percentages for each option
  const likelihoods = [45, 5, 5, 5, 5, 5, 10, 5, 10, 15, 15];

  // Generate a random percentage
  const randomPercentage = Math.random() * 100;

  // Determine the chosen index based on the percentages
  let cumulativePercentage = 0;
  let chosenIndex = -1;

  for (let i = 0; i < likelihoods.length; i++) {
    cumulativePercentage += likelihoods[i];
    if (randomPercentage <= cumulativePercentage) {
      chosenIndex = i;
      break;
    }
  }

  return chosenIndex;
};

export const weightedRandom = (list, weights) => {
  let i, sum = 0, r = Math.random();
  for (i in weights) {
    sum += weights[i];
    if (r <= sum) return list[i];
  }
 }

