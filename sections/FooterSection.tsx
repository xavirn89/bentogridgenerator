import React from 'react'
import ClickButton from '@/components/ClickButton'
import { Direction } from '@/types/global'

const iconCoffe = <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Environment / Coffe_To_Go"> <path id="Vector" d="M6.68604 15H17.3146M6.51465 13H17.4861M7.74316 7H16.2571M7.74316 7C7.13829 7 6.8358 7 6.61279 7.12093C6.41686 7.22718 6.26205 7.3963 6.17292 7.60059C6.07151 7.83303 6.0973 8.13407 6.14893 8.73633L6.94921 18.073C7.0377 19.1053 7.08203 19.6225 7.31149 20.0132C7.51358 20.3572 7.81426 20.6327 8.17432 20.8047C8.58318 21 9.10126 21 10.1377 21H13.8628C14.8992 21 15.4174 21 15.8263 20.8047C16.1864 20.6327 16.4869 20.3572 16.689 20.0132C16.9185 19.6225 16.9628 19.1056 17.0513 18.073L17.8517 8.73471C17.9033 8.13312 17.929 7.8329 17.8276 7.60059C17.7385 7.3963 17.5838 7.22718 17.3878 7.12093C17.1648 7 16.862 7 16.2571 7M7.74316 7H6.7499C5.85031 7 5.40023 7 5.13867 6.81152C4.90778 6.64515 4.75884 6.38816 4.72894 6.10515C4.69504 5.78431 4.91871 5.3929 5.36568 4.6107L5.36621 4.60977C5.70039 4.02496 5.86748 3.73255 6.10197 3.51953C6.31161 3.32909 6.55925 3.18544 6.82861 3.09791C7.12991 3 7.46658 3 8.14014 3H15.8604C16.5339 3 16.8707 3 17.172 3.09791C17.4413 3.18544 17.6888 3.32909 17.8984 3.51953C18.1329 3.73255 18.3 4.02496 18.6342 4.60977C19.0813 5.39224 19.3053 5.78425 19.2714 6.10515C19.2415 6.38816 19.0925 6.64515 18.8616 6.81152C18.6001 7 18.1497 7 17.2501 7H16.2571" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
const iconGithub = <svg width="32px" height="32px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>

const FooterSection = () => {
  return (
    <div className='flex h-16 items-start mb-2 md:mb-0 md:items-end'>
      <div className='flex flex-grow gap-2 justify-start'>
        <ClickButton
          icon={iconGithub}
          color='bg-white'
          url={"https://github.com/xavirn89"}
          tooltipDirection={Direction.TOP}
          tooltipText='Github Profile'
        />
        <ClickButton
          icon={iconCoffe}
          color='bg-white'
          url={"https://buymeacoffee.com/xavirn"}
          tooltipDirection={Direction.TOP}
          tooltipText='Buy me a coffee!'
        />
      </div> 
    </div>
  )
}

export default FooterSection