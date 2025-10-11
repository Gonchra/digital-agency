import './StoryCard.scss'
import Badge from '@/components/Badge'

const StoryCard = (props) => {
  const { title, imgSrc, badgeItems, challenge, solution } = props

  return (
    <div className="story-card">
      <header className="story-card__header">
        <span className="story-card__icon-wrapper">
          <img
            className="story-card__icon"
            src={imgSrc}
            alt=""
            width={34}
            height={34}
            loading="lazy"
          />
        </span>
        <h3 className="story-card__title">{title}</h3>
      </header>

      <div className="story-card__badges">
        {badgeItems.map((badgeItem, index) => (
          <Badge key={index} {...badgeItem} />
        ))}
      </div>

      <div className="story-card__body">
        <div className="story-card__item">
          <h4 className="story-card__item-title">Challenge</h4>

          <div className="story-card__item-description">
            <p>{challenge}</p>
          </div>
        </div>

        <div className="story-card__item">
          <h4 className="story-card__item-title">Solution</h4>

          <div className="story-card__item-description">
            <p>{solution}</p>
          </div>

          <a href="/" className="story-card__item-link">
            Read Full Story
          </a>
        </div>
      </div>
    </div>
  )
}

export default StoryCard
