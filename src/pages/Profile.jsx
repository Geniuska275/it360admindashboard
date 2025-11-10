import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import Button from '@/components/Button';
import pay from "./panotify.png"
import perform from "./pnotify.png"
import studentn from "./snotifiy.png"
import set from "./senotify.png"
import password from "./passwordc.png"
// import { Separator } from '@radix-ui/react-select';
import { AlertDialog, Dialog, Flex, Separator, Switch, Table, TextField } from '@radix-ui/themes';
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";


function Profile() {
  const [activeTab,setActiveTab]=useState("all")
  const [newp,setNewp]=useState(false)
  const [Confirm,setConfirm]=useState(false)
  const [old,setOld]=useState("")
  const [newPassword,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [isOpen,setIsOpen]=useState(false)





 
  const notifications=[
    {
      id:1,
      text:"Payment confirmed: “Advanced Excel Techniques” (₦25,000 – Peter Obi).",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:pay
    },
      {
      id:2,
      text:"Elena Cruz received a “Golden Belt” reward from her instructor.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:perform
    },
      {
      id:3,
      text:"Student Alex T. resubmitted assignment for review in “Coding for Teens.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:studentn
    },
      {
      id:4,
      text:"Security alert: 3 failed login attempts detected from IP 192.168.1.45.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:set
    },
  ]

  const HandleSubmit=()=>{
    const data={
        old,newPassword,confirmPassword
    }

    console.log("data",data)
    setIsOpen(true)

    setTimeout(()=>{
     setIsOpen(false)
    },10000)
  }
 return <div className="min-h-screen bg-white">
        {/* Header */}
        <div className='flex-1 bg-white py-4 shadow-md w-full top-0 sticky z-10'>
          <div className='flex gap-3 items-center px-6'>
            <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
            <h2 className='border-l px-2 text-[#71717A]'>Super Admin</h2>
            <IoIosArrowForward />
            <h2 className='px-2 text-black font-bold'>My Profile</h2>
          </div>
        </div>

        <div className='px-6' >

          <div className='flex justify-between items-center my-4'>
          <h1 className='font-bold text-2xl '>My Profile</h1>

            <div className='flex gap-2 items-center'>


                  <Dialog.Root>
	<Dialog.Trigger>
                
                  <button className='h-[32px] w-[150px] border  bg-white rounded-sm  text-[#18181B]'> Change Password</button>
		       
	</Dialog.Trigger>

	<Dialog.Content maxWidth="450px">
		<Dialog.Title>Change Password</Dialog.Title>
		

		<Flex direction="column" gap="3">
			<label>
			    <h3 className='mb-1'>Old Password</h3>
                 <input 
                 value={old}
                  className='bg-[#F3F3F3] border w-full py-2 rounded px-2' 
                  onChange={(e)=>setOld(e.target.value)}/>
			</label>
			<label className='relative'>
                 <h3 className='mb-1'>New Password</h3>
                 <input
                 value={newPassword}
                  type={Confirm ? "text":"password"} className='bg-[#F3F3F3] border w-full py-2 rounded px-2' onChange={(e)=>setPassword(e.target.value)}/>	
                {Confirm? <IoEyeOutline className='text-2xl absolute top-9 right-4' onClick={()=>setConfirm(false)}/>: <FaRegEyeSlash className='text-2xl absolute top-9 right-4'  onClick={()=>setConfirm(true)}/>}

                

			</label>

            <label className='relative'>
                 <h3 className='mb-1'>Confirm Password</h3>
                 <input
                 value={confirmPassword}
                  type={newp ? "text":"password"} className='bg-[#F3F3F3] border w-full py-2 rounded px-2'
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  />	
                {newp ? <IoEyeOutline className='text-2xl absolute top-9 right-4' onClick={()=>setNewp(false)}/>: <FaRegEyeSlash className='text-2xl absolute top-9 right-4'  onClick={()=>setNewp(true)}/>}

			</label>
		</Flex>

		<Flex gap="3" mt="4" justify="end">
			<Dialog.Close>
                  <button className='h-[32px] w-[100px] border  bg-white rounded-sm  text-[#18181B] font-bold'> Cancel</button>
              
			</Dialog.Close>
			<Dialog.Close>
                  <button onClick={HandleSubmit} className='h-[32px] w-[100px]   bg-black rounded-sm  text-white font-bold'> Save</button>
				
			</Dialog.Close>
		</Flex>
	</Dialog.Content>
</Dialog.Root>

               <button className=' h-[32px] w-[150px]  bg-[#01857C] rounded-sm  text-white'>
                 Edit Profile
                </button>
            </div>
          </div>

         <div className='bg-white border p-2 my-5 relative h-[150px]'>
          <div className='grid grid-cols-4 gap-4'>
            <div className=' p-4'>
              <div className='flex gap-3 items-center'>
                <img
                  src='https://media.istockphoto.com/id/1459398604/photo/gym-fitness-and-portrait-of-proud-man-standing-with-smile-motivation-health-and-energy-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxB0e4na8AKeRekZ73vjmQot9-SlfegsWCyG9d924-4='
                  className='w-[100px] h-[100px] rounded-full fill'
                />
                <div>
                  <h1 className='font-bold uppercase '>James Umaru</h1>
                  <p className='text-[18px] text-[#9498A3]'>ID1234392012</p>
                </div>
              </div>
            </div>
            <div className='p-2 flex items-center gap-10'>
              <Separator my='1' size='3' orientation='vertical' />
              <div>
                <h1 className='font-bold  '>02/02/2024</h1>
                <p className='text-[18px] text-[#9498A3]'>Last Login</p>
              </div>
            </div>
            <div className=' p-2 flex items-center gap-10'>
              <Separator my='1' size='3' orientation='vertical' />
              <div>
                <h1 className='font-bold  '>Super Admin</h1>
                <p className='text-[18px] text-[#9498A3]'>Role</p>
              </div>
            </div>
           
          </div>
         </div>

         <div className='bg-white p-2'>
            <div className='grid grid-cols-4 gap-2 '>
                <div className='col-span-2 '>
                    <div className='border p-4'>

                    <h1 className='font-bold text-xl mb-3'>Personal Information</h1>
                    <div className='grid grid-cols-3 gap-y-3'>
                        <div>
                            <h2 className='text-[#9498A3]'>FIRST NAME</h2>
                            <p className='font-bold'>James</p>
                        </div>
                        <div>
                            <h2 className='text-[#9498A3]'>LAST NAME</h2>
                            <p className='font-bold'>Umaru</p>
                        </div>
                         <div>
                            <h2 className='text-[#9498A3]'>PHONE NUMBER</h2>
                            <p className='font-bold'> 09011197902</p>            
                        </div>
                  
                        <div>
                            <h2 className='text-[#9498A3]'>EMAIL ADDRESS</h2>
                            <p className='font-bold'>James@gmail.com</p>
                        </div>
                        <div>
                            <h2 className='text-[#9498A3]'>GENDER</h2>
                            <p className='font-bold'>Male</p>
                        </div>
                         <div>
                            <h2 className='text-[#9498A3]'>COUNTRY</h2>
                            <p className='font-bold'> Nigeria</p>            
                        </div>
                    </div>
                    </div>

                    <div className='border p-4 mt-3'>
                    <h1 className='font-bold text-xl mb-3'>Social Media</h1>
                    <div className='grid grid-cols-3 gap-y-3'>
                        <div>
                            <h2 className='text-[#9498A3]'>TWITTER</h2>
                            <p className='font-bold'>@James_umaru</p>
                        </div>
                        <div>
                            <h2 className='text-[#9498A3]'>FACEBOOK</h2>
                            <p className='font-bold'>Umaru</p>
                        </div>
                         <div>
                            <h2 className='text-[#9498A3]'>INSTAGRAM</h2>
                            <p className='font-bold'> @James_umaru</p>            
                        </div>
                  
                        <div>
                            <h2 className='text-[#9498A3]'>WEBSITE/PORTFOLIO</h2>
                            <p className='font-bold'>www.JamesUmar.com</p>
                        </div>

                    </div>
                    </div>

                </div>
                <div className='col-span-2 border p-4'>
                    <h1 className='font-bold text-xl mb-3'>Notification Settings</h1>
                    <div className='flex gap-2'> 
                        <Switch color='green' />
                        <div>
                            <h1>Push Notifications</h1>
                            <p className='text-[#9498A3]'>Receive alerts directly on your device.</p>
                        </div>

                    </div>

                     <div className='flex gap-2 mt-2'> 
                        <Switch  color='green'/>
                        <div>
                            <h1>Email Notifications</h1>
                            <p className='text-[#9498A3]'>
                                Get updates via your registered email
                            </p>
                        </div>

                    </div>




                </div>

            </div>


         </div>

            
            <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
	
           	<AlertDialog.Content maxWidth="400px">
		
	      <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"20px"
        }}>
          <div>
          <img src={password} className='w-[120px] h-[120px] m-auto'/>
          <h1 className='mt-3 text-2xl text-center'>password changed Successfully
             </h1>
             
          </div>
        </div>



	</AlertDialog.Content>
   </AlertDialog.Root>


        </div>
      </div>
    
}

export default Profile;
