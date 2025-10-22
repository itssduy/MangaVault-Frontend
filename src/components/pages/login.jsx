import '../styles/login.css'


const Login = ()=>{
    const loginUrl = `${import.meta.env.VITE_API_URL}/auth/login`


    const onSubmit = async (e)=>{
        e.preventDefault();


        console.log(loginUrl);

        
        const response = await fetch(loginUrl, {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify({username: "test", password:"test"}),
            mode: "cors"
        });
        console.log(response)
    }
    return (
        <>
            <div className='loginContainer'>

                <form onSubmit={onSubmit} className='loginForm'>
                    <div className='input'>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Username' name="username" id="username" autoComplete="on"/>  
                    </div>
                    

                    <div className='input'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" id="password"/>
                    </div>
                    

                    <button type="submit">Submit</button>
                </form>
            </div>

            

        </>
    )
}


export default Login