import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import ServeCard from '@/components/ServeCard'

const Services = () => {
  const servicesItems = [
    {
      title: "Web Design",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
      imgSrc: "/serve/3.svg",
      price: "1,500",
    },
    {
      title: "Web Development",
      description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
      imgSrc: "/serve/1.svg",
      price: "1,800",
    },
    {
      title: "Mobile App Development",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build dynamic and scalable websites that cater to your business objectives.",
      imgSrc: "/serve/2.svg",
      price: "2,500",
    },
    {
      title: "Digital Marketing",
      description: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility, attract targeted traffic, and boost conversions. From SEO and PPC campaigns to social media marketing, we've got your digital marketing needs covered.",
      imgSrc: "/serve/4.svg",
      price: "1,200",
    },
  ]

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
        {servicesItems.map((servicesItem, index) => (
          <ServeCard
            key={index}
            {...servicesItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Services