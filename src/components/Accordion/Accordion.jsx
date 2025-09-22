import './Accordion.scss'
import clsx from 'clsx'

const Accordion = (props) => {
  const {
    title,
    titleLevelClassName = "h5",
    id,
    name,
    isOpen,
    children,
  } = props

  return (
    <div className="accordion">
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 className={clsx("accordion__title", titleLevelClassName)}>
            <span role="term" aria-details={id}>
              {title}
            </span>
          </h3>
        </summary>
      </details>
      <div
        className="accordion__content"
        id={id}
        role="definition"
      >
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion