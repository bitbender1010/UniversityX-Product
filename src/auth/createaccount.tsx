
import '../css/auth.css'

const CreateAccount = () => {


    return (
        <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="test-field"
      >
        <input type="hidden" name="contact" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>

    );
};

export default CreateAccount;
