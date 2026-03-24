import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  // Temporary data (later from API)
  const job = {
    id: 1,
    title: "Garden Cleaning",
    location: "Soshanguve",
    pay: 300,
    description:
      "Need someone to clean yard, remove weeds, and dispose of waste properly.",
    contactNumber: "27831234567",
    date: "25 March 2026",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-gray-800">
          {job.title}
        </h1>

        <p className="text-gray-500 mt-1">
          📍 {job.location}
        </p>

        <p className="text-green-600 text-xl font-semibold mt-2">
          R{job.pay}
        </p>

        <p className="text-gray-400 text-sm mt-1">
          🕒 {job.date}
        </p>

        <hr className="my-4" />

        <h2 className="font-semibold text-lg mb-2">
          Job Description
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {job.description}
        </p>

        <div className="mt-6 flex flex-col gap-3">

          {/* Apply Button */}
          <button className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600">
            Apply Now
          </button>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${job.contactNumber}?text=Hi, I'm interested in your job: ${job.title}`}
            target="_blank"
            className="bg-green-500 text-white py-3 rounded-xl text-center hover:bg-green-600"
          >
            Contact via WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;