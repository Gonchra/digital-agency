import './Banner.scss'
import Button from '@/components/Button'
import bannerLogo from "@/assets/images/Banner/banner-logo.png"

const Banner = () => {
  const titleId = "banner-title"

  return (
    <section
      className="banner container"
      aria-labelledby={titleId}
    >
      <div className="banner__inner">
        <div className="banner__body">
          <h2
            className="banner__title"
            id={titleId}
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <div className="banner__description">
            <p>Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.</p>
          </div>
        </div>
        <div className="banner__actions">
          <h3 className="banner__actions-title h6">
            Unlock Your Digital Potential Today
          </h3>
          <div className="banner__actions-buttons">
            <Button
              className="banner__actions-button"
              label="Get Started"
              mode="white"
            />
            <Button
              className="banner__actions-button"
              label="Free Consultation"
            />
          </div>
        </div>
        <div className="banner__image-wrapper">
          <img
            src={bannerLogo}
            alt=""
            className="banner__image"
            width={580}
            height={296}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner