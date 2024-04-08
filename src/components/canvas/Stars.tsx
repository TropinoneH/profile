import { Canvas, PointsProps, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { PointMaterial, Points, Preload } from "@react-three/drei"
import { random } from "maath"
import THREE from "three"

const Stars = (props: PointsProps) => {
    const ref = useRef<THREE.Points>(null)
    // 最多生成4998个，否则会出现NaN的情况
    const sphere = random.inSphere(new Float32Array(4998), { radius: 1.2 }) as Float32Array

    useFrame((_, delta) => {
        if (!ref.current) return
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y += delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color={"#f272c8"} size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

const StarsCanvas = () => (
    <div className={"w-full h-auto absolute inset-0 z-[-1]"}>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <Stars />
            </Suspense>

            <Preload all />
        </Canvas>
    </div>
)

export default StarsCanvas
