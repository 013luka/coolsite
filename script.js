// Register form handling
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(`User registered:\nUsername: ${username}\n(Password handling requires back-end security!)`);
});

// Post script form handling
document.getElementById('postScriptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const scriptTitle = document.getElementById('scriptTitle').value;
    const scriptContent = document.getElementById('scriptContent').value;

    // Add the new script to the recent scripts section
    const scriptSection = document.getElementById('scripts');
    const newScript = document.createElement('div');
    newScript.classList.add('script');
    newScript.innerHTML = `
        <h3>${scriptTitle}</h3>
        <p>${scriptContent}</p>
    `;
    scriptSection.appendChild(newScript);

    // Clear form inputs
    document.getElementById('postScriptForm').reset();
    alert('Script posted successfully!');
});
