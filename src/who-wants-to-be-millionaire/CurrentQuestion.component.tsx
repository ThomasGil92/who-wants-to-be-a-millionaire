import {QuestionTitle} from "./QuestionTitle.component.tsx";
import {PossibleAnswers} from "./PossibleAnswers.component.tsx";
import jfoucault from "../assets/img/jfoucault.jpeg";
import {Countdown} from "./Countdown.tsx";
import {useEffect} from "react";
import {retrieveQuestion} from "./core-logic/use-cases/question-retrieval/retrieveQuestion.ts";
import {useAppDispatch, useAppSelector} from "./store/reduxStore.ts";
import {validateAnswer} from "./core-logic/use-cases/answer/validateAnswer.ts";
import {AnswerLetter} from "./core-logic/use-cases/question-retrieval/question.ts";

export const CurrentQuestion = () => {

    const dispatch = useAppDispatch();
    const question = useAppSelector(
        state => state.questionRetrieval.data,
    );
    const validated = useAppSelector(state => state.validatedAnswer.valid);

    useEffect(() => {
        void dispatch(retrieveQuestion());
    }, [dispatch]);

    const onGivenAnswer = async (answer: AnswerLetter) => {
        await dispatch(validateAnswer(answer));
        if(validated)
            alert("Correct answer!")
        else
            alert("Wrong answer!")
    }

    return (
        <div>
            <img src={jfoucault} alt="Jean-Pierre Foucault"/>
            <br/>
            <Countdown/>
            {question && <>
                <QuestionTitle title={question.label}/>
                <PossibleAnswers answers={question.answers} onGivenAnswer={onGivenAnswer}/>
            </>}
        </div>
    );
};
