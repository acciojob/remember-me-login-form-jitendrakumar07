const form = document.getElementById('loginForm');
    const existingUserBtn = document.getElementById('existing');

    // Check if credentials exist on page load
    if (localStorage.getItem('username')) {
      existingUserBtn.style.display = 'block';
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('checkbox').checked;

      alert(`Logged in as ${username}`);

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); // Consider security implications
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
    });

    existingUserBtn.addEventListener('click', () => {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    });