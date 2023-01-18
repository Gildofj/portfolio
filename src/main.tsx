import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle, Theme } from './config/Theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <GlobalStyle />
    <App />
  </Theme>,
)
