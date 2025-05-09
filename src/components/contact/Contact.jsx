import './Contact.scss';
import emailjs from 'emailjs-com';

const Contact = () => {
  return (
    <div id="contact">
    <div className="container contact-form">
      
      <form method="post"action="https://formspree.io/f/movdjdap">
        <h3>Drop Me a Message</h3>
        <div className="row">
          <div className="col-md-6 one">
            <div className="form-group">
              <input required
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Your Name *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input required
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Your Email *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Your Phone Number"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea required
                name="txtMsg"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: '100%', height: '150px' }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>

    </div>
  );
};

export default Contact;
