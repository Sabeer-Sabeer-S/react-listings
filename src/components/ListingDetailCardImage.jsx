// import React, { useState } from 'react'
// import { Carousel, CarouselContent,CarouselItem } from './ui'

// const ListingDetailCardImage = ({listing  }) => {
//     const [currentImageIndex, setcurrentImageIndex]= useState(0)
//   return (
// <>
// <img src={`/src/assets/${listing.images[currentImageIndex]}`}
//     <Carousel>
//         <CarouselContent>
//             {
//                 listing.images.map((image, index)=>(
//              <CarouselItem
//                 onclick={()=>setcurrentImageIndex(index)}
//                 isSelected={index === currentImageIndex}
//                 key={image} 
//                 className='basis-1/3 cursor-pointer'>
//                    <img
//                      className='h-52 w-full object-cover shadow-sm'
//                      src={`/src/assets/${index}`}
//                      alt={listing.name} />
//              </CarouselItem>
//                 ))
//             }
//         </CarouselContent>
//     </Carousel>
// </>
//   )
// }

// export default ListingDetailCardImage
  


import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { getImageUrl } from '@/lib/utils/images';

const ListingDetailsCardImages = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <img
        className='mb-4 h-[500px] w-full rounded-md object-cover'
        src={getImageUrl(listing.images[currentImageIndex])}
        alt={listing.name}
      />
      <Carousel className='mx-auto mb-4 w-[90%]'>
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem
              key={image}
              className='basis-1/3 cursor-pointer'
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className='h-52 w-full object-cover shadow-sm'
                src={getImageUrl(image)}
                alt={listing.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ListingDetailsCardImages;