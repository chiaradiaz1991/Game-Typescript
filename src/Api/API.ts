import { shuffle } from "../utils/utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=12&difficulty=${difficulty}&type=boolean`;
  const data = await (await fetch(endpoint)).json();
  console.log("data", data);
  return data.results.map((q: Question, i: number) => ({
    ...q,
    answers: shuffle([...q.incorrect_answers, q.correct_answer]),
  }));
};
