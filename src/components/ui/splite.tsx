'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleError = () => {
    console.error('Error loading Spline scene')
    setHasError(true)
  }

  if (!isClient || hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-background/50 backdrop-blur-sm`}>
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className={`${className} flex items-center justify-center bg-background/50 backdrop-blur-sm`}>
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onError={handleError}
      />
    </Suspense>
  )
}