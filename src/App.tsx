import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './screens/Home'
import { LeaguesProvider } from './context/LeaguesProvider'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LeaguesProvider>
        <Home />
      </LeaguesProvider>
    </QueryClientProvider>
  )
}

export default App
