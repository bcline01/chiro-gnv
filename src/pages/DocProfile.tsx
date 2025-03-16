import { Link, useParams } from "react-router-dom";
import { doctors } from "../components/doctors";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import FirstVisit from "../components/FirstVisit";
import Footer from "../components/Footer";
import { useEffect } from "react";
import '../styles/DocStack.css';

// Define TypeScript types for doctor data
interface Doctor {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  education: string;
  experience: string;
  certifications: string[];
}

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get doctor ID from URL params
  const doctor: Doctor | undefined = doctors.find((doc) => doc.id === id);

  if (!doctor) return <h2 className="text-center mt-4">Doctor not found</h2>;

  useEffect(() => {
    document.getElementById("top-of-page")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
          <div id="top-of-page"></div>

      <Navbar />
      <div className="doc-profile-page">
        <div className="doc-container">
          {/* Image Section */}
          <div className="doc-image">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Doctor Info Section */}
          <div className="doc-content">
            <h1 className="fw-bold">{doctor.name}</h1>
            {/* <p className="text-muted fst-italic">{doctor.title}</p> */}

            <h3 className="mt-3">About Dr. {doctor.name.split(" ")[1]}</h3>
            <li>{doctor.bio}</li>

            <h3 className="mt-3">Education & Experience</h3>
            <li>{doctor.education}</li>
            <li>{doctor.experience}</li>

            <h3 className="mt-3">Certifications & Training</h3>
            <ul className="list-unstyled">
              {doctor.certifications.map((cert, index) => (
                <li key={index}> {cert}</li>
              ))}
            </ul>

            <Link to="/#section6" className="back-to-doc">Back to Doctors</Link>          
            </div>
        </div>
      </div>
      <FirstVisit />
      <Footer />
    </>
  );
};

export default DoctorProfile;
