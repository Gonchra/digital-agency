import './TabsNavigation.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'

const TabsNavigation = (props) => {
  const { className, id, title, items = [] } = props

  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={clsx(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>
      {items.map((item, index) => {
        const { buttonId, contentId } = getTabsElementsIdsFromTitle(item.title)

        return (
          <div
            className={clsx(
              'tabs-navigation__button',
              item.isActive && 'is-active'
            )}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            <img
              src={item.iconSrc}
              alt=""
              width={28}
              height={28}
              loading="lazy"
            />
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

export default TabsNavigation
