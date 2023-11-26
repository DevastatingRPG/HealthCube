export const generateWeightedRandomNumber = () => {
  // Define percentages for each option
  const likelihoods = [35, 10, 13, 5, 2, 3, 12, 7, 3, 5, 5];

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

