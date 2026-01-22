import { twMerge } from 'tailwind-merge'

const Button = ({
  content = 'Button',
  className = '',
}) => {
  const baseClasses = `
    font-montserrat
    font-bold
    text-white
    bg-primary
    text-sm
    sm:text-base
    lg:text-xl
    px-5
    lg:px-10
    py-2.5
    lg:py-4
    rounded-sm
    sm:rounded-lg
    lg:rounded-[10px]
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
