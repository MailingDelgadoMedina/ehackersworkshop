import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">NSU e_HACKERs </span>
          Git to Love your Terminal Workshop series
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
        
            <p>
           
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
<Link  href="http://tinyurl.com/room4089" target='_blank'>
          <dl className="  mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              // ['Speaker', '1'],
              // ['People Attending', '2,091'],
              ['Venue', 'Carl Desantis Bldg Room 4079'],
              ['Location', '3050 Ray Ferrero Jr Blvd Davie, FL 33314'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm  text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 hover:text-green-600 ">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
</Link>

        </div>
      </Container>
    </div>
  )
}
