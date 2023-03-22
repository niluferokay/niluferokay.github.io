import {useState, useEffect} from 'react'
import './App.scss'

function App() {
  const [active, setActive] = useState(true)

  useEffect(() => {
  }, [active])

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="/" className="nav__title">
          Nilufer Okay
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">About</a>
            </li>
            {/* <li className="nav__item">
              <a href="/NiluferOkay_Thesis.pdf" target="_blank" className="nav__link">Thesis</a>
            </li> */}
            <li className="nav__item">
              <a href="/NiluferOkay_CV.pdf" target="_blank" className="nav__link">CV</a>
            </li>
            <li className="nav__item__icon">
              <a href="https://www.linkedin.com/in/niluferokay/" target="_blank" className="nav__link__icon">
                <i class="ri-linkedin-box-fill"></i></a>
            </li>
            <li className="nav__item__icon">
              <a href="https://github.com/niluferokay" target="_blank" className="nav__link__icon">
                <i class="ri-github-fill"></i></a>
            </li>
            <li className="nav__item__icon">
              <a href="mailto:niluferokay@gmail.com" className="nav__link__icon">
              <i class="ri-mail-fill"></i></a>
            </li>
          </ul>
        </div>

        {active? <></>:<div className="nav__menu__list">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link"
              onClick={() => setActive(!active)}>About</a>
            </li>
            {/* <li className="nav__item">
              <a href="/NiluferOkay_Thesis.pdf" target="_blank" className="nav__link"
              onClick={() => setActive(!active)}>Thesis</a>
            </li> */}
            <li className="nav__item">
              <a href="/NiluferOkay_CV.pdf" target="_blank" className="nav__link"
              onClick={() => setActive(!active)}>CV</a>
            </li>
            <li className="nav__item__icon">
              <a href="https://www.linkedin.com/in/niluferokay/" target="_blank" className="nav__link__icon">
                <i class="ri-linkedin-box-fill"></i></a>
                <a href="https://github.com/niluferokay" target="_blank" className="nav__link__icon">
                <i class="ri-github-fill"></i></a>
                <a href="mailto:niluferokay@gmail.com" className="nav__link__icon">
              <i class="ri-mail-fill"></i></a>
            </li>
          </ul>
          
          <div className="nav__close">
            <i class="ri-close-line"onClick={() => setActive(!active)}></i>
          </div>

        </div>}

        {active? <div className="nav__toggle">
          <i class="ri-menu-line"onClick={() => setActive(!active)}></i>
        </div>: <></>}
      </nav>

      <div className="home container">
        <div className="photo">
          <img src="profile.jpg" alt="" className="home__img" />
        </div>
        <div className="home__description">
            <p className='home__para'> Hello, I'm Nilufer!</p> 
            <p className='home__para'>I recently received my master's degree in <a className='para__link' href="http://bis.boun.edu.tr/"  target="_blank">Business Information Systems</a> from Boğaziçi University. In my thesis, I developed a blockchain application to assess the environmental and social sustainability performance of the supply chain.</p>
            <p className='home__para'>As a full-stack blockchain developer, I am very passionate about sustainability and interested in pursuing a career in regenerative finance (ReFi). I have always been fascinated by the potential of technology to solve complex problems, particularly to address social and environmental challenges. I see blockchain as a powerful tool for creating transparent, secure, and decentralized systems that can help mitigate the negative impacts of climate change and promote sustainability.</p>
            <p className='home__para'>My biggest dream is to use my skills and expertise to create innovative solutions that can make a positive impact on the environment and the world at large. I am currently exploring job opportunities in ReFi companies and organizations. I have experience working with smart contracts and decentralized applications. I am also experienced in multiple programming languages and web frameworks, including React, Node.js, and Solidity. I am passionate about working in a creative and collaborative work environment.</p>
            <p className='home__para'>Apart from coding, I enjoy <a className='para__link' href="https://www.goodreads.com/niluokay" target="_blank">reading</a>, writing, doing yoga and walking in nature.</p>
        </div>
      </div>
    </header>
    
  )
}

export default App
