import React, { useState } from "react";
import Card from "./Components/Card/Card";

import { fetchQuestions } from "./Api/API";
import { Difficulty, QuestionState } from "./Api/API";

import { GlobalStyle, Wrapper } from "./App.styles";

export interface Answer {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAsnwers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const start = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const next = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAsnwers.length === TOTAL ? (
          <button className="start-btn" onClick={start}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score} </p> : null}
        {loading ? <p className="loading">Loading...</p> : null}
        {!loading && !gameOver ? (
          <Card
            questionNumber={number + 1}
            totalQuestions={TOTAL}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAsnwers ? userAsnwers[number] : undefined}
            check={checkAnswer}
          />
        ) : null}
        {!gameOver &&
        !loading &&
        userAsnwers.length === number + 1 &&
        number !== TOTAL - 1 ? (
          <button className="next" onClick={next}>
            Next
          </button>
        ) : null}
        </ Wrapper>
    </>
  );
};

export default App;
