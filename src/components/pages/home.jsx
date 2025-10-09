import '../styles/home.css'

const home = ()=>{
    const mangas = [1,2,3,4,5,6,7,8,9,10]
    return (
        <>
            <main className='homeContainer'>

                <div className='mangas'>
                    <ul className='mangasList'>
                        {mangas.map((i)=>{
                            return (
                                <li className='manga'>{i}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='trending'>
                    <p>Trending</p>
                </div>
            </main>
        </>
    )
}


export default home;