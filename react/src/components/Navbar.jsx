import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

     const home = () => {
        navigate("/");
    }

    const about = () => {
        navigate("/about");
    }

    const contact = () => {
        navigate("/contact");
    }



    return (
        <>
            <div className='fixed top-0 w-full h-16 bg-red-50 flex justify-between items-center'>
                <div className='mx-3 text-2xl font-medium' onClick={home}>Home</div>

                <div className='flex '>
                    <p className='mx-3 text-xl font-medium' onClick={contact}>Contact</p>
                    <p className='mx-3 text-xl font-medium' onClick={about}>About</p>
                </div>
            </div>
        </>
    )
}

export default Navbar