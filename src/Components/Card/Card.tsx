import React from "react";

export interface CardProps {
  question: string;
  answers: string[];
  check: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const Card: React.FC<CardProps> = ({
  question,
  answers,
  check,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <>
      <p className="number">
        {questionNumber}| {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="">
        {answers.map((answer, i) => (
          <div key={`${answer} ${i}`}>
            <button disabled={userAnswer} value={answer} onClick={check}>
              <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
