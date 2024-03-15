import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useLoader, useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from "@react-three/drei"

import { useControls } from 'leva'

extend({ OrbitControls })

// export default const Experience = () => {
//     const threeCanvas = useRef();
//     const { camera, gl } = useThree();
//     const destructuredTexture = new THREE.TextureLoader().load('/img/hero_slide_1.jpg');

//     return (
//         <>
//             <orbitControls args={ [ camera, gl.domElement ] } />

//             <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
//             <ambientLight intensity={ 1.5 } />

//             <mesh ref ={threeCanvas}  scale={0.5}>
//                 <boxGeometry 
//                     args={[5, 5, 5]}
//                 />
                
//                 <meshStandardMaterial 
//                     map={destructuredTexture}
                   
//                 />
//             </mesh>
//         </>
        
//     )
// };

   /*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

export default function Model(props) {
    const { nodes, materials } = useGLTF("img/BattleHeights_Diorama.glb");
    const dioramaRef = useRef();

    const { camera, gl } = useThree();




    // useFrame((state, delta) =>
    //   { 
    //     dioramaRef.current.rotation.y += delta
    //   })
    const options = useMemo(() => {
      return {
        x: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        y: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        z: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        visible: true,
        px: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        py: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        pz: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        // scale : {scale: 0.006 }
      }
    }, [])

    const controls = useControls('Polyhedron A', options);

    return (
    <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight />
        <ambientLight intensity={ 1.5 } />
        <group 
            ref={ dioramaRef }
            rotation={[controls.x, controls.y, controls.z]}
            position={[controls.px, controls.py, controls.pz]}
            // scale={ controls.scale } 
            scale={ 0.006  } 
            {...props} 
            dispose={null}>
          <group>
            <group position={[0, 111.658, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_1.geometry}
                material={materials.pierre}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_2.geometry}
                material={materials.skeleton}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_3.geometry}
                material={materials.human}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_4.geometry}
                material={materials["humain, hair"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_5.geometry}
                material={materials.nature_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_6.geometry}
                material={materials.bois}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_7.geometry}
                material={materials["bois.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_8.geometry}
                material={materials.nature_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_9.geometry}
                material={materials.nature_3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_10.geometry}
                material={materials["bois.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_11.geometry}
                material={materials["nature_3.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_12.geometry}
                material={materials["nature_2.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_13.geometry}
                material={materials["nature_1.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_14.geometry}
                material={materials.water}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_15.geometry}
                material={materials.pierre_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_16.geometry}
                material={materials["nature_1.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_17.geometry}
                material={materials.sword_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_18.geometry}
                material={materials.sword_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_19.geometry}
                material={materials.shield}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_20.geometry}
                material={materials["bois.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_21.geometry}
                material={materials.bois_bout}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_22.geometry}
                material={materials["bois.004"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_23.geometry}
                material={materials.eyes}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_24.geometry}
                material={materials.eyes_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_25.geometry}
                material={materials.hairs}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_26.geometry}
                material={materials.chevalier}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.scene_import002_27.geometry}
                material={materials.croix}
              />
            </group>
          </group>
        </group>
      </>
    );
  }
  
  useGLTF.preload("img/BattleHeights_Diorama.glb");
  