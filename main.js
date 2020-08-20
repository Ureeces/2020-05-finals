// makeRunOn - Makes the given paragraph a run-on sentence by replacing periods with commas. 
// Does not replace the last. (Which makes sense if you think about it.)
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

// totalScore - sums the scores from every level object in the 
// given list. If a multiplier parameter is passed as the second 
// parameter, the total is multiplied by it. If a third bonus 
// parameter is present, that is added as well, but not multiplied.
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

// nightOwls - filters the list to return the objects whose property 
// asleep is false and whose localTime is between 100 and 400 inclusive. 
// It should not modify the original array. 
// BEWARE: putting a 0 at the start of a number does NOT do what you 
// think it does--it actually makes it an octal number!--so don't put 
// the numbers in full 24-hour-clock format 
// (i.e., 0100 for 1am and 0200 for 2am). You probably weren't going to 
// anyway, but... let's not make that why we fail this question.
const nightOwlHelperFunction = function(person) {
  if(person.asleep === false && 400 >= person.localTime && person.localTime >= 100) {
    return true;
  }

  return false;
}

const nightOwls = function(people) {
  const nightOwls = people.filter(nightOwlHelperFunction);
  return nightOwls;
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
