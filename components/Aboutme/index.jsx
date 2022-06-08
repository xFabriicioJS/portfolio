import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function AboutMe() {
  return (
    <div className='flex items-center flex-col p-4 w-1/3 h-2/4 mt-2 mx-auto'>
       <h1 className='text-3xl'>Olá, <h1 className='text-3xl text-blue-300 inline'>sou Fabricio Monteiro</h1>
       </h1>
       <h3 className='text-xl text-center mt-12 mb-24'>
           um estudante de desenvolvimento web e mobile fullstack
        </h3>
        <ButtonGroup gap='2'>
            <Button colorScheme='blue'>Github</Button>
            <Button colorScheme='blue'>mais sobre mim</Button>
        </ButtonGroup>
    </div>
  )
}

export default AboutMe