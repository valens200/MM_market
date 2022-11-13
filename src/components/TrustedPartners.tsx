import React from 'react'
import company1 from "../assets/images/company1.webp"
import company2 from "../assets/images/company2.webp"
import company3 from "../assets/images/company3.webp"
import companyName from "../assets/images/companyName.webp"
function TrustedPartners() {
    return (
        <div className='w-[100%]  flex space-y-4 flex-col mt-8 h-[100%]'>
            <div className='md:w-[40%] w-[99%] text-center  mx-auto'>
                <h1 className='text-center font-bold  text-[1.4rem]'>Our Parteners</h1>
                <p>There are many variations of passages of Lorem Ipsum available but the</p>
                <p>this in majority have suffered alteration in some</p>
            </div>
            <div className='w-[80%] flex justify-between items-center h-[70%] mx-auto'>
                <img className= 'w-[25%] md:w-[12%]' src={company1} alt="company icon" />
                <img src={company2}  className= 'w-[25%] md:w-[12%]' alt="company icon"/>
                <img src={company3}  className= 'w-[25%] md:w-[12%]'alt="company icon"/>
                <img src={companyName}  className= 'w-[25%] md:w-[12%]' alt="company icon" />
            </div>
        </div>
    )
}

export default TrustedPartners