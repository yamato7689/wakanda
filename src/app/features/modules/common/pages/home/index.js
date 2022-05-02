
const url = 'https://cdn.mos.cms.futurecdn.net/n7ocEM3ckxGNQHmUBNCuW.png'

const Home = () =>{
  return (
     <div className="App">
     <h1 className='text-3xl font-bold underline'>Wakanda</h1>
     <div>
       <img src={url} alt='wakanda' />
     </div>
     <p>Este es el inicio de un proyecto para toda la familia.</p>
    </div>
  )
}

export default Home
