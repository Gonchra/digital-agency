import './Grid.scss'
import clsx from 'clsx'

const Grid = (props) => {
  const {
    columns = 1,
    mode = "",
    children
  } = props

  return (
    <ul className={clsx("grid", columns > 1 && [`grid--${columns}`], mode && [`grid--${mode}`])}>
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid