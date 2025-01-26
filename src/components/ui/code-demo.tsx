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
          <img 
            src="/lovable-uploads/70da87e7-4a1b-4bb0-b1e2-0b621284dfc7.png"
            alt="LSG Logo"
            className="w-48 md:w-64 h-auto mb-4"
          />
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