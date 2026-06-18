import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden relative">

      {/* Global Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-cyan-500
          opacity-10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-72
          h-72
          bg-purple-500
          opacity-10
          blur-[140px]
          "
        />

      </div>

      <div className="relative z-10">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </div>

    </div>
  );
}

export default App;