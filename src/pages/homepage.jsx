import { faArrowRight, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Faq from "../components/faq";

export default function Homepage() {

    const [state, setState] = useState(1);

    function changeState(){
        setTimeout(()=>{
            if(state<3){
                setState(state+1);
            }else{
                setState(1);
            }
            changeState();
        }, 5000);
    }

    changeState();

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col justify-center items-center mt-10">
                <p className="">Success Stories</p>
                <p className="text-3xl font-semibold w-1/2 text-center">Every Success Journey we've encountered</p>
            </div>
            <div className="w-full relative flex justify-center items-center mt-10">
                <div className="relative flex-1 flex justify-center items-center">
                    <img src="./Mask group.png" alt="mask group" className="w-1/2" />
                    <div className="absolute bottom-0 w-2/3 h-full flex flex-col">
                        <div className="w-full h-full flex justify-start items-center">
                            <div className="relative bg-white h-16 sm:h-24 md:h-28 lg:h-36 p-3 rounded-xl aspect-square flex flex-col justify-center items-start shadow-lg">
                                <span className="relative">
                                    <img src="./spark.png" alt="spark" className="absolute -top-full right-8" />
                                    <p className="text-sm lg:text-3xl md:text-xl font-semibold w-2/3">40%</p>
                                </span>
                                <p className="text-[5px] md:text-[8px] lg:text-[10px]  p-2 text-gray-400 font-semibold w-full">Achieved reduction in project execution time by optimising team availability</p>
                            </div>
                        </div>
                        <div className="w-full h-1/5 flex justify-between items-center">
                            <div className=" relative flex gap-3 bg-white p-3 rounded-full">
                                <FontAwesomeIcon icon={faRocket} className="text-md md:text-xl lg:text-2xl text-green-400 bg-slate-100 p-3 rounded-full" />
                                <div className="flex flex-col justify-center items-start rounded-full">
                                    <p className="text-xs sm:text-sm md:text-md lg:text-xl font-bold">10 DAYS</p>
                                    <p className="text-[5px] sm:text-xs md:text-sm lg:text-md text-gray-400">Staff Deployment</p>
                                </div>
                            </div>
                            <div className="relative bg-green-900 h-16 sm:h-24 md:h-28 lg:h-36 p-3 rounded-xl aspect-square flex flex-col justify-center items-start shadow-lg gap-2">
                                <span className="relative flex justify-center items-end">
                                    <p className="text-sm lg:text-3xl md:text-xl text-white font-semibold w-2/3">$0.5</p>
                                    <p className="text-[5px] md:text-[8px] lg:text-[10px]  p-2 text-gray-400 font-semibold w-full">MILLION</p>
                                </span>
                                <p className="text-[5px] md:text-[8px] lg:text-[10px] p-1 text-gray-400 font-semibold w-full">Reduced client expenses by saving on hiring and employee costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between items-start gap-16">
                    <p className="sm:text-xl md:text2xl lg:text-3xl font-semibold w-2/3">
                        Enhance fortune 50 company’s insights teams research capabilities
                    </p>
                    <button className="border flex justify-center items-center gap-2 rounded-full p-5 bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white">Explore More
                    <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                    </button>
                    <img src="./hero-bg.png" alt="hero-bg" className="absolute right-0 w-1/4" />
                </div>
                <div className="absolute flex gap-3 top-1/2 left-1/2 transform z-40">
                    <div className={`w-2 h-2 ${state==1?"bg-[#2DA950]":"bg-[#E4E3E3]"} rounded-full`} onClick={()=>setState(1)}/>
                    <div className={`w-2 h-2 ${state==2?"bg-[#2DA950]":"bg-[#E4E3E3]"} rounded-full`} onClick={()=>setState(2)}/>
                    <div className={`w-2 h-2 ${state==3?"bg-[#2DA950]":"bg-[#E4E3E3]"} rounded-full`} onClick={()=>setState(3)}/> 
                </div>
            </div>
            <Faq />
        </div>
    )
}