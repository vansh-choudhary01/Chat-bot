import "./Chat.css"
import React, { useEffect, useRef } from "react";

export default function Chat({questions, answers}) {
    let divRef = useRef(null);

    useEffect(() => {
        if(divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [questions, answers])

    let size = questions.length;

    return (
        <div ref={divRef} className="chat">
            {Array.from({ length : size }).map((_, idx) => (
                <React.Fragment key={idx}>
                    <p className="right">
                        {questions[idx]}
                    </p>
                    <p className="left"
                        dangerouslySetInnerHTML={{
                            __html: answers[idx]
                                ? answers[idx]
                                : "generating...",
                        }}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}