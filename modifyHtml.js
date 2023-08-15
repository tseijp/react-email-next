const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './out/index.html')
const content = fs.readFileSync(filePath, 'utf8')
const docTypeHtml = /<!DOCTYPE html>/
const docTypeEmail = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

const newContent = content
  .replace(docTypeHtml, docTypeEmail)
  .replace(/<div id="__next">/, '')
  .replace(/<\/div>/, '')

fs.writeFileSync(filePath, newContent)
