import { AboutUsScreen } from './components/AboutUsScreen'
import { BenefitsScreen } from './components/BenefitsScreen'
import { ClientsScreen } from './components/ClientsScreen'
import { ExecutorsScreen } from './components/ExecutorsScreen'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProjectsScreen } from './components/ProjectsScreen'
import { WelcomeScreen } from './components/WelcomeScreen'

function App() {
  return (
    <main className="px-4 md:px-[100px] xl:px-[270px] pt-0 sm:pt-wrapper-lg bg-white">
      <Header />
      
      <WelcomeScreen />
      <AboutUsScreen />
      <ProjectsScreen />
      <BenefitsScreen />
      <ClientsScreen />
      <ExecutorsScreen />

      <Footer />
    </main>
  )
}

export default App
