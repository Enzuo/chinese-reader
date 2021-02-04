import parser from './parser'

test('extract sentences', () => {
  const text = `
  你有想要购买镜头的冲动与欲望, 却又因为经济拮据
  而迟迟无法下手吗。
  `
  const parsedText = parser.splitSentences(text)
  console.log(parsedText)
  // expect(text).toBe('hello')
});


test('parse sentence', () => {
  const sentence = '。你有想要购买镜头的冲动与欲望。\n'
  const parsedSentence = parser.parseSentence(sentence)
  console.log(parsedSentence);
})
