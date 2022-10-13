import React from 'react'

function Nav() {
  return (
    <div className='text-black h-[8vh] fixed top-0 w-[100%]  border mb-2 shadow-sm flex items-center'>
        <div className='w-[70%] h-[80%] justify-between flex mx-auto'>
            <div>
                <img  src="../assets/utils/images/main.png"/>
            </div>
            <div>
            <p className='text-center text-[2rem] text-black font-bold '>Short URL</p>

            </div>

        </div>
    </div>
  )
}

export default Nav