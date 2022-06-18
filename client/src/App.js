import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

console.log('hello rollout!!')

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Fib Calculator V2</h2>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>

        <div>
          <Routes>
            <Route path='/' element={<Fib />} exact />
            <Route path='/otherpage' element={<OtherPage />} exact />
          </Routes>
        </div>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
