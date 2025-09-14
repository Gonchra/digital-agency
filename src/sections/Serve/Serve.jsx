import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import ServeCard from '@/components/ServeCard'

const Serve = () => {
  const serveItems = [
    {
      title: "Web Development",
      description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.",
      imgSrc: "/serve/1.svg",
    },
    {
      title: "Mobile App Development",
      description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
      imgSrc: "/serve/2.svg",
    },
    {
      title: "Web Design",
      description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
      imgSrc: "/serve/3.svg",
    },
    {
      title: "Digital Marketing",
      description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
      imgSrc: "/serve/4.svg",
    },
  ]

  const title = (
    <>
      Our <span>Services</span>
    </>
  )

  const description = "Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."

  return (
    <Section
      title={title}
      titleId={"serve-title"}
      description={description}
    >
      <Grid columns={2}>
        {serveItems.map((serveItem, index) => (
          <ServeCard
            key={index}
            {...serveItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Serve