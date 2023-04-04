import { useState } from "react";
import useSound from "use-sound";
import Answer from "./Answer";
import correct from "sounds/answer-correct.mp3";
import wrong from "sounds/answer-wrong.mp3";

const Question = ({ question, onAnswer }) => {
  const [clickedAnswer, setClickedAnswer] = useState(undefined);
  const [playCorrect] = useSound(correct);
  const [playWrong] = useSound(wrong);

  const onClick = (answer) => {
    if (answer === question.answers[question.correct]) {
      setClickedAnswer({ text: answer, status: "true" });
      playCorrect();
      setTimeout(() => {
        onAnswer("true");
      }, 1000);
    } else {
      setClickedAnswer({ text: answer, status: "false" });
      playWrong();
      setTimeout(() => {
        onAnswer("false");
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-center text-2xl font-extrabold text-white md:text-4xl">
        {question.text}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-8">
        {question.answers.map((answer) => (
          <Answer
            key={`${question.text}-${answer}`}
            answer={answer}
            onClick={clickedAnswer ?? onClick}
            status={
              clickedAnswer
                ? clickedAnswer.text === answer
                  ? clickedAnswer.status
                  : answer === question.answers[question.correct]
                  ? "true"
                  : undefined
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
