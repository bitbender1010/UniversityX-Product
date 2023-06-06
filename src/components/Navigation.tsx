import Logo from '../images/UniversityX-Logo.png'
import UserProfile from '../images/user.png'
import '../css/navigation.css'


function Navigation() {

    return(
        <>
            <nav className='flex items-center justify-between navigation-nav'>
                <div> 
                    <img src={Logo} className='logo'/>
                </div>

                <div>
                    <img src={UserProfile} className='user-profile'/>
                </div>
            </nav>
        </>
    )
}

export default Navigation