import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import localFont from "next/font/local"

const memberData = [
  {
    id: 1,
    title: "Henson Divenso",
    image: "/images/henson.jpg",
  },
  {
    id: 2,
    title: "Arvin",
    image: "/images/arvin.jpg"
  },
  {
    id: 3,
    title: "William",
    image: "/images/william.jpg"
  },
  {
    id: 4,
    title: "Purnata Raharja",
    image: "/images/purnata.jpg",
  },
  {
    id: 5,
    title: "Wilsen",
    image: "/images/wilsen.jpg"
  },
  {
    id: 6,
    title: "Fery Raymond",
    image: "/images/fery.jpg"
  },
  {
    id: 7,
    title: "Handy Wijaya Sutanto",
    image: "/images/handy.jpg"
  },
  {
    id: 12,
    title: "Valent",
    image: "/images/valent.png"
  },
  {
    id: 13,
    title: "Hansen Wijaya",
    image: "/images/hansen.jpg"
  },
  {
    id: 9,
    title: "Joan Justian",
    image: "/images/joan.jpg"
  },
  {
    id: 8,
    title: "Abel Timothy Leonard",
    image: "/images/placeholder.jpg"
  },
  {
    id: 10,
    title: "Valentino",
    image: "/images/placeholder.jpg"
  },
  {
    id: 11,
    title: "Steven Bryan",
    image: "/images/placeholder.jpg"
  },
];

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
      <div className='flex h-screen w-full bg-green-50 justify-between'>
        <div className='z-10 flex flex-row absolute items-center h-[40px] w-full bg-black justify-between px-4'>
          <h2 className='flex my-auto font-clashdisplay font-bold'>
            Kelompok Inggris
          </h2>
          <div className='flex flex-row space-x-4'>
            <h2>  
              About Us
            </h2>
            <h2>  
              Members
            </h2>
            <h2>  
              Memories
            </h2>
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
        <div className='flex m-auto items-center flex-col'>
          <h2 className='z-20 text-[4vw] font-medium'>
            Kelompok Inggris
          </h2>
          <h2 className='z-20 text-[10px] md:text-[16px]'>
            Consists of not just anyone, but extraordinary people
          </h2>
        </div>
      </div>
      {/* <div className='flex h-screen w-full bg-white'>
        test
      </div> */}
      <MemberPage/>
    </main>
  )
}

export const MemberPage = () => {
  return (
    <div id="MemberList" className='flex items-center flex-col relative h-screen w-full bg-black justify-between'>
      <p className="font-bold text-4xl h-auto p-5">Our Members</p>
      <div className="grid grid-cols-2 md:grid-cols-3 relative h-full w-full">
        {
          memberData.map(item => (
            <MemberTile
              key={item.id}
              name={item.title}
              photoUrl={item.image}
            />
          ))
        }
      </div>
    </div>
  );
} 

export const MemberTile = ({name, photoUrl} : {name: string, photoUrl: string}) => {
  return (
    <>
      <div className="flex flex-col relative m-5 justify-center place-items-center">
        <div className='relative aspect-[9/16] items-center w-3/4 md:w-2/3'>
          <Image 
            src={photoUrl}
            alt={''}
            className='rounded-2xl'
            fill={true}
            priority={true}
          />
        </div>
        <div className="relative text-white font-bold bg-black px-[2px] py-[10px]">
          {name}
          {/* <p style={{
            'color': 'white',
            'fontWeight': 'bold',
            'backgroundColor': 'black',
            'padding': '2px 10px',
          }}>{name}</p>  */}
        </div>
      </div>
    </>
  );
}