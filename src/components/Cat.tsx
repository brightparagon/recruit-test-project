import './Cat.css'

import React, { FC } from 'react'

import { Cat as CatType } from '../types'

interface Props {
  cat: CatType
}

const Cat: FC<Props> = ({ cat }) => {
  return (
    <div className="Cat" draggable>
      <img src={cat.url} alt={`cat ${cat.id}`} />
      <button>
        favorite!
      </button>
    </div>
  )
}

export default Cat
