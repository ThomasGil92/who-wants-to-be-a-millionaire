import {Answers} from "./core-logic/use-cases/question-retrieval/question.ts";
import {FC} from "react";

interface Props {
    answers: Answers;
}

export const PossibleAnswers: FC<Props> = ({answers}) => {
  return (
      <div
          className="w-full justify-center grid grid-cols-2 text-white gap-4 font-mono text-sm text-left font-bold leading-6 bg-stripes-fuchsia rounded-lg">
          {Object.entries(answers).map(([letter, label]) => (
              <div key={letter} className="border-3 border-blue-300 rounded-lg px-3 py-1 bg-gray-900">
            <span className="text-orange-500">
                {letter}:&nbsp;
            </span>
                  <span>{label}</span>
              </div>
          ))}
      </div>
  );
};
