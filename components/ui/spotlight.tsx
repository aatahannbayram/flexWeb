'use client'

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface SpotlightProps {
    className?: string
    fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX
            const y = e.clientY
            setPosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className={cn(
                "pointer-events-none fixed h-[500px] w-[500px] opacity-40 transition-opacity duration-300",
                className
            )}
            style={{
                background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
                left: `${position.x - 250}px`,
                top: `${position.y - 250}px`,
            }}
        />
    )
} 