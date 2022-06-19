import './App.css';
import Head from './components/Head';
import SideBar from './components/SideBar';
import Form from './pages/Form'

function App() {
  return (
    <>
      <Head />
      <div className='body'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='page'>
          <Form />
        </div>

      </div>
    </>
  );
}

export default App;
