// Write your code here
import './index.css'

const Message = props => {
  const {header} = props

  return <h1 className="header-style">{header}</h1>
}

export default Message
