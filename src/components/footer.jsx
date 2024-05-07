export default function Footer(){
    return(
        <>
            <div className="flex justify-between items-center bg-[#F5F5F5] m-5 rounded-3xl h-36">
                <p className="m-10 text-[#1C1C1C]">© Talup 2023. All rights reserved</p>
                <span className="flex gap-10 mx-10">
                    <p className="text-[#1C1C1C] underline">Terms & Conditions</p>
                    <p className="text-[#1C1C1C] underline">Privacy Policy</p>
                </span>
            </div>
        </>
    )
}