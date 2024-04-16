import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {initReduxStore} from "./who-wants-to-be-millionaire/store/reduxStore.ts";
import {MockQuestionGateway} from "./who-wants-to-be-millionaire/adapters/secondary/mockQuestionGateway.ts";
import {Provider} from 'react-redux';

const questionGateway = new MockQuestionGateway();
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
questionGateway.setValidatedAnswer('123abc', 'A', true);

const store = initReduxStore({questionGateway}, [
    0,      // €0
    200,    // €200
    500,    // €500
    800,    // €800
    1500,   // €1,500
    3000,   // €3,000
    6000,   // €6,000
    12000,  // €12,000
    24000,  // €24,000
    48000,  // €48,000
    72000,  // €72,000
    150000, // €150,000
    300000, // €300,000
    1000000 // €1,000,000
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
