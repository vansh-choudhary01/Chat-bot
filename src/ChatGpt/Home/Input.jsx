import { useState } from "react";
import "./Input.css"

export default function Input({chatStart , request}) {
    let [req, setReq] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        request(req);
        setReq('');
    }

    let handleRequest = (event) => {
        setReq(event.target.value);
    }

    return (
        <div className="input">
            <form action="" onSubmit={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" /></svg>
                <input type="text" placeholder="Message ChatGPT" value={req} onChange={handleRequest}/>
                <button onClick={chatStart}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2B2B2B"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg></button>
            </form>
        </div>
    )
}