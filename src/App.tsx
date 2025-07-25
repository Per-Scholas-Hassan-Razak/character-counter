
import './App.css'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import TextInput from './components/TextInput/TextInput'

function App() {

  const stats={
    characterCount:100, 
    wordCount:15, 
    readingTime:0.5
  }

  return (
    <>
    <TextInput placeholder='Enter your thoughts' initialValue='' onTextChange={(text) => console.log("User typed:", text)}/>
      <StatsDisplay stats={stats} showReadingTime={true}/>
    </>
  )
}

export default App
