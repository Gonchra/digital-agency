import './Badge.scss'

const Badge = (props) => {
  const {imgSrc, description} = props

  return (
    <div className="badge">
      <div className="badge__image-wrapper">
        <img
          className="badge__image"
          src={imgSrc}
          alt=""
          width={26}
          height={26}
          loading="lazy"
        />
      </div>
      {description}
    </div>
  )
}

export default Badge