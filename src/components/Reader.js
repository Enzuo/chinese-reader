import {parseText} from '../utils/parser'


function Reader (props) {
  parseText(props.text)


  return (
    <div>{props.text}</div>
  )
}



export default Reader
