import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('../features/home'))
const Canvas = React.lazy(() => import('../features/canvas'))
const App = React.lazy(() => import('../App'))

const Router: React.VFC = () => {
  return (
    <React.Suspense fallback={<div>LOADING...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas/:hash" element={<Canvas />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default Router