'use client'
import { Days_One, Fugaz_One } from 'next/font/google';
import React, { useState } from 'react'
import { gradients, baseRating } from '@/utils';

  const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }

  const monthsArr = Object.keys(months);
    
  const now = new Date()
  const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
  });

export default function Calendar(props) {
  const { demo, completeData, handleSetMood } = props;
  
  const now = new Date();
  const currentMonth = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(monthsArr[currentMonth]);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  
  const numericMonth = monthsArr.indexOf(selectedMonth);
  const data = completeData?.[selectedYear]?.[numericMonth] || {};
  console.log('THIS MONTHS DATA: ', completeData?.[selectedYear]?.[numericMonth])
  function handleIncrementMonth(val) {
    if(numericMonth + val < 0) {
      setSelectedYear(curr => curr - 1);
      setSelectedMonth(monthsArr[monthsArr.length - 1]);
    } else if(numericMonth + val > 11) {
      setSelectedYear(curr => curr + 1);
      setSelectedMonth(monthsArr[0]);
    } else {
      setSelectedMonth(monthsArr[numericMonth + val]);
    }
  }

  
  const monthNow = new Date(selectedYear, monthsArr.indexOf(selectedMonth), 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(selectedYear, Object.keys(selectedMonth).indexOf(selectedMonth) + 1, 0).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = (Math.floor(daysToDisplay/7)) + (daysToDisplay % 7 ? 1 : 0);

  return (
    <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-5 gap-4'>
        <button onClick={() =>{
          handleIncrementMonth(-1);
        }} className='mr-auto text-yellow-400 text-lg sm:text-xl duration-200 hover:opacity-60'><i className="fa-solid fa-circle-chevron-left"></i></button>
        <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient ' + fugaz.className}>{selectedMonth}, {selectedYear}</p>
        <button onClick={() =>{
          handleIncrementMonth(+1);
        }} className='ml-auto text-yellow-400 text-lg sm:text-xl duration-200 hover:opacity-60'><i className="fa-solid fa-circle-chevron-right"></i></button>
      </div>
      <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
          {[...Array(numRows).keys()].map((row, rowIndex) =>{
            return(
              <div key={rowIndex} className='grid grid-cols-7 gap-1'>
                {dayList.map((dayOfWeek, dayOfWeekIndex) =>{
                  let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1);
                  
                  let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true;
                  
                  let isToday = dayIndex === now.getDate();
                  
                  if(!dayDisplay){
                    return(
                      <div className='bg-red-500' key={dayOfWeekIndex} />
                    )
                  }
                  
                  let color = demo ? gradients.yellow[baseRating[dayIndex]] :
                  dayIndex in data ? gradients.yellow[data[dayIndex]] :
                  'red-400';
                  
                  return(
                    <div style={{background: color}} className={'text-xs sm:text-sm border border-solid p-2 pb-10 flex items-center gap-2 justify-between rounded-lg ' + (isToday? ' border-red-300 ' : ' border-yellow-600 ') + (color === 'red-400' ? ' text-yellow-950 ' : ' text-red-500 ')} key={dayOfWeekIndex}>
                      <p>{dayIndex}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
    </div>
  </div>
  )
}
