// eslint-disable-next-line import/no-webpack-loader-syntax
import dict from '!!raw-loader!../dictionary/mandarin_words_v1.txt'



function Reader (props) {
  textParse(props.text)


  return (
    <div>{props.text}</div>
  )
}

function textParse (text) {
  for(var i=0; i< text.length; i++){
    sentenceParse(text[i])
  }
}

function sentenceParse (sentence) {
  var chunkSize = 5;
  var chunk = chunkSize;
  for(var i=0; i<sentence.length; i += chunk){

  }
  console.log(sentence)
}

export default Reader
