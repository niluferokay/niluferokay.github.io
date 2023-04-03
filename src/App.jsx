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
            <li className="nav__item">
              <a href="/NiluferOkay_CV.pdf" target="_blank" className="nav__link">CV</a>
            </li>
            <li className="nav__item">
              <a href="mailto:niluferokay@gmail.com" className="nav__link">Contact</a>
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
            <a href="https://twitter.com/niluokay" target="_blank" className="nav__link__icon">
            <i class="ri-twitter-fill"></i></a>            
            </li>
          </ul>
        </div>

        {active? <></>:<div className="nav__menu__list">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link"
              onClick={() => setActive(!active)}>About</a>
            </li>
            <li className="nav__item">
              <a href="/NiluferOkay_CV.pdf" target="_blank" className="nav__link"
              onClick={() => setActive(!active)}>CV</a>
            </li>
            <li className="nav__item">
              <a href="mailto:niluferokay@gmail.com" className="nav__link"
              onClick={() => setActive(!active)}>Contact</a>
            </li>
            <li className="nav__item__icon">
              <a href="https://www.linkedin.com/in/niluferokay/" target="_blank" className="nav__link__icon">
                <i class="ri-linkedin-box-fill"></i></a>
                <a href="https://github.com/niluferokay" target="_blank" className="nav__link__icon">
                <i class="ri-github-fill"></i></a>
                <a href="https://twitter.com/niluokay" target="_blank" className="nav__link__icon">
                <i class="ri-twitter-fill"></i></a>
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
            <p className='home__para'>Hi there, my name is Nilufer, and I'm excited to share my passion for blockchain technology and regenerative finance (ReFi) with you!</p> 
            <p className='home__para'>I recently earned my master's degree in <a className='para__link' href="http://bis.boun.edu.tr/"  target="_blank">Business Information Systems</a> from Boğaziçi University, during which I developed a blockchain-based decision support system to assess the environmental and social sustainability performance of the supply chain and track and trace the product journey.</p> 
            <p className='home__para'>This project opened my eyes to the immense potential of blockchain technology in addressing complex sustainability challenges by promoting transparency, security, and decentralization. As a full-stack blockchain developer with a background in finance, I'm eager to contribute my skills and expertise to ReFi initiatives that create a positive impact on the environment and the world.</p>
            <p className='home__para'>I have experience in working with smart contracts and decentralized applications using various programming languages and web frameworks including Solidity, JavaScript, React, and Node.js. I'm now seeking opportunities to work in ReFi companies and decentralized autonomous organizations (DAOs) on innovative projects that promote regenerative practices and mitigate the impacts of climate change. I'm particularly excited about working in a creative and collaborative ecosystem where I can leverage my skills to drive meaningful change.</p>
            <p className='home__para'>Apart from my work, I enjoy <a className='para__link' href="https://www.goodreads.com/niluokay" target="_blank">reading</a>, writing, practicing yoga, and exploring nature. Ultimately, my biggest dream is to help create a more sustainable and equitable world through technology.</p>
        </div>
      </div>
    </header>
    
  )
}

export default App
