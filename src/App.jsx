// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Footer from './components/Footer';
// import './index.css';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;