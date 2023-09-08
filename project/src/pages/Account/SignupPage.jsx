import React from 'react'

function SignupPage() {
  return (

    <div className="flex flex-row min-h-screen">
      <div className="flex w-2/3 bg-slate-400">

      </div>
    <div className='text-white flex flex-col text-left p-4 gap-4'>
      
      <div className="gap-2">
        <p className="text-xl">Welcome,</p>
        <p className="text-xl">Continue with Google or enter your details.</p>
      </div>
      <div className="flex w-full gap-2 items-center">
        <div className="border-t w-full h-1 border-gray-500"/>
        <p className="text-sm text-center text-gray-500">or</p>
        <div className="border-t w-full h-1 border-gray-500"/>
      </div>

      <input type="text" className="flex text-2xl text-black p-2" placeholder='Email'/>
      <input type="text" className="flex text-2xl text-black p-2" placeholder='Password'/>
    
      <button className="flex w-full text-black bg-white text-center text-2xl p-4 justify-center">Log in</button>
      <div className="flex flex-row gap-3">
        <p className="text-sm">Don't have an account?</p>
        <p className="text-sm font-bold">Sign up for free</p>
      </div>
    </div>
    </div>
  )
}

export default SignupPage