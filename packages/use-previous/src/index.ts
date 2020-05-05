import { useRef, useEffect } from 'react'

/**
 * Hook which returns previous value of the variable
 * @param value - value to be tracked
 */
const usePrevious: <T>(value: T) => T = value => {
  const ref = useRef(value)

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export default usePrevious
