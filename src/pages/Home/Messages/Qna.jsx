import React from 'react';
import { useState } from 'react';

const Qna = ({ qnas }) => {
    const [show, setShow] = useState(150);
    const [clicked, setClicked] = useState(false);
    const handleLess = () => {
        
    }
    const handleClick =() =>{
        setShow(500)
    }
    return (
        <div className="card hover:shadow-2xl md:w-auto bg-base-100 shadow-xl hover:bg-[]">
            <div className="card-body">
                <h2 className="card-title text-3xl font-extrabold">Frequently Asked Questions!</h2>
                <hr />
                {
                    qnas.map(qna => <div key = {qna.id}><div className="p-4 border rounded-md mb-4">
                            <h2 className="text-xl card-title font-bold mb-2">{qna.question}</h2>
                            <p className="text-gray-700">{qna.answer.slice(0, show)}{(show <= 150) && <span>...</span>}</p>
                        </div></div>)
                }
                <div className="card-actions justify-end">
                    <button className="btn nav-clickable text-white" onClick={handleClick}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default Qna;