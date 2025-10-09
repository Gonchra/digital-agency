import Section from '@/layouts/Section'
import categoriesItems from './categoriesItems'
import TabsNavigation from '@/components/Tabs/components'
import Tabs from '@/components/Tabs'
import getIdFromTitle from '@/utils/getIdFromTitle'
import CategoryItem from '@/components/CategoryItem'

const Categories = () => {
  const title = (
    <>
      Categories of <span>Services</span>
    </>
  )

  const description =
    'At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.'

  const tabsTitle = 'categories-tabs'
  const tabsNavigationId = 'categories-tabs-navigation'

  return (
    <Section title={title} titleId="categories-title" description={description}>
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={categoriesItems.map((categoriesItem) => ({
          title: categoriesItem.title,
          isActive: categoriesItem.isActive,
          iconSrc: categoriesItem.iconSrc,
          children: (
            <CategoryItem
              title={categoriesItem.title}
              {...categoriesItem.items}
            />
          ),
        }))}
      />
    </Section>
  )
}

export default Categories
