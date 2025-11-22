import './Grid.scss'
import clsx from 'clsx'

const Grid = (props) => {
  const {
    columns = 1,
    mode = "",
    children,
    extraAttrs
  } = props

  return (
    <ul
      className={clsx("grid", columns > 1 && [`grid--${columns}`], mode && [`grid--${mode}`])}
      {...extraAttrs}
    >
      {children.map((child, index) => (
        <li
          className="grid__item"
          key={index}
          data-js-partial-hider-item=""
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid