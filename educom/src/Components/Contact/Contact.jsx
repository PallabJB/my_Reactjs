import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1be7e5e1-60b0-47a9-bff2-eb9d3811c276");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' >
        <div className="contact-col">
          <h3>Send Us a Message <img src={msg_icon} ></img></h3>
          <p>This institute stands out as a beacon of excellence due to its unwavering commitment to fostering academic and personal growth. With a distinguished faculty comprising leading experts in various fields, students receive top-tier education and mentorship. The state-of-the-art facilities provide an ideal environment for learning and research, ensuring that students have access to the latest tools and technologies.</p>
          <ul>
            <li><img src={mail_icon} ></img>Contact-pallabjyotibora75@gmail.com</li>
            <li><img src={phone_icon} ></img>  +91-9123445545</li>
            <li><img src={location_icon} ></img>69 Massachusetts Ave, Cambridge<br/>MA 02139, United States</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required></input>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required></input>
            <label>Write your message here.</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt='' ></img> </button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact