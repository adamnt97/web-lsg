'use client'

import { Suspense, lazy, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    console.error('Error loading Spline scene:', scene)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-background/50 backdrop-blur-sm`}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-muted-foreground">Error cargando el modelo 3D</p>
        </div>
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