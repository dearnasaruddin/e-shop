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
    px-5
    py-2.5
    sm:text-xl
    sm:px-10
    sm:py-4
    rounded-sm
    sm:rounded-[10px]
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
