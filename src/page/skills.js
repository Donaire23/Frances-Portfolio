import express from '../images/expressjs.png'
import mongodb from '../images/mongodb_logo_icon_145054.png'
import redux from '../images/redux_logo_icon_144932.png'
import next from '../images/nextjs.png'

const SkillsPage = () => {
  return (
    <>
    
      <div className="container-md about-parent" id='techStack'>

          <h2 className="tech-text mb-5 fw-bold" data-aos="fade-right" data-aos-duration="1500">My Tech Stack</h2>

          <div className="tools" data-aos="fade-right" data-aos-duration="1200">

            <div className="htmls" >
              <p className="icon"><i class="fa-brands fa-html5"></i></p>
              <p className="tool-text">HTML</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-css3-alt"></i></p>
              <p className="tool-text">CSS</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-bootstrap"></i></p>
              <p className="tool-text">Boostrap</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-square-js"></i></p>
              <p className="tool-text">JavaScript</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-react"></i></p>
              <p className="tool-text">React.js</p>
            </div>

            <div className="htmls">
              <p className="icon"><img src={redux}  alt='express.js' className='expressjs'/></p>
              <p className="tool-text">Redux</p>
            </div>

            <div className="htmls">
              <p className="icon"><img src={next}  alt='express.js' className='expressjs'/></p>
              <p className="tool-text">Next.js</p>
            </div>

          </div>

          <hr/>

          <div className="tools"  data-aos="fade-left" data-aos-duration="1200">

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-node-js"></i></p>
              <p className="tool-text">Node.js</p>
            </div>
            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-php"></i></p>
              <p className="tool-text">Php</p>
            </div>

            <div className="htmls">
              <p className="icon"><img src={express}  alt='express.js' className='expressjs'/></p>
              <p className="tool-text">Express.js</p>
            </div>

      
            <div className="htmls">
              <p className="icon"><img src={mongodb}  alt='express.js' className='expressjs'/></p>
              <p className="tool-text">mongoDB</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-solid fa-database"></i></p>
              <p className="tool-text">Mysql</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-laravel"></i></p>
              <p className="tool-text">Laravel</p>
            </div>

            {/* <div className="htmls">
              <p className="icon"><i class="fa-brands fa-java"></i></p>
              <p className="tool-text">Java EE</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-solid fa-power-off"></i></p>
              <p className="tool-text">Spring Boot</p>
            </div> */}
            
          </div>

         

      </div>
    </>
  )
}

export default SkillsPage