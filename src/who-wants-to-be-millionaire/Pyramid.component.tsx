import {useAppSelector} from "./store/reduxStore.ts";
import {selectPyramid} from "./adapters/primary/react/selectors/pyramid.selectors.ts";

export const Pyramid = () => {

    const {currentStep, steps} = useAppSelector(selectPyramid);

    return (
        <div className="mt-3 justify-center rounded-lg text-yellow-500">
            <div className="flex flex-col justify-center">
                <ul className="flex flex-col mx-auto">
                    {steps.map((step) => (
                        <li key={step} className="text-white font-bold">
                            <div
                                className={`p-2 ${currentStep === step ? 'rounded-full bg-orange-500' : ''}`}>{step} €
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
