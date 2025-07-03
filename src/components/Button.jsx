import React from 'react'

const Button = ({ content = 'Button', font = "Montserrat", weight = "bold", textSize = "20", leading = "30", textColor = "#ffffff", bg = "#FF624C", paddingY = "16", paddingX = "40", radius = "10", border = 'none' }) => {
  return (
    <button style={{
      fontFamily: font,
      fontWeight: weight,
      fontSize: textSize + "px",
      padding: paddingY + "px" + " " + paddingX + "px",
      borderRadius: radius + "px",
      background: bg,
      color: textColor,
      lineHeight: leading+"px",
      border: border,
      cursor: 'pointer'
    }}>{content}</button>
  )
}

export default Button