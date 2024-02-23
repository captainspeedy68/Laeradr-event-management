import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Qna from './Qna';
import BlogsFront from './BlogsFront';
import Gallery from '../../Gallery/Gallery';
AOS.init();
const Messages = () => {
    const qnas =
        [
            {
                "id": 1,
                "question": "How do I purchase tickets for an event?",
                "answer": "You can purchase tickets directly through our website by navigating to the 'Events' page and selecting the desired event. Follow the prompts to complete the ticket purchase process."
            },
            {
                "id": 2,
                "question": "Can I request a refund for my ticket?",
                "answer": "Refund policies vary depending on the event. Please refer to the event's terms and conditions or contact our support team for assistance with refund requests."
            },
            {
                "id": 3,
                "question": "Are there group discounts available?",
                "answer": "Yes, we offer group discounts for certain events. Please reach out to our sales team for more information on group pricing options."
            }
        ];

    return (
        <div className='my-28 lg:flex lg:justify-around justify-center mx-auto'>
            <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Qna qnas={qnas}></Qna>
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Gallery isHome = {true}></Gallery>
                </div>
            </div>

            <div className='flex justify-center'>

                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-out-sine">
                    <BlogsFront className="max-md:hidden"></BlogsFront>
                </div>
            </div>
        </div >
    );
};

export default Messages;