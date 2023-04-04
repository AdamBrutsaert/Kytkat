import { useEffect, useState } from "react";

import _ from "lodash";

const getNextQuestion = (questions) => {
  let index = Math.floor(Math.random() * questions.length);
  let shuffledAnswers = _.shuffle(questions[index].answers);
  let correct = _.findIndex(shuffledAnswers, (answer) => {
    return answer === questions[index].answers[questions[index].correct];
  });
  return { text: questions[index].text, answers: shuffledAnswers, correct };
};

export const useQuestion = (file) => {
  const [questions, setQuestions] = useState(undefined);
  const [question, setQuestion] = useState(undefined);
  const [score, setScore] = useState(undefined);

  useEffect(() => {
    fetch(`/${file}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [file]);

  useEffect(() => {
    if (score === undefined) {
      if (questions === undefined) return;
      setScore({ answered: 0, total: questions.length, errors: 0 });
    }
    setQuestion(getNextQuestion(questions));
  }, [questions, score, setScore]);

  const next = (status) => {
    let newQuestions = questions;

    if (status === "true") {
      setScore((previous) => {
        return { ...previous, answered: previous.answered + 1 };
      });
      if (questions.length <= 1) return;
      newQuestions = questions.filter(
        (theQuestion) => theQuestion.text !== question.text
      );
      setQuestions(newQuestions);
    } else {
      setScore((previous) => {
        return { ...previous, errors: previous.errors + 1 };
      });
    }
    setQuestion(getNextQuestion(newQuestions));
  };

  return [question, score, next];
};
