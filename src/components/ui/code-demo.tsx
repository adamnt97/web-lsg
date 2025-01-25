'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center text-center">
          <div className="w-8 mb-4">
            <img 
              src="/lovable-uploads/3862ec0c-7b94-44da-b424-454bbad76959.png" 
              alt="LSG Logo" 
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            LSG©
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Construyendo el futuro del retail. Fusionamos innovación en construcción y retail para crear espacios comerciales extraordinarios.
          </p>
        </div>

        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}