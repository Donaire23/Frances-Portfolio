import fkad from '../images/fkad.jpg'

const AboutPage = () => {

  return (
    <>
      <div className="container-md  about-page" id='aboutMe'> 
        <h2 className='mb-5 fw-bold' data-aos="fade-right" data-aos-duration="1500">About me  </h2>
        <div className='about-container'>

          <div className='my-image' data-aos="fade-right" data-aos-duration="900">
            <img src={fkad}/>
          </div>

          <div className='about-me' data-aos="fade-left" data-aos-duration="900">
            <h2 className='fw-bold mb-5'>Hello 👋🏿</h2>
            <div className='descrip'>

              <h5 className='about-text'>
              As a Junior Full Stack Developer, I bring a solid foundation in web development and an unyielding passion for technology. With a degree from Cebu Technological University and training from Kodego's full stack program, I'm well-prepared to tackle diverse challenges in the tech world.

              </h5>

              <h5 className='about-text'>
              My expertise lies in crafting captivating user interfaces using HTML, CSS, JavaScript, React.js, Next.js. On the server side, I excel in Node.js and Express.js, while my database management skills encompass MongoDB and MySQL. I also have a basic understanding of PHP and Laravel, which I'm actively working to expand. This versatile skill set allows me to deliver seamless and elegant solutions for a wide range of web development projects.
              </h5>

             <h5 className='about-text'>
             But my journey doesn't stop here. I'm constantly expanding my skill set, delving into a wide range of languages and frameworks, from Python to Java, Typescript to C++, Ruby on Rails to Django, and more. My dedication to staying at the forefront of industry trends drives my continuous learning.
             </h5>

             <h5 className='about-text'>
             My effective communication and time management skills enable me to excel as both an independent developer and a valuable team collaborator. In the dynamic world of technology, I am not merely an observer but an active creator, a continuous learner, and a passionate innovator.
             </h5>


            <button className='view-btn  pt-2 pb-2 pe-4 ps-4 mt-2' onClick={() => {

                  window.open('https://assets.kodego.ph/public/isa/2300qL21pGeNLaHHWvF3XwYsWMrlmd2dovfOqbfV.pdf', '_blank');
                    }}>

                  View Certificate 

                  <span className='ms-2'>
                    <i class="fa-regular fa-eye"></i>
                  </span>

            </button>
            </div>
           
          </div>

        </div>

    
      </div>

 
     
    </>
  )


}

export default AboutPage