const makeRunOn = function(paragraph) {
  let runOn = "";
  let index = 0;

  for(const letter of paragraph) {
    if(letter !== '.') {
      runOn += letter;
    }

    else if(index === paragraph.length - 1) {
      runOn += letter;
    }

    else {
      runOn += ',';
    }

    index++;
  }

  return runOn;
}

const totalScore = function(levels, multiplier, bonus) {
  let score = 0;

  for(const level of levels) {
    score += level.score;
  }

  if(multiplier) {
    score *= multiplier;
  }

  if(bonus) {
    score += bonus;
  }

  return score;
}










if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
