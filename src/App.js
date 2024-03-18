import './fonts/poppins.css';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [bgLeft, setBgLeft] = useState(0);

  const bgRef = useRef(null);

  const handleScroll = (e) => {
    setBgLeft(-3.4*(bgRef.current.offsetWidth*window.scrollY)/(document.documentElement.scrollHeight - window.screen.height))
  };
  const handleGoToTop = (e) => {
    window.scrollTo(0, 0)
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className='bgCard'></div>
      <div className='bgText' ref={bgRef}>
        <div style={{position: "fixed", left: bgLeft}}>GUYMASTER</div>
      </div>
      <div className='infoBox'>
        <div className='socialBox'>
          <div className='contactMe'>Contact Me</div>
          <a className='linkedinBTN' href='https://https://www.linkedin.com/in/guy-roger-thea'>
            <svg>
                <g stroke="none">
                    <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
          </a>
          <a className='githubBTN' href='https://github.com/Guymaster'>
            <svg>
              <path d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z"/>
            </svg>
          </a>
          <div className='emailBTN'>guyrogerthea25@gmail.com</div>
        </div>
        <div className='name'>
          Guy Roger
          <strong>THEA</strong>
        </div>
        <div className='jobBox'>
          <div className='jobInfo'>
            <div className='jobTitle'>Fullstack Developer</div>
            <div className='jobDesc'>I imagine and develop innovative software solutions for web and mobile platforms since 2020</div>
          </div>
          <a className='resumeLink' href='https://drive.google.com/file/d/1eucfMDBZGcfdMjtwalWEGzrozDoyJt51/view?usp=drive_link'>My Resume</a>
        </div>
      </div>
      <div className='pagesBox'>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Skills</h1>
          <p>
            I'm always learning new things in several domains. Thanks to Internet, I discover new insterresting ones everyday.
          </p>
          <p>
            <strong>Web App Development : </strong>
            From static landing pages and home pages to huge web apps including complex features and lifecycles
          </p>
          <p>
            <strong>Mobile App Development : </strong>
            I can transform a simple idea to an customer-adapted and device-adapted solution easily accessible on different plaforms (Android and IOS)
          </p>
          <p>
            <strong>.NET Development : </strong>
            I Use .NET for creating simple desktop apps for specific tasks
          </p>
          <p>
            <strong>Backend Development : </strong>
            I set up software services that aims to manage all or a part of an Information system's lifecycle and information flow
          </p>
          <p>
            <strong>Database Designing and Management : </strong>
            Basing on features and information flows, I can conceive a database structure, implement it, configure it, realize dumps and recoveries, extract data, set up data-correction or structure-correction scripts and solve problems
          </p>
          <p>
            <strong>Information System Designing : </strong>
            Basing on a solution idea, I can conceive a whole information system, with different services, their structures and communication interfaces and propose adapted technical stacks
          </p>
        </div>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Tech Stack</h1>
          <p>
            <strong>ReactJS, NextJS : </strong>
            React is a library that permits to build webpages with custom components. I use the framework Next JS with Typescript for setting up optimized react apps.
          </p>
          <p>
            <strong>Flutter : </strong>
            This is a mobile app development framework based on the Dart language. It's focused on modullariity, liberty, speed and extensibility.
          </p>
          <p>
            <strong>ExpressJS, NestJS : </strong>
            Express is a Javascript/Typescript library used for implementing web servers. I use it for setting up Restful APIs. NestJS is a framework that permit to easily set up complex web services.
          </p>
          <p>
            <strong>PostgreSQL, MySQL, SQL Server, MongoDB : </strong>
            I mainly use PostgreSQL for relational databases and MongoDB for document-based structures
          </p>
          <p>
            <strong>Firebase, Supabase, Resend, Keycloak : </strong>
            Firebase and Supabase are sets of services (authentification, file storage, database...) ready-to-use that facilitates app development. Keycloak is an open-source auth manager. Resend is a mail sending service.
          </p>
          <p>
            <strong>ThreeJS, KonvaJS, Rive : </strong>
            These are complex graphic rendering libraries. I use ThreeJS for setting up 3d experiences on websites. I use KonvaJS for managing a lot amount of 2d objects. I use Rive for animating 2d illustrations on web and mobile apps.
          </p>
        </div>
        <div className='page'>
          <img className='imgHeader' />
          <h1>My Works</h1>
          <p>
            <strong> <a href='https://www.digitechafricaltd.com'>Hyperion 2</a> : </strong>
            A SaaS reinsurance platform that permits to insurers and reinsurers to manage their activities
            <br/>
          </p>
          <p>
            <strong> <a href='https://www.digitechafricaltd.com'>Supermines</a> : </strong>
            A modern multiplayer web version of the famous mineskeeper game
            <br/>
          </p>
          <p>
            <strong> <a href='https://guymaster.github.io/Battlefield2042'>Battlefield 2042</a> : </strong>
            A simple landing page for a video game
            <br/>
          </p>
          <p>
            <strong> <a href='https://github.com/Guymaster/InterNote'>InterNote</a> : </strong>
            A mobile app for taking and sharing notes. Designed for students.
            <br/>
          </p>
          <p>
            <strong> <a href='https://github.com/Guymaster/CIE'>ESATIC Club INFO</a> : </strong>
            A central web platform for the members, visitors and guests of the ESATIC's Computer Science club..
            <br/>
          </p>
          <p>
            <strong> <a href='https://github.com/Guymaster/JeuQCM/tree/master'>QCM Game</a> : </strong>
            An educative multiple choices questions game.
            <br/>
          </p>
          <p>
            <strong>MyTIC Management : </strong>
            A confidential ERP for a transport company. It permits to manages employees and activities
            <br/>
          </p>
        </div>
        <div className='page'></div>
      </div>
      <div onClick={handleGoToTop} className={bgLeft < -500? 'goToTop visible' : 'goToTop'}>Go to Top</div>
    </div>
  );
}

export default App;
