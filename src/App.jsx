import {Navbar, Welcome, Footer, Services, Transactions} from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;

//https://www.youtube.com/watch?v=Wn_Kb3MR_cU&ab_channel=JavaScriptMastery
// Gif API -- rm0xDIip67A9QmK7VP7CZBQMS1CSZ2we
