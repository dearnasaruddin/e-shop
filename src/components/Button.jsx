import React, { useState } from 'react'

const Button = ({ content = 'Button', width, font = "Montserrat", weight = "bold", textSize = "20", leading = "30", textColor = "#ffffff", bg = "#FF624C", paddingY = "16", paddingX = "40", radius = "10", border = 'none' }) => {

  let [screenSize, setScreenSize] = useState(window.screen.width > 576)


  return (
    <button style={screenSize ? {
      width: width,
      fontFamily: font,
      fontWeight: weight,
      fontSize: textSize + "px",
      padding: paddingY + "px" + " " + paddingX + "px",
      borderRadius: radius + "px",
      background: bg,
      color: textColor,
      lineHeight: leading + "px",
      border: border,
      cursor: 'pointer'
    } :
      {
        width: width,
        fontFamily: font,
        fontWeight: 600,
        fontSize: 16 + "px",
        padding: '8px 20px',
        borderRadius: radius + "px",
        background: bg,
        color: textColor,
        lineHeight: leading + "px",
        border: border,
        cursor: 'pointer'
      }
    }>{content}</button>
  )
}

export default Button