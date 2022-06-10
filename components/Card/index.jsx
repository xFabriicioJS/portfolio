import React from 'react'
import {cardData} from './cardData'
import {
    Tag,
    HStack,
  } from '@chakra-ui/react'


function Card() {
  return(
      <div>
        <h2 className='text-2xl text-center mt-10'>Projetos</h2>
        <div className='w-3/4 flex gap-5 mx-auto mt-10 justify-center'>
           
           {cardData.map(card => {
        return(
          <div key={card.id} className='w-64 h-80 p-4 shadow-md shadow-zinc-600 flex flex-col'>
          <h3 className='text-lg'>{card.title}</h3>
          <p className='mt-5 text-sm'>{card.desc}</p>
          <HStack className='mt-20'>
              {card.techs.map((tech)=>{
                  return(
                      <Tag className='w-fit' key={Math.floor(Math.random()*101)}>{tech}</Tag>
                  )
              })}
          </HStack>    
      </div>
        )
    })}
       </div>
       </div>
  )
  
  
}

export default Card