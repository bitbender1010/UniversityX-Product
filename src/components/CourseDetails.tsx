import '../css/maincontent.css'
import ArrowIcon from '../images/arrow.svg'
import BackIcon from '../images/back.svg'

import VideoIcon from '../images/video.svg'
import PDFIcon from '../images/pdf.svg'

function CourseDetails() {

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
                <div className="loc font-medium">Courses &gt; Computer as a Problem Solving Tool (CSC 120) &gt; Computer Programming </div>
            </div>

            {/* Course Cards */}
            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={PDFIcon}/>
                    </div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>

                <div className='long-line'> </div>
            </div>

            <div className='flex course-card justify-between items-start relative'>
                <div className='flex'>
                    <div className='course-num course-num-active cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
                    <div>Computer as a Problem Solving Tool (CSC 120)</div>
                </div>

                <div className='flex right-icons'>
                    <img src={ArrowIcon} className='arrow-icon'/>
                </div>
            </div>

            <div className='flex course-card justify-between items-start'>
                <div className='flex'>
                    <div className='course-num course-num-inactive cn-icon-padding'>
                        <img src={VideoIcon}/>
                    </div>
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

export default CourseDetails