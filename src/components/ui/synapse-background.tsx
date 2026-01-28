// src/components/ui/synapse-background.tsx
"use client";

import React, { useRef, useEffect, ReactNode } from 'react'
import * as THREE from 'three'

export interface SynapseBackgroundProps {
  children?: ReactNode
  particleCount?: number
  lineColor?: number
  particleColor?: number
  pulseColor?: number
  connectionDistance?: number
  width?: number
  height?: number
  ariaLabel?: string
  className?: string
}

const SynapseBackground: React.FC<SynapseBackgroundProps> = ({
  children,
  particleCount = 5000,
  lineColor = 0x0066ff,
  particleColor = 0x88ccff,
  pulseColor = 0x0088ff,
  connectionDistance = 80,
  width,
  height,
  ariaLabel = 'Interactive 3D synapse network background',
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | undefined>(undefined)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return

    const container = mountRef.current
    
    // Wait for container to have dimensions
    const initRenderer = () => {
      if (!mountRef.current) return
      
      const containerWidth = container.clientWidth || window.innerWidth
      const containerHeight = container.clientHeight || window.innerHeight
      
      if (containerWidth === 0 || containerHeight === 0) {
        // Retry after a short delay if container hasn't sized yet
        setTimeout(initRenderer, 100)
        return
      }
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (!mountRef.current || rendererRef.current) return
        initializeThree(container, containerWidth, containerHeight)
      })
    }
    
    // Start initialization after a small delay to ensure container is mounted
    setTimeout(initRenderer, 0)
    
    const initializeThree = (container: HTMLDivElement, containerWidth: number, containerHeight: number) => {
      if (rendererRef.current) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        60,
        containerWidth / containerHeight,
        1,
        1000
      )
      camera.position.z = 250

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(containerWidth, containerHeight)
      renderer.setClearColor(0x000000, 0) // Transparent background
      const canvas = renderer.domElement
      canvas.style.position = 'absolute'
      canvas.style.top = '0'
      canvas.style.left = '0'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.pointerEvents = 'none'
      container.appendChild(canvas)
      rendererRef.current = renderer

      // Build particles
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 800 - 400
        positions[i * 3 + 1] = Math.random() * 800 - 400
        positions[i * 3 + 2] = Math.random() * 800 - 400
        const c = new THREE.Color(particleColor)
        colors[i * 3] = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const pts = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size: 3,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          transparent: true,
          opacity: 1.0,
          sizeAttenuation: true,
        })
      )
      scene.add(pts)

      // Build lines
      const linePos: number[] = []
      const pArr = geo.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pArr[i * 3] - pArr[j * 3]
          const dy = pArr[i * 3 + 1] - pArr[j * 3 + 1]
          const dz = pArr[i * 3 + 2] - pArr[j * 3 + 2]
          if (Math.hypot(dx, dy, dz) < connectionDistance) {
            linePos.push(
              pArr[i * 3],
              pArr[i * 3 + 1],
              pArr[i * 3 + 2],
              pArr[j * 3],
              pArr[j * 3 + 1],
              pArr[j * 3 + 2]
            )
          }
        }
      }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePos), 3)
    )
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: 0.7 })
    )
    scene.add(lines)

      // Mouse pulse vector
      const mouse = new THREE.Vector2(-100, -100)
      const onMouseMove = (e: MouseEvent) => {
        if (!mountRef.current) return
        const rect = mountRef.current.getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      }
      container.addEventListener('mousemove', onMouseMove)

      // Resize handler
      const onResize = () => {
        if (!mountRef.current || !rendererRef.current) return
        const containerWidth = mountRef.current.clientWidth || window.innerWidth
        const containerHeight = mountRef.current.clientHeight || window.innerHeight
        camera.aspect = containerWidth / containerHeight
        camera.updateProjectionMatrix()
        rendererRef.current.setSize(containerWidth, containerHeight)
      }
      window.addEventListener('resize', onResize)
      
      // Use ResizeObserver for better container size tracking
      const resizeObserver = new ResizeObserver(() => {
        onResize()
      })
      resizeObserver.observe(container)

      // Animation
      let animationFrameId: number
      const animate = () => {
        if (!rendererRef.current) return
        animationFrameId = requestAnimationFrame(animate)
        scene.rotation.y += 0.0002
        scene.rotation.x += 0.0001

        // Pulse effect
        const mv = new THREE.Vector3(mouse.x, mouse.y, 0.5)
          .unproject(camera)
          .sub(camera.position)
          .normalize()
        const dist = -camera.position.z / mv.z
        const ptr = camera.position.clone().add(mv.multiplyScalar(dist))

        const colArr = geo.attributes.color.array as Float32Array
        const base = new THREE.Color(particleColor)
        const pulseClr = new THREE.Color(pulseColor)
        for (let i = 0; i < particleCount; i++) {
          const dx = pArr[i * 3] - ptr.x
          const dy = pArr[i * 3 + 1] - ptr.y
          const t = Math.max(0, 1 - Math.hypot(dx, dy) / 100)
          const mix = base.clone().lerp(pulseClr, t)
          const curr = new THREE.Color().fromArray(colArr, i * 3)
          curr.lerp(mix, 0.1).toArray(colArr, i * 3)
        }
        geo.attributes.color.needsUpdate = true

        rendererRef.current.render(scene, camera)
      }
      animate()

      // Store cleanup function
      cleanupRef.current = () => {
        container.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        resizeObserver.disconnect()
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        if (rendererRef.current) {
          rendererRef.current.dispose()
          const canvasEl = container.querySelector('canvas')
          if (canvasEl) {
            container.removeChild(canvasEl)
          }
          rendererRef.current = undefined
        }
      }
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [
    particleCount,
    lineColor,
    particleColor,
    pulseColor,
    connectionDistance,
    width,
    height,
  ])

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ width: width ?? '100%', height: height ?? '100%', position: 'relative' }}
    >
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <div className="relative z-10 w-full h-full pointer-events-auto">{children}</div>
    </div>
  )
}

export default SynapseBackground
