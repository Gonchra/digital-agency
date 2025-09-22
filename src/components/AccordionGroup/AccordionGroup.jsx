import './AccordionGroup.scss'
import clsx from 'clsx'

const AccordionGroup = (props) => {
  const { className, columns = 1, children } = props

  const itemsPerColumn = Math.ceil(children.length / columns)

  return (
    <ul className={clsx(className, "accordion-group", columns > 1 && `accordion-group--${columns}-columns`)}>
      {children.map((child, index) => (
        <li
          key={index}
          className={clsx("accordion-group__item", columns > 1 && (index + 1) % itemsPerColumn === 0 && 'accordion-group__item--last-column-item')}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default AccordionGroup
