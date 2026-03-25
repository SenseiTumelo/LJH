import { Carousel } from "react-responsive-carousel";
import JobCard from "../components/JobCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const jobs = [
    {
      title: "Garden Cleaning",
      location: "Moletjie Mabokelele",
      pay: 300,
      description: "Need someone to clean yard and remove weeds.",
      contactNumber: "27831234567"
    },
    {
      title: "House Cleaning",
      location: "Moletjie Ga-Komape",
      pay: 250,
      description: "Cleaning a 2-bedroom house.",
      contactNumber: "27839876543"
    }
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-auto mx-auto mt-0 mb-0 max-h-80vh  rounded-1xl shadow-md ">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="src/images/carousel-1.jpg" alt="slide1" />
            <p className="legend">Find Jobs Near You</p>
          </div>

          <div>
            <img src="src/images/carousel-2.jpg" alt="slide2" />
            <p className="legend">Post Your Hustle</p>
          </div>

          <div>
            <img src="src/images/carousel-3.jpg" alt="slide3" />
            <p className="legend">Grow Your Income</p>
          </div>
        </Carousel>
      </div>
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