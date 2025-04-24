import { partner_companies } from '@/constants'
import { Carousel, CustomImage } from '@/components'
import React from 'react'

const Partners = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col items-center w-full maxContent gap-y-5 my-10">
        <h3 className="text-base lg:text-xl font-semibold text-blue-primary1">Used daily by small and large businesses.</h3>
        <ul className="flex justify-evenly">
          <Carousel>
            {partner_companies.map((company) => (
              <li key={company.id} className="flex flex-col items-center justify-center h-[160px] px-10">
								<CustomImage 
                  src={company.imgUrl}
                  alt={company.imgAlt}
                  width={400}
                  height={80}
                  style={{ width: `auto`, height: `80px` }}
                  priority
								/>
              </li>
            ))}
          </Carousel>
        </ul>
      </div>
    </section>
  )
};

export default Partners