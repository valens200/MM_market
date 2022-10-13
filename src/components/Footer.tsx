import { type } from '@testing-library/user-event/dist/type'
import { link } from 'fs'
import React from 'react'


const links : string[] = ['Github', 'LInkedIn', 'Twitter', 'Leettcode', 'Codeforces']

function Footer() {
  return ( 
    <div className='text-black grid items-center p-2  h-[6vh] fixed bottom-0 border w-[100%]'>
        <div className='flex flex-row space-x-4 justify-center h-[70%] '>
        {links.map((link, index) => (
            <div key={index}>
                <p className='text-[grey] hover:underline'>{link}</p>
            </div>
        ))}
        </div>
        </div>
  )
}

export default Footer