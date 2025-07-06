import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

// Lazy import your pages
const Home = lazy(() => import('./pages/Home/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
