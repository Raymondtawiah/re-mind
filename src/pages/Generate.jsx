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
    provideSpacesForPaper2: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState(null);
  const [showMarkingScheme, setShowMarkingScheme] = useState(false);
  const [paper2SectionsOpen, setPaper2SectionsOpen] = useState(false);
  const [brandingOpen, setBrandingOpen] = useState(false);
  const fileInputRef = useRef(null);
  const diagramInputRef = useRef(null);

  const countries = [
    { value: "Ghana", label: "Ghana" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "The Gambia", label: "The Gambia" },
    { value: "Liberia", label: "Liberia" },
  ];

  const classLevels = [
    { value: "Basic 1", label: "Basic 1" },
    { value: "Basic 2", label: "Basic 2" },
    { value: "Basic 3", label: "Basic 3" },
    { value: "Basic 4", label: "Basic 4" },
    { value: "Basic 5", label: "Basic 5" },
    { value: "Basic 6", label: "Basic 6" },
    { value: "Basic 7", label: "Basic 7" },
    { value: "Basic 8", label: "Basic 8" },
    { value: "Basic 9", label: "Basic 9" },
    { value: "SHS 1", label: "SHS 1" },
    { value: "SHS 2", label: "SHS 2" },
    { value: "SHS 3", label: "SHS 3" },
  ];

  const examTypes = [
    { value: "C.A.T", label: "C.A.T" },
    { value: "End of Term", label: "End of Term" },
    { value: "BECE MOCK", label: "BECE MOCK" },
    { value: "WASSCE MOCK", label: "WASSCE MOCK" },
  ];

  const difficulties = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const paperOptions = [
    { value: "paper_one", label: "Paper 1" },
    { value: "paper_two", label: "Paper 2" },
    { value: "both", label: "Both" },
  ];

  const subjects = [
    "Mathematics",
    "English Language",
    "Science",
    "Social Studies",
    "ICT",
    "R.M.E",
    "French",
    "Ghanaian Language",
    "Creative Arts",
    "History",
    "Geography",
    "Economics",
    "Physics",
    "Chemistry",
    "Biology",
    "Government",
    "Literature",
    "Elective Maths",
  ];

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
    if (
      (formData.paperOption === "paper_two" || formData.paperOption === "both") &&
      !formData.paperTwoTopic.trim()
    ) {
      alert("Please enter the specific topic for Paper Two.");
      return;
    }

    setIsLoading(true);
    setGeneratedQuestions(null);
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
      provideSpacesForPaper2: true,
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Exam Question Generator
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Configure your exam settings to generate curriculum-aligned questions.
          </p>
        </div>

        {!generatedQuestions && !isLoading ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleGenerateQuestions} className="space-y-6">
              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Country
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {countries.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, country: c.value }))
                      }
                      className={`py-3 rounded-lg text-sm font-semibold border transition-all ${
                        formData.country === c.value
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-950/50"
                          : "bg-slate-950/50 border-slate-700 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="country" value={formData.country} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Class Level */}
                <div>
                  <label
                    htmlFor="classLevel"
                    className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                  >
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
                    {classLevels.map((cl) => (
                      <option key={cl.value} value={cl.value}>
                        {cl.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Curriculum Badge */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Curriculum
                  </label>
                  <div className="h-[50px] flex items-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {formData.country === "Ghana" && formData.classLevel.startsWith("Basic")
                        ? "CCP"
                        : formData.country === "Ghana" && formData.classLevel.startsWith("SHS")
                        ? "WASSCE"
                        : formData.country === "Nigeria"
                        ? "UBE"
                        : "Standard"}
                    </span>
                  </div>
                </div>

                {/* Exam Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Exam Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {examTypes.map((et) => (
                      <button
                        key={et.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, examType: et.value }))
                        }
                        className={`py-3 rounded-lg text-sm font-semibold border transition-all ${
                          formData.examType === et.value
                            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-950/50"
                            : "bg-slate-950/50 border-slate-700 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        {et.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="examType" value={formData.examType} required />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Difficulty
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {difficulties.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, difficulty: d.value }))
                        }
                        className={`py-3 rounded-lg text-sm font-semibold border transition-all ${
                          formData.difficulty === d.value
                            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-950/50"
                            : "bg-slate-950/50 border-slate-700 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="difficulty" value={formData.difficulty} required />
                </div>

                {/* Paper Option */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Paper Option
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {paperOptions.map((po) => (
                      <button
                        key={po.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, paperOption: po.value }))
                        }
                        className={`py-3 rounded-lg text-sm font-semibold border transition-all ${
                          formData.paperOption === po.value
                            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-950/50"
                            : "bg-slate-950/50 border-slate-700 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        {po.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="paperOption" value={formData.paperOption} required />
                </div>
              </div>

              {/* Paper Two Topic */}
              {(formData.paperOption === "paper_two" || formData.paperOption === "both") && (
                <div>
                  <label
                    htmlFor="paperTwoTopic"
                    className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                  >
                    Paper Two Specific Topic
                  </label>
                  <input
                    type="text"
                    id="paperTwoTopic"
                    name="paperTwoTopic"
                    required={
                      formData.paperOption === "paper_two" || formData.paperOption === "both"
                    }
                    value={formData.paperTwoTopic}
                    onChange={handleChange}
                    placeholder="e.g., Algebra, Ecology, World War II"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              {/* Paper 2 Structure Details */}
              {(formData.paperOption === "paper_two" || formData.paperOption === "both") && (
                <div className="border border-slate-800 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setPaper2SectionsOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-slate-900/50 hover:bg-slate-900 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                      Paper 2 Structure Details
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform ${paper2SectionsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {paper2SectionsOpen && (
                    <div className="p-6 space-y-6 border-t border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                          Standard Objective Format
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="numberOfPages"
                            className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                          >
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

                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                            Provide spaces for Paper 2 answers
                          </label>
                          <div className="flex items-center gap-3 h-[50px]">
                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  provideSpacesForPaper2: !prev.provideSpacesForPaper2,
                                }))
                              }
                              className={`relative w-12 h-6 rounded-full transition-colors ${
                                formData.provideSpacesForPaper2 !== false
                                  ? "bg-indigo-600"
                                  : "bg-slate-700"
                              }`}
                            >
                              <span
                                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                  formData.provideSpacesForPaper2 !== false
                                    ? "translate-x-6"
                                    : "translate-x-0"
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Reference Documents */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  Reference Documents
                </label>
                <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-slate-600 transition-colors">
                  <p className="text-slate-400 text-sm mb-3">Upload PDF, DOC, DOCX, or TXT files</p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                    id="refDocs"
                  />
                  <label
                    htmlFor="refDocs"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>
              </div>

              {/* Custom Branding */}
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setBrandingOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-slate-900/50 hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                      Custom Branding
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      PREMIUM
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${brandingOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {brandingOpen && (
                  <div className="p-6 space-y-4 border-t border-slate-800">
                    <div>
                      <label
                        htmlFor="schoolName"
                        className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                      >
                        School / Organization Name
                      </label>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={formData.schoolName || ""}
                        onChange={handleChange}
                        placeholder="Enter school name"
                        className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="brandingLogo"
                        className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider"
                      >
                        School Logo
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
                          <img
                            src={formData.brandingLogoPreview}
                            alt="Branding preview"
                            className="h-12 w-auto rounded border border-slate-700"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Reference Diagrams */}
              {(formData.paperOption === "paper_two" || formData.paperOption === "both") && (
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Reference Diagrams
                  </label>
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-slate-600 transition-colors">
                    <p className="text-slate-400 text-sm mb-3">Upload diagrams or images to guide generation</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="refDiagrams"
                      ref={diagramInputRef}
                      onChange={handleDiagramChange}
                    />
                    <label
                      htmlFor="refDiagrams"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors"
                    >
                      Upload Images
                    </label>
                  </div>
                  {formData.referenceDiagramPreview && (
                    <div className="mt-4">
                      <img
                        src={formData.referenceDiagramPreview}
                        alt="Reference diagram preview"
                        className="h-24 w-auto rounded border border-slate-700"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Generate Button */}
              <div className="flex justify-center pt-4">
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
                  <span>{isLoading ? "Generating..." : "Generate paper"}</span>
                </button>
              </div>
            </form>
          </div>
        ) : null}

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <svg
              className="w-16 h-16 text-indigo-500 animate-spin mb-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <p className="text-slate-300 text-lg font-medium">Generating your exam paper...</p>
          </div>
        )}

        {/* Generated Questions Display */}
        {generatedQuestions && !isLoading && (
          <div className="space-y-6">
            {/* Paper Header */}
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <img
                    src="/logo.png"
                    alt="Re-Mind"
                    className="h-14 w-14 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {formData.subject || "Subject"}
                    </h2>
                    <p className="text-slate-600 text-sm font-medium">
                      {formData.examType || "Exam Type"} • {formData.classLevel || "Class"} • {formData.country || "Country"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Time</p>
                  <p className="text-lg font-bold text-slate-900">2 hrs</p>
                </div>
              </div>
            </div>

            {/* Placeholder for AI generated content */}
            <div className="min-h-[300px] bg-slate-900 border border-slate-800 rounded-2xl p-8 flex items-center justify-center">
              <p className="text-slate-400 text-lg">
                AI-generated questions will appear here.
              </p>
            </div>

            {/* Export/Download Options */}
            <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-slate-800">
              <button
                onClick={() => alert("PDF export feature will be implemented with a PDF library like jsPDF or react-pdf")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Download as PDF
              </button>
              <button
                onClick={() => alert("Word export feature will be implemented with a Word library like docx")}
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
