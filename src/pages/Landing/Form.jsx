import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faUniversity, faBook, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const data = { Username: "", date: "", collegename: "", course: "", pursuingyear: "", mobileno: "", email: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!Object.values(inputData).every((field) => field)) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre className="mt-20">
        {flag && (
          alert(`Hello ${inputData.Username}, You've Registered Successfully!!`)
        )}
      </pre>
      <form className="container mx-auto my-8 px-8 py-8 bg-white rounded-lg shadow-lg max-w-lg" onSubmit={handleSubmit}>
        <div className="header bg-white p-4 text-center mb-8 rounded-md">
          <h1 className="text-2xl mb-2 text-gray-800">Register With Us</h1>
          <h3 className="text-lg text-gray-600">Just one step away! Join Codelatent, and I promise to give my best for your journey</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Name:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Username"
                name="Username"
                value={inputData.Username}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Today Is:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="date"
                name="date"
                value={inputData.date}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">College Name:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faUniversity} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Enter College Name"
                name="collegename"
                value={inputData.collegename}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Course:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faBook} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Select Your Course"
                name="course"
                value={inputData.course}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Year:</label>
            <select
              name="pursuingyear"
              value={inputData.pursuingyear}
              onChange={handleData}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base"
              required
            >
              <option value="">-- Select Pursuing Year --</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Contact No:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Mobile No"
                name="mobileno"
                value={inputData.mobileno}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>

          <div className="form-group flex flex-col">
            <label className="font-semibold mb-2">Email Id:</label>
            <div className="input-container relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={inputData.email}
                onChange={handleData}
                className="w-full px-12 py-3 border border-gray-300 rounded-md text-base"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="w-full max-w-xs bg-gray-900 text-white py-3 px-6 rounded-md text-base hover:bg-gray-800"
          >
            Register Now
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
