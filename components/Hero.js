import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
});

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10 '>
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}><span className='textGradient'>Daily Smiley</span> assists you in tracking your <span className='textGradient'>day-to-day</span> feelings!</h1>
      <p className='text-lg sm:text-xl md:2xl text-center w-full mx-auto max-w-[600px]'>Create your mood record and see how you feel <span className='font-semibold'>on everyday of every year.</span></p>
        <CallToAction/>
      <Calendar demo/>
    </div>
  )
}
