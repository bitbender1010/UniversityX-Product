import '../css/maincontent.css'
import ArrowIcon from '../images/arrow.svg'
import BackIcon from '../images/back.svg'

function CourseContent() {

    return(
        <>
        <div className='main-content'>
            {/* Back Icon */}
            <div className='back-icon'>
                <img src={BackIcon}/>
                <div className='font-medium'>Back</div>
            </div>
            {/* List of courses */}
            <div className="list-of-courses">
                <div className="loc font-medium">Courses &gt; Computer as a Problem Solving Tool (CSC 120)</div>
            </div>

            {/* Course Cards */}
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>1</div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>2</div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active'>3</div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>4</div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive'>5</div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>
        
        </div>
        </>
    )
}

export default CourseContent