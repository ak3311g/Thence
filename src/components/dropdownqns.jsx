import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Dropdownqns({qns,ans}) {

    const [show, setShow] = useState(false);

    return(
        <>
            <div className="flex flex-col justify-start items-start m-5">
                <div className="flex justify-between items-center gap-4 w-full">
                <p className="text-black text-3xl font-semibold">{qns}</p>
                <FontAwesomeIcon icon={show ? faMinus : faPlus} className="text-3xl text-black m-4" onClick={()=>setShow(!show)} />
                </div>
                {show && <p className="text-2xl text-[#1C1C1C] font-semibold mt-5">{ans}</p>}
                <hr className="w-full border-1 border-[#9E9D9D] my-5" />
            </div>
        </>
    )
}