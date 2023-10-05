import Logo from '../images/UniversityX-Logo.png'
import AuthImage from '../images/auth-image.png'
// import GoogleImg from '../images/google-icon.svg'
import '../css/auth.css'

function CreateAccount() {

    return(
        <>
            <div className='auth-parent'>
                <div className='auth-left'>
                <a href={`/`}> <div className='ca-logo'> <img src={Logo}/> </div> </a>

                    <div className='auth-left-inner'>
                        <div className='cre-acc-txt font-medium'>Create an account</div>
                        <div className='disclaimer'><span>Disclaimer:</span> UniversityX is currently available to only a few selected Schools</div>

                        {/* <form name="new-acc-form" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="new-acc-form" /> */}
    <br/> <br/>
                            <input type="text" name="firstname" placeholder='First Name' />
                            <input type="text" name="lastname" placeholder='Last Name'/>
                            <input type="email" name="email" placeholder='Email Address' />
                            <input type="password" name="password" placeholder='Password' />

                            <a href={`/enroll`}> <button className='ca-btn' type='submit'>Create Account</button> </a>
                            {/* <button className='google-btn'> <img src={GoogleImg}/> Signup with Google</button> */}
                            
                            <div className='ahaa-sub'> Already have an account? <a href={`/createaccount`}> <span className='font-medium'>Login</span> </a> </div>
                        {/* </form> */}

                    </div>
                </div>

                <div className='auth-right'>
                    <img src={AuthImage}/>
                </div>
            </div>
        </>
    )
}

export default CreateAccount