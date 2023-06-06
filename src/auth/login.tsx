import Logo from '../images/UniversityX-Logo.png'
import AuthImage from '../images/auth-image.png'
import GoogleImg from '../images/google-icon.svg'
import '../css/auth.css'

function Login() {

    return(
        <>
            <div className='auth-parent'>
                <div className='auth-left'>
                    <div className='ca-logo'> <img src={Logo}/> </div>

                    <div className='auth-left-inner'>
                        <div className='cre-acc-txt font-medium'>Login into an account</div>

                        <form method="POST" action="/submit">
                            <input type="email" name="email" placeholder='Email Address' />
                            <input type="password" name="password" placeholder='Password' />

                            {/* <input type="submit" value="Submit" /> */}
                            <button className='ca-btn'>Login</button>
                            <button className='google-btn'> <img src={GoogleImg}/> Login with Google</button>
                            
                            <div className='ahaa-sub'>Don't have an account? <span className='font-medium'>Signup</span> </div>
                        </form>

                    </div>
                </div>

                <div className='auth-right'>
                    <img src={AuthImage}/>
                </div>
            </div>
        </>
    )
}

export default Login