import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This file configuers vite, helps us build the website,a dn is used to set up this project, hots the server at a url (localhost:5173), works similarly to liveserver, we dont need to change this file
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
