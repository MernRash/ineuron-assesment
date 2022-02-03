import React, { useContext } from "react";
import './explore.scss';
import { JobData } from '../context/jobData';


function ExploreSec() {

  const jobData = useContext(JobData);
  return (
    <div className="explore-section">
      <div className="explore-title">
        <h1>Explore Jobs</h1>
      </div>

      <div className="job-card-container">
        {jobData.map((item) => {
          return (
            <div className="job-card-box">
              <div className="job-title-box">
                <span>
                  <h3>{item.title}</h3>
                </span>
                <span>
                  <h5>{item.tag}</h5>
                </span>
              </div>

              <div className="job-information-container">
                <div className="location-experience-box">
                  <span>Location: {item.location}</span>
                  <span>Experinece: {item.experience}</span>
                </div>

                <div className="employment-info-box">
                  <div className="employment-container">
                    <span>Employment Type: {item.epmloymentType}</span>
                    <span>Job Type: {item.jobType}</span>

                  </div>

                  <div className="view-more-box">
                    <span>View More Details</span>
                  </div>
                </div>


              </div>
            </div>
          )
        })}

      </div>


      <div className="view-more-button">
        <button>View more jobs</button>
      </div>
    </div>
  );
}

export default ExploreSec;
