// import { useState } from 'react'

import '../App.css'
import logo from '../images/UniversityX-Logo.png'
// import not from '../images/not-icon.png'
// import heroimg from '../images/student-heroimg.png'

import Icon1 from '../images/icon-1.png'

function Schools() {

  return (
    <>
    <nav className="flex items-center flex-wrap body-padding p-3 mt-2 md:p-0-3">
      <a href="#" className="logo">
        <img src={logo} />
      </a>

      <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
        <i className="material-icons">menu</i>
      </button>

      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto nav-items" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          
          <a href="#" className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>For Schools</span>
          </a>

          <a href="#" className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Contact Us</span>
          </a>

          <a href="#" className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Login</span>
          </a>

        </div>
      </div>
    </nav>

    {/* Hero Section */}
    {/* <div className='grid grid-cols-2 mt-10 grid-hero-left'>
      <div className='body-padding-left'> 
        <h1 className='font-semibold'>Study Smarter</h1>
        <div className='flex items-center'> <img src={not} className='not-icon'/> <h1 className='font-semibold'>Harder...</h1> </div>
        <div className='text mt-5'>Access online classes, download resources and collaborate with your friends, all in one app.</div>
        <a href={`/dashboard`}>
          <button className='get-started mt-10 font-medium'>Try Demo</button> 
        </a>
      </div>

      <div> 
        <img src={heroimg} className='hero-img'/>
      </div>
    </div> */}

    {/* Bottom DIV */}
    <div className='bottom-div'> </div>

    {/* Feature Set */}
    <div>
      <div className='feature-set-text font-medium'>UniversityX provides you with everything you need to excel in school</div>

    <div className='feature-container'>
      {/* Feature One */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

      {/* Feature Two */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

      {/* Feature Three */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

      {/* Feature Four */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

      {/* Feature Five */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

      {/* Feature Six */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon1}/>
        <div className='fd-text font-medium'>HD Lecture Videos</div>
        <div className='fd-sub'> Watch high quality lecture videos by your university lecturers. Watch high quality lecture videos by your university lecturers. </div>
      </div>
      </div>

    </div>

    </div>

    </>
  )
}

export default Schools
