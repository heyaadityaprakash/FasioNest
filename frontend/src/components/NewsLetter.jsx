import React from 'react';
function NewsLetter() {

    const submitHandler=(e)=>{
        e.preventDefault()

    }

    return ( 
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe! to stay updated with latest fashion products and get exclusive deals first</p>
            <p className='text-gray-700 mt-4'>

            </p>

            <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex-col sm:flex-row items-center gap-2 mx-auto'>
                <input className='w-full sm:flex-1 border  outline-none py-3 px-2 mb-2' type="email" placeholder='enter your email' required />
                <button className='bg-black text-gray-100 px-2 py-3 w-full' type='submit'>Subscribe now</button>
            </form>
        </div>
     );
}

export default NewsLetter;