import { useState } from "react";

export default function Register({ visible = true, onClose }) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    webType: "",
    description: "",
    success: false,  
  });

  const handleChange = (e) => {
    const field = e.target.id.replace(/[0-9]/g, "");
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://10.67.97.244:8000/reqst", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, success: true }));

        setTimeout(() => {
          alert("Data submitted successfully!");
          
          setFormData({
            name: "",
            phonenumber: "",
            email: "",
            webType: "",
            description: "",
            success: false,
          });

          setLoading(false);
        }, 1200);

        return;
      } else {
        alert("Server error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="back">
       
    <div className = "flex-container">
      <div className="reg-box show">
        {onClose && (
          <div className="close-btn1">
            <button onClick={onClose}>
              <div id="closebtn"></div>
            </button>
          </div>
        )}

        <h2 id="type-cont1">Web Registration Form</h2>
        <hr id="border1" />

        <div className="point1">
          <form id="form-list1" onSubmit={handleSubmit}>

            <div className="form-field1">
              <label htmlFor="name1">Your Name (with initial)</label>
              <input
                type="text"
                id="name1"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field1">
              <label htmlFor="phonenumber1">Phone Number</label>
              <input
                type="number"
                id="phonenumber1"
                placeholder="Enter your phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field1">
              <label htmlFor="email1">E-mail Address</label>
              <input
                type="email"
                id="email1"
                placeholder="Enter your e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field1">
              <label htmlFor="webType1">Website Type</label>
              <select
                id="webType1"
                value={formData.webType}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option>Business Website</option>
                <option>E-Commerce Website</option>
                <option>College Website</option>
                 <option>School Website</option>
              </select>
            </div>

            <div className="form-field1">
              <label htmlFor="description1">Description</label>
              <textarea
                id="description1"
                placeholder="Write a short description..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn1" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </div>
      {loading && (
        <div className="popup-overlay">
          <div className="popup-box">
            {!formData.success ? (
              <>
                <div className="loader"></div>
                <p>Processing your request...</p>
              </>
            ) : (
              <>
                <div className="success-check">✓</div>
                <p>Request Submitted Successfully!</p>
              </>
            )}
          </div>
        </div>
      )}

<div className = "main-thing1">
        <div className="main-thing">
        <div className="main">
          <h2 id="hding">Web requesting platform</h2>
          <p id="pding">
            This is a web-requesting platform where people who wants their <br /> website can easily request one and <br />receive a responsive website.
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}
