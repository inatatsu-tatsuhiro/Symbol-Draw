import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const Canvas = React.lazy(() => import('../features/draw'))
const Audit = React.lazy(() => import('../features/audit'))
const Connect = React.lazy(() => import('../features/connect'))

const Router: React.VFC = () => {
  return (
    <React.Suspense fallback={<div>LOADING...</div>}>
      {/* <BrowserRouter> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/canvas" replace />} />
          <Route path="/canvas/:hash" element={<Layout page={<Canvas />} />} />
          <Route path="/canvas" element={<Layout page={<Canvas />} />} />
          <Route path="/audit" element={<Layout page={<Audit />} />} />
          <Route path="/connect" element={<Layout page={<Connect />} />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Router
