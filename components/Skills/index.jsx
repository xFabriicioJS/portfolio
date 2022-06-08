import React from 'react'
import {
    Tag,
    HStack,
  } from '@chakra-ui/react'
import {data} from './skillsdata'

function Skills() {

console.log(data)

  return (
    <div>
        <h1 className='text-4xl text-center mt-10'>Skills</h1>
    
    <div className='mx-auto w-1/2 mt-8 flex justify-center'>
        
        <HStack spacing={4}>
                {data.map((skill) => (
            <Tag key={skill.name} variant='outline' size='md' colorScheme='blue'>
                {skill.name}
            </Tag>
            ))}
        </HStack>
        </div>
    </div>
  )
}

export default Skills