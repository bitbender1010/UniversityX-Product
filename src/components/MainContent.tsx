import '../css/maincontent.css'
import InfoIcon from '../images/info.svg'
import ArrowIcon from '../images/arrow.svg'

function MainContent() {

    return(
        <>
        <div className='main-content'>
            <div>
                <div className='school mb-2'> 
                    <span className='font-medium'>School: </span>
                    <span>Lagos State University</span>
                </div>

                <div className='department'> 
                    <span className='font-medium'>Department: </span>
                    <span>Computer Science</span> 
                </div>
            </div>

            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">List of courses (11)</div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/courses`}>
            <div className='flex justify-between items-start course-card'>
                <div>Computer as a Problem Solving Tool (CSC 120)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/courses`}>
            <div className='flex justify-between items-start course-card'>
                <div>Software Workshop (CSC 104)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/courses`}>
            <div className='flex justify-between items-start course-card'>
                <div>Principles of computer organization (CSC 112)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/courses`}>
            <div className='flex justify-between items-start course-card'>
                <div>Calculus (MAT 112)</div>

                <div className='flex right-icons'>
                    <img src={InfoIcon} className='info-icon'/>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>


        </div>
        </>
    )
}

export default MainContent