import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import CanvasLoader from "../CanvasLoader.tsx"

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)")
        setIsMobile(mediaQuery.matches)
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches)
        }
        mediaQuery.addEventListener("change", handleMediaQueryChange)
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [])
    return (
        <Canvas
            frameloop={"demand"}
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

const Computers = ({ isMobile }: { isMobile: boolean }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf")
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor={"black"} />
            <pointLight intensity={1} />
            <spotLight intensity={1} penumbra={1} angle={0.12} position={[-20, 50, 10]} castShadow />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[0, -0.2, -0.2]}
            />
        </mesh>
    )
}

export default ComputersCanvas
