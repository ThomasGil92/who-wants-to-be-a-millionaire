import {QuizApiQuestion} from "./quizApiQuestion.ts";
import {QuestionRetriever} from "./questionRetriever.ts";

export class StubQuestionRetriever implements QuestionRetriever {
    questions: QuizApiQuestion[] = [];

    async nextQuestion(): Promise<QuizApiQuestion> {
        return this.questions.shift()!;
    }
}
