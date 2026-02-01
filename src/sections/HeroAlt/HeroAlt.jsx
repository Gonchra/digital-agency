import './HeroAlt.scss'

const HeroAlt = (props) => {
  const {
    title,
    description,
    imgSrc
  } = props

  return (
    <section className="hero-alt" aria-labelledby="hero-alt-title">
      <div className="hero-alt__inner container">
        {title && (
          <>
            <h1 className="hero-alt__title">{title}</h1>
            <div className="hero-alt__description">
              <p>{description}</p>
            </div>
          </>
        )}
        {imgSrc && (
          <img
            className="hero-alt__image"
            src={imgSrc}
            alt=""
            width={813}
            height={563}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default HeroAlt
