import { useState } from "react";
import axios from "axios";

function PostJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    pay: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/jobs", form);

      alert("Job posted successfully ✅");

      // Clear form
      setForm({
        title: "",
        description: "",
        location: "",
        pay: "",
        contactNumber: "",
      });

    } catch (error) {
      alert("Error posting job ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Post a Job
        </h2>

        {/* Job Title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          rows="4"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Soshanguve)"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        {/* Pay */}
        <input
          type="number"
          name="pay"
          placeholder="Pay (R)"
          value={form.pay}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        {/* Contact */}
        <input
          type="text"
          name="contactNumber"
          placeholder="WhatsApp Number (e.g. 2783xxxxxxx)"
          value={form.contactNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        {/* Submit */}
        <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600">
          Post Job
        </button>

      </form>

    </div>
  );
}

export default PostJob;