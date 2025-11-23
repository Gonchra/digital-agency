import './OrderedList.scss'
import Icon from '@/components/Icon'

const OrderedList = (props) => {
  const {
    items = []
  } = props

  return (
    <ol className="ordered-list">
      {items.map(({title, description, date}, index) => (
        <li
          key={index}
          className="ordered-list__item"
        >
          <div className="ordered-list__item-inner">
            <header className="ordered-list__item-header">
              <h3 className="ordered-list__item-title">
                {title}
              </h3>
              <div className="ordered-list__item-date">
                <Icon
                  name="calendar"
                />
                {date}
              </div>
            </header>
            <div className="ordered-list__item-body">
              Description
              <div className="ordered-list__item-description">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default OrderedList