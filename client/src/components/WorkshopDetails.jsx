import {
  FaUsers,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

function WorkshopDetails() {
  const details = [
    {
      title: "Age Group",
      value: "8–14 Years",
      icon: <FaUsers />,
    },
    {
      title: "Duration",
      value: "4 Weeks",
      icon: <FaClock />,
    },
    {
      title: "Mode",
      value: "Online",
      icon: <FaLaptop />,
    },
    {
      title: "Fee",
      value: "₹2,999",
      icon: <FaRupeeSign />,
    },
    {
      title: "Start Date",
      value: "15 July 2026",
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <div
              key={index}
              className="
              bg-[#0f172a]
              border border-cyan-500/20
              rounded-2xl
              p-6
              text-center
              shadow-[0_0_25px_rgba(6,182,212,0.15)]
              hover:scale-105
              hover:border-cyan-400
              transition-all
              "
            >
              <div className="text-4xl text-cyan-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkshopDetails;