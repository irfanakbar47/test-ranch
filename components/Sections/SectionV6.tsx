import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components';
import { marketing_solutions } from '@/constants'

const SectionV6 = () => {
  return (
    <SectionLayoutV1
      id="winning-solutions"
      topTitle="Winning Solutions"
      description="instaProtek combines a competitive warranty program with advanced marketing solutions."
      contentStyle="lg:w-[975px]"
    >
      <div className="flex maxContent gap-y-7 flex-col lg:gap-x-3 lg:flex-row lg:mb-0">
        {marketing_solutions.map((item) => (
          <div key={item.id} className="relative shadow-lg p-5 w-full lg:w-[260px] rounded-[10px] border-[0.5px] bg-blue-primary2">
						<CustomImage 
              src={item.imgUrl}
              alt={item.imgAlt}
              width={40}
              height={40}
              style={{ width: `40px`, height: `40px`, marginBottom: '16px' }}
              priority
						/>
            <p className="text-base break-words text-blue-primary1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionLayoutV1>
  )
}

export default SectionV6
