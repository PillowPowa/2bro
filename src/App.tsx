import { AboutUsScreen } from './components/AboutUsScreen'
import { Header } from './components/Header'
import { ProjectsScreen } from './components/ProjectsScreen'
import { WelcomeScreen } from './components/WelcomeScreen'

function App() {
  return (
    <main className="px-[270px] py-wrapper-lg bg-white">
      <Header />
      <WelcomeScreen />
      <AboutUsScreen />
      <ProjectsScreen />
    </main>
  )
}

export default App
