import netlifyIdentity from 'netlify-identity-widget'

if (netlifyIdentity) {
  netlifyIdentity.on('init', (user: any) => {
    if (user) {
      console.log('Logged in as', user);
    } else {
      console.log('Not logged in');
    }
  });

  netlifyIdentity.on('login', () => {
    console.log('Logged in');
  });

  netlifyIdentity.on('logout', () => {
    console.log('Logged out');
  });

  // Open the Netlify Identity modal for login/signup
  const loginButton = document.querySelector('#login-button');
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      netlifyIdentity.open();
    });
  }
}
