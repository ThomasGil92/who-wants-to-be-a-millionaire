import {QuestionTitle} from "./QuestionTitle.component.tsx";
import {PossibleAnswers} from "./PossibleAnswers.component.tsx";
import jfoucault from "../assets/img/jfoucault.jpeg";
import {Countdown} from "./Countdown.tsx";
import {useEffect} from "react";
import {retrieveQuestion} from "./core-logic/use-cases/retrieveQuestion.ts";
import {useAppDispatch, useAppSelector} from "./store/reduxStore.ts";

export const CurrentQuestion = () => {

    const dispatch = useAppDispatch();
    const question = useAppSelector(
        state => state.questionRetrieval.data,
    );

    useEffect(() => {
        void dispatch(retrieveQuestion());
    }, [dispatch]);

    return (
        <div>
            <img src={jfoucault} alt="Jean-Pierre Foucault"/>
            <br/>
            <Countdown/>
            {question && <>
                <QuestionTitle title={question.label}/>
                <PossibleAnswers answers={question.answers}/>
            </>}
        </div>
    );
};
