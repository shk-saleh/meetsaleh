import {React , useState , useEffect} from 'react';
import Marquee from "react-fast-marquee";
import reviewAvatar from '../Images/review-avatar.png';
import { Linkedin } from "lucide-react";

    

const Testimonial = () => {

    const reviews = [
        {
            name: "Wamiq Raza",
            username: "@wamiqRaza",
            review: "Working with Saleh was an absolute breeze. He understood my vision from day one and delivered a beautiful, responsive website ahead of schedule. Highly recommended!",
        },
        {
            name: "Maher Saqib",
            username: "@saqibmohd",
            review: "Saleh revamped our business site with a modern look and improved performance. We’ve seen a visible increase in traffic and engagement since launch. Would love to work with him again!",
        },
        {
            name: "Muhammad Adnan",
            username: "@madnan",
            review: "I hired him for a custom MERN stack application and was blown away by the result. The UI is smooth, and the backend works flawlessly. Communication was top-notch throughout.",
        },
        {
            name: "Muhammad Ahmed",
            username: "@madnan",
            review: "I hired him for a custom MERN stack application and was blown away by the result. The UI is smooth, and the backend works flawlessly. Communication was top-notch throughout.",
        },
    ];
    const [hoveredIndex, setHoveredIndex] = useState(null);
 

    return (

        <div className='py-22 px-20'>

            <h1 className='text-4xl text-[var(--primary-color)] font-normal text-left'>
                Testimonal <span className='text-[var(--secondary-color)]'>what matters ?</span>
            </h1>

            <Marquee speed={60} direction={top} pauseOnHover={true} className='pt-10 px-28'>
                <div className="flex">
                {reviews.map((item, index) => (
                    <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`w-[320px] h-auto border border-gray-900 bg-black/30 rounded-xl p-5 transition duration-300 mx-3 opacity-60  ${
                        hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm scale-[.97] opacity-30 ' : 'blur-0'
                    }`}
                    >
                    <div className='flex justify-between'>
                        <div className='flex gap-4 items-center'>
                        <img className='rounded-full w-12 h-12' src={reviewAvatar} alt="review-avatar" />
                        <p className='text-md text-white leading-5'>
                            {item.name} <br />
                            <span className='text-white text-sm font-light'>{item.username}</span>
                        </p>
                        </div>
                        <Linkedin className='text-[var(--secondary-color)]' />
                    </div>
                    <p className='pt-6 text-sm font-normal text-gray-400'>“{item.review}”</p>
                    </div>
                ))}
                </div>
            </Marquee>
            
        </div>
    );
};

export default Testimonial;
