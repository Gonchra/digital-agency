import "./OnlineForm.scss"
import Section from '@/layouts/Section'
import getIdFromTitle from '@/utils/getIdFromTitle'
import Field from '@/components/Field'
import Select from '@/components/Select'
import Button from '@/components/Button'

const OnlineForm = () => {

  const title = 'Online Inquiry Form'
  const description =
    "Please fill in the following details, and we'll get back to you within 24 hours."

  const servicesItems = [
    {value: "Service 1", isSelected: true},
    {value: "Service 2"},
    {value: "Service 3"},
  ]

  const subjectItems = [
    {value: "Subject 1"},
    {value: "Subject 2", isSelected: true},
    {value: "Subject 3"},
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
    </Section>
  )
}

export default OnlineForm