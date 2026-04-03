import './ListingCard.scss'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import clsx from 'clsx'

const ListingCard = (props) => {
  const {
    title,
    location,
    isExpanded,
    salary,
    experience,
    skills,
    description,
    applicationDeadline,
    responsibilities,
  } = props

  return (
    <div
      className={clsx('listing-card', isExpanded && 'is-expanded')}
      data-js-expandable-content=""
    >
      <div className="listing-card__inner">
        <header className="listing-card__header">
          <div className="listing-card__header-inner">
            <div className="listing-card__header-details">
              <div className="listing-card__image-wrapper">
                <img
                  className="listing-card__image"
                  src="/listing/listing.svg"
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className="listing-card__title-wrapper">
                <h3 className="listing-card__title">{title}</h3>
                <h4 className="listing-card__location">{location}</h4>
              </div>
            </div>
            <Button
              label="Apply Now"
              mode="icon-bg"
              iconName="arrow-white-right"
              hasFillIcon
              iconPosition="after"
            />
          </div>
          <ul className="listing-card__list">
            <li className="listing-card__item">
              <img
                className="listing-card__item-image"
                src="/listing/1.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
              />
              Salary - {salary}
            </li>
            <li className="listing-card__item">
              <img
                src="/listing/2.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
              />
              Experience - {experience}
            </li>
            <li className="listing-card__item">
              <img
                src="/listing/3.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
              />
              Skills - {skills}
            </li>
          </ul>
        </header>
        <div
          className={clsx('listing-card__body', isExpanded && 'is-expanded')}
          data-js-expandable-content-content=""
        >
          <div className="listing-card__details">
            <h3 className="listing-card__details-title">Job Description</h3>
            <div className="listing-card__details-description">
              <p>{description}</p>
            </div>
            <Badge
              imgSrc="/listing/deadline.svg"
              description={`Application Deadline: ${applicationDeadline}`}
              className="listing-card__details-deadline"
            />
          </div>
          <div className="listing-card__responsibilities">
            <h3 className="listing-card__responsibilities-title">
              Responsibilities
            </h3>
            <ul className="listing-card__responsibilities-list">
              {responsibilities.map((item, index) => (
                <li
                  className="listing-card__responsibilities-item"
                  key={crypto?.randomUUID() ?? index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        className={clsx('listing-card__button', isExpanded && 'is-expanded')}
        data-js-expandable-content-button=""
      >
        Show {isExpanded ? 'Less' : 'More'}
      </button>
    </div>
  )
}

export default ListingCard
