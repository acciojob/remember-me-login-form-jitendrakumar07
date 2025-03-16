//your JS code here. If required.
const loginForm = document.getElementById('loginForm');
    const existingUserButton = document.getElementById('existing');

    // Check for existing user on load
    if (localStorage.getItem('username')) {
      existingUserButton.style.display = 'block';
    }

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('checkbox').checked;

      alert(`Logged in as ${username}`);

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); 
        existingUserButton.style.display = 'block';
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingUserButton.style.display = 'none';
      }
    });
existingUserButton.addEventListener('click', function() {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    });