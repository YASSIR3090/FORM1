
const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function(e) {

    e.preventDefault();
    

    const username = document.getElementById('usernameEmail').value;
    const password = document.getElementById('password').value;
    
    
    console.log('--- USER LOGIN DATA ---');
    console.log('Username/Email:', username);
    console.log('Password:', password);
    console.log('Login Time:', new Date().toLocaleTimeString());
    
    
    alert('Login successful! ');
    
    
    loginForm.reset();
});