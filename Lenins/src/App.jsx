
import './App.css'
import Header from './Home/header'
import Offers from './Home/offers'
import Discover from './Home/discover'
import Categories from './Home/categories'

 const App = () => {
  return (
    <div className='px-4 max-w-full overflow-x-hidden font-helvetica'>
      <Header/>
      <Offers/>
      <Discover/>
      <Categories/>
    </div>
  )
}

export default App
