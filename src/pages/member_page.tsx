import Image from 'next/image'

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
        image: "/images/joan.JPG"
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
        image: "/images/betet.JPG"
    },
];

export default function MemberPage() {
    return (
      <div id="MemberList" className='flex items-center flex-col relative h-auto w-full bg-black justify-between'>
        <p className="font-bold text-4xl h-auto p-5">Our Members</p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative h-full w-full">
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
        <div className="flex flex-col relative m-5 justify-center place-items-center">
          <div className='group relative aspect-[9/16] items-center w-3/4 md:w-2/3 rounded-2xl overflow-hidden'>
            <div className='absolute z-10 duration-500 place-items-end ease-in-out group-hover:h-full h-0 w-full bg-white overflow-hidden items-center'>
              <p className='text-black'>
                test
              </p>
            </div>
            <Image 
              src={photoUrl}
              alt={''}
              fill={true}
              priority={true}
            />
          </div>
          <div className="relative text-white font-bold bg-black px-[2px] py-[10px] text-center">
            {name}
            {/* <p style={{
              'color': 'white',
              'fontWeight': 'bold',
              'backgroundColor': 'black',
              'padding': '2px 10px',
            }}>{name}</p>  */}
          </div>
        </div>
    );
  }
  