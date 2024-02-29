import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SelectPlayerProvider } from './context/selectedPlayer.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/authContext.tsx'
import { FantasyProvider } from './context/fantasyFunctions.tsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <FantasyProvider>
          <SelectPlayerProvider>
            <App />
          </SelectPlayerProvider>
        </FantasyProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
