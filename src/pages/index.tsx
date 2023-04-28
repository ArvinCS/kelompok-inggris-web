import { Inter } from 'next/font/google'
import { HomeIcon, PhotoIcon, UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

import localFont from "next/font/local"
import Link from 'next/link'
import MemberPage from './member_page'
import MemoriesPage from './memories_page'

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Extralight.ttf',
      weight: '200'
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Bold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-clashdisplay'
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${clashDisplay.variable} font-clashdisplay`}
    >
      <div id='About' className='flex h-screen w-full bg-green-50 justify-between'>
        <div className='z-10 flex flex-row absolute items-center h-[40px] w-full bg-black justify-between px-4'>
          <h2 className='flex my-auto font-clashdisplay font-bold object-contain h-auto overflow-hidden'>
            Kelompok Inggris
          </h2>
          <div className='flex flex-row space-x-4 overflow-hidden items-center'>
            {/* <Link href='#About' className='items-center'>
              <HomeIcon className='fill-white w-[20px] h-auto md:h-0 md:w-0'/>
              <h2 className='invisible md:visible h-0 md:h-auto w-0 md:w-auto'>  
                About Us
              </h2>
            </Link> */}
            <Link href='#MemberList' scroll={true} className='items-center'>
              <UserIcon className='fill-white w-[20px] h-auto md:h-0 md:w-0'/>
              <h2 className='invisible md:visible h-0 md:h-auto w-0 md:w-auto'>  
                Members
              </h2>
            </Link>
            <Link href='#Memories' className='items-center'>
              <PhotoIcon className='fill-white w-[20px] h-auto md:h-0 md:w-0'/>
              <h2 className='invisible md:visible h-0 md:h-auto w-0 md:w-auto'>  
                Memories
              </h2>
            </Link>
          </div>
        </div>
        <div className='flex absolute z-0 min-w-full min-h-full bg-blue-800 overflow-hidden'>
          <video
            autoPlay
            loop
            muted
            className='flex min-w-full w-[200%] object-fill min-h-full brightness-50 overflow-hidden'
          >
            <source src='/video.mp4' type='video/mp4'/>
          </video>
        </div>
        <div className='flex flex-col relative m-auto items-center overflow-hidden'>
          <h2 className='relative text-[4vw] font-medium'>
            Kelompok Inggris
          </h2>
          <h2 className='relative text-[10px] md:text-[16px]'>
            Consists of not just anyone, but extraordinary people
          </h2>
        </div>
      </div>
      {/* <div className='flex h-screen w-full bg-white'>
        test
      </div> */}
      <MemberPage/>
      <MemoriesPage/>
    </main>
  )
}

