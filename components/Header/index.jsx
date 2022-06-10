import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-slate-50 z-10  w-full h-14 flex items-center justify-center gap-10'>
        <h1 className='text-2xl absolute left-0 top-0 m-2'>JS.</h1>
        <Link href={'#'}><a className='text-xl hover:text-2xl hover:scale-25 transition-all'>projetos</a></Link>
        <Link href={'#'}><a className='text-xl hover:text-2xl hover:scale-25 transition-all'>skills</a></Link>
        <Link href={'#'}><a className='text-xl hover:text-2xl hover:scale-25 transition-all'>contato</a></Link>
        <Link href={'#'}><a className='text-xl hover:text-2xl hover:scale-25 transition-all'>sobre mim</a></Link>
        
    </div>
  )
}

export default Header