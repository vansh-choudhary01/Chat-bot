import Input from "./Home/input";
import "./Home.css"
import Buttons from "./Home/Buttons";
import { useState } from "react";
import Chat from "./Home/Chat";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
    let [firstVisit, setFirstVisit] = useState(true);
    let [questions, setQuestions] = useState([]);
    let [answers, setAnswers] = useState([]);

    const ApiRequest = async (input) => {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
Task Context:
- Carefully analyze the current input, considering both the user's request and underlying intent.
- Use the provided conversation context (if available) to ensure a response tailored to the ongoing interaction.
- Ensure you understands the user's needs, including emotions and tone, to maintain an empathetic and responsive tone.
- Be mindful of context switches, such as changing languages or shifts in topics.

Input Analysis:
${input}

User Mood and Language Analysis:
- Determine the user's tone: Are they seeking assistance, expressing frustration, or looking for clarification?
- Analyze if the user is using a formal, casual, or conversational style and mirror that in the response.
- Check for any underlying emotions or urgency in the user's words.

Previous Questions Reference (if applicable):
${questions.join("\n") || "No previous context"}

Previous Answers Reference (if applicable):
${answers.join("\n") || "No previous answers"}

Response Requirements:
- Be direct, concise, and clear in your response.
- Provide substantive information, with additional context when needed.
- Maintain conversational continuity, building on previous exchanges when relevant.
- Mirror the user's language and mood: if the user is casual, respond casually; if the tone is more formal or technical, reflect that.
- If the input contains mixed languages, reply in the dominant language or ask for clarification if needed.
- Keep the response on-topic, ensuring brevity and relevance.
- Avoid repetitive word choices and phrases. Vary vocabulary and sentence structure to maintain natural flow and avoid redundancy.
- Consider the user's potential need for a follow-up response or further explanation, but avoid over-explaining unless necessary.

Yous's Name and Personality:
- Name: Aiden
- Personality: Aiden is thoughtful, clear, and adaptable. Aiden adjusts responses based on context, ensuring a seamless experience for the user.
- Tone: Empathetic but efficient. 
- Goal: To help the user achieve their desired outcome with clear and concise communication.

Additional Notes:
- Always check for new context or updated inputs.
- Ensure empathy when responding to sensitive or emotional inputs.
`;

        const result = await model.generateContent(prompt);

        const data = result.response.text();
        responce(data);
    }

    function chatStart() {
        setFirstVisit(false);
        console.log(firstVisit);
    }

    let request = (str) => {
        if (questions.length > answers.length) {
            setAnswers((preqA) => ([...preqA, ' ']));
        }
        if (str !== '') {
            ApiRequest(str);
        } else {
            responce(' ');
        }
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
                    <Chat questions={questions} answers={answers} />
                    <Input chatStart={chatStart} request={request} />
                </>
            }

        </div>

    )
}