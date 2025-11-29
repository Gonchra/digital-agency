import './Extra.scss'
import Grid from '@/components/Grid'
import ServeCard from '@/components/ServeCard'

const Extra = () => {
  const extraItems = [
    {
      title: "Careers At DigitX",
      description: "At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
      imgSrc: "/extra/1.svg",
    },
    {
      title: "Contact Us",
      description: "At DigitX, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team. Connect with us through any of the channels below, and we'll be delighted to assist you on your digital journey.",
      imgSrc: "/extra/2.svg",
    },
  ]

  return (
    <section className="extra">
      <div className="extra__inner container">
        <h2 className="extra__title">
          See This Pages
        </h2>

        <Grid columns={2}>
          {extraItems.map((extraItem, index) => (
            <ServeCard
              isExtra
              key={index}
              {...extraItem}
            />
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default Extra