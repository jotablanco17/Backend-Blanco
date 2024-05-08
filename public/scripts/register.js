const form = document.querySelector('#form')
const validateForm = async (e) => {
     let {email, photo, password} = e.target
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
    } else {
        let userData = {
            email : email.value,
            password : password.value,
            photo : photo.value
        }
        try {
            const respons = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const dat = await respons.json();
            console.log(dat);
        } catch (error) {
            console.log(error);
        }
        form.reset()
    }
}
form.addEventListener('submit', validateForm)