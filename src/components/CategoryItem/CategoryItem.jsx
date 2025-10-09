import './CategoryItem.scss'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import Table from '@/components/Table'

const CategoryItem = (props) => {
  const {
    title,
    description,
    featuresItems = [],
    processDescription,
    processItems = [],
    portfolioDescription,
    portfolioItems = [],
    projectsDescription,
    projectsItems = [],
  } = props

  const headCells = [
    {
      children: 'Project Name',
      width: '33.33%',
    },
    {
      children: 'Industry',
      width: '33.33%',
    },
    {
      children: 'Website URL',
      width: '33.33%',
    },
  ]

  const rows = [
    {
      cells: [
        'GlobalTech Solutions',
        'E-commerce',
        'www.globaltechsolutions.com',
      ],
    },
    {
      cells: [
        'GreenEarth Eco Store',
        'Design Agency',
        'www.greeneartgecostore.com',
      ],
    },
    {
      cells: ['TechGuru Inc.', 'Technology', 'www.techguruinc.com'],
    },
  ]

  return (
    <div className="category-item">
      <header className="category-item__header">
        <h3 className="category-item__title">{title}</h3>
        <div className="category-item__description">
          <p>{description}</p>
        </div>
      </header>

      <ul className="category-item__list">
        <li className="category-item__item">
          <header className="category-item__item-header">
            <h4 className="category-item__item-title">Key Features</h4>
          </header>

          <Grid columns={2} mode="bordered">
            {featuresItems.map(({ title, description }, index) => (
              <div key={index} className="category-item__item-cell">
                <h5 className="category-item__item-cell-title">{title}</h5>
                <div className="category-item__item-cell-description">
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </Grid>
        </li>
        <li className="category-item__item">
          <header className="category-item__item-header">
            <h4 className="category-item__item-title">
              <h4 className="category-item__item-title">Design Process</h4>
              <div className="category-item__item-description">
                <p>{processDescription}</p>
              </div>
            </h4>
          </header>

          <Grid columns={2} mode="bordered">
            {processItems.map(({ title, description }, index) => (
              <div key={index} className="category-item__item-cell">
                <h5 className="category-item__item-cell-title">{title}</h5>
                <div className="category-item__item-cell-description">
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </Grid>
        </li>

        <li className="category-item__item">
          <header className="category-item__item-header">
            <h4 className="category-item__item-title">{title} Portfolio</h4>
            <div className="category-item__item-description">
              <p>{portfolioDescription}</p>
            </div>
          </header>

          <div className="category-item__item-portfolio">
            <div className="category-item__item-image-wrapper">
              {portfolioItems.map((imgSrc, index) => (
                <img
                  key={index}
                  className="category-item__item-image"
                  src={imgSrc}
                  alt=""
                  width={534}
                  height={326}
                  loading="lazy"
                />
              ))}
              <Button
                className="category-item__item-button"
                href="/projects"
                label="View All Projects"
                mode="transparent"
                iconName="arrow-white-right"
                iconPosition="after"
                hasFillIcon
              />
            </div>
          </div>
        </li>
        <li className="category-item__item">
          <header className="category-item__item-header">
            <h4 className="category-item__item-title">
              Our {title} Competed Projects
            </h4>
            <div className="category-item__item-description">
              <p>{projectsDescription}</p>
            </div>
          </header>

          <Table
            className="category-item__item-table hidden-tablet"
            headCells={headCells}
            rows={rows}
          />

          <div className="visible-tablet">
            <div className="category-item__item-projects">
              {projectsItems.map(({ name, industry, url }, index) => (
                <div className="category-item__item-project">
                  <div className="category-item__item-project-cell">
                    <h5 className="category-item__item-project-title">
                      Project Name
                    </h5>
                    <div className="category-item__item-project-subtitle">
                      {name}
                    </div>
                  </div>
                  <div className="category-item__item-project-cell">
                    <h5 className="category-item__item-project-title">
                      Industry
                    </h5>
                    <div className="category-item__item-project-subtitle">
                      {industry}
                    </div>
                  </div>
                  <div className="category-item__item-project-cell">
                    <h5 className="category-item__item-project-title">
                      Website URL
                    </h5>
                    <div className="category-item__item-project-subtitle">
                      {url}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CategoryItem
