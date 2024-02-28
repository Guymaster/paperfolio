import './fonts/poppins.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bgCard'></div>
      <div className='bgText'>TT</div>
      <div className='infoBox'>
        <div className='socialBox'>A</div>
        <div className='name'>
          Guy R.
          <strong>THEA</strong>
        </div>
        <div className='jobBox'>
          <div className='jobInfo'>
            <div className='jobTitle'>Fullstack Developer</div>
            <div className='jobDesc'>I implement innovative seee tete </div>
          </div>
          <a className='resumeLink' href='https://google.com'>My Resume</a>
        </div>
      </div>
      <div className='pagesBox'>
        <div className='page'></div>
        <div className='page'></div>
        <div className='page'></div>
      </div>
    </div>
  );
}

export default App;
