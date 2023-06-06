import '../css/dashboard.css'

import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'


function Dashboard() {
    return(
        <>
            <Navigation />

            {/* Left and Right */}
            <div className='custom-grid'>
                <Sidebar />
                <MainContent />
            </div>
        </>
    )
}

export default Dashboard