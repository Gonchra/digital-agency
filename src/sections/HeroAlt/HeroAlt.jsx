import './HeroAlt.scss'

const HeroAlt = (props) => {
  const {
    title,
    description
  } = props

  return (
    <section className="hero-alt" aria-labelledby="hero-alt-title">
      <div className="hero-alt__inner container">
        <h1 className="hero-alt__title">
          {title}
        </h1>
        <div className="hero-alt__description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroAlt
