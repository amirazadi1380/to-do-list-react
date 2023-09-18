
import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [works,setWorks] = useState([])
  const [userInput,setUserInput] = useState('')
   
  const handleSubmit = (e) =>{
  e.preventDefault()
  setWorks((prev)=>[...prev, {
    title : userInput,
    id: Math.floor(Math.random() * 3000 )

  }])
  setUserInput('')
  }
  
  const handleDelete = (id) =>{
   setWorks(works.filter(work=>work.id !== id))
  }


  return (
    <div className='w-screen  h-screen font-serif flex justify-center items-center'>
     <div className='rounded-md w-1/2 h-1/2 bg-slate-900'>
         <h1 className='text-center   text-gray-300 shadow-xl'>TO DO LIST</h1>
          <form onSubmit={handleSubmit} className='text-center mt-5'>
            <label>
              <input value={userInput} onInput={(e)=>setUserInput(e.target.value)} type="text" placeholder='what to do...' className='bg-gray-300 w-52 placeholder:text-stone-800  rounded-lg h-8 px-2 text-gray-700' />
              <button className='h-10 mx-2 hover:bg-stone-800 hover:text-white transition-all duration-300 border-none bg-stone-200 w-16 '>add</button>
            </label>
          </form>
     {works.map(work=><div className='my-5 px-3 flex justify-between capitalize'>
      <h2 className='text-stone-200' >{work.title}</h2>
      <span><FontAwesomeIcon onClick={()=>handleDelete(work.id)} icon={faClose} className='text-stone-300 cursor-pointer hover:scale-150 transition-all duration-200'/></span>
     </div>)}
     </div>

    </div>
  )
}

export default App
