import React, {Suspense} from 'react'
import { AltNavbar, AltFooter } from '@/components'

export default function ProductLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<></>}>
      <AltNavbar />
      <section className='min-h-screen mx-4 md:m-0'>
        {children}
      </section>
      <AltFooter />
    </Suspense>
  );
}
