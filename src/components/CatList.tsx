import './CatList.css'

import React, { FC } from 'react'

import Cat from './Cat'

import { Cat as CatType } from '../types'

interface Props {
  cats: CatType[]
}

const CatList: FC<Props> = ({ cats }) => {
  return (
    <div className="CatList">
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  )
}

export default CatList
