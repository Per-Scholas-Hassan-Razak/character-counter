
import './App.css'
import TextInput from './components/TextInput/TextInput'

function App() {

  return (
    <>
    <TextInput placeholder='Enter your thoughts' initialValue='' onTextChange={(text) => console.log("User typed:", text)}/>
    </>
  )
}

export default App
