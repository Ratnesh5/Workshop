import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import aiBg from "../assets/ai-bg.jpg";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await axios.post(
        "https://workshop-blda.onrender.com/api/enquiry",
        data
      );

      alert("Registration Successful!");
      reset();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${aiBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/85" />

      {/* Glow Effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 opacity-10 blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-10 blur-[140px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Register Now
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Reserve your seat for the AI & Robotics Summer Workshop.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
          bg-black/40
          backdrop-blur-xl
          border border-cyan-500/30
          rounded-3xl
          p-8
          shadow-[0_0_40px_rgba(6,182,212,0.25)]
          "
        >
          {/* Name */}
          <div className="relative mb-2">
            <FaUser className="absolute left-4 top-5 text-cyan-400" />

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              pl-12
              p-4
              rounded-xl
              bg-black/30
              border border-cyan-500/20
              text-white
              outline-none
              focus:border-cyan-400
              "
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>

          <p className="text-red-400 text-sm mb-4">
            {errors.name?.message}
          </p>

          {/* Email */}
          <div className="relative mb-2">
            <FaEnvelope className="absolute left-4 top-5 text-cyan-400" />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              pl-12
              p-4
              rounded-xl
              bg-black/30
              border border-cyan-500/20
              text-white
              outline-none
              focus:border-cyan-400
              "
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>

          <p className="text-red-400 text-sm mb-4">
            {errors.email?.message}
          </p>

          {/* Phone */}
          <div className="relative mb-2">
            <FaPhone className="absolute left-4 top-5 text-cyan-400" />

            <input
              type="text"
              placeholder="Phone Number"
              className="
              w-full
              pl-12
              p-4
              rounded-xl
              bg-black/30
              border border-cyan-500/20
              text-white
              outline-none
              focus:border-cyan-400
              "
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
          </div>

          <p className="text-red-400 text-sm mb-6">
            {errors.phone?.message}
          </p>

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            py-4
            rounded-xl
            font-semibold
            text-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-lg
            "
          >
            {loading
              ? "Submitting..."
              : "Register Now →"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Your data is safe with us.
          </p>
        </form>

      </div>
    </section>
  );
}

export default RegistrationForm;