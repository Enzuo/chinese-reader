// eslint-disable-next-line import/no-webpack-loader-syntax
import dict from '../dictionary/mandarin_words.json'


export function parseText (text) {
  const parsedText = []
  var sentences = typeof text === 'string' ? splitSentences(text) : text
  for (var i=0; i<sentences.length; i++){
    parseSentence(sentences[i]);
  }
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

// input  。你有 想要 购买镜头的冲动与欲望。\n
// output 。你 有 想要 购买 镜头 的 冲动 与 欲望。\n
export function parseSentence (sentence) {
  var parserIndex = 0;
  while(parserIndex < sentence.length){
    getCharacterChunk(parserIndex, sentence)
  }
  // var parsedSentence = []
  // var maxChunkSize = 5
  // var chunkSize
  // for(var i=0; i<sentence.length; i += chunkSize){
  //   chunkSize = maxChunkSize
  //   var chunk
  //   var isFound = false
  //   while(!isFound && chunkSize > 1){
  //     chunk = sentence.substr(i, chunkSize)
  //     // chunkSize = chunk.length // for the end of the sentence take maximum chunck size // infinit loop
  //     console.log('lookingFor chunk in dictionary', chunk, chunkSize)
  //     var index = dict.findIndex(entry => entry === chunk)
  //     if(index >= 0){
  //       isFound = true
  //     }
  //     else {
  //       chunkSize--
  //     }
  //   }
  //   chunk = sentence.substr(i, chunkSize)
  //   parsedSentence.push(chunk)
  // }
  // console.log(parsedSentence)
}

function getCharacterChunk (index, text) {
  const maxChunkSize = 5;
  var chunk = text.slice(index, index + maxChunkSize);

  var isSpecialChar = false;
  for(var i=0; i < chunk.length; i++){
    var char = chunk[i];
    if(char.match(/\.|\n|。|,|，/)){
      isSpecialChar = true;
      continue
    }
  }
}

export default { parseText, splitSentences, parseSentence }
