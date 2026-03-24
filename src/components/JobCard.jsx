function JobCard({ job }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-4 hover:shadow-lg transition">
      
      <h2 className="text-xl font-semibold text-gray-800">
        {job.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        📍 {job.location}
      </p>

      <p className="text-green-600 font-bold mt-2">
        R{job.pay}
      </p>

      <p className="text-gray-600 mt-2 text-sm line-clamp-2">
        {job.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
          View Details
        </button>

        <a
          href={`https://wa.me/${job.contactNumber}`}
          target="_blank"
          className="text-green-600 font-medium"
        >
          WhatsApp
        </a>

      </div>
    </div>
  );
}

export default JobCard;