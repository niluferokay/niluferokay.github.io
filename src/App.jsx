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
            <p className='home__para'>I recently completed my master's degree in <a className='para__link' href="http://bis.boun.edu.tr/"  target="_blank">Business Information Systems</a> from Boğaziçi University. During my studies, I developed a blockchain-based decision support system for my thesis. The system evaluates the social and environmental sustainability of supply chains and tracks products throughout their entire journey.</p> 
            <p className='home__para'>Through my research, I gained a better understanding of blockchain's potential to address complex sustainability challenges by promoting transparency, security, and decentralization. This experience has given me a new perspective on the possibilities of technology to create positive social and environmental impacts.
            </p>
            <p className='home__para'>As a full-stack blockchain developer with a finance background, I am eager to contribute my skills and expertise to help create a more sustainable, equitable and just world through technology. My skills include working with various programming languages and web frameworks, such as Solidity, JavaScript, React, and Node.js and developing decentralized applications and smart contracts.</p>
            <p className='home__para'>I am currently seeking opportunities to work in regenerative finance (ReFi) companies and decentralized autonomous organizations (DAOs) on creative and innovative projects that encourage regenerative practices and mitigate the effects of climate change. I am passionate about working in a collaborative ecosystem where I can apply my skills to make a meaningful impact.</p>
            <p className='home__para'> I am also interested in systems thinking and biomimicry. I strongly believe that incorporating these approaches into the design and development of products and systems can unlock immense value and help us navigate the complexities of the 21st century with greater efficiency and sustainability.</p>
            <p className='home__para'>When I'm not working, I enjoy <a className='para__link' href="https://www.goodreads.com/niluokay" target="_blank">reading</a>, writing, practicing yoga, and exploring nature.</p>
        </div>
      </div>
    </header>
    
  )
}

export default App
