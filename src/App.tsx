// import { useState } from 'react'

import './App.css'
import logo from './images/UniversityX-Logo.png'
import heroimg from './images/student-heroimg.png'

import Icon1 from './images/icons/1.png'
import Icon2 from './images/icons/2.png'
import Icon3 from './images/icons/3.png'
// import Icon4 from './images/icons/4.png'
import Icon5 from './images/icons/5.png'
// import Icon6 from './images/icons/6.png'
import Icon7 from './images/icons/7.png'
import Icon8 from './images/icons/8.png'

import Nigeria from './images/nigeria.png'
import Love from './images/love.png'

function App() {

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
          
          <a href={`#`} className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>For Schools</span>
          </a>
         
          <a href="#" className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Contact Us</span>
          </a>

          <a href={`/login`} className="lg:inline-flex px-5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Login</span>
          </a>

        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className='grid grid-cols-2 mt-10 grid-hero-left'>
      <div className='body-padding-left'> 
        <h1 className='font-semibold'>AI-powered education management software for schools.</h1>
{/*         <div className='flex items-center'> <img src={not} className='not-icon'/> <h1 className='font-semibold'>Harder...</h1> </div> */}
        <div className='text mt-5'> Use artificial intelligence to optimize administrative workflows and processes. Move beyond traditional LMS and position your institution at the forefront of global education. </div>
        <a href={`https://csc-400.netlify.app/`}>
          <button className='get-started mt-10 font-medium'>Try Demo</button> 
        </a>

        {/* Reserve Username */}
        <a className='reserve-name' href={`https://youtu.be/AmGZkXUAJ18`}>
          or <span className='font-medium'> Watch Video Demo </span>
        </a>
      </div>

      <div> 
        <img src={heroimg} className='hero-img'/>
      </div>
    </div>

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
        <div className='fd-text font-medium'>E-Library</div>
        <div className='fd-sub'> Access a digital library where you can conveniently download lecture notes, e-books, and essential study materials, ensuring you have resources at your fingertips.</div>
      </div>
      </div>

      {/* Feature Two */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon2}/>
        <div className='fd-text font-medium'>AI Assistant</div>
        <div className='fd-sub'> Harness the power of artificial intelligence to receive instant answers to your academic questions, providing valuable support and guidance throughout your learning journey. </div>
      </div>
      </div>

      {/* Feature Three */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon3}/>
        <div className='fd-text font-medium'>Xtra Classes</div>
        <div className='fd-sub'> Access a wealth of supplementary online tutorials and resources from indpendent creators, designed to deepen your understanding and boost your academic performance. </div>
      </div>
      </div>

      {/* Feature Four */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon5}/>
        <div className='fd-text font-medium'>Collaboration Tools</div>
        <div className='fd-sub'> Engage and collaborate seamlessly with your peers through various tools like groups, forums, quizzes, and flashcards, fostering a dynamic and interactive learning environment. </div>
      </div>
      </div>

      {/* Feature Five */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon7}/>
        <div className='fd-text font-medium'>Progress Tracking</div>
        <div className='fd-sub'> Stay informed about your academic progress with comprehensive tracking tools, enabling you to make data-driven decisions about your studies. </div>
      </div>
      </div>

      {/* Feature Six */}
      <div className='feature-div-parent'>
      <div className='feature-div'>
        <img src={Icon8}/>
        <div className='fd-text font-medium'>Offline Access</div>
        <div className='fd-sub'> Benefit from a mobile-friendly platform that allows you to download resources for offline access, ensuring uninterrupted learning, even without an internet connection.  </div>
      </div>
      </div>

    </div>

</div>

{/* Footer */}
<div className='footer'>
<img src={Nigeria}/> 
<div> Made in Nigeria, with</div>
<img src={Love}/>
</div>

    </>
  )
}

export default App
