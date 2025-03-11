import React, { useState } from 'react';

function Login() {
    const [currState, setCurrState] = useState('login');
    
    const submitHandler=async(e)=>{
        e.preventDefault()
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <form onSubmit={submitHandler} className='flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto gap-4 text-gray-900 p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
                <div className='text-center mb-4'>
                    <p className='prata-regular text-3xl capitalize'>{currState}</p>
                </div>
                
                {currState === 'login' ? null : 
                    <input 
                        type="text" 
                        className='w-full px-4 py-3 border rounded' 
                        placeholder='Name' 
                        required
                    />
                }
                
                <input 
                    type="email" 
                    className='w-full px-4 py-3 border rounded' 
                    placeholder='Email' 
                    required 
                />
                
                <input 
                    type="password" 
                    className='w-full px-4 py-3 border rounded' 
                    placeholder='Password' 
                    required
                />
                
                <button  className='bg-gray-900 text-gray-100 w-full py-4 px-2 rounded text-lg font-medium hover:bg-gray-800 transition-colors mt-2'>
                    {currState}
                </button>
                
                <div className="text-center mt-4">
                    <button 
                        type="button"
                        onClick={() => setCurrState(currState === 'login' ? 'register' : 'login')}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        {currState === 'login' ? 'Need an account? Register' : 'Already have an account? Login'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;