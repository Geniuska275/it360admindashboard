import React from 'react'
import Button from '../../components/Button'
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import logo from './logo.png'
import background from './back.png'

const Signup=()=> {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div className='h-screen w-full flex  flex-wrap space-between items-center'>
        <div className='w-1/2 h-full '>
          <img src={logo} alt="IT Academy Logo" className='w-[100px] h-[100px] m-3 '/>
        <div className='bg-white mt-[80px] rounded-lg p-8 flex flex-col justify-center items-center'>

            <h1 className='font-lato font-bold text-3xl text-black'>Sign In</h1>
            <p className='font-lato text-[#828282] mt-2'>sign in as an administrator</p>
            <form className='flex flex-col space-y-4 mt-6'>
                 <div>
                    <label className='font-lato font-semibold text-black mb-3'>Email Address</label><br></br>
                <input type="email" placeholder='Email Address' className='border rounded-md border-gray-300 rounded px-4 py-2 w-[350px] focus:outline-none focus:ring-2 focus:ring-[#FF6500]' />
                 </div>
                <div className='relative '>
                    <label className='font-lato font-semibold text-black mb-3'>Password</label><br></br>
                    <div onClick={togglePasswordVisibility} className='absolute right-3 top-10 cursor-pointer'> 
                    {showPassword ?<FiEye />:
                   <FaRegEyeSlash />}
                    </div>
                <input type={showPassword ? "text" :"password"} placeholder='Password' className='border  rounded-md  border-gray-300 rounded px-4 py-2 w-[350px] focus:outline-none focus:ring-2 focus:ring-[#FF6500]' />
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <div>
                    <input type="checkbox" className='mr-2'/>
                    <label className='font-lato text-[#828282] text-[12px]'>Remember me</label>
                    </div>
                    <a href="#" className='font-lato text-[#FF6500] float-right text-[12px]'>Forgot Password?</a>
                </div>
               <Button>Sign In</Button>
                     
            </form>
        </div>
        </div>
        <div className='w-1/2 h-full bg-[#FF6500] flex flex-col justify-center items-center'>
        <img src={background} alt="Signup Illustration" className='w-full h-full' />
        </div>
      
    </div>
  )
}

export {Signup};
