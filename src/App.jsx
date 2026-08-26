import {Navbar} from '@/layout/Navbar';
import {About} from '@/sections/About';
import {Illustrations} from '@/sections/Illustrations';
import {Projects} from '@/sections/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <About />
        <Illustrations />
        <Projects />
      </main>
    </div>
  )
}

export default App
