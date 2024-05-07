import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({formstate}) {

    const [details, setDetails] = useState({ name: "", email: "" });
    const [showButton, setShowButton] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const navigate = useNavigate();
    
    
    function verify() {
        if(details.email.includes('@') && details.email.includes('.') && details.name.length > 0) {
            formstate(false);
            navigate('/onboard');
        }
        else {
            setShowWarning(true);
        }
    }

    useEffect(() => {
        if (details.name && details.email) {
            setShowButton(true);
        }
    }, [details])

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20 gap-10">
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-xl font-bold text-center">Registration Form</p>
                    <span className="text-sm text-center">
                        <p className="text-4xl font-bold">Start your success</p>
                        <p className="text-4xl font-bold">journey here!</p>
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="Enter your name" required className="border rounded-full px-5 py-3 w-80 bg-[#EFEFEF]" onChange={e => setDetails({ ...details, name: e.target.value })} />
                    <input type="email" placeholder="Enter your email" required className="border rounded-full px-5 py-3 w-80 bg-[#EFEFEF]" onChange={e => setDetails({ ...details, email: e.target.value })} />
                    {
                        showWarning && (
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500" />
                                <p className="text-red-500">Enter a valid email address</p>
                            </div>
                        )
                    }
                    {
                        showButton? (
                            <button className="border rounded-full px-5 py-3 bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white" onClick={verify}>Submit</button>
                        ): (
                            <button className="border rounded-full px-5 py-3 bg-[#EAEAEA] text-black cursor-not-allowed" disabled>Submit</button>
                        )
                    }
                </div>
            </div>
        </>
    )
}