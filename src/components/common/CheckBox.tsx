import CheckIcon from '@/assets/check.svg'

export const CheckBox = ({ checked, setChecked }) => {
  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  const checkboxStyle = checked ? 'checkedCheckBox' : 'uncheckedCheckBox'

  return (
    <label>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleCheckbox}
      />
      <div className={`displayCenter ${checkboxStyle}`}>
        {!checked || (
          <img src={CheckIcon} alt="Check Icon" className="h-3 w-3" />
        )}
      </div>
    </label>
  )
}
