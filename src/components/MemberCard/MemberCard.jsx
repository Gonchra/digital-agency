import './MemberCard.scss'
import Socials from '@/components/Socials'

const MemberCard = (props) => {
  const {avatar, name, jobTitle, socials} = props

  return (
    <div className="member-card">
      <div className="member-card__body">
        <div className="member-card__image-wrapper">
          <img
            src={avatar}
            alt=""
            width={80}
            height={80}
            className="member-card__image"
            loading="lazy"
          />
        </div>
        <h3 className="member-card__title">
          {name}
        </h3>
        <div className="member-card__job-title">
          {jobTitle}
        </div>
      </div>

      <footer className="member-card__footer">
        <Socials
          className="member-card__soc1als"
          links={socials}
        />
      </footer>
    </div>
  )
}

export default MemberCard