
import { useEffect, useState } from 'react';
import './App.css';
import LazyComponent from './Components/lazyComp';
import Form from './Components/Form';
import Card from './Animated card/Card';

function App() {

  const [loadComponent, setLoadComponent] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    console.log("scroll position: "+scrollPosition)
    const documentHeight = document.documentElement.scrollHeight;
    console.log("Document height: "+documentHeight)
    

    if (scrollPosition >= documentHeight - 100) {
      setLoadComponent(true);
      window.removeEventListener('scroll', handleScroll); // Remove listener after loading the component
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div>
      <Card/>
    </div>
    // <div className="App">
    // {/* <h1>Scroll down to load the component</h1>
    // <div style={{ height: '150vh' }}>
    //   {/* Just to create enough scrollable space */}
    // </div>
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <LazyComponent/> }
    // {loadComponent && <Form/>} */}
  
  
);
}

export default App;
