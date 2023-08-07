import './index.css'

const Tharun = props => {
  const {user} = props
  const {capitalDisplayText, id} = user

  return (
    <option className="thar" value={id}>
      {capitalDisplayText}
    </option>
  )
}

export default Tharun
