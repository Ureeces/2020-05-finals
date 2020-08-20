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

// getToBed - returns a new list where every person object in the given 
// list whose localTime is between 100 and 400 inclusive has their 
// asleep property set to true. Does not mutate the original list. 
// See warning about starting the number with 0 from previous problem's 
// description.
const getToBed = function(people) {
  const allAsleep = [];

  for(const person of people) {
    if(nightOwlHelperFunction(person)) {
      allAsleep.push(
        {
          name: person.name,
          localTime: person.localTime,
          asleep: true
        }
      );
    }

    else {
      allAsleep.push(
        {
          name: person.name,
          localTime: person.localTime,
          asleep: person.asleep
        }
      );
    }
  }

  return allAsleep;
}

/* findIndices - a function that takes a list and another function 
  (a callback) as parameters and returns a new list holding the indices
  of the list at which, when the corresponding element is passed into the 
  callback function, it returns true. (See the test for precise examples!)
*/
const findIndices = function(list, callback) {
  const indices = [];

  for(const index in list) {
    if(callback(list[index])) {
      indices.push(Number(index));
    }
  }

  return indices;
}

/* Faqtory - a factory function that returns an object with methods for 
  managing a FAQ list. It contains an array of questions set to empty to 
  start with, an addQuestion method for adding questions to the list, 
  and an answerQuestion method for answering those questions that have yet
  to be answered. See tests for details. NOTE: the questions being added 
  are objects. Making a helper function that returns a question object may 
  be worth it, but either way, make sure those questions are objects! 
  HINT the id of a new question can be set by looking at how many 
  questions are already in the list.
*/
const Faqtory = function() {
  return {
    questions: [],

    makeQuestion: function(newText, newID, isAnswered, newAnswer) {
      return {
        text: newText,
        id: newID,
        answered: isAnswered || false,
        answer: newAnswer || ""
      }
    },
    
    addQuestion: function(question) {
      const newID = this.questions.length;
      const newQuestion = this.makeQuestion(question, newID);
      this.questions.push(newQuestion);
    },

    answerQuestion: function(qID, newAnswer) {
      const answerThis = this.questions[qID];
      if(answerThis.answered === false) {
        answerThis.answered = true;
        answerThis.answer = newAnswer;
      }
    }
      
    }
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
