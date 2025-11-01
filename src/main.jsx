import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routes/routes.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <div className='max-w-[1440px] mx-auto text-black bg-[#f8f3f3]'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
)
