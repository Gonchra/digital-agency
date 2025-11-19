import './ShowcaseCard.scss'
import Badge from '@/components/Badge'
import Team from '@/components/Team'
import clsx from 'clsx'

const ShowcaseCard = (props) => {
  const { title, showcaseImg, badgeItems, projectsItems, isExpanded } = props

  return (
    <div
      className={clsx("showcase-card", isExpanded && "is-expanded")}
      data-js-expandable-content=""
    >
      <div className="showcase-card__image-wrapper">
        <img
          src={showcaseImg}
          alt="showcase project"
          className="showcase-card__image"
          width={1226}
          height={696}
          loading="lazy"
        />
      </div>
      <header className="showcase-card__header">
        <h3 className="showcase-card__header-title">{title}</h3>
        <button
          className={clsx("showcase-card__header-button", isExpanded && "is-expanded")}
          data-js-expandable-content-button=""
        >Show {isExpanded ? "Less" : "More"}</button>
      </header>
      <div className="showcase-card__badges">
        {badgeItems.map((badgeItem, index) => (
          <Badge key={index} {...badgeItem} />
        ))}
      </div>
      <div
        className="showcase-card__body"
        data-js-expandable-content-content=""
      >
        <div className="showcase-card__definition">
          <h4 className="showcase-card__title">Project Description</h4>
          <div className="showcase-card__description">
            <p>{projectsItems.description}</p>
          </div>
        </div>

        <ul className="showcase-card__list">
          <li className="showcase-card__item">
            {projectsItems.category.map(({ title, metric }) => (
              <div className="showcase-card__category" key={title}>
                <h5 className="showcase-card__category-title">{title}</h5>
                <div className="showcase-card__category-metric">{metric}</div>
              </div>
            ))}
          </li>
          <li className="showcase-card__item">
            <div className="showcase-card__technologies">
              <h5 className="showcase-card__technologies-title">
                Technologies Used
              </h5>
              <ul className="showcase-card__technologies-list">
                {projectsItems.technologies.map(({ title, imgSrc }) => (
                  <li className="showcase-card__technologies-item" key={title}>
                    <img
                      className="showcase-card__technologies-image"
                      src={imgSrc}
                      alt={title}
                      width={28}
                      height={28}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="showcase-card__item">
            <div className="showcase-card__team">
              <h5 className="showcase-card__team-title">Team Members</h5>
              <div className="showcase-card__team-list">
                {projectsItems.teamMembers.map(({ title, team }) => (
                  <Team
                    key={title}
                    title={title}
                    team={team}
                  />
                ))}
              </div>
            </div>
          </li>
          <li className="showcase-card__item">
            <div className="showcase-card__methods">
              <h5 className="showcase-card__methods-title">Methods Used</h5>
              <ul className="showcase-card__methods-list">
                {projectsItems.methods.map((title) => (
                  <li className="showcase-card__methods-item" key={title}>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShowcaseCard
