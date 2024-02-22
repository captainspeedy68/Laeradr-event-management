import React from 'react';
import { useState } from 'react';

const Qna = ({ qnas }) => {
    const [clicked, setClicked] = useState(true);
    const [answer, setAnswer] = useState(2);
    const handleClick = () => {
        setClicked(!clicked);
        if (clicked) {
            // setShow(qnas.answer.length);
            setAnswer(qnas.length)
        }
        else {
            // setShow(150);
            setAnswer(2)
        }
    }
    return (
        <div className="card hover:shadow-2xl md:w-auto bg-base-100 shadow-xl hover:bg-[]">
            <div className="card-body">
                <h2 className="card-title text-3xl font-extrabold">Frequently Asked Questions!</h2>
                <hr />
                {
                    qnas.slice(0, answer).map(qna => <div key={qna.id}><div className="p-4 border rounded-md mb-4">
                        <h2 className="text-xl card-title font-bold mb-2">{qna.question}</h2>
                        <p className="text-gray-700">{}{qna.answer.slice(0, clicked ? 150 : qna.answer.length)}{clicked && <span>...</span>}</p>
                    </div></div>)
                }
                <div className="card-actions justify-end">
                    <button className="btn nav-clickable text-white" onClick={handleClick}>{
                        clicked ? "See More" : "See Less"
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default Qna;