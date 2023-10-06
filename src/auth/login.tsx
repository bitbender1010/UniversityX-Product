import Logo from '../images/UniversityX-Logo.png'
import AuthImage from '../images/auth-image.png'
// import GoogleImg from '../images/google-icon.svg'
import '../css/auth.css'

function Login() {

    return(
        <>
            <div className='auth-parent'>
                <div className='auth-left'>
                <a href={`/`}> <div className='ca-logo'> <img src={Logo}/> </div> </a>

                    <div className='auth-left-inner'>
                        <div className='cre-acc-txt font-medium'>Login into an account</div>
                        <div className='disclaimer'><span>Disclaimer:</span> UniversityX is currently available to only a few selected Schools</div>

                <br/> <br/>
                            <input type="email" name="email" placeholder='School Email Address' />
                            <input type="password" name="password" placeholder='Password' />

                            {/* <input type="submit" value="Submit" /> */}
                            <a href={`/error`}> <button className='ca-btn'>Login</button> </a>
                            {/* <button className='google-btn'> <img src={GoogleImg}/> Login with Google</button> */}
                            
                            <div className='ahaa-sub'>Don't have an account? <a href={`/createaccount`}> <span className='font-medium'>Signup</span> </a> </div>

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