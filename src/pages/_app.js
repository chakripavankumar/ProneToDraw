import { Provider } from 'react-redux'
<<<<<<< HEAD
import '@/styles/globals.css'
import { store } from '@/store'

export default function App({ Component, pageProps }) {
  return<Provider store={store} >
    <Component {...pageProps} />
    </Provider>
=======
import { store } from '../../store'


export default function App({ Component, pageProps }) {
  return <Provider store={store}>
        <Component {...pageProps} />
      </Provider> 
 
>>>>>>> a2c88c73e8bc1688a8a46b86fef05214c79356a1
}
