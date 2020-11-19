import {textParse} from '../utils/parser'


function Reader (props) {
  textParse(props.text)


  return (
    <div>{props.text}</div>
  )
}



export default Reader
