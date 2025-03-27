import SideBar from './components/SideBar'
import Header from './components/Header'
import './styles.css'

function App() {

  return (
    <>
      <Header heading="Home Page"/>

      <div className='app-layout'>
        <SideBar/>

        <div className='main-container'>
          <h1>Welcome to the Coding Quiz Webpage</h1>
      
        </div>
      </div>
      

      
    </>
  )
}

export default App
