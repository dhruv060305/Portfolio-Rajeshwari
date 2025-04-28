import './App.css'
import Main from './Pages/Main'
import Nav from './Pages/Nav'
import Secondsection from './Pages/Secondsection'
import CustomCursor from './Animations/CustomCursor';


function App() {
  
  return (
   

    
    <div className='cursor-none'>
    <CustomCursor></CustomCursor>
    <Nav></Nav>
    <Main></Main> 
    <Secondsection></Secondsection>
    </div>
    


    
  )
}

export default App
