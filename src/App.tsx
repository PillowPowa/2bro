import { AboutUsScreen } from "./components/AboutUsScreen";
import { BenefitsScreen } from "./components/BenefitsScreen";
import { ClientsScreen } from "./components/ClientsScreen";
import { ExecutorsScreen } from "./components/ExecutorsScreen";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsScreen } from "./components/ProjectsScreen";
import { WelcomeScreen } from "./components/WelcomeScreen";

import { Wrapper } from "./components/ui/Wrapper";

function App() {
  return (
    <main className="pt-0 lg:pt-wrapper-lg bg-white">
      <Header />

      <Wrapper>
        <WelcomeScreen />
        <AboutUsScreen />
        <ProjectsScreen />
        <BenefitsScreen />
        <ClientsScreen />
        <ExecutorsScreen />
      </Wrapper>

      <Footer />
    </main>
  );
}

export default App;
