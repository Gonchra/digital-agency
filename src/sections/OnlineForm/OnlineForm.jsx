import './OnlineForm.scss'
import Section from '@/layouts/Section'
import getIdFromTitle from '@/utils/getIdFromTitle'
import Field from '@/components/Field'
import Select from '@/components/Select'
import Button from '@/components/Button'
import Grid from '@/components/Grid'
import OnlineCard from '@/components/OnlineCard'

const OnlineForm = () => {
  const title = 'Online Inquiry Form'
  const description =
    "Please fill in the following details, and we'll get back to you within 24 hours."

  const servicesItems = [
    { value: 'Service 1', isSelected: true },
    { value: 'Service 2' },
    { value: 'Service 3' },
  ]

  const subjectItems = [
    { value: 'Subject 1' },
    { value: 'Subject 2', isSelected: true },
    { value: 'Subject 3' },
  ]

  const cardItems = [
    {
      title: 'Our Response',
      description:
        'We understand the importance of timely responses, and our team is committed to addressing your inquiries promptly. Whether you have a specific project in mind, need advice on digital strategies, or want to explore partnership opportunities, we are here to assist you at every step.',
      iconSrc: './src/assets/icons/clock.svg',
    },
    {
      title: 'Privacy Assurance',
      description:
        'At DigitX, we prioritize your privacy and protect your personal information in compliance with data protection regulations. Rest assured that your details will only be used for the purpose of addressing your inquiries and will not be shared with third parties without your consent',
      iconSrc: './src/assets/icons/privacy.svg',
    },
  ]

  return (
    <Section
      title={title}
      titleId={getIdFromTitle(title)}
      description={description}
      isSmallFontSize
    >
      <form className="online-form">
        <div className="online-form__inner">
          <Field
            className="online-form__field"
            label="Name"
            placeholder="Ivan Ivanov"
            isRequired
          />
          <Field
            className="online-form__field"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            isRequired
          />
          <Field
            className="online-form__field"
            label="Phone Number"
            type="tel"
            placeholder="(111) 111-11-11"
            inputMode="tel"
            mask="(000) 000-00-00"
            isRequired
          />
          <Select
            label="Select Service"
            buttonClassName="online-form__field-button"
            isLabelHidden={false}
            options={servicesItems}
          />
          <Select
            label="Subject"
            buttonClassName="online-form__field-button"
            isLabelHidden={false}
            options={subjectItems}
          />
          <Field
            className="online-form__field"
            label="Company / Organization Name"
            placeholder="Enter Name"
            isRequired
          />
          <Field
            className="online-form__field"
            label="Message"
            type="textarea"
            placeholder="Enter your Message"
            isRequired
          />
        </div>
        <Button
          className="online-form__button"
          type="submit"
          label="Send your Inquiry"
          iconName="arrow-white-right"
          hasFillIcon
          iconPosition="after"
        />
      </form>
      <Grid columns={2}>
        {cardItems.map((cardItems, index) => (
          <OnlineCard
            key={crypto?.randomUUID() ?? index}
            {...cardItems}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default OnlineForm
