import React, { useState } from "react";

function Generate() {
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    classLevel: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState(null);
  const [showMarkingScheme, setShowMarkingScheme] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleGenerateQuestions = async (e) => {
     e.preventDefault();
     if (!formData.subject.trim() || !formData.topic.trim() || !formData.classLevel.trim() || !formData.country.trim()) {
       alert("Please fill in all fields: Subject, Topic, Class Level, and Country");
       return;
     }

     setIsLoading(true);
     
     // Simulate AI generation - replace with actual API call
     setTimeout(() => {
       setGeneratedQuestions({
         subject: formData.subject,
         topic: formData.topic,
         classLevel: formData.classLevel,
         country: formData.country,
         questions: [
           {
             id: 1,
             question: `What is the primary concept of ${formData.topic} in ${formData.subject} for ${formData.classLevel} students in ${formData.country}?`,
             type: "multiple-choice",
             options: ["Option A", "Option B", "Option C", "Option D"],
             markingScheme: `Correct Answer: Option B. Explanation: This option correctly identifies the primary concept of ${formData.topic} in ${formData.subject} as per the ${formData.country}'s ${formData.classLevel} curriculum. Marking: 1 mark for correct answer, 0 for incorrect.`,
           },
           {
             id: 2,
             question: `Explain the importance of ${formData.topic} in ${formData.subject} for ${formData.classLevel} level in ${formData.country}'s educational context.`,
             type: "essay",
             markingScheme: `Marking Criteria for ${formData.topic} in ${formData.subject}:\n- Content Accuracy (0-3 marks): Explanation of importance with relevant facts.\n- Understanding of Context (0-2 marks): Relation to ${formData.country}'s educational setting.\n- Examples (0-2 marks): Use of relevant examples.\n- Communication (0-1 mark): Clarity and coherence.\nTotal: 8 marks.`,
           },
           {
             id: 3,
             question: `How does ${formData.topic} relate to real-world applications in ${formData.subject} considering ${formData.country}'s educational curriculum?`,
             type: "short-answer",
             markingScheme: `Acceptable Answer Key: Students should mention at least one real-world application of ${formData.topic} in ${formData.subject} that is relevant to ${formData.country}. Marking: 1 mark for identifying a real-world application, 1 mark for explaining the connection, 1 mark for providing a specific example from ${formData.country}'s context. Total: 3 marks.`,
           },
         ],
       });
       setIsLoading(false);
     }, 2000);
   };

  const exportToPDF = () => {
    if (!generatedQuestions) return;
    alert("PDF export feature will be implemented with a PDF library like jsPDF or react-pdf");
  };

  const exportToWord = () => {
    if (!generatedQuestions) return;
    alert("Word export feature will be implemented with a Word library like docx");
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
             Enter your subject, topic, class/grade level, and country to generate comprehensive, curriculum-aligned questions tailored to your students' needs and local educational context.
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

               {/* Class Level Input */}
               <div>
                 <label htmlFor="classLevel" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                   Class/Grade Level
                 </label>
                 <select
                   id="classLevel"
                   name="classLevel"
                   required
                   value={formData.classLevel}
                   onChange={handleChange}
                   className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                 >
                   <option value="">Select Class Level</option>
                   <option value="Grade 1">Grade 1</option>
                   <option value="Grade 2">Grade 2</option>
                   <option value="Grade 3">Grade 3</option>
                   <option value="Grade 4">Grade 4</option>
                   <option value="Grade 5">Grade 5</option>
                   <option value="Grade 6">Grade 6</option>
                   <option value="Grade 7">Grade 7</option>
                   <option value="Grade 8">Grade 8</option>
                   <option value="Grade 9">Grade 9</option>
                   <option value="Grade 10">Grade 10</option>
                   <option value="Grade 11">Grade 11</option>
                   <option value="Grade 12">Grade 12</option>
                   <option value="Primary 1">Primary 1</option>
                   <option value="Primary 2">Primary 2</option>
                   <option value="Primary 3">Primary 3</option>
                   <option value="Primary 4">Primary 4</option>
                   <option value="Primary 5">Primary 5</option>
                   <option value="Primary 6">Primary 6</option>
                   <option value="Year 1">Year 1</option>
                   <option value="Year 2">Year 2</option>
                   <option value="Year 3">Year 3</option>
                   <option value="Year 4">Year 4</option>
                   <option value="Year 5">Year 5</option>
                   <option value="Year 6">Year 6</option>
                   <option value="Year 7">Year 7</option>
                   <option value="Year 8">Year 8</option>
                   <option value="Year 9">Year 9</option>
                   <option value="Year 10">Year 10</option>
                   <option value="Year 11">Year 11</option>
                   <option value="Year 12">Year 12</option>
                   <option value="Freshman">Freshman</option>
                   <option value="Sophomore">Sophomore</option>
                   <option value="Junior">Junior</option>
                   <option value="Senior">Senior</option>
                 </select>
               </div>

               {/* Country Input */}
               <div>
                 <label htmlFor="country" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                   Country
                 </label>
                 <select
                   id="country"
                   name="country"
                   required
                   value={formData.country}
                   onChange={handleChange}
                   className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                 >
                   <option value="">Select Country</option>
                   <option value="United States">United States</option>
                   <option value="United Kingdom">United Kingdom</option>
                   <option value="Canada">Canada</option>
                   <option value="Australia">Australia</option>
                   <option value="Germany">Germany</option>
                   <option value="France">France</option>
                   <option value="India">India</option>
                   <option value="Nigeria">Nigeria</option>
                   <option value="Kenya">Kenya</option>
                   <option value="South Africa">South Africa</option>
                   <option value="Brazil">Brazil</option>
                   <option value="Japan">Japan</option>
                   <option value="China">China</option>
                   <option value="Singapore">Singapore</option>
                   <option value="Finland">Finland</option>
                   <option value="Netherlands">Netherlands</option>
                   <option value="Sweden">Sweden</option>
                   <option value="Norway">Norway</option>
                   <option value="UAE">UAE</option>
                   <option value="Saudi Arabia">Saudi Arabia</option>
                   <option value="Egypt">Egypt</option>
                   <option value="Other">Other</option>
                 </select>
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
                 <span className="font-semibold text-indigo-400">{generatedQuestions.subject}</span> - 
                 <span className="font-semibold text-purple-400">{generatedQuestions.topic}</span> | 
                 <span className="font-semibold text-pink-400">{generatedQuestions.classLevel}</span> | 
                 <span className="font-semibold text-emerald-400">{generatedQuestions.country}</span>
               </p>
             </div>

            {/* View Toggle */}
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={() => setShowMarkingScheme(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !showMarkingScheme
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/50"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Questions
              </button>
              <button
                onClick={() => setShowMarkingScheme(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  showMarkingScheme
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Marking Scheme
              </button>
            </div>

            {/* Questions View */}
            {!showMarkingScheme && (
              <div className="space-y-6">
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
              </div>
            )}

             {/* Marking Scheme View */}
             {showMarkingScheme && (
               <div className="space-y-6">
                 <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl p-6">
                   <h3 className="text-2xl font-bold text-white mb-6">Marking Scheme</h3>
                   
                   {generatedQuestions.questions.map((q, index) => (
                     <div key={q.id} className="mb-8 pb-8 border-b border-slate-700 last:border-b-0 last:mb-0 last:pb-0">
                       <div className="flex items-start gap-4">
                         <div className="flex-shrink-0">
                           <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/50">
                             <span className="text-purple-300 font-bold text-sm">{index + 1}</span>
                           </div>
                         </div>
                         <div className="flex-grow">
                           <h4 className="text-lg font-semibold text-white mb-3">
                             {q.question}
                           </h4>
                           <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                             <p className="text-slate-300 whitespace-pre-line">{q.markingScheme}</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             )}

            {/* Export/Download Options */}
            <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-slate-800">
              <button
                onClick={exportToPDF}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Download as PDF
              </button>
              <button
                onClick={exportToWord}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download as Word
              </button>
              <button
                onClick={() => {
                  setGeneratedQuestions(null);
                  setFormData({ subject: "", topic: "" });
                  setShowMarkingScheme(false);
                }}
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 transition-all transform hover:-translate-y-0.5"
              >
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
               Enter your subject, topic, class level, and country to generate AI-powered questions
             </p>
           </div>
         )}
      </div>
    </main>
  );
}

export default Generate;
