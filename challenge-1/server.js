import http from 'http'
import fs from 'fs'

const HOST = 'localhost'
const PORT = 8080

const server = http.createServer((_, response) => {
  fs.readFile('index.html', 'utf8', (_, content) => {
    response.end(content)
  })
})

server.listen(
  PORT,
  () => console.log(`Server up on http://${HOST}:${PORT}`)
)
