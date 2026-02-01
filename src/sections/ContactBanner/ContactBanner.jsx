import "./ContactBanner.scss"

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner__inner container">
        <h2 className="contact-banner__title">
          Get in <span>Touch with Us Today!</span>
        </h2>
        <div className="contact-banner__description">
          At DigitX, we value your inquiries, feedback, and collaborations.
          Whether you are interested in our digital services, have questions
          about our projects, or want to explore potential partnerships, we
          encourage you to reach out to our dedicated team. Connect with us
          through any of the channels below, and we'll be delighted to assist
          you on your digital journey.
        </div>

        <div className="contact-banner__badge">
          Feel free to contact us through any of the following channels
        </div>
      </div>
    </section>
  )
}

export default ContactBanner