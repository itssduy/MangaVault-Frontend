import '../styles/header.css'

const header = ()=>{
    return (
        <>
            <header>
                <nav className='navbar'>
                    <ul className='navlist'>
                        <li>Manga Vault</li>
                        <li>Search</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default header;