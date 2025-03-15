import './App.css'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello main</h1>
    <h2>Hello jsx</h2>
    <About/>
    </>
  )
}

export default App
