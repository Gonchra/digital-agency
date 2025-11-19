import './Team.scss'

const Team = (props) => {
  const { title, team = [] } = props
  const teamFormatted = team.map(({ name }) => name).join(', ')

  return (
    <div className="team">
      <h6 className="team__title">{title}</h6>
      <div className="team__list">
        <div className="team__avatars">
          {team.map(({ imgSrc }) => (
            <img
              className="team__avatar"
              key={imgSrc}
              src={imgSrc}
              alt=""
              width={60}
              height={60}
              loading="lazy"
            />
          ))}
        </div>
        <div className="team__names">
          {teamFormatted}
        </div>
      </div>
    </div>
  )
}

export default Team
