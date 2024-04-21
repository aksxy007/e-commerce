import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurtas } from "../../../../Data/mens_kurtas";
// import { womens_kurtas } from "../../../../Data/womens_kurtas";


const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>

            <HomeSectionCarousel data={mens_kurtas} sectionName={"Men's Kurtas"}/>
            <HomeSectionCarousel data={mens_kurtas} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurtas} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurtas} sectionName={"Women's Saree"}/>
            <HomeSectionCarousel data={mens_kurtas} sectionName={"Women's Dress"}/>
            {/* <HomeSectionCarousel data={mens_kurtas} sectionName={"Men's Kurtas"}/> */}

        </div>
    </div>
  )
}

export default HomePage