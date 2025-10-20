import '../styles/home.css'

import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext'

const Home = ()=>{

    const auth = useContext(AuthContext)
     let navigate = useNavigate();

    useEffect(()=>{
        if(!auth)
        {
            console.log("you've been redirected")
            navigate('/login')
        }
    },[auth])


    const mangas = [1,2,3,4,5,6,7,8,9,10]
    return (
        <>
            {auth &&
            
                <main className='homeContainer'>

                    <div className='mangas'>
                        <ul className='mangasList'>
                            {mangas.map((i)=>{
                                return (
                                    <li className='manga' key={i}>{i}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='trending'>
                        <p>Trending</p>
                    </div>
                </main>
            }
            
        </>
    )
}


export default Home;