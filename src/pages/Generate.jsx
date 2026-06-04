import React, { useState, useRef } from "react";

function Generate() {
  const [formData, setFormData] = useState({
    country: "",
    classLevel: "",
    examType: "",
    subject: "",
    difficulty: "",
    paperOption: "",
    paperTwoTopic: "",
    numberOfPages: "1",
    brandingLogo: null,
    brandingLogoPreview: "",
    referenceDiagram: null,
    referenceDiagramPreview: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState(null);
  const [showMarkingScheme, setShowMarkingScheme] = useState(false);
  const fileInputRef = useRef(null);
  const diagramInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          brandingLogo: file,
          brandingLogoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiagramChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          referenceDiagram: file,
          referenceDiagramPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateQuestions = async (e) => {
    e.preventDefault();
    if (
      !formData.country.trim() ||
      !formData.classLevel.trim() ||
      !formData.examType.trim() ||
      !formData.subject.trim() ||
      !formData.difficulty.trim() ||
      !formData.paperOption.trim() ||
      !formData.numberOfPages.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if ((formData.paperOption === "paper_two" || formData.paperOption === "both") && !formData.paperTwoTopic.trim()) {
      alert("Please enter the specific topic for Paper Two.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const questions = [];
      const totalQuestions = Math.max(5, parseInt(formData.numberOfPages) * 3);
      const qTypes = formData.difficulty === "easy" ? ["multiple-choice"] : formData.difficulty === "medium" ? ["multiple-choice", "short-answer"] : ["multiple-choice", "short-answer", "essay"];

      for (let i = 0; i < totalQuestions; i++) {
        const type = qTypes[i % qTypes.length];
        questions.push({
          id: i + 1,
          question: `${type === "multiple-choice" ? "MCQ" : type === "essay" ? "Essay" : "Short Answer"} ${i + 1}: Based on ${formData.subject} ${formData.examType} for ${formData.classLevel} students in ${formData.country} (${formData.difficulty} difficulty). ${formData.paperOption !== "paper_one" && i < totalQuestions / 2 ? `Topic: ${formData.paperTwoTopic}. ` : ""}What is the key concept being assessed here?`,
          type: type,
          options: type === "multiple-choice" ? ["Option A", "Option B", "Option C", "Option D"] : undefined,
          markingScheme: type === "multiple-choice"
            ? `Correct Answer: Option B. This question assesses understanding of key concepts in ${formData.subject} as per the ${formData.country} curriculum for ${formData.classLevel}. Marking: 1 mark for correct answer, 0 for incorrect.`
            : type === "essay"
            ? `Marking Criteria:\n- Content Accuracy (0-3 marks): Understanding of ${formData.subject} concepts.\n- Analysis (0-2 marks): Depth of analysis.\n- Examples (0-2 marks): Use of relevant examples.\n- Communication (0-1 mark): Clarity and coherence.\nTotal: 8 marks.`
            : `Acceptable Answer Key: Students should demonstrate understanding of core ${formData.subject} concepts relevant to ${formData.classLevel} level. Marking: Award marks based on accuracy and completeness of the response. Total: 3 marks.`,
        });
      }

      setGeneratedQuestions({
        subject: formData.subject,
        topic: formData.paperOption === "paper_one" ? "Paper One" : formData.paperOption === "paper_two" ? `Paper Two: ${formData.paperTwoTopic}` : `Paper One & Paper Two: ${formData.paperTwoTopic}`,
        classLevel: formData.classLevel,
        country: formData.country,
        examType: formData.examType,
        difficulty: formData.difficulty,
        paperOption: formData.paperOption,
        numberOfPages: formData.numberOfPages,
        brandingLogoPreview: formData.brandingLogoPreview,
        referenceDiagramPreview: formData.referenceDiagramPreview,
        questions: questions,
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

  const handleGenerateNew = () => {
    setGeneratedQuestions(null);
    setShowMarkingScheme(false);
    setFormData({
      country: "",
      classLevel: "",
      examType: "",
      subject: "",
      difficulty: "",
      paperOption: "",
      paperTwoTopic: "",
      numberOfPages: "1",
      brandingLogo: null,
      brandingLogoPreview: "",
      referenceDiagram: null,
      referenceDiagramPreview: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (diagramInputRef.current) {
      diagramInputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white pb-24 md:pb-0 pt-20 md:pt-0">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Exam Question Generator
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Configure your exam settings including country, class, exam type, subject, difficulty level, and paper options to generate curriculum-aligned questions.
          </p>
        </div>

        {/* Generate Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl mb-8">
          <form onSubmit={handleGenerateQuestions} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
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
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Class Level Input */}
              <div>
                <label htmlFor="classLevel" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Class
                </label>
                <select
                  id="classLevel"
                  name="classLevel"
                  required
                  value={formData.classLevel}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Class</option>
                  <option value="Primary 1">Primary 1</option>
                  <option value="Primary 2">Primary 2</option>
                  <option value="Primary 3">Primary 3</option>
                  <option value="Primary 4">Primary 4</option>
                  <option value="Primary 5">Primary 5</option>
                  <option value="Primary 6">Primary 6</option>
                  <option value="JHS 1">JHS 1</option>
                  <option value="JHS 2">JHS 2</option>
                  <option value="JHS 3">JHS 3</option>
                  <option value="SHS 1">SHS 1</option>
                  <option value="SHS 2">SHS 2</option>
                  <option value="SHS 3">SHS 3</option>
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                  <option value="Year 3">Year 3</option>
                  <option value="Year 4">Year 4</option>
                  <option value="Year 5">Year 5</option>
                  <option value="Year 6">Year 6</option>
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
                </select>
              </div>

              {/* Exam Type Input */}
              <div>
                <label htmlFor="examType" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Exam Type
                </label>
                <select
                  id="examType"
                  name="examType"
                  required
                  value={formData.examType}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Exam Type</option>
                  <option value="C.A.T">C.A.T</option>
                  <option value="End of Term">End of Term</option>
                  <option value="BECE MOCK">BECE MOCK</option>
                  <option value="WASSCE MOCK">WASSCE MOCK</option>
                </select>
              </div>

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

              {/* Difficulty Level */}
              <div>
                <label htmlFor="difficulty" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  required
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              {/* Paper Option */}
              <div>
                <label htmlFor="paperOption" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Paper Option
                </label>
                <select
                  id="paperOption"
                  name="paperOption"
                  required
                  value={formData.paperOption}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Paper Option</option>
                  <option value="paper_one">Paper One</option>
                  <option value="paper_two">Paper Two</option>
                  <option value="both">Both</option>
                </select>
              </div>

              {/* Paper Two Topic (conditional) */}
              {(formData.paperOption === "paper_two" || formData.paperOption === "both") && (
                <div className="sm:col-span-2">
                  <label htmlFor="paperTwoTopic" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Paper Two Specific Topic
                  </label>
                  <input
                    type="text"
                    id="paperTwoTopic"
                    name="paperTwoTopic"
                    required={formData.paperOption === "paper_two" || formData.paperOption === "both"}
                    value={formData.paperTwoTopic}
                    onChange={handleChange}
                    placeholder="e.g., Algebra, Ecology, World War II"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              {/* Number of Pages */}
              <div>
                <label htmlFor="numberOfPages" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Number of Pages
                </label>
                <input
                  type="number"
                  id="numberOfPages"
                  name="numberOfPages"
                  min="1"
                  max="20"
                  required
                  value={formData.numberOfPages}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Custom Branding / Logo Upload */}
              <div>
                <label htmlFor="brandingLogo" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Custom Branding (Logo)
                </label>
                <input
                  type="file"
                  id="brandingLogo"
                  name="brandingLogo"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleLogoChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                />
                {formData.brandingLogoPreview && (
                  <div className="mt-3">
                    <img src={formData.brandingLogoPreview} alt="Branding preview" className="h-12 w-auto rounded border border-slate-700" />
                  </div>
                )}
              </div>

              {/* Reference Diagram Upload */}
              <div>
                <label htmlFor="referenceDiagram" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Reference Diagram (Optional)
                </label>
                <input
                  type="file"
                  id="referenceDiagram"
                  name="referenceDiagram"
                  accept="image/*"
                  ref={diagramInputRef}
                  onChange={handleDiagramChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                />
                {formData.referenceDiagramPreview && (
                  <div className="mt-3">
                    <img src={formData.referenceDiagramPreview} alt="Reference diagram preview" className="h-24 w-auto rounded border border-slate-700" />
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-2">Upload a diagram or image to guide the AI question generation.</p>
              </div>
            </div>

            {/* AI Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="relative group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold shadow-xl shadow-indigo-950/50 transition-all transform hover:-translate-y-1 disabled:translate-y-0 disabled:opacity-75"
              >
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
                <span className="font-semibold text-purple-400">{generatedQuestions.examType}</span> |
                <span className="font-semibold text-pink-400">{generatedQuestions.classLevel}</span> |
                <span className="font-semibold text-emerald-400">{generatedQuestions.country}</span> |
                <span className="font-semibold text-amber-400">{generatedQuestions.difficulty.charAt(0).toUpperCase() + generatedQuestions.difficulty.slice(1)}</span> |
                <span className="font-semibold text-sky-400">{generatedQuestions.paperOption === "paper_one" ? "Paper One" : generatedQuestions.paperOption === "paper_two" ? "Paper Two" : "Both Papers"}</span> |
                <span className="font-semibold text-slate-300">{generatedQuestions.numberOfPages} Page(s)</span>
              </p>
            </div>

            {/* Branding Header */}
            {generatedQuestions.brandingLogoPreview && (
              <div className="text-center mb-6">
                <img src={generatedQuestions.brandingLogoPreview} alt="Branding Logo" className="h-16 w-auto mx-auto rounded border border-slate-700" />
              </div>
            )}

            {/* Reference Diagram */}
            {generatedQuestions.referenceDiagramPreview && (
              <div className="text-center mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Reference Diagram</p>
                <img src={generatedQuestions.referenceDiagramPreview} alt="Reference Diagram" className="max-h-40 w-auto mx-auto rounded border border-slate-700" />
              </div>
            )}

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
                onClick={handleGenerateNew}
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
              Fill in the exam details below to generate AI-powered questions
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Generate;
