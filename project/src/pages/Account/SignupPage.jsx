import React from 'react'

function SignupPage() {
  return (

    <div className="flex flex-row min-h-screen">
      <div className="relative lg:w-2/3 max-md:hidden">
        <img
          src="https://ifh.cc/g/dlMZRv.jpg"
          alt="Stock Image" 
          className="flex w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/3 w-full">
        <div className='text-white flex flex-col text-left p-4 gap-4 w-full'>
          
          <div className="gap-2">
            <p className="text-2xl">Welcome,</p>
            <p className="text-sm">Continue with Google or enter your details.</p>
          </div>

          <div className="flex w-full gap-2 items-center my-4">
            <div className="border-t w-full h-1 border-gray-500"/>
            <p className="text-sm text-center text-gray-500">or</p>
            <div className="border-t w-full h-1 border-gray-500"/>
          </div>

          <input type="text" className="flex text-md text-black p-2" placeholder='Email'/>
          <input type="text" className="flex text-md text-black p-2" placeholder='Password'/>
        

          <div className="flex justify-between">
            <div className="flex">
              <input type='checkbox' id="remember" className='mr-2'/>
              <label htmlFor="remember" className="mr-4 font-light text-sm italic">Remember for 30 days</label>
            </div>
            <p className="text-sm font-bold">Forgot password</p>
          </div>
          <button className="flex w-full text-black bg-white text-center text-xl p-4 justify-center rounded-md my-8">Log in</button>
          <div className="flex flex-row gap-3 justify-center">
            <p className="text-sm">Don't have an account?</p>
            <p className="text-sm font-bold underline">Sign up for free</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage