import React from 'react'

export default function Feedback() {
    return (
        <div>
            <div className="max-w-[1240px] m-auto py-24 text-center">
                <p className='text-red-800 font-bold mb-2'>Feedback</p>
                <h1 className='text-4xl mb-4 font-bold'>Feedback</h1>
                <div className="bg-red-800 w-10 h-1 m-auto mb-10"></div>
                <div className="p-5 border-[#d3a971] border-double border-4 w-full mt-5 md:grid grid-cols-3 gap-5">
                    <input type="text" className='border-2 h-12 w-full mb-3 bg-[#f6f6f6] border-[#dbdbdb]  p-3' placeholder='Your Name'/>
                    <input type="text" className='border-2 h-12 w-full mb-3 bg-[#f6f6f6] border-[#dbdbdb]  p-3' placeholder='Email'/>
                    <input type="text" className='border-2 h-12 w-full mb-3 bg-[#f6f6f6] border-[#dbdbdb]  p-3' placeholder='Phone Number'/>
                    <textarea name="" id="" cols="30" rows="5" className='w-full mb-3 border-2 bg-[#f6f6f6] border-[#dbdbdb] text-[#9b9b9b] p-3 col-span-3' placeholder='Message'></textarea>
                    <input type="submit" className='block border-2 h-12 w-full bg-black rounded text-white font-bold border-[#dbdbdb] col-span-3'/>
                    {/* <div className="h-10 border-black border-2 "></div> */}
                </div>
            </div>
        </div>
    )
}
