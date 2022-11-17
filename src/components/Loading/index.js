import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
  const isLoading = useSelector((state) => state.loadingResponse)

  return (
    <div className='back-div-loading' style={{ display: isLoading.display }}>
      <div className='loading'></div>
    </div>
  )
}

export default Loading
