import React from 'react'

export default function Image({...rest}) {
  return (
    <img {...rest} loading="lazy" draggable="false" />
  )
}
