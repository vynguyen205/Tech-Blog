const { Editor }  = require('@tiptap/core')
const StarterKit = require('@tiptap/starter-kit')
const TextAlign = require('@tiptap/extension-text-align')

let editor = new Editor({
  element: document.querySelector('.element'),
  extensions: [
    StarterKit,
    TextAlign
    
  ],
  content: '<p>Hello World!</p>',
})

document.querySelector('#bold').addEventListener('click', () => {
  editor.chain().focus().toggleBold().run()
})

document.querySelector('#italic').addEventListener('click', () => {
  editor.chain().focus().toggleItalic().run()
})

document.querySelector('#underline').addEventListener('click', () => {
  editor.chain().focus().toggleBulletList().run()
})
document.querySelector('#code').addEventListener('click', () => {
  editor.chain().focus().toggleCode().run()
})
document.querySelector('#aLeft').addEventListener('click', () => {
  editor.chain().focus().setTextAlign('left').run()
})
document.querySelector('#aCenter').addEventListener('click', () => {
  editor.commands.setTextAlign('center')
})
document.querySelector('#aRight').addEventListener('click', () => {
  editor.commands.setTextAlign('right')
})
