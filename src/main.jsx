import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './logic/Store.jsx'
import { store } from './logic/Store.jsx'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)
