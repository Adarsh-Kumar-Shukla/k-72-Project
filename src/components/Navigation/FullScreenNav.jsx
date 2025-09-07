import { useGSAP } from '@gsap/react';
import React, { useContext, useRef } from 'react'
import {gsap} from 'gsap';
import {NavbarContext} from '../../context/NavContext';

const FullScreenNav = () => {

  const fullNavLinksRef = useRef(null);

  const fullScreenRef = useRef(null);

  const [navOpen,setNavOpen] = useContext(NavbarContext)

  function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairring', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairring', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])


  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav z-50 hidden h-screen w-full overflow-x-hidden text-white absolute' >
      <div className='h-screen w-full fixed' >
        <div className='h-full w-full flex' >
          <div className='h-full w-full  flex ' >
            <div className='stairring h-full w-1/5 bg-black' ></div>
            <div className='stairring h-full w-1/5 bg-black' ></div>
            <div className='stairring h-full w-1/5 bg-black' ></div>
            <div className='stairring h-full w-1/5 bg-black' ></div>
            <div className='stairring h-full w-1/5 bg-black' ></div>
          </div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative' >
        <div className='navlink flex w-full justify-between items-start' >
          <div className='p-5' >
          <div className='w-20' >
            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 103 44">
              <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
        </div>
        <div onClick={()=>{
          setNavOpen(false)
        }} className='lg:h-32 h-24  relative  lg:w-32 w-24 cursor-pointer ' >
            <div className='lg:h-44 h-32 absolute w-0.5 -rotate-45 origin-top bg-[#D3FD50]'></div>
            <div className='lg:h-44 h-32 absolute w-0.5 rotate-45 right-0 origin-top bg-[#D3FD50]'></div>
          </div>
        </div>
        <div id='all-links' >
          <div className='link relative border-y-1 border-white  ' >
            <h1 className='font-[font2] text-[10vw] uppercase font-bold leading-[0.8] text-center '  >Project</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] ' >
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >Pour tout voir</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >Pour tout voir</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link relative border-y-1 border-white  ' >
            <h1 className='font-[font2] text-[10vw] uppercase font-bold leading-[0.8] text-center '  >Agence</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] ' >
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >pour tout savoir</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg" alt="" />
              </div>
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >pour tout savoir</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link relative border-y-1 border-white  ' >
            <h1 className='font-[font2] text-[10vw] uppercase font-bold leading-[0.8] text-center '  >contact</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] ' >
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >Pour envoyer un fax</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/vlcsnap-2021-04-21-16h11m49s996.jpg" alt="" />
              </div>
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >Pour envoyer un fax</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/vlcsnap-2021-04-21-16h11m49s996.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link relative border-y-1 border-white  ' >
            <h1 className='font-[font2] text-[10vw] uppercase font-bold leading-[0.8] text-center '  >blogue</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50] ' >
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >liar less articles</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
              </div>
              <div className='moveX flex items-center text-black ' >
                <h2 className='font-[font2] whitespace-nowrap font-bold text-[10vw] uppercase leading-[0.8] text-center ' >liar less articles</h2>
                <img className='h-20 w-50 px-5 rounded-full  shrink-0' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
