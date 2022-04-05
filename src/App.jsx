import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
import './App.scss';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div>
          <div className='aside'><p>Industries - Energy & Utilities</p></div>
          <div>
            <Body />
            <Footer />
          </div>
        </div>
      </QueryClientProvider>
        
    </>
  );
}

export default App;
