import {useState} from 'react';
// Import your CSS file

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, message} = formData;
    const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:evaaviationacademy@gmail.com, evaaviationimportexport@gmail.com?subject=Enquiry&body=${encodeURIComponent(
      emailContent
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="enquiry-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Enquiry;
