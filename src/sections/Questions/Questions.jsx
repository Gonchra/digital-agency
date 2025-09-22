import Section from '@/layouts/Section'
import Field from '@/components/Field'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'

const Questions = () => {
  const questionsItems = [
    "How long does it take to complete a web development project?",
    "Can you handle large-scale mobile app development projects?",
    "Do you offer maintenance services for websites and apps developed by other companies?",
    "How do you ensure the security of user data in your web applications?",
    "Can you create a responsive website design that looks great on all devices?",
    "What digital marketing strategies do you employ to drive website traffic?",
    "Can you integrate third-party APIs into our mobile app?",
    "How do you ensure cross-platform compatibility for mobile apps?",
  ]

  const title = (
    <>
      Frequently <span>Asked Questions</span>
    </>
  )

  const description = "Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions."

  const field = (
    <Field
      label="Search"
      type="search"
      placeholder="Search"
      className="section__field"
    />
  )

  return (
    <Section
      title={title}
      titleId="quetions-title"
      description={description}
      actions={field}
    >
      <AccordionGroup columns={2}>
        {questionsItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions