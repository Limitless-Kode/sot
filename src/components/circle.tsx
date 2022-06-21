import React from 'react'

interface ICircle {
  className: string
}

function Circle(props: ICircle) {
  const { className } = props;
  
  return (
    <div style={{ background: "linear-gradient(124.52deg, rgba(0, 169, 246, 0.6) 39.7%, rgba(0, 55, 156, 0.6) 71.71%)", opacity: 0.42 }} className={className} />
  )
}

export default Circle