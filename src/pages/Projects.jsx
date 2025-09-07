import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projectsImages = [
    {
      image1:'../../../photos/photo1.jpg',
      image2:'../../../photos/photo2.jpg',
    },
    {
      image1:'../../../photos/photo3.jpg',
      image2:'../../../photos/photo4.jpg',
    },
    {
      image1:'../../../photos/photo5.jpg',
      image2:'../../../photos/photo6.jpg',
    },
    {
      image1:'../../../photos/photo7.jpg',
      image2:'../../../photos/photo8.jpg',
    },
    {
      image1:'../../../photos/photo10.jpg',
      image2:'../../../photos/photo11.jpg',
    },
    {
      image1:'../../../photos/photo12.jpg',
      image2:'../../../photos/photo13.jpg',
    },
    {
      image1:'../../../photos/photo14.jpg',
      image2:'../../../photos/photo15.jpg',
    },
    
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })


  return (
    <div className='lg:p-4 p-2 mb-[100vh] text-black'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projectsImages.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[400px] h-[800px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image={elem} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects
