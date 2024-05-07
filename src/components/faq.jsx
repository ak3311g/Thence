import Dropdownqns from "./dropdownqns";

export default function Faq() {

    const data = [
        {
            qns: "What is the process of hiring?",
            ans: "The process of hiring is simple. You can apply for a job by sending your resume to our email address. We will review your resume and if you are a good fit for the job, we will contact you for an interview."
        },
        {
            qns: "What is the process of hiring?",
            ans: "The process of hiring is simple. You can apply for a job by sending your resume to our email address. We will review your resume and if you are a good fit for the job, we will contact you for an interview."
        },
        {
            qns: "What is the process of hiring?",
            ans: "The process of hiring is simple. You can apply for a job by sending your resume to our email address. We will review your resume and if you are a good fit for the job, we will contact you for an interview."
        },
        {
            qns: "What is the process of hiring?",
            ans: "The process of hiring is simple. You can apply for a job by sending your resume to our email address. We will review your resume and if you are a good fit for the job, we will contact you for an interview."
        }
    ]

    return (
        <>
            <div className="flex h-fit bg-[#E8EEE7] justify-center items-center mt-56 mx-5 rounded-3xl">
                <div className="flex-1 flex flex-col justify-between w-1/2 my-10">
                    <div className="flex flex-col p-20 gap-5">
                        <p className="text-[#9E9D9D] text-3xl font-semibold">Whats on your mind</p>
                        <p className=" text-7xl font-semibold">Ask Questions</p>
                    </div>
                    <img src="./Union.png" alt="union" className="w-2/3" />
                </div>
                <div className="flex-1 flex flex-col">
                    {
                        data.map((item, index) => (
                            <Dropdownqns qns={item.qns} ans={item.ans} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}