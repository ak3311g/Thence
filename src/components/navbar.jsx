import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import LoginForm from './loginform';

export default function Navbar() {

    const [navbar, setNavbar] = useState(false)
    const [login, setLogin] = useState(false)

    return (
        <>
            {
                login ? (
                    <div className='h-screen flex flex-col fixed w-screen bg-white z-50'>
                        <div className="flex justify-between items-center h-16 m-3">
                            <img src="./Vector.png" alt="logo" className="h-1/2 mx-6" />
                            <FontAwesomeIcon icon={faXmark} className="text-3xl mx-6 border p-5 rounded-full" onClick={() => setLogin(false)} />
                        </div>
                        <LoginForm formstate={setLogin}/>
                    </div>
                ) :

                    <div className="flex justify-between items-center h-20 m-3 border rounded-full">
                        <img src="./Vector.png" alt="logo" className="h-1/3 mx-6" />
                        <div className="hidden mx-6 sm:flex justify-center items-center gap-3">
                            <div className="border rounded-full px-5 py-3  hover:bg-[#EAEAEA]" onClick={() => setLogin(true)}>Get Projects</div>
                            <div className="border rounded-full px-5 py-3 bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white">Onboard Talent</div>
                        </div>
                        <div className="flex sm:hidden justify-center items-center gap-3">
                            <FontAwesomeIcon icon={faBars} className="text-2xl mx-6" onClick={() => setNavbar(!navbar)} />
                            {
                                navbar && (
                                    <div className="absolute top-10 right-4 w-1/4 h-1/2 whitespace-nowrap flex flex-col gap-2 items-end justify-center">
                                        <div className="border rounded-full px-5 py-3  hover:bg-[#EAEAEA]">Get Projects</div>
                                        <div className="border rounded-full px-5 py-3 bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white">Onboard Talent</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </>
    )
}