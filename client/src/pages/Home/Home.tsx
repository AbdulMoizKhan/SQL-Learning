import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to SQL Learning Platform</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center mb-8">
        Start your journey to master SQL! Explore tutorials, practice queries, and track your progress.
      </p>
      <Button onClick={() => navigate('/dashboard')} className="mt-4">
        Go to Dashboard
      </Button>
    </div>
  )
}

export default Home