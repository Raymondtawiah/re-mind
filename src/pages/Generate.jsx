import React, { useState } from "react";

function Generate() {
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateQuestions = async (e) => {
    e.preventDefault();
    if (!formData.subject.trim() || !formData.topic.trim()) {
      alert("Please fill in both Subject and Topic");
      return;
    }

    setIsLoading(true);
    
    // Simulate AI generation - replace with actual API call
    setTimeout(() => {
      setGeneratedQuestions({
        subject: formData.subject,
        topic: formData.topic,
        questions: [
          {
            id: 1,
            question: `What is the primary concept of ${formData.topic} in ${formData.subject}?`,
            type: "multiple-choice",
            options: ["Option A", "Option B", "Option C", "Option D"],
          },
          {
            id: 2,
            question: `Explain the importance of ${formData.topic} in ${formData.subject}.`,
            type: "essay",
          },
          {
            id: 3,
            question: `How does ${formData.topic} relate to real-world applications in ${formData.subject}?`,
            type: "short-answer",
          },
        ],
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white pb-24 md:pb-0 pt-20 md:pt-0">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Question Generator
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Enter your subject and topic, and let our advanced AI generate comprehensive, curriculum-aligned questions for your assessment.
          </p>
        </div>

        {/* Generate Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl mb-8">
          <form onSubmit={handleGenerateQuestions} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Mathematics, Biology, History"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Topic Input */}
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="e.g., Calculus, Photosynthesis, World War II"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* AI Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="relative group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold shadow-xl shadow-indigo-950/50 transition-all transform hover:-translate-y-1 disabled:translate-y-0 disabled:opacity-75"
              >
                {/* AI Icon */}
                <svg
                  className={`w-6 h-6 transition-transform ${isLoading ? "animate-spin" : "group-hover:scale-110"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>{isLoading ? "Generating..." : "Generate Questions"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Generated Questions Display */}
        {generatedQuestions && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Generated Questions</h2>
              <p className="text-slate-400">
                <span className="font-semibold text-indigo-400">{generatedQuestions.subject}</span> - <span className="font-semibold text-purple-400">{generatedQuestions.topic}</span>
              </p>
            </div>

            {generatedQuestions.questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30">
                      <span className="text-indigo-400 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white flex-grow">
                        {q.question}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        {q.type === "multiple-choice"
                          ? "MCQ"
                          : q.type === "essay"
                          ? "Essay"
                          : "Short Answer"}
                      </span>
                    </div>

                    {q.type === "multiple-choice" && q.options && (
                      <div className="space-y-2 ml-2">
                        {q.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className="flex items-center gap-3 p-2 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
                          >
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              className="w-4 h-4 cursor-pointer"
                              disabled
                            />
                            <label className="flex-grow cursor-pointer text-slate-300">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}

                    {(q.type === "essay" || q.type === "short-answer") && (
                      <textarea
                        rows="3"
                        disabled
                        placeholder="Student answer space..."
                        className="w-full mt-3 bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-500 placeholder-slate-600 focus:outline-none resize-none"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Export/Download Options */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all">
                Download as PDF
              </button>
              <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 transition-all">
                Copy to Clipboard
              </button>
              <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 transition-all">
                Generate New
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!generatedQuestions && !isLoading && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-slate-400 text-lg">
              Enter your subject and topic to generate AI-powered questions
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Generate;
