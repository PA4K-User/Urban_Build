"use client";

import { RiArrowRightUpLine } from 'react-icons/ri';
import {Link as ScrollLink} from 'react-scroll'
import Logo from './Logo';
import NavMobile from './NavMobile';

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
]

const Header = () => {
  return (
    <header className='bg-primary py-4'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Logo/>
          <nav className='hidden xl:flex items-center gap-12'>
            <ul className='flex'>
            {links.map((link, index) => {
              return (
                <li 
                  key={index} 
                  className="text-white text-sm uppercase font-primary font-medium
                  tracking-[1.2px] after:content-['/'] after:mx-4
                  last:after:content-none after:text-accent"
                  >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className='cursor-pointer'
                    activeClass='text-accent'
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
            </ul>
            <button className='w-[200px] h-[54px] py-[5px] pl-[10px] pr-[50px] flex items-center justify-between min-w-[220px] bg-white group'>
              <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase'>
                Get a quote
              </div>
              <div className='w-11 h-11 bg-primary flex items-center justify-center'>
                <RiArrowRightUpLine className='text-white text-xl group-hover:rotate-45 transition-all duration-200'/>
              </div>
            </button>
          </nav>
          <div className='xl:hidden'>
            <NavMobile/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header