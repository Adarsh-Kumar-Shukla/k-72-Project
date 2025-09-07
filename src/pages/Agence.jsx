import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'http://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        markers:false,
        start:"top 10%",
        end:'top -75%',
        scrub:true,
        pin:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress*imageArray.length);
          }
          else{
            imageIndex = imageArray.length-1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })

  return (
    <div className=' py-1 text-black'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-60 -top-100 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">
        <div className='font-[font2] text-lg  flex items-center justify-center ' >
          <div className=' h-[80vh] w-1/3 uppercase  ' >
            <h2 className='pl-[20px] pt-[40vh]' >Expertise</h2>
          </div>
          <div className=' h-[80vh] w-1/3  uppercase  ' >
            <ul className='pl-[20px] pt-[40vh]' >
              <li className='mb-2'>Stratégie</li>
              <li className='mb-2'>Publicité</li>
              <li className='mb-2'>Branding</li>
              <li className='mb-2'>Design </li>
              <li className='mb-2'>Contenu</li>
            </ul>
          </div>
          <div className=' h-[80vh] w-1/3  uppercase  ' >
              
          </div>
        </div>
        <div className='font-[font2] text-lg flex items-center justify-center ' >
          <div className=' h-[80vh] w-1/3 uppercase' >
            <h4 className=' px-17 py-15' >Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h4>
          </div>
          <div className=' h-[80vh] w-1/3  uppercase ' >
            <h4 className=' px-17 py-15' >
              Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
            </h4>
          </div>
          <div className=' h-[80vh] w-1/3  uppercase  ' >
              <h4 className=' px-17 py-15' >
              Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. 
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
