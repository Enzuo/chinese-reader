// eslint-disable-next-line import/no-webpack-loader-syntax
import dict from '../dictionary/mandarin_words.json'


export function parseText (text) {
  const parsedText = []
  var sentences = []
  if(typeof text === 'string'){
    sentences = text.split(/([.|\n|。|,|，])/g)
  }
  for(var i=0; i< sentences.length; i++){
    var st = sentences[i];
    if(st === '.' || st === '\n' || st === '。'|| st  === ','|| st === '，'){
      parsedText.push(st)
      continue
    }
    var parsedSentence = parseSentence(st)
    parsedText.push(parsedSentence)
  }
  return parsedText;
}

export function splitSentences (text) {
  // const sentences = text.split(/([.|\n|。|,|，])/g)
  const sentences = []
  var previousIndex = 0
  for(var index=previousIndex; index<text.length; index++){
    var endSentenceFound = text[index].match(/\.|\n|。|,|，/)
    if(endSentenceFound){
      // several end sentence marker following each others
      if(previousIndex === index && index !== 0){
        sentences[sentences.length-1] += text.slice(previousIndex, index+1)
      }
      else {
        sentences.push(text.slice(previousIndex, index+1))
      }
      previousIndex = index+1
    }
  }
  return sentences
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
      // chunkSize = chunk.length // for the end of the sentence take maximum chunck size // infinit loop
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

export default { parseText, splitSentences, parseSentence }
