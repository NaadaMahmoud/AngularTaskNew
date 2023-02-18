// import logo from './logo.svg';
import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import Contact from './components/Contact'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import ProfileSection from './components/ProfileSection'
import Skills from './components/Skills'


function App() {
  return (
    <div className='container border border-2 border-dark bg-light my-5'>
      
      <div className='row justify-content-between'>
        <Header/>
        
        <div className='col-4'>
        <ProfileSection/>
          <Contact/>
          <Skills/>
          
        </div>
      
        <div className='col-8'>
        <AboutMe/>
          <Education/>
          <Experience/>
        </div>
      
      </div>

    </div>
  
  );
}

export default App;
