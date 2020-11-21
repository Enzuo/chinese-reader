// eslint-disable-next-line import/no-webpack-loader-syntax
import dict from '../dictionary/mandarin_words.json'


export function parseText (text) {
  const parsedText = []
  for(var i=0; i< text.length; i++){
    var parsedSentence = parseSentence(text[i])
    parsedText.push(parsedSentence)
  }
  return parsedText;
}

export function parseSentence (sentence) {
  var parsedSentence = []
  var maxChunkSize = 5
  var chunkSize
  for(var i=0; i<sentence.length; i += chunkSize){
    chunkSize = maxChunkSize
    var chunk
    var isFound = false
    while(!isFound && chunkSize > 1){
      chunk = sentence.substr(i, chunkSize)
      chunkSize = chunk.length // for the end of the sentence take maximum chunck size
      console.log('lookingFor chunk in dictionary', chunk, chunkSize)
      var index = dict.findIndex(entry => entry === chunk)
      if(index >= 0){
        isFound = true
      }
      else {
        chunkSize--
      }
    }
    chunk = sentence.substr(i, chunkSize)
    parsedSentence.push(chunk)
  }
  console.log(parsedSentence)
}

export default { parseText, parseSentence }
