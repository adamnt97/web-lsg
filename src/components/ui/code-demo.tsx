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
            src="/lovable-uploads/c410f035-3ba4-46b5-a300-b582fa0109b9.png"
            alt="LSG Logo"
            className="w-36 md:w-52 h-auto mb-4"
          />
          <p className="mt-4 text-neutral-300 max-w-lg text-justify">
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