// eslint-disable-next-line import/no-webpack-loader-syntax
import dict from '../dictionary/mandarin_words_v1.txt'

const dict_arr = dict.split("\n")

export function parseText (text) {
  for(var i=0; i< text.length; i++){
    parseSentence(text[i])
  }
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
      console.log('lookingFor chunk in dictionary', chunk, chunkSize)
      var index = dict_arr.findIndex(entry => entry === chunk)
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
