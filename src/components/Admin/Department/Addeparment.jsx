import React, { useState } from "react";
import "../Department/Add.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Addeparment = ({ sidebarOpen }) => {
  const [departmentName, setDepartmentName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [contactPersonPhone, setContactPersonPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (contactPersonEmail) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(contactPersonEmail);
  };

  const isPhoneNumberValid = (contactPersonPhone) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(contactPersonPhone);
  };

  const createDepartment = async () => {
    try {
      if (!departmentName || !contactPersonName || !contactPersonEmail || !contactPersonPhone.length ) {
        Swal.fire({
          title: 'All Fields are Required',
        })
        return;
      }

      if (!isEmailValid(contactPersonEmail)) {
        Swal.fire({
          title: 'All Fields are Required',
        })
        return;
      }

      if (!isPhoneNumberValid(contactPersonPhone)|| contactPersonPhone.length <10) {
        Swal.fire({
          title: 'All Fields are Required',
        })
        return;
      }
      const response = await fetch("http://3.109.98.188:3000/api/v1/departments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          department: {
            department_name: departmentName,
            contact_person_name: contactPersonName,
            contact_person_email: contactPersonEmail,
            contact_person_phone: contactPersonPhone,
            company_id: 1,
          },
        }),
      });

      if (response.ok) {
        console.log("success");
        setDepartmentName("");
        setContactPersonName("");
        setContactPersonEmail("");
        setContactPersonPhone("");
        alert("Data add sucessfully!");
        navigate("/deparment")
      } else {
        console.log("not created");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main id="main" className={`main-content ${sidebarOpen ? "shift-right" : ""}`} >
        <div className="container-fluid">
          <div className="card" id="adddepartment">
            <div>
              <main>
                <section>
                  <div>
                    <div className="popup">
                      <header className="wid">
                        <p className="addhead mt-2">Add Department</p>
                      </header>
                      <div id="data">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="#">Department Name *</label>
                            <br />
                            <input
                              type="text"
                              className="form-control"
                              value={departmentName}
                              onChange={(e) =>
                                setDepartmentName(e.target.value)
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="#">Contact Person Name *</label>
                            <br />
                            <input
                              type="text"
                              className="form-control"
                              value={contactPersonName}
                              onChange={(e) =>
                                setContactPersonName(e.target.value)
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="#">Contact Person Email *</label>
                            <br />
                            <input
                              type="email"
                              className="form-control"
                              value={contactPersonEmail}
                              onChange={(e) =>
                                setContactPersonEmail(e.target.value)
                              }
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            />
                            {formSubmitted && !contactPersonEmail && (
                              <span className="error-message">This field is required.</span>
                            )}
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="#">Contact Person Phone *</label>
                            <br />
                            <input
                              type="number"
                              className="form-control"
                              value={contactPersonPhone}
                              onChange={(e) =>
                                setContactPersonPhone(e.target.value)
                              }
                            />
                            {formSubmitted && !contactPersonPhone && (
                              <span className="error-message">This field is required.</span>
                            )}
                          </div>
                        </div>
                        <br />
                        <div className="d-flex gap-2">
                          <Link to="/deparment" className="btn btn-dark">
                            Close
                          </Link>
                          <Link

                            className="btn btn-primary"
                            onClick={createDepartment}
                          >
                            Save
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Addeparment;

