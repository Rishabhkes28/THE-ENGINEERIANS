
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import './App.css';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';


function App() {
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <Hero />
           <div className="App">
          <CustomCursor />
          <div className="p-10">
          <h1 className="text-3xl font-bold">Custom Cursor Example</h1>
          <p>Move your mouse to see the custom black dot!</p>
         </div>
         </div>
         </div>
         </div>
         </div>
  );
}

export default App;