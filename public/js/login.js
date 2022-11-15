const loginForm = document.getElementById( 'signin-form' );
const emailEl = document.getElementById( 'loginmail' );
const passwordEl = document.getElementById( 'loginpassword' );

loginForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    const data = {
        email,
        password
    };
    fetch( 'https://mymeetingsapp.herokuapp.com/api/auth/login', {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: { 'Content-Type': 'application/json' }
    } )
        .then( response => {
            if ( response.ok ) {
                document.location.replace( '/' );
                sessionStorage.setItem( 'email', email );
            } else {
                alert( 'Failed to log in.' );
            }
        } )
        .catch( err => {
            console.log( err.message );
        } );
} );

