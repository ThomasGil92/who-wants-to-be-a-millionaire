import {QuizApiQuestion} from "./quizApiQuestion.ts";

export interface QuestionRetriever {
    nextQuestion(): Promise<QuizApiQuestion>;
}
