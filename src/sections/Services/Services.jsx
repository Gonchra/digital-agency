import Section from '@/layouts/Section'
import Grid from '@/components/Grid'

const Services = () => {
  const title = (
    <>
      Our <span>Services</span>
    </>
  )

  const description = "At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing."

  return (
    <Section
      title={title}
      titleId="services-title"
      description={description}
    >
      <Grid columns={2}>

      </Grid>
    </Section>
  )
}

export default Services