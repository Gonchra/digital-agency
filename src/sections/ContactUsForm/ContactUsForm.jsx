import './ContactUsForm.scss'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Section from '@/layouts/Section'
import getIdFromTitle from '@/utils/getIdFromTitle'

const ContactUsForm = (props) => {
  const { title, contactItems, isEmailForm } = props

  const FormIcon = isEmailForm ? (
    <Icon name="mail" className="contact-us-form__icon" />
  ) : (
    <Icon name="tel" className="contact-us-form__icon" />
  )

  return (
    <Section title={title} titleId={getIdFromTitle(title)} isSmallFontSize>
      <form className="contact-us-form">
        <div className="contact-us-form__inner container">
          <ul className="contact-us-form__list">
            {contactItems.map(({ contactTitle, contact }, index) => (
              <li
                key={crypto?.randomUUID() ?? index}
                className="contact-us-form__item"
              >
                <h3 className="contact-us-form__subtitle">{contactTitle}</h3>
                <div className="contact-us-form__field">
                  <div className="contact-us-form__label">
                    {FormIcon} {contact}
                  </div>
                  <Button
                    className="contact-us-form__button"
                    href={isEmailForm ? `mailto:${contact}` : `tel:${contact}`}
                    iconName="arrow-white-right"
                    hasFillIcon
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </Section>
  )
}

export default ContactUsForm
