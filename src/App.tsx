import './assets/style/App.css'
import ProgramList from "./ProgramList";
import { data } from "./data";

function App() {
  return (
    <>
    <div className='padding'>
      <div className='main_0'>
        <h1 className='main_name'>Kvazar-213452</h1>
        <h3>Full-stack Developer</h3>
        <div className='my_url'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Kvazar-213452">https://github.com/Kvazar-213452</a>
        </div>
      </div>
      <div className='main_1'>
        <ProgramList data={data} />
      </div>
    </div>
    </>
  )
}

export default App
