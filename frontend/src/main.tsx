import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SelectPlayerProvider } from './context/selectedPlayer.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/authContext.tsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SelectPlayerProvider>
          <App />
        </SelectPlayerProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
