import './Badge.scss'
import clsx from 'clsx'

const Badge = (props) => {
  const {imgSrc, description, className} = props

  return (
    <div className={clsx("badge", className)}>
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