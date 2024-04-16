import {QuestionGateway} from "../../../core-logic/gateways/questionGateway.ts";
import {AnswerLetter, Question, ValidatedAnswer} from "../../../core-logic/use-cases/question-retrieval/question.ts";
import {QuizApiQuestion} from "./quizApiQuestion.ts";
import {QuestionRetriever} from "./questionRetriever.ts";

export class QuizApiQuestionGateway implements QuestionGateway {
    constructor(private readonly questionRetriever: QuestionRetriever) {
    }

    async retrieveQuestion(): Promise<Question> {
        let apiQuestion: QuizApiQuestion;
        let nonNullAnswers: Record<string, string>;
        do {
            apiQuestion = await this.questionRetriever.nextQuestion();
            nonNullAnswers = this.discardNullAnswers(apiQuestion.answers);
        } while (Object.keys(nonNullAnswers).length > 4);
        return {
            id: apiQuestion.id.toString(),
            label: apiQuestion.question,
            answers: Object.entries(nonNullAnswers).reduce((acc, [key, answer]) => {
                acc[key.split('_')[1].toUpperCase() as AnswerLetter] = answer;
                return acc;
            }   , {} as Record<AnswerLetter, string>),
        }
    }

    private discardNullAnswers(answers: QuizApiQuestion['answers']): Record<string, string> {
        return Object.entries(answers).filter(([_, value]) => value)
            .reduce((acc, [key, answer]) => {
                acc[key] = answer!;
                return acc;
            }   , {} as Record<string, string>);
    }

    validate(questionId: string, answerLetter: AnswerLetter): Promise<ValidatedAnswer> {
        return Promise.resolve(undefined);
    }
}
