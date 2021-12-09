import HeroList from './Components/HeroList'
import SearchHeroes from './Components/SearchHeroes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroDetails from './Components/HeroDetails'
import { useParams } from 'react-router-dom'

function App() {
  const ParaData = [
    {
      title: 'Email',
      type: 'text',
    },
    {
      title: 'Phone',
      type: 'text',
    },
    {
      title: 'Name',
      type: 'text',
    },
    {
      title: 'Company',
      type: 'text',
    },
  ]

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HeroList />} />
          <Route
            path='/SearchHeroes'
            element={<SearchHeroes ParaData={ParaData} />}
          />
          <Route
            path='/heroes/:title'
            element={<HeroDetails ParaData={ParaData} />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
