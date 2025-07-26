import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Simple floating code block
function SimpleCodeBlock({ position, text, color, delay = 0 }: { 
  position: [number, number, number], 
  text: string, 
  color: string,
  delay?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + delay) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 0.8, 0.2]} />
          <meshStandardMaterial
            color={color}
            roughness={0.3}
            metalness={0.1}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </mesh>
        <Text
          position={[0, 0, 0.12]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.3}
        >
          {text}
        </Text>
      </group>
    </Float>
  )
}

// Simple animated sphere
function AnimatedSphere({ position, color }: { 
  position: [number, number, number], 
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

// Simple rotating symbol
function FloatingSymbol({ position, symbol, color }: {
  position: [number, number, number],
  symbol: string,
  color: string
}) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.3
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={0.4}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  )
}

function Scene() {
  const codeBlocks = [
    { text: "const joy = () => {\n  return 'innovation';\n}", position: [-2.5, 1, 0] as [number, number, number], color: "#ff7b54" },
    { text: "function create() {\n  collaborate();\n  inspire();\n}", position: [2.5, -1, -1] as [number, number, number], color: "#60a5fa" },
    { text: "class Team {\n  buildDreams()\n}", position: [0, 2, -1.5] as [number, number, number], color: "#a855f7" },
    { text: "let innovation = {\n  heart: true\n}", position: [-1.5, -1.5, 1] as [number, number, number], color: "#34d399" }
  ]

  const spheres = [
    { position: [-1.5, 0, 0] as [number, number, number], color: "#ff7b54" },
    { position: [1.5, 1, -0.5] as [number, number, number], color: "#60a5fa" },
    { position: [0, -1, 0.5] as [number, number, number], color: "#a855f7" },
    { position: [1, 1.5, 0] as [number, number, number], color: "#34d399" }
  ]

  const symbols = [
    { symbol: "{}", position: [-3, 2.5, -1] as [number, number, number], color: "#ff7b54" },
    { symbol: "< />", position: [3, 2.5, -1] as [number, number, number], color: "#60a5fa" },
    { symbol: "[]", position: [-3, -2.5, 1] as [number, number, number], color: "#a855f7" },
    { symbol: "=>", position: [3, -2.5, 1] as [number, number, number], color: "#34d399" }
  ]

  return (
    <>
      {/* Simple lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff7b54" />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#60a5fa" />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={500} factor={2} />
      
      {/* Code blocks */}
      {codeBlocks.map((block, index) => (
        <SimpleCodeBlock
          key={index}
          position={block.position}
          text={block.text}
          color={block.color}
          delay={index * 0.8}
        />
      ))}
      
      {/* Animated spheres */}
      {spheres.map((sphere, index) => (
        <AnimatedSphere
          key={index}
          position={sphere.position}
          color={sphere.color}
        />
      ))}
      
      {/* Floating symbols */}
      {symbols.map((symbol, index) => (
        <FloatingSymbol
          key={index}
          position={symbol.position}
          symbol={symbol.symbol}
          color={symbol.color}
        />
      ))}
    </>
  )
}

export default function CodeAnimation3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}