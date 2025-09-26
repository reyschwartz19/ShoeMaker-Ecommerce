
import './App.css'
import Header from './header/header'
import Offers from './Offers/offers'
import Discover from './discover/discover'

 const App = () => {
  return (
    <div className='px-4 max-w-full overflow-x-hidden font-helvetica'>
      <Header/>
      <Offers/>
      <Discover/>
    </div>
  )
}

export default App
