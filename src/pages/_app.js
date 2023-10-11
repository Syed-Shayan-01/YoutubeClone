import NoteState from '@/context/NoteState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NoteState>
        <Component {...pageProps} />
      </NoteState>
    </>
  )
}
