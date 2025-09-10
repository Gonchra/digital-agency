import './Hero.scss'
import Button from '@/components/Button'
import { Image } from 'minista'
import heroLogoSrc from "@/assets/images/Hero/hero-logo.png"

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__main">
          <h1 className="hero__title" aria-label="hero-title">
            <span>Digital Solutions</span> That Drive Success
          </h1>
          <div className="hero__description">
            <p>
              At DigitX, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape. From
              captivating web design to data-driven marketing strategies, we are
              committed to delivering results that exceed expectations.
            </p>
          </div>

          <div className="hero__actions">
            <div className="hero__actions-title">
              Unlock Your Digital Potential Today
            </div>
            <div className="hero__actions-buttons">
              <Button
                className="hero__actions-button"
                mode="white"
                label="Get Started"
              />
              <Button
                className="hero__actions-button"
                label="Free Consultation"
              />
            </div>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <Image src={heroLogoSrc} className="hero__image"/>
        </div>
      </div>
    </section>
  )
}
