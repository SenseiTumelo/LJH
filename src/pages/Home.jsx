import JobCard from "../components/JobCard";

function Home() {
  const jobs = [
    {
      title: "Garden Cleaning",
      location: "Soshanguve",
      pay: 300,
      description: "Need someone to clean yard and remove weeds.",
      contactNumber: "27831234567"
    },
    {
      title: "House Cleaning",
      location: "Pretoria",
      pay: 250,
      description: "Cleaning a 2-bedroom house.",
      contactNumber: "27839876543"
    }
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Available Jobs
      </h1>

      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default Home;