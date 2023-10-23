import { useState } from 'react';
import Logo from '../images/UniversityX-Logo.png'
import AuthImage from '../images/auth-image.png'
// import GoogleImg from '../images/google-icon.svg'
import '../css/auth.css'


interface FormState {
    name: string;
    email: string;
}

function CreateAccount() {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name')!,
                ...formState,
            }),
        })
            .then(() => alert('Success!'))
            .catch((error) => alert(error));
    };

    const encode = (data: any) => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            )
            .join('&');
    };

    return(
        <>
            <div className='auth-parent'>
                <div className='auth-left'>
                <a href={`/`}> <div className='ca-logo'> <img src={Logo}/> </div> </a>

                    <div className='auth-left-inner'>
                        <div className='cre-acc-txt font-medium'>Create an account</div>
                        <div className='disclaimer'><span>Disclaimer:</span> UniversityX is currently available to only a few selected Schools</div>

                        {/* Netlify Form */}

                        <form
                            name='contact'
                            method='POST'
                            data-netlify='true'
                            onSubmit={handleSubmit}
                        >
                        <input type='hidden' name='form-name' value='contact' />

                        <label>
                            Your Name:{' '}
                            <input
                                type='text'
                                name='name'
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Your Email:{' '}
                            <input
                                type='email'
                                name='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </label>

                        <button type='submit'>Send</button>
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

export default CreateAccount