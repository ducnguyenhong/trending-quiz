export interface Answer {
  content: string;
  isCorrect: boolean;
  explain: string;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}
