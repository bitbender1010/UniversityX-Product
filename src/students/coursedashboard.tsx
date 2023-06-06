import '../css/dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import CourseContent from '../components/CourseContent'


function CourseDashboard() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <CourseContent />
            </div>
        </>
    )
}

export default CourseDashboard