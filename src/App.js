import './index.css'
import { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";






export default function App() {

  const [show, setshow] = useState('');
 



  return (
  
       
    <div className="min-h-screen flex items-center  justify-center">
      {!show ? (
            <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[100%]   shadow-xl rounded-3xl overflow-hidden bg-white  ">

        <div className="flex flex-col justify-center items-center p-10  ">
          <h1 className="text-5xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-500 mb-8">We are glad to see you back with us</p>

       
          <div className="w-full max-w-sm mb-4">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Username"
               
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

        

            <div className="w-full max-w-sm mb-4 hidden">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Email"
               
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

        
          <div className="w-full max-w-sm mb-4">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
             <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
                
              />
            </div>
          </div>
         
    





          <button className="w-full max-w-sm bg-black text-white py-3 rounded-xl mb-6 font-semibold hover:bg-gray-800 transition">
            NEXT
          </button>
          <div className='mb-6 flex flex-row gap-5 text-gray-500 '>Don't Have An Account? <button onClick={() => { setshow(true) }} className='text-gray-700'>Sign Up</button></div>



          <p className="text-gray-500 mb-4">Login with Others</p>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <button className="flex items-center justify-center border rounded-xl py-3 hover:bg-gray-300 transition">
              <FaGoogle className="text-500 mr-2" /> Login with Google
            </button>
            <button className="flex items-center justify-center border rounded-xl py-3 hover:bg-gray-300 transition">
              <FaFacebook className="text-blue-600 mr-2" /> Login with Facebook
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center p-6 ">
          <img
            src="/WhatsApp Image 2025-08-30 at 8.44.52 PM.jpeg"
            alt="Illustration"
            className="rounded-3xl shadow-lg h-[600px] w-[80%] "
          />
        </div>

      </div>


            </>
          ) : (
                    <>
                    
      <div className="grid grid-cols-1 md:grid-cols-2 w-[100%]   shadow-xl rounded-3xl overflow-hidden bg-white ">


        <div className="hidden md:flex items-center justify-center p-6 ">
          <img
            src="/WhatsApp Image 2025-08-30 at 8.44.52 PM.jpeg"
            alt="Illustration"
            className="rounded-3xl shadow-lg h-[600px] w-[80%] "
          />
        </div>

        
        <div className="flex flex-col justify-center items-center p-10  ">
          <h1 className="text-5xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-500 mb-8">We are glad to see you back with us</p>

       
          <div className="w-full max-w-sm mb-4">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Username"
               
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

        

            <div className="w-full max-w-sm mb-4 ">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Email"
               
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

        
          <div className="w-full max-w-sm mb-4">
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-100">
             <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
                
              />
            </div>
          </div>
         
    





          <button className="w-full max-w-sm bg-black text-white py-3 rounded-xl mb-6 font-semibold hover:bg-gray-800 transition">
            NEXT
          </button>
          <div className='mb-6 flex flex-row gap-5 text-gray-500 '>Already Have An Account? <button onClick={() => { setshow(false) }} className='text-gray-700'>Sign In</button></div>



          <p className="text-gray-500 mb-4">Login with Others</p>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <button className="flex items-center justify-center border rounded-xl py-3 hover:bg-gray-300 transition">
              <FaGoogle className="text-500 mr-2" /> Login with Google
            </button>
            <button className="flex items-center justify-center border rounded-xl py-3 hover:bg-gray-300 transition">
              <FaFacebook className="text-blue-600 mr-2" /> Login with Facebook
            </button>
          </div>
        </div>

      </div>


            </>
            
          )}
    </div>


  );
}
{/*import {useForm} from 'react-hook-form'



function App() {
   
    const {register,handleSubmit, formState:{errors}}= useForm();
    const submitCall=(data)=>{
        console.log(data)
    }
  return (
    <>
    
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600'>
      <form onSubmit={handleSubmit(submitCall)} className=' w-96 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-6 '>Sign Up</h2>
            <div>
                <label htmlFor="">FullName</label>
                <input type="text" id="name" {...register("name",{required:"name is required",minLength:{value:3,message:"name must be atleast 3 characters "}})} className='w-full p-1 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'  />
                {errors.name&&  <div>{errors.name.message}</div>}
            </div>
            <div>
                <label htmlFor="">Email ID</label>
                <input type="email" id="gmail" {...register("gmail",{required:"email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid Email Address!!!"}})} className='w-full p-1 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                {errors.gmail&&  <div>{errors.gmail.message}</div>}

            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" id="password" {...register("password",{required:"Password is required",minLength:{value:6,message:"Password must be atleast 6 characters "}})} className='w-full p-1 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500' />
                {errors.password&&  <div>{errors.password.message}</div>}
            </div>
            <button type="submit" className='w-3/4 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
               Register
            </button>
            <p className='mt-5'>  already have an account ?  <a href="/Login">login</a> </p>
        </form>
    </div>
    </>
  );
}

export default App;





*/}