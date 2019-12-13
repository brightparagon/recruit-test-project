import './App.css'

import React, { FC, useCallback, useState } from 'react'

import MasterCat from './components/MasterCat'
import SearchButton from './components/SearchButton'
import CatList from './components/CatList'

import { CAT_API_KEY, API_URL } from './api'
import { Cat } from './types'

const App: FC = () => {
  const [cats, setCats] = useState<Cat[]>([])

  const getRandom100Cats = useCallback(() => {
    fetch(`${API_URL}/v1/images/search?limit=100`, {
      headers: {
        'x-api-key': CAT_API_KEY,
      },
    })
    .then((response) => response.json())
    .then((cats: Cat[]) => setCats(cats))
    .catch(() => setCats([]))
  }, [])

  return (
    <div className="App">
      <div className="App__header">
        <MasterCat />
        <h1>Cat Family Management</h1>
        <MasterCat />
      </div>
      <SearchButton onClick={getRandom100Cats} />
      <CatList cats={cats} />
    </div>
  )
}

export default App
