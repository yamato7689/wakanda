import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import Navbar from './app/shared/components/navbar'
import Sidebar from './app/shared/components/sidebar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/features/modules/common/pages/home'
import Login from './app/features/modules/authorization/pages/login'
import MemorizationNotes from './app/features/modules/music/pages/memorization-notes'
import NotFound from './app/features/modules/common/pages/notFound'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-app flex h-screen">
          <div className="container--app--sidebar z-10">
            <Sidebar />
          </div>
          <div className="container--app--navbar ">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/music/memorization"
                element={<MemorizationNotes />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
