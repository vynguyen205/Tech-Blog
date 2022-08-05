const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');

//Create a user
const signup = async (e) => {
    e.preventDefault();

    const username = document.getElementById('user_username').value.trim();
    const password = document.getElementById('user_password').value.trim();
    const email = document.getElementById('user_email').value.trim();

    try {
        const fetchData = await fetch(`/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        });
        console.log(fetchData);
        const dataReturn = await fetchData.json();
        console.log(`A User has been created: `,dataReturn);
        
        //redirect to dashboard page
        window.location.href = `/dashboard/${ username }`;
    } catch (err) {
        console.log(err);
    }
}

const login = async (e) => {
    e.preventDefault();

    const username = document.getElementById('login_username').value.trim();
    const password = document.getElementById('login_password').value.trim();

    if (username && password) {
        try {
        const fetchData = await fetch(`/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const dataReturn = await fetchData.json();
        console.log(`A User has been logged in: `,dataReturn);

        //redirect to dashboard page
        if (dataReturn.success) {
            window.location.href = `/dashboard/${ username }`;
        } else {
            alert(dataReturn.message);
        }

        } catch(err) {
            console.log(err);
        }
    } 
}


signupBtn?.addEventListener('click', signup);
loginBtn?.addEventListener('click', login);
