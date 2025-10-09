import './Tabs.scss'
import TabsNavigation from '@/components/Tabs/components'
import clsx from 'clsx'
import getTabsElementsIdsFromTitle
  from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'

const Tabs = (props) => {
  const {
    className,
    title,
    iconSrc,
    items = [],
    navigationTargetElementId = null,
  } = props

  const tabsTitle = "categories-tabs"
  const tabsNavigationId = "categories-tabs-navigation"

  return (
    <div
      className={clsx(className, "tabs")}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId
      })}
    >
      <TabsNavigation
        id={tabsNavigationId}
        title={tabsTitle}
        items={items}
      />
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive,
          } = item

          const {
            buttonId,
            contentId
          } = getTabsElementsIdsFromTitle(title)

          return (
            <div
              className={clsx("tabs__content", isActive && "is-active")}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default Tabs