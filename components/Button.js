import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
});

export default function Button(props) {
    const { text, dark, full, clickHandler } = props;
    return (
        <button onClick={clickHandler} className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border border-solid border-yellow-500 ' + (dark ? ' text-yellow-950 bg-yellow-500 ' : ' text-yellow-500 ') + (full ? 'grid place-items-center w-full ' : ' ')}>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>{text}</p>
        </button>
    )
}
