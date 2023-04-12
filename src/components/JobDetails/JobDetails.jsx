import React, { useContext } from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";
import f1 from "../../assets/Icons/Frame.png";
import f2 from "../../assets/Icons/Frame-1.png";
import f3 from "../../assets/Icons/Frame-2.png";
import f4 from "../../assets/Icons/Frame-3.png";
import f5 from "../../assets/Icons/Frame-4.png";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utils/fakedb";

// import { JobContext } from "../../App";
// import JobCart from "../JobCart/JobCart";
// import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const features = useLoaderData();
  const selectedJob = features.find((job) => job.id === id);

  const { title, salary, phone, location, email } = selectedJob;
  const buttonApplyNow = (id) => {
    if (selectedJob) {
      alert("cart already added");
    } else {
      return [...selectedJob, job];
    }
    addToDb(id);
  };
  return (
    <div>
      <div>
        <div className="mx-auto w-full h-44 bg-purple-50 relative">
          <h1 className="pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
            Job Details
          </h1>
          <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
          <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
        </div>
        <div className="grid grid-cols-[3fr_2fr] my-container2 mt-10 gap-5">
          <div>
            <p className="mb-5">
              <strong>Job Description:</strong> A UI/UX (User Interface/User
              Experience) designer is responsible for designing and creating
              engaging and effective interfaces for software and web
              applications. This includes designing the layout, visual design,
              and interactivity of the user interface.
            </p>
            <p className="mb-5">
              <strong>Job Responsibility:</strong> Collaborating with
              cross-functional teams: UI/UX designers often work closely with
              other teams, including product management, engineering, and
              marketing, to ensure that the user interface is aligned with
              business and technical requirements. You will need to be able to
              effectively communicate your design ideas and gather feedback from
              other team members.
            </p>
            <p className="mb-5">
              <strong>Educational Requirements:</strong> Bachelor degree to
              complete any reputation university.
            </p>
            <p>
              <strong>Experiences:</strong> 2-3 Years in this field.
            </p>
          </div>
          <div>
            <div className="bg-purple-50 rounded-lg p-5 mb-5">
              <h1 className="text-xl font-bold">Job Details</h1>
              <hr className="h-.5 my-2 bg-purple-200 " />
              <div className="flex">
                <img className="h-6 w-6 mr-1" src={f1} alt="" />
                <p className="text-gray-400 pb-2">
                  <strong>Salary : </strong>
                  {salary}
                </p>
              </div>
              <div className="flex">
                <img className="h-6 w-6 mr-1" src={f2} alt="" />
                <p className="text-gray-400 pb-2">
                  <strong>Job Title : </strong>
                  {title}
                </p>
              </div>

              <h1 className="text-xl font-bold mt-5">Contact Information</h1>
              <hr className="h-.5 my-2 bg-purple-200 " />
              <div className="flex">
                <img className="h-6 w-6 mr-1" src={f3} alt="" />
                <p className="text-gray-400 pb-2">
                  <strong>Phone : </strong>
                  {phone}
                </p>
              </div>
              <div className="flex">
                <img className="h-6 w-6 mr-1" src={f4} alt="" />
                <p className="text-gray-400 pb-2">
                  <strong>Email : </strong>
                  {email}
                </p>
              </div>
              <div className="flex">
                <img className="h-6 w-6 mr-1" src={f5} alt="" />
                <p className="text-gray-400">
                  <strong>Address : </strong>
                  {location}
                </p>
              </div>
            </div>
            <button onClick={() => buttonApplyNow(id)} className="btn2">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
