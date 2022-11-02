function calculateGrade(marks) {
  let totalScore = 0;
  for (let index = 0; index < marks.length; index++) {
    totalScore += marks[index];
  }
  let averageTotalScore = Math.floor(totalScore / marks.length);
  if (averageTotalScore <= 49) {
    return "F";
  } else if (averageTotalScore >= 50 && averageTotalScore <= 59) {
    return "E";
  } else if (averageTotalScore >= 60 && averageTotalScore <= 69) {
    return "D";
  } else if (averageTotalScore >= 70 && averageTotalScore <= 79) {
    return "C";
  } else if (averageTotalScore >= 80 && averageTotalScore <= 89) {
    return "B";
  } else if (averageTotalScore >= 90 && averageTotalScore <= 100) {
    return "A";
  }
}
module.exports = calculateGrade;
