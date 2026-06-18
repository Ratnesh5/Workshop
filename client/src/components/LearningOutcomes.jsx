import robotics from "../assets/robotics.jpg";
import { FaCheckCircle } from "react-icons/fa";
function LearningOutcomes() {
  const outcomes = [
    "Understand AI and Machine Learning fundamentals",
    "Build exciting robotics projects",
    "Learn sensors and automation concepts",
    "Develop logical thinking and coding skills",
    "Create a final AI-powered robot project",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold mb-10">
              Learning Outcomes
            </h2>

            <div className="space-y-5">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="
                  bg-[#0f172a]
                  border border-cyan-500/20
                  rounded-xl
                  p-5
                  flex items-center gap-4
                  hover:border-cyan-400
                  transition
                  "
                >
                  <FaCheckCircle
                    className="text-cyan-400 text-xl flex-shrink-0"
                    />

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right */}
          <div>

            <img
              src={robotics}
              alt="Robotics Workshop"
              className="
              rounded-3xl
              shadow-[0_0_40px_rgba(6,182,212,0.3)]
              border
              border-cyan-500/20
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default LearningOutcomes;