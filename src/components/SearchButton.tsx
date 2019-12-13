import './SearchButton.css'

import React, { FC } from 'react'

interface Props {
  onClick: () => void
}

const SearchButton: FC<Props> = ({ onClick }) => {
  return (
    <div className="SearchButton">
      <button
        onClick={onClick}
      >
        Search random 100 cats!
      </button>
    </div>
  )
}

export default SearchButton
