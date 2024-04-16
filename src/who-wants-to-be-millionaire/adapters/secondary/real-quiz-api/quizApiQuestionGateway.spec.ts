import {Question} from "../../../core-logic/use-cases/question-retrieval/question.ts";
import {QuizApiQuestionGateway} from "./quizApiQuestionGateway.ts";
import {StubQuestionRetriever} from "./stubQuestionRetriever.ts";
import {QuizApiQuestion} from "./quizApiQuestion.ts";

describe("Quiz Api Question Gateway", () => {

    let questionRetriever: StubQuestionRetriever;
    let questionGateway: QuizApiQuestionGateway;

    beforeEach(() => {
        questionRetriever = new StubQuestionRetriever();
        questionGateway = new QuizApiQuestionGateway(questionRetriever);
    });


    describe('Accepted question format', () => {
        it('The question shows 4 answers, for a single accepted - should accept it', async () => {
            questionRetriever.questions = [acceptableQuestionFromApi];
            const retrievedQuestion = await questionGateway.retrieveQuestion();
            expectRetrievedQuestion(retrievedQuestion,{
                id: "1",
                label: "Why does a developer use an IDE?",
                answers: {
                    A: "To write code",
                    B: "To have an idea",
                    C: "To dance",
                    D: "To sell code",
                },
            });
        });
    });

    describe('Non-accepted question format', () => {

        it('The question shows 5 answers, for a single accepted - should deny it', async () => {
            const nonAcceptableQuestionFromApi: QuizApiQuestion =
                {...acceptableQuestionFromApi, answers: {...acceptableQuestionFromApi.answers, "answer_e": 'Other answer' }};
            questionRetriever.questions = [nonAcceptableQuestionFromApi, acceptableQuestionFromApi];
            const retrievedQuestion = await questionGateway.retrieveQuestion();
            expectRetrievedQuestion(retrievedQuestion,{
                id: "1",
                label: "Why does a developer use an IDE?",
                answers: {
                    A: "To write code",
                    B: "To have an idea",
                    C: "To dance",
                    D: "To sell code",
                },
            });
        });

        it('should not accept questions with multiples choices', async () => {
            const nonAcceptableQuestionFromApi: QuizApiQuestion =
                {...acceptableQuestionFromApi, id: 99, multiple_correct_answers: "true"};
            questionRetriever.questions = [nonAcceptableQuestionFromApi, acceptableQuestionFromApi];
            const retrievedQuestion = await questionGateway.retrieveQuestion();
            expectRetrievedQuestion(retrievedQuestion,{
                id: "1",
                label: "Why does a developer use an IDE?",
                answers: {
                    A: "To write code",
                    B: "To have an idea",
                    C: "To dance",
                    D: "To sell code",
                },
            });
        });

    });

    describe('Answer validation', () => {
        it('should validate the retrieved question successfully', async () => {
            questionRetriever.questions = [acceptableQuestionFromApi];
            await questionGateway.retrieveQuestion();
            expect(await questionGateway.validate("1", "A")).toBe(true);
        });

    })

    const expectRetrievedQuestion = (actualQuestion: Question, expectedQuestion: Question) => {
        expect(actualQuestion).toEqual<Question>(
            expectedQuestion);
    }
});

const acceptableQuestionFromApi: QuizApiQuestion =
    {
        id: 1,
        question: "Why does a developer use an IDE?",
        answers: {
            "answer_a": "To write code",
            "answer_b": "To have an idea",
            "answer_c": "To dance",
            "answer_d": "To sell code",
            "answer_e": null,
            "answer_f": null
        },
        multiple_correct_answers: "false",
        correct_answers: {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true"
        }
    }
