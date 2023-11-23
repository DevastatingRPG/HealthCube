export default generateWeightedRandomNumber = () => {
    // Define percentages for each option
    const likelihoods = [40, 10, 5, 5, 5, 5, 10, 5, 5, 5, 40];
  
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
  