import { Provider } from 'react-redux'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { store } from '../../store'


export default function App({ Component, pageProps }) {
  return <ClerkProvider>
  <Provider store={store}>
        <Component {...pageProps} />
      </Provider> 
  </ClerkProvider>
}
