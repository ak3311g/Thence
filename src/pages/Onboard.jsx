import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboard() {

    const [time, setTime] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => {
            setTime(time - 1);
        }, 1000);
    }
    , [time]);

    useEffect(() => {
        if(time === 0) {
            navigate('/');
        }
    }, [time])

    return (
        <div className="fixed top-0 h-screen w-screen bg-white z-50">
            <div className="flex justify-between items-center h-16 m-3">
                <img src="./Vector.png" alt="logo" className="h-1/2 mx-6" />
            </div>
            <div className="flex flex-col justify-center items-center mt-20 gap-5">
                <FontAwesomeIcon icon={faCheckCircle} className="text-8xl text-green-500" />
                <p className="text-2xl font-semibold">Success Submitted</p>
                <p className="text-5xl font-semibold">Congratulations</p>
                <p className="text-xl font-semibold w-1/3 text-center text-[#727272]">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
            </div>
            <div className="flex justify-center items-center mt-20">
                <span className="text-2xl flex gap-2 text-[#727272]">Redirecting to home in <p className="font-bold text-black">{time} seconds</p></span>
            </div>
        </div>
    )
}