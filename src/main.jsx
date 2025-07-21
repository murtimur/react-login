import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>,
)
