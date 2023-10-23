
import Logo from '../images/UniversityX-Logo.png'
import AuthImage from '../images/auth-image.png'
// import GoogleImg from '../images/google-icon.svg'
import '../css/auth.css'


function CreateAccount() {

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const data = new FormData(event.currentTarget)
    //     fetch('/', {
    //         method: 'POST',
    //         body: data,
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     })
    //         .then(() => alert('Form submitted successfully!'))
    //         .catch((error) => alert(error))
    // }

    return(
        <>
            <div className='auth-parent'>
                <div className='auth-left'>
                <a href={`/`}> <div className='ca-logo'> <img src={Logo}/> </div> </a>

                    <div className='auth-left-inner'>
                        <div className='cre-acc-txt font-medium'>Create an account</div>
                        <div className='disclaimer'><span>Disclaimer:</span> UniversityX is currently available to only a few selected Schools</div>

                        {/* Netlify Form */}
                        <form name="create-account" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="create-account" />
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit">Create Account</button>
                        </form>
                        {/* End Netlify Form */}
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