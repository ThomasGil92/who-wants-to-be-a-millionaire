import {retrieveQuestion} from "./retrieveQuestion.ts";
import {Question} from "./question.ts";
import {StubQuestionGateway} from "../../adapters/secondary/stubQuestionGateway.ts";
import {AppState} from "../../store/appState.ts";
import {Gateways, initReduxStore, ReduxStore} from "../../store/reduxStore.ts";

describe('Question retrieval', () => {

    let store: ReduxStore;
    let questionGateway: StubQuestionGateway;
    let initialState: AppState;

    beforeEach(() => {
        questionGateway = new StubQuestionGateway();
        const gateways: Gateways = {
            questionGateway,
        };
        store = initReduxStore(gateways);
        initialState = store.getState();
    });

    it("should not have retrieved any question before the game starts", () => {
        expectRetrievedQuestion(null);
    });

    it('should retrieve a question as soon as the game starts', async () => {
        const currentQuestion = {
            id: '1',
            label: 'What is the capital of France?',
        };
        questionGateway.question = currentQuestion;
        await store.dispatch(retrieveQuestion());
        expectRetrievedQuestion(currentQuestion);
    });

    const expectRetrievedQuestion = (
        expectedQuestion: Question | null,
    ) => {
        expect(store.getState()).toEqual({
            ...initialState,
            questionRetrieval: {
                data: expectedQuestion,
            },
        });
    };

});
