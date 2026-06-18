import robot from "../assets/robot.png";
import {
  FaRobot,
  FaUserGraduate,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import {
  FaChild,
  FaLaptopCode,
  FaCalendarAlt,
} from "react-icons/fa";
function Hero() {
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#0c1b4d] to-[#4c1d95]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-20" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[140px] opacity-20" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-cyan-400 text-cyan-300 text-sm mb-6">
              BUILD • CODE • INNOVATE
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="text-white">
                AI & ROBOTICS
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                SUMMER WORKSHOP
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
              Join a 4-week interactive workshop where young minds
              explore Artificial Intelligence, Robotics,
              Automation and Coding through hands-on projects
              and real-world challenges.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mt-8">

  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
    <FaRobot className="text-cyan-400" />
    Hands-on Projects
  </div>

  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
    <FaUserGraduate className="text-cyan-400" />
    Expert Mentors
  </div>

  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
    <FaCertificate className="text-cyan-400" />
    Certificate
  </div>

  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
    <FaRocket className="text-cyan-400" />
    Fun Learning
  </div>

</div>

            {/* Button */}
            <button
              onClick={scrollToRegister}
              className="
              mt-10
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              px-10
              py-4
              rounded-xl
              font-semibold
              text-lg
              shadow-lg
              hover:scale-105
              transition
              "
            >
              Enroll Now →
            </button>

            {/* Info */}
            <div className="mt-8 flex flex-wrap gap-8 text-gray-300">

  <div className="flex items-center gap-2">
    <FaChild className="text-cyan-400" />
    Ages 8–14 Years
  </div>

  <div className="flex items-center gap-2">
    <FaLaptopCode className="text-cyan-400" />
    Online
  </div>

  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-cyan-400" />
    Starts 15 July 2026
  </div>

</div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src={robot}
              alt="AI Robot"
              className="
              w-full
              max-w-xl
              mx-auto
              drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]
              animate-pulse
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;