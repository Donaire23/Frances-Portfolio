import SocialMedia from "../components/socialMed"
import Projects from "./projects"
import SkillsPage from "./skills"
import AboutPage from "./about"
import ContactPage from "./contact"



const Home = () => {

  return (
    <>
      <div className="home-container container-md" data-aos="fade-right" data-aos-duration="1500">

        <div className="home-contents d-flex">

          <div className="text-container">

            <div className='container1'>

              <h1 className="text1 col-lg-12">
                I'm <span className="my-name">
                  Frances Khem Andre Donaire
                  </span>
              </h1>

              <h2 className='text2 col-lg-12'>
              an enthusiastic junior full-stack software developer. My passion lies in crafting impactful websites that connect people and make a difference. With a deep love for technology and a creative flair, I'm dedicated to building meaningful online experiences.
              </h2>

                <a href="#proj"  className="see-link pt-4"> 

                   SEE MY PROJECTS 

                   <span className="arrow-icon"> 

                   <i class="fa-solid fa-arrow-right-long"></i>

                  </span>
              </a>

            </div>
          </div>
        </div>

      </div>

      <div className="social-links">

        <hr className="container-md"/>

       <SocialMedia/>

      </div>

      <div className="ss">
       <AboutPage/>
      </div>

      
      <div className="about-div">
        <SkillsPage/>
      </div>
      
      <div className="container-md projects-div">

       <Projects/>
      
      </div>

      <div className="contacts-div">
       <ContactPage/>
      </div>
        
    


    </>
  )

}

export default Home