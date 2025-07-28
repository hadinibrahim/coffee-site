import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  CardBody,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/careers.css";

export default function Careers() {
  // const [selectedJob, setSelectedJob] = useState(null);
  // const [formStatus, setFormStatus] = useState(null);

  // const formRef = useRef(null);

  const jobs = [
    {
      id: 1,
      title: "Barista",
      description:
        "Serve high-quality beverages and interact warmly with customers.",
      requirements: [
        "Minimum 1 year of experience",
        "Good communication skills",
        "Able to operate espresso machines",
      ],
      // formLink: "https://form.gle/exampleBaristaForm"
    },
    {
      id: 2,
      title: "Kitchen Staff",
      description: "Prepare signature dishes and assist in kitchen operations.",
      requirements: [
        "Able to work under pressure",
        "Team player",
        "Basic knowledge of food hygiene",
      ],
      // formLink: "https://form.gle/exampleKitchenForm"
    },
    {
      id: 3,
      title: "Cashier",
      description:
        "Handle customer orders and payments with accuracy and a smile.",
      requirements: [
        "Basic math and computer skills",
        "Friendly and professional attitude",
      ],
      formLink: "https://form.gle/exampleCashierForm",
    },
  ];

  // const handleSelectedJob = (jobId) => {
  //   setSelectedJob(jobId);
  //   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  // };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus(null);

  //   // Simulate submission success
  //   setTimeout(() => {
  //     const isSuccess = Math.random() < 0.8;
  //     if (isSuccess) {
  //       setFormStatus("success");
  //       e.target.reset();
  //     } else {
  //       setFormStatus("error");
  //     }
  //   }, 1000);
  //   formRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   if (formStatus) {
  //     const timer = setTimeout(() => setFormStatus(null), 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [formStatus]);

  const handleApply = (formLink) => {
    toast.success("Redirecting to application form...", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    setTimeout(() => {
      window.open(formLink, "_blank", "noopener noreferrer");
    }, 2000);
  };

  return (
    <div className="page-content">
      <Container className="careers-page container py-5">
        <h1 className="text-center section-title mb-4">Join Our Team!</h1>
        <p className="text-center mb-5 fs-5">
          We're always on the lookout for passionate individuals who love coffee
          and service. Browse our openings below and apply directly
        </p>

        <Row className="row g-4 mb-5">
          {jobs.map((job) => (
            <Col md={4} key={job.id}>
              <Card className="job-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.description}</Card.Text>
                  <ul className="small">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outline-primary"
                    className="mt-3"
                    onClick={() => handleApply(job.formLink)}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // onClick={() => handleSelectedJob(job.id)}
                  >
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* {selectedJob && (
          <div ref={formRef} className="application-form card shadow p-4">
          <h4 className="mb-4">
          Apply for: {jobs.find((j) => j.id === selectedJob).title}
          </h4>
          {formStatus === "success" && (
            <div className="alert alert-success" role="alert">
            Application submitted successfully!
            </div>
            )}
            {formStatus === "error" && (
              <div className="alert alert-danger" role="alert">
              Failed to submit application. Please try again later
              </div>
              )}
              <form onSubmit={handlesubmit}>
              <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
              </div>
              
              <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required />
              </div>
              
              <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" required />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Last Education</label>
                <select className="form-select" required>
                <option value="">Select</option>
                <option>High School</option>
                <option>Diploma</option>
                <option>Bachelor's Degree</option>
                <option>Others</option>
                </select>
                </div>
                
                <div className="mb-3">
                <label className="form-label">Upload CV</label>
                <input
                type="file"
                className="form-control"
                accept=".pdf"
                required
                />
                </div>
                
                <button className="btn btn-success" type="submit">
                Submit Application
                </button>
                </form>
                </div>
                )} */}
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          background: "transparent",
          boxShadow: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
