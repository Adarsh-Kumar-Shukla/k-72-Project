import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] lg:pt-5 pt-20 text-center' >
      <div className='text-[10vw] flex items-center justify-center uppercase leading-[9vw]'>L'étincelle</div>

      <div className='text-[10vw] flex items-center justify-center uppercase leading-[9vw]'>
        qui
        <div className='h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden'>
          <Video/>
        </div>
        génère
      </div>

      <div className='text-[10vw] flex items-center justify-center uppercase leading-[9vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
