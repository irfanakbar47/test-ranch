"use client";

import { useState } from "react";
import { SectionLayoutV1, InputField, Button, Modal } from "@/components";
import { formatPhoneNumber } from '@/utils/formatUtils';
import { validateEmail, validatePhone } from "@/utils/validations";
import { BiBuildings } from "react-icons/bi";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    timezone: "",
  });
  const [feedback, setFeedback] = useState({
    message: "",
    isError: false
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    let { value } = e.target;
    value = value.trim();

    if (field === "phone") {
      value = formatPhoneNumber(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    let error = "";
    switch (field) {
      case "firstName":
        error = value ? "" : "First name is required.";
        break;
      case "lastName":
        error = value ? "" : "Last name is required.";
        break;
      case "email":
        error = value ? (validateEmail(value) ? "" : "Email is invalid.") : "Email is required.";
        break;
      case "phone":
        error = value ? (validatePhone(value) ? "" : "Phone number is invalid.") : "Phone number is required.";
        break;
      case "company":
        error = value ? "" : "Company name is required.";
        break;
      case "message":
        error = value ? "" : "Message is required.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const { firstName, lastName, email, phone, company, message } = formData;

    const phoneError = phone ? (validatePhone(phone) ? "" : "Phone number is invalid.") : "Phone number is required.";
    const emailError = email ? (validateEmail(email) ? "" : "Email is invalid.") : "Email is required.";
    const newErrors = {
      firstName: firstName ? "" : "First name is required.",
      lastName: lastName ? "" : "Last name is required.",
      email: emailError,
      phone: phoneError,
      company: company ? "" : "Company name is required.",
      message: message ? "" : "Message is required.",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setLoading(true);

    const setTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setFormData((prevData) => ({ ...prevData, timezone: setTimezone }));

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback({ message: "Email sent successfully!", isError: false });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          timezone: ""
        });
      } else {
        setFeedback({ message: "Failed to send email.", isError: true });
      }
    } catch (error) {
      setFeedback({ message: "An error occurred while submitting the form.", isError: true });
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <SectionLayoutV1
      id={"enterprise_contact"}
      title={"Partner With Us"}
      description={"Please fill out this form and we'll get back to you as soon as possible."}
      containerStyle={"bg-blue-primary2 text-blue-primary1"}
    >
      <section id={"enterprise_contact"} className="maxResources bg-blue-primary2 flex flex-col mb-[2em] gap-y-10 px-3 md:px-5">
        <div className="flex flex-col maxForm gap-y-16 text-blue-primary1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pr-3 sm:pr-0 md:pr-5 lg:pr-0"
          >
            <div className="flex gap-x-5 flex-wrap gap-y-3 mb-3 sm:mb-10 sm:flex-nowrap">
              <InputField
                id="first_name"
                label="First Name"
                type="text"
                icon={<FaUser />}
                value={formData.firstName}
                errorMessage={errors.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <InputField
                id="last_name"
                label="Last Name"
                type="text"
                icon={<FaUser />}
                value={formData.lastName}
                errorMessage={errors.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </div>
            <div className="flex gap-x-5 flex-wrap gap-y-3 mb-3 sm:mb-10 sm:flex-nowrap">
              <InputField
                id="email"
                label="Email Address"
                type="text"
                icon={<IoMdMail size={25} />}
                value={formData.email}
                errorMessage={errors.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <InputField
                id="phone"
                label="Phone Number"
                type="text"
                icon={<FaPhoneAlt />}
                isPhone
                value={formData.phone}
                errorMessage={errors.phone}
                onChange={(e) => handleInputChange(e, "phone")}
              />
            </div>
            <div className="flex gap-x-5 mb-3 sm:mb-10">
              <InputField
                id="company"
                label="Company"
                type="text"
                icon={<BiBuildings size={25} />}
                value={formData.company}
                errorMessage={errors.company}
                onChange={(e) => handleInputChange(e, "company")}
              />
            </div>
            <div className="flex gap-x-5 mb-16">
              <InputField
                id="message"
                label="Message"
                type="textarea"
                icon={<MdMessage size={25} />}
                value={formData.message}
                errorMessage={errors.message}
                onChange={(e) => handleInputChange(e, "message")}
              />
            </div>
            <div className="flex justify-end gap-x-5">
              <Button
                type="submit"
                label={loading ? "Submitting..." : "Submit"}
                customStyle={`!px-10 ${loading ? "cursor-not-allowed" : ""}`}
                disabled={loading}
              />
            </div>
          </form>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <p className={`text-center font-bold text-xl ${feedback.isError ? "text-red-600" : "text-green-600"}`}>
              {feedback.message}
            </p>
          </Modal>
        )}
      </section>
    </SectionLayoutV1>
  );
}
