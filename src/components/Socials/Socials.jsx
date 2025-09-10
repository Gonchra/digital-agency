import './Socials.scss'
import clsx from "clsx";
import Button from "@/components/Button";

const Socials = (props) => {
  const {
    className,
    links = []
  } = props

  return (
    <div className={clsx(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li key={index} className="soc1als__item">
            <Button
              className='soc1als__link'
              href="/"
              target="_blank"
              mode="gradient"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials