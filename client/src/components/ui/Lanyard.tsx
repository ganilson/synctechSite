/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// Using @assets alias for easier management in this project
// IMPORTANT: USER MUST UPLOAD card.glb AND lanyard.png TO attached_assets folder
// Using @assets alias with public fallbacks for immediate functionality
// IMPORTANT: You can replace these with local files once uploaded to attached_assets
// Assets are handled via remote URLs to avoid build errors if local files are missing
// You can upload card.glb and lanyard.png to attached_assets folder if you want to use them localy
// and then use import statements or dynamic imports.
const cardGLB_local = null;
const lanyard_local = null;

const ASSET_URLS = {
    card: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5hu9baD9i9S8vS5sWVe9vA/235ae8f26a7ee7f8a7e78070d6560413/card.glb",
    lanyard: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg"
};

import * as THREE from 'three';
import './Lanyard.css';
import { Suspense } from 'react';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 15] as [number, number, number], gravity = [0, -40, 0] as [number, number, number], fov = 20, transparent = true }) {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="lanyard-wrapper">
            <Canvas
                camera={{ position: position, fov: fov }}
                dpr={[1, isMobile ? 1.5 : 2]}
                gl={{ alpha: transparent }}
                onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
            >
                <ambientLight intensity={Math.PI} />
                <Suspense fallback={null}>
                    <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
                        <Band isMobile={isMobile} />
                    </Physics>
                </Suspense>
                <Environment blur={0.75}>
                    <Lightformer
                        intensity={2}
                        color="white"
                        position={[0, -1, 5]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[-1, -1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[1, 1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={10}
                        color="white"
                        position={[-10, 0, 14]}
                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                        scale={[100, 10, 1]}
                    />
                </Environment>
            </Canvas>
        </div>
    );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
    const band = useRef<any>(),
        fixed = useRef<any>(),
        j1 = useRef<any>(),
        j2 = useRef<any>(),
        j3 = useRef<any>(),
        card = useRef<any>();
    const vec = new THREE.Vector3(),
        ang = new THREE.Vector3(),
        rot = new THREE.Vector3(),
        dir = new THREE.Vector3();
    const segmentProps = { type: 'dynamic' as const, canSleep: true, colliders: false as const, angularDamping: 4, linearDamping: 4 };

    // Try loading local files first, then fallback to public URLs
    const cardModel = cardGLB_local || ASSET_URLS.card;
    const lanyardTexture = lanyard_local || ASSET_URLS.lanyard;

    const { nodes, materials } = useGLTF(cardModel) as any;
    const texture = useTexture(lanyardTexture);

    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
    );
    const [dragged, drag] = useState<THREE.Vector3 | false>(false);
    const [hovered, hover] = useState(false);

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
    useSphericalJoint(j3, card, [
        [0, 0, 0],
        [0, 1.5, 0]
    ]);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab';
            return () => void (document.body.style.cursor = 'auto');
        }
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
        }
        if (fixed.current) {
            [j1, j2].forEach(ref => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
                const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
                ref.current.lerped.lerp(
                    ref.current.translation(),
                    delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
                );
            });
            curve.points[0].copy(j3.current.translation());
            curve.points[1].copy(j2.current.lerped);
            curve.points[2].copy(j1.current.lerped);
            curve.points[3].copy(fixed.current.translation());
            band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
        }
    });

    curve.curveType = 'chordal';
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={e => (e.currentTarget.releasePointerCapture(e.pointerId), drag(false))}
                        onPointerDown={e => (
                            e.currentTarget.setPointerCapture(e.pointerId),
                            drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
                        )}
                    >
                        {nodes.card ? (
                            <>
                                <mesh geometry={nodes.card.geometry}>
                                    <meshPhysicalMaterial
                                        map={materials.base.map}
                                        map-anisotropy={16}
                                        clearcoat={isMobile ? 0 : 1}
                                        clearcoatRoughness={0.15}
                                        roughness={0.9}
                                        metalness={0.8}
                                    />
                                </mesh>
                                <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
                                <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
                            </>
                        ) : (
                            /* Procedural Fallback Card */
                            <mesh>
                                <boxGeometry args={[0.8, 1.125, 0.05]} />
                                <meshPhysicalMaterial
                                    color="#FF7A3A"
                                    metalness={0.5}
                                    roughness={0.1}
                                    clearcoat={1}
                                />
                            </mesh>
                        )}
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    resolution={(isMobile ? [1000, 2000] : [1000, 1000]) as [number, number]}
                    useMap
                    map={texture}
                    repeat={[-4, 1] as [number, number]}
                    lineWidth={1}
                />
            </mesh>
        </>
    );
}
