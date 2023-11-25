export const generateWeightedRandomNumber = () => {
  // Define percentages for each option
  const likelihoods = [45, 10, 5, 5, 5, 5, 10, 5, 5, 15, 15];

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

export const pillReward = () => {
  // Define percentages for each option
  // let chances = {
  //   1: 25,
  //   2: 25
  // }
  const likelihoods = [25, 25, 25, 25];

  // Generate a random percentage
  const randomPercentage = Math.random() * 100;

  // Determine the chosen index based on the percentages
  let cumulativePercentage = 0;
  let chosenIndex = -1;

  for (let i = 0; i < likelihoods.length; i++) {
    cumulativePercentage += likelihoods[i];
    if (randomPercentage <= cumulativePercentage) {
      chosenIndex = i + 1;
      break;
    }
  }
  return chosenIndex;
};

export const prePillReward = () => {
  // Define percentages for each option
  const likelihoods = [25, 25, 25, 25];

  // Generate a random percentage
  const randomPercentage = Math.random() * 100;

  // Determine the chosen index based on the percentages
  let cumulativePercentage = 0;
  let chosenIndex = -1;

  for (let i = 0; i < likelihoods.length; i++) {
    cumulativePercentage += likelihoods[i];
    if (randomPercentage <= cumulativePercentage) {
      chosenIndex = i + 1;
      break;
    }
  }

  return chosenIndex;
};

export const superPillReward = () => {
  // Define percentages for each option
  const likelihoods = [25, 25, 25, 25];

  // Generate a random percentage
  const randomPercentage = Math.random() * 100;

  // Determine the chosen index based on the percentages
  let cumulativePercentage = 0;
  let chosenIndex = -1;

  for (let i = 0; i < likelihoods.length; i++) {
    cumulativePercentage += likelihoods[i];
    if (randomPercentage <= cumulativePercentage) {
      chosenIndex = i + 1;
      break;
    }
  }

  return chosenIndex;
};

