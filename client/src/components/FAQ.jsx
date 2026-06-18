function FAQ() {
  const faqs = [
    {
      question: "Do students need prior coding knowledge?",
      answer:
        "No. This workshop is beginner-friendly and designed for young learners."
    },
    {
      question: "Will the sessions be recorded?",
      answer:
        "Yes. All participants will receive access to session recordings."
    },
    {
      question: "Will students receive a certificate?",
      answer:
        "Yes. A completion certificate will be awarded after the workshop."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          FAQs
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="
              bg-[#0f172a]
              border border-cyan-500/20
              rounded-xl
              p-5
              hover:border-cyan-400
              transition
              "
            >
              <summary className="cursor-pointer font-semibold text-lg">
                {faq.question}
              </summary>

              <p className="mt-4 text-gray-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;