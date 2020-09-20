import React from "react";
import { Answer } from '../../App'; 
import { Wrapper, ButtonWrapper } from "./Card.styles";

export interface CardProps {
  question: string;
  answers: string[];
  check: (e: React.MouseEvent<HTMLButtonElement>)=> void;
  userAnswer: Answer | undefined;
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
    <Wrapper>
      <p className="number">
        {questionNumber}| {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="">
        {answers.map((answer, i) => (
          <ButtonWrapper>
            <button disabled={!!userAnswer} value={answer} onClick={check}>
              <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default Card;
