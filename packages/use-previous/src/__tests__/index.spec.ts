import { renderHook } from '@testing-library/react-hooks'
import usePrevious from '../index'
import { useState, useEffect } from 'react'

describe('usePrevious', () => {
  it('should return previous value with primitives', () => {
    const { result } = renderHook(() => {
      const [someState, setSomeState] = useState(10)
      const prevVal = usePrevious(someState)
      useEffect(() => {
        setSomeState(11)
      }, [])
      return { prev: prevVal, new: someState }
    })
    expect(result.current.prev).toBe(10)
    expect(result.current.new).toBe(11)
  })
})
