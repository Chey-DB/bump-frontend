import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; // Import the styles.css file
import { useNavigate } from "react-router";
import { useAuth } from "../../Context";

const SettingsForm = ({ onFormSubmit }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    currentWeek: "",
    dueDate: "",
    relationshipStatus: "",
    about: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://bump-backend.onrender.com/settings",
        formData,
        { withCredentials: true }
      );
      // onFormSubmit(formData);
      if (response.data) {
        navigate("/dashboard");
      } else {
        console.log("Register failed");
      }
      // Reset form data
      setFormData({
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postcode: "",
        currentWeek: "",
        dueDate: "",
        relationshipStatus: "",
        about: "",
      });

      // Display success message or perform other actions
      console.log("Form submitted successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="settings-form-wrapper">
      <div className="settings-form-container">
        <form className="settings-form" onSubmit={handleSubmit}>
          <div>
            <h3>
              Please fill out this form so we can customise this application to
              you.
            </h3>
          </div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address Line 1:
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
          </label>
          <label>
            Address Line 2:
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Postcode:
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
          </label>
          <label>
            Current Week of Pregnancy:
            <input
              type="number"
              name="currentWeek"
              value={formData.currentWeek}
              onChange={handleChange}
            />
          </label>
          <label>
            Due Date of Pregnancy:
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Relationship Status:
            <select
              name="relationshipStatus"
              value={formData.relationshipStatus}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Single">Single</option>
              <option value="In a Relationship">In a Relationship</option>
              <option value="Engaged">Engaged</option>
              <option value="Married">Married</option>
            </select>
          </label>
          <label>
            About:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
            ></textarea>
          </label>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
