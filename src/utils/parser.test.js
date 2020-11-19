import parser from './parser'

test('parse text', () => {
  var text = `
  你有想要购买镜头的冲动与欲望, 却又因为经济拮据
  而迟迟无法下手吗。
  `
  var parsedText = parser.parseText(text)
  expect(parsedText).toBe('hello')
});
