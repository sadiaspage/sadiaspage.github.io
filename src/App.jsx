import {Navbar} from '@/layout/Navbar';
import {About} from '@/sections/About';
import {Illustrations} from '@/sections/Illustrations';
import {Projects} from '@/sections/Projects';

function App() {
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
