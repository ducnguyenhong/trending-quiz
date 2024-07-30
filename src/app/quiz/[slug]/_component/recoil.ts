import { atom } from 'recoil';

export interface QuestionAnswer {
  questionId: string;
  isCorrectAnswer: boolean;
  answeredIndex: number;
}

export const questionAnswerAtom = atom<QuestionAnswer[]>({
  default: [],
  key: 'QUIZ_QUESTION_ANSWER_LIST_ATOM'
});
