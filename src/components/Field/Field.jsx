import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    iconName,
    hasFillIcon,
    placeholder,
    isRequired,
    inputMode,
    mask,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx('field', className)}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <Component
        className="field__control"
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        {...extraAttrs}
      />
    </div>
  )
}
