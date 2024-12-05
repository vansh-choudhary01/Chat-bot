import Input from "./Home/input";
import "./Home.css"
import Buttons from "./Home/Buttons";
import { useState } from "react";
import Chat from "./Home/Chat";

export default function Home() {
    let [firstVisit, setFirstVisit] = useState(true);

    const ApiRequest = async (input) => {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: input }),
            }
        );
        const data = await response.json();
        console.log(data);
        responce(data[0].generated_text);
    }

    let [questions, setQuestions] = useState([]);

    let [answers, setAnswers] = useState([]);

    function chatStart() {
        setFirstVisit(false);
        console.log(firstVisit);
    }

    let request = (str) => {
        ApiRequest(str);
        setQuestions((prevQ) => ([...prevQ, str]));
    }

    let responce = (str) => {
        setAnswers((preqA) => ([...preqA, str]));
    }

    return (
        <div className="home">
            {firstVisit ?
                <>
                    <h1>What can I help with?</h1>
                    <Input chatStart={chatStart} />
                    <Buttons />
                </> :
                <>
                    <Chat questions={questions} answers={answers}/>
                    <Input chatStart={chatStart} request={request}/>
                </>
            }

        </div>

    )
}