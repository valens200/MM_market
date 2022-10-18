import { type } from '@testing-library/user-event/dist/type'
import { link } from 'fs'
import React from 'react'


type Link =  {
  name : string,
  link : string,
}
const links : Link[] = [
  {
    name:'Github',
    link:"https://github.com/valens200"

  },
  {
    name:'LInkedIn', 
    link:"https://www.linkedin.com/in/valens-niyonsenga-947440228/"

  },
  {
    name:'Twitter',
    link:"",

  },
  {
    name:'Leetcode', 
    link:"https://leetcode.com/valens250/"
  },
  {
    name:'Codeforces',
    link:"https://codeforces.com/profile/Valens"

  }
  ]

function Footer() {
  return ( 
    <div className='text-black grid items-center p-2  h-[6vh] fixed bottom-0 border w-[100%]'>
        <div className='flex flex-row space-x-4 justify-center h-[70%] '>
        {links.map((link, index) => (
            <div key={index}>
                <p className='text-[grey] hover:underline'><a href={link.link}>{link.name}</a></p>
            </div>
        ))}
        </div>
        </div>
  )
}

export default Footer