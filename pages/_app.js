import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from '../redux/store.js'
import ClockStarter from '../components/clockstarter'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ClockStarter/>
      <Component {...pageProps} />
    </Provider>
  )
}