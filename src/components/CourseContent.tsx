import '../css/maincontent.css'
import ArrowIcon from '../images/arrow.svg'
import BackIcon from '../images/back.svg'

function CourseContent() {

    return(
        <>
        <div className='main-content'>
            {/* Back Icon */}
            <a href={`/dashboard`}>
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            </a>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer as a Problem Solving Tool (CSC 120)</div>
            </div>

            {/* Course Cards */}
            <a href={`/dashboard/courses/details`}>
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>1</div>
                    <div>Concept of problem solving</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>
            </a>

            <a href={`/dashboard/courses/details`}>
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>2</div>
                    <div>Algorithm design, coding and test running</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>
            </a>

            <a href={`/dashboard/courses/details`}>
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>3</div>
                    <div>Problem solving steps (e.g Management, Scence and Engineering)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/courses/details`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>4</div>
                    <div>Classes of problems: Flowcharts, Algorithm design, Decision table etc.</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>

            <a href={`/dashboard/courses/details`}>
            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>5</div>
                    <div>Number systems and their representation codes</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
            </a>
        
        </div>
        </>
    )
}

export default CourseContent