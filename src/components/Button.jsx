import { twMerge } from 'tailwind-merge'

const Button = ({
  content = 'Button',
  className = '',
}) => {
  const baseClasses = `
    font-montserrat
    font-bold
    text-white
    bg-[#FF624C]
    text-[16px]
    px-5
    py-2
    sm:text-[20px]
    sm:px-10
    sm:py-4
    rounded-[10px]
    cursor-pointer
    transition
  `

  return (
    <button className={twMerge(baseClasses, className)}>
      {content}
    </button>
  )
}

export default Button
