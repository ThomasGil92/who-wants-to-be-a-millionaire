import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {initReduxStore} from "./who-wants-to-be-millionaire/store/reduxStore.ts";
import {StubQuestionGateway} from "./who-wants-to-be-millionaire/adapters/secondary/stubQuestionGateway.ts";
import {Provider} from 'react-redux';

const questionGateway = new StubQuestionGateway();
questionGateway.question = {
    id: '123abc',
    label: 'What is the capital of France?',
    answers: {
        A: 'Paris',
        B: 'London',
        C: 'Berlin',
        D: 'Madrid',
    }
};

const store = initReduxStore({
    questionGateway
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
