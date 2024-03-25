import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useLoader, useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from "@react-three/drei";

import { useControls } from 'leva';

import './experience.css';

extend({ OrbitControls });

export default function Model(props) {
    const dioramaRef = useRef();
    const orbitControlsRef = useRef();
    const { camera, gl } = useThree();

    useFrame((state, delta) =>
      { 
        dioramaRef.current.rotation.y += delta / 4;
      })

    const options = useMemo(() => {
      return {
        x: { value: 0.33, min: -5, max: Math.PI * 2, step: 0.01 },
        y: { value: -1.55, min: -5, max: Math.PI * 2, step: 0.01 },
        z: { value: 0.06, min: -5, max: Math.PI * 2, step: 0.01 },
        px: { value: 2.93, min: -5, max: Math.PI * 2, step: 0.01 },
        py: { value: -0.69, min: -5, max: Math.PI * 2, step: 0.01 },
        pz: { value: -0.20, min: -5, max: Math.PI * 2, step: 0.01 },
        // scale : {scale: 0.006 }
      }
    }, []);

    // const controls = useControls('Diorama', options);

    // useEffect(() => {
    //   if (orbitControlsRef.current) {
    //     // Set the new target position here
    //     const newTarget = [5, 0, 0];
    //     orbitControlsRef.current.target.set(...newTarget);
    //     orbitControlsRef.current.update(); // Important to update the controls to apply the new target
    //   }
    // }, []); // Empty dependency array means this effect runs once on mount

    const isMobile = window.innerWidth < 768; 

    const { nodes, materials } = useGLTF("img/battleheights_diorama-compressed.glb");
    return (
      <>
        <orbitControls ref={ orbitControlsRef } args={ [ camera, gl.domElement ] } />
        <directionalLight />
        <ambientLight intensity={ 1.5 } />
        <group 
            ref={ dioramaRef }
            rotation={[options.x.value, options.y.value, options.z.value]}
            // position= {isMobile ? [0.0, options.py.value, options.pz.value]  : [options.px.value, options.py.value, options.pz.value]}
            position={ [options.px.value, options.py.value, options.pz.value]}
            scale={ 0.006 } 
            {...props} 
            dispose={null}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.scene_import002.geometry}
              material={materials.PaletteMaterial001}
              position={[0, 111.658, 0]}
              />
          </group>
          <axesHelper args={[5]} />
      </>
    );
  }
  
  useGLTF.preload("img/battleheights_diorama-compressed.glb");

  //   return (
  //   <>
  //       <orbitControls args={ [ camera, gl.domElement ] } />
  //       <directionalLight />
  //       <ambientLight intensity={ 1.5 } />
  //       <group 
  //           ref={ dioramaRef }
  //           rotation={[controls.x, controls.y, controls.z]}
  //           position={[controls.px, controls.py, controls.pz]}
  //           // scale={ controls.scale } 
  //           scale={ 0.006  } 
  //           {...props} 
  //           dispose={null}>
  //         <group>
  //           <group position={[0, 111.658, 0]}>
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_1.geometry}
  //               material={materials.pierre}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_2.geometry}
  //               material={materials.skeleton}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_3.geometry}
  //               material={materials.human}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_4.geometry}
  //               material={materials["humain, hair"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_5.geometry}
  //               material={materials.nature_1}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_6.geometry}
  //               material={materials.bois}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_7.geometry}
  //               material={materials["bois.001"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_8.geometry}
  //               material={materials.nature_2}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_9.geometry}
  //               material={materials.nature_3}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_10.geometry}
  //               material={materials["bois.002"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_11.geometry}
  //               material={materials["nature_3.001"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_12.geometry}
  //               material={materials["nature_2.001"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_13.geometry}
  //               material={materials["nature_1.001"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_14.geometry}
  //               material={materials.water}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_15.geometry}
  //               material={materials.pierre_2}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_16.geometry}
  //               material={materials["nature_1.002"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_17.geometry}
  //               material={materials.sword_1}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_18.geometry}
  //               material={materials.sword_2}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_19.geometry}
  //               material={materials.shield}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_20.geometry}
  //               material={materials["bois.003"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_21.geometry}
  //               material={materials.bois_bout}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_22.geometry}
  //               material={materials["bois.004"]}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_23.geometry}
  //               material={materials.eyes}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_24.geometry}
  //               material={materials.eyes_2}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_25.geometry}
  //               material={materials.hairs}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_26.geometry}
  //               material={materials.chevalier}
  //             />
  //             <mesh
  //               castShadow
  //               receiveShadow
  //               geometry={nodes.scene_import002_27.geometry}
  //               material={materials.croix}
  //             />
  //           </group>
  //         </group>
  //       </group>
  //     </>
  //   );
  // }
  
  // useGLTF.preload("img/battleheights_diorama-compressed.glb");
  

