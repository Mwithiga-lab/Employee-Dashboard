import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certs/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'certs/server.crt')),
    },
    host: true, // listens on all network interfaces, including LAN IP
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
