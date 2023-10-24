
import '../css/auth.css'

const CreateAccount = () => {


    return (
        <form name="contact" method="POST" data-netlify="true">
        
        <input type="hidden" name="form-name" value="contact" />

        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Email" name="email" required />


        <button
          type="submit"
        >
          Send
        </button>
      </form>

    );
};

export default CreateAccount;
