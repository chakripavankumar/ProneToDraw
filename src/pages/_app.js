import { Provider } from 'react-redux'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { store } from '../../store'
import '@/styles/globals.css'
import { SignIn } from '@clerk/clerk-react'

export default function App({ Component, pageProps }) {
  return <ClerkProvider>
  <Provider store={store}>
        <Component {...pageProps} />
      </Provider> 
  </ClerkProvider>
}
