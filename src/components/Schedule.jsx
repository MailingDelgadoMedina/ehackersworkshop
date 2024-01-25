'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import Link from 'next/link'

const schedule = [
  {
    date: '( Jan. 25 ) Part 1: "Loving Your Terminal"',
    dateTime: '2024-25-01',
    summary:
      'The first part of the workshop is focused on going over the basics of the terminal.',
    timeSlots: [
      // {
      //   name: 'Mingle',
      //   description: 'Mingle with other attendees',
      //   start: '2:30PM',
      //   end: '3:00PM',
      // },
      {
        name: 'Discussion slides',
        link: 'https://www.canva.com/design/DAF62zqz3fM/Vx1rGVqcrA8YHg8w-jy0WA/edit?utm_content=DAF62zqz3fM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        description: 'Introduction and discussion of the terminal basic commands.',
        start: '12:00PM',
        end: '12:15PM',
      },
      {
        name: 'Pulse check Game',
        link: 'https://kahoot.it/',
        description: 'Kahoot game for review and engagement.',
        start: '12:15PM',
        end: '12:30PM',
      },
      {
        name: 'Practice what you learned',
         link: '/middleearth',
        description: 'Hands-on activity: "Middle Earth" exercise.',
        start: '12:30PM',
        end: '1:00PM',
      },
    
    ],
  },
  {
    date: 'Break',
    dateTime: '2024-25-01',
    summary:
   null,
    timeSlots: [
      {
        name: 'Break',
         link: 'https://',
        description: 'Time for some snacks and refreshments',
        start: '1:00PM',
        end: '1:15PM',
      },
     
     
     
    ],
  },
  // {
  //   date: '(Feb. 8) Part 2: "Git/GitHub Essentials',
  //   dateTime: '2024-09-02',
  //   summary:
  //     'We will be covering the fundamentals of Git and GitHub, including the meaning and practical usage of each basic command, so you can confidently navigate and utilize these essential tools for version control and collaborative development.',
  //   timeSlots: [
  //     {
  //       name: 'Discussion slides',
  //        link: 'https://',
  //       description: 'Introduction and discussion of GitHub and Git commands.',
  //       start: '4:15PM',
  //       end: '4:30PM',
  //     },
  //     {
  //       name: 'Pulse Check Game',
  //        link: 'https://',
  //       description: 'Kahoot game for review and engagement.',
  //       start: '4:30PM',
  //       end: '4:45PM',
  //     },
  //     {
  //       name: 'Practice what you learned',
  //        link: 'https://',
  //       description: 'Hands-on activity: Creating a repository and saving files in GitHub.',
  //       start: '4:45PM',
  //       end: '5:00PM',
  //     },
     
     
     
  //   ],
  // },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} EST`}
        >
  <Link href={timeSlot.link} target='_blank'>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
        
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            EST
          </p>
          </Link>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Git to Love your Terminal
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
         
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
