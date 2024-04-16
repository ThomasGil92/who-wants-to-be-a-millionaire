import axios from "axios";
import {QuizApiQuestion} from "./quizApiQuestion.ts";
import {QuestionRetriever} from "./questionRetriever.ts";

export class AxiosQuestionRetriever implements QuestionRetriever {

    async nextQuestion(): Promise<QuizApiQuestion> {
        const response = await axios.get<QuizApiQuestion[]>(
            "https://quizapi.io/api/v1/questions?limit=1", {
                params: {
                    apiKey: "5GwkkuvQ1TPFBug1zekPdDlRtWZKUpxdwr6NwvmI",
                    category: "code",
                    limit: 1,
                },
            });
        return response.data[0];

    }
}
