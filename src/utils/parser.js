// eslint-disable-next-line import/no-webpack-loader-syntax
import dict_url from '../dictionary/mandarin_words_v1.txt'


var dict_arr;
async function getDictionary () {
  if(!dict_arr){
    var dict_res = await fetch(dict_url)
    var dict = await dict_res.text()
    console.log(dict_res, dict)
    dict_arr = dict.split("\n")
  }
  return dict_arr
}


export async function parseText (text) {
  const parsedText = []
  for(var i=0; i< text.length; i++){
    var parsedSentence = await parseSentence(text[i])
    parsedText.push(parsedSentence)
  }
  return parsedText;
}

export async function parseSentence (sentence) {
  var dict = await getDictionary();
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
