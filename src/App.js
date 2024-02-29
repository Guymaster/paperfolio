import './fonts/poppins.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bgCard'></div>
      <div className='bgText'>TT</div>
      <div className='infoBox'>
        <div className='socialBox'>Contact Me</div>
        <div className='name'>
          Guy R.
          <strong>THEA</strong>
        </div>
        <div className='jobBox'>
          <div className='jobInfo'>
            <div className='jobTitle'>Fullstack Developer</div>
            <div className='jobDesc'>I imagine and develop innovative software solutions for web and mobile platforms since 2020</div>
          </div>
          <a className='resumeLink' href='https://google.com'>My Resume</a>
        </div>
      </div>
      <div className='pagesBox'>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Skills</h1>
          <p>
            <strong>I imagine : </strong> and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
          </p>
          <p>
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
          </p>
          <p>
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
            I imagine and develop innovative software solutions for web and mobile platforms since 2020
          </p>
        </div>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Tech Stack</h1>
        </div>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Works</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
