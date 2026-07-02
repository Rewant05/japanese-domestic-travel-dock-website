import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const appStylesReady = import('./index.css')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

window.setTimeout(() => {
  appStylesReady.finally(() => {
    document.getElementById('lcp-shell')?.remove()
  })
}, 900)
