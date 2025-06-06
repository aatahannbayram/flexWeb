'use client'

import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-background">
            <div className="absolute inset-0 pointer-events-auto">
                <Spotlight fill="white" />
            </div>

            <div className="flex flex-col md:flex-row h-full items-center justify-center gap-4 px-6 md:px-12 py-12">
                {/* Left content */}
                <div className="flex-1 relative z-10 flex flex-col justify-center max-w-xl md:ml-auto md:mr-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 leading-tight">
                        Welcome To Flexlore Inc
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[#EC6726] mt-3 font-bold">
                        The New Way to Build and Grow with Flexlore Inc.
                    </h2>
                    <div className="mt-6 space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                            Smart Learning Journey Starts Here
                        </h3>
                        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                            Step-by-step business creation and tracking is now easier, smarter, and more flexible.
                            Flexlore Inc. is an intelligent learning and productivity network that transforms every skill,
                            idea, and venture into a meaningful journey.
                        </p>
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative h-[500px] w-full md:w-[45%]">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full scale-150"
                    />
                </div>
            </div>
        </div>
    )
} 