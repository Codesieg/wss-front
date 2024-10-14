import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useLoader, useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, useHelper, PivotControls} from "@react-three/drei";
import { useTranslation } from 'react-i18next' 

import { useControls } from 'leva';

import './experience.css';

extend({ OrbitControls });

export default function Model(props) {
    const dioramaRef = useRef();
    const pointRef = useRef();
    // const orbitControlsRef = useRef();
    // const { camera, gl } = useThree();
    // const spotRef = useRef();


    // useFrame((state, delta) =>
    //   { 
    //     dioramaRef.current.rotation.y += delta / 8;
    //   })

    const options = useMemo(() => {
      return {
        x: { value: 0.33, min: -5, max: Math.PI * 2, step: 0.01 },
        y: { value: -1.55, min: -5, max: Math.PI * 2, step: 0.01 },
        z: { value: 0.06, min: -5, max: Math.PI * 2, step: 0.01 },
        px: { value: 2.93, min: -5, max: Math.PI * 2, step: 0.01 },
        py: { value: -0.69, min: -5, max: Math.PI * 2, step: 0.01 },
        pz: { value: -0.20, min: -5, max: Math.PI * 2, step: 0.01 },
        lightx: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        lighty: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
        lightz: { value: 5, min: -5, max: Math.PI * 2, step: 0.01 },
        lightIntensity: { value: 1, min: -5, max: Math.PI * 2, step: 0.01 },
      }
    }, []);

    // useControls('Spot Light', {
    //   visible: {
    //     value: false,
    //     onChange: (v) => {
    //       spotRef.current.visible = v
    //     },
    //   },
    //   position: {
    //     x: 0,
    //     y: 2.30,
    //     z: 1.34,
    //     onChange: (v) => {
    //       spotRef.current.position.copy(v)
    //     },
    //   },
    //   color: {
    //     value: 'white',
    //     onChange: (v) => {
    //       spotRef.current.color = new THREE.Color(v)
    //     },
    //   },
    //   distance: {
    //     value: 2.8,
    //     onChange: (v) => {
    //       spotRef.current.distance = v
    //     },
    //   },
    //   angle: {
    //     value: Math.PI/4,
    //     onChange: (v) => {
    //       spotRef.current.angle = Math.PI/v
    //     },
    //   },
    //   intensity: {
    //     value: 60,
    //     onChange: (v) => {
    //       spotRef.current.intensity = v
    //     },
    //   }
    // })

    // console.log(spotRef.current);

    // useControls('Point Light', {
    //   visible: {
    //     value: false,
    //     onChange: (v) => {
    //       pointRef.current.visible = v
    //     },
    //   },
    //   position: {
    //     x: 2,
    //     y: 0,
    //     z: 0,
    //     onChange: (v) => {
    //       pointRef.current.position.copy(v)
    //     },
    //   },
    //   color: {
    //     value: 'white',
    //     onChange: (v) => {
    //       pointRef.current.color = new THREE.Color(v)
    //     },
    //   },
    // })

    const controls = useControls('Diorama', options);

    const isMobile = window.innerWidth < 768; 

    const { nodes, materials } = useGLTF("img/BattleHeights_Diorama.glb");

    // useHelper(spotRef, THREE.SpotLightHelper, 'cyan')

    // useEffect(() => {
    //   // Directly set the light's target once the components have mounted
    //     spotRef.current.target = dioramaRef.current;
      
    // }, []);

    return (
    <>
        <directionalLight position={[controls.lightx, controls.lighty, controls.lightz]} intensity={controls.lightIntensity}/>
        <group 
            ref={dioramaRef}
            rotation={[controls.x, controls.y, controls.z]}
            position= {isMobile ? [0.0, controls.py, controls.pz]  : [controls.px, controls.py, controls.pz]}
            scale={ 0.006  } 
            {...props} 
            dispose={null}>
          <group>
          <pointLight ref={pointRef} />
          
          <PivotControls anchor={ [ 0, 1, 0 ] }  depthTest={ false }>
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
          </PivotControls>
          </group>
        </group>
        <axesHelper args={[5]} />
      </>
    );
  }
  
  useGLTF.preload("img/BattleHeights_Diorama.glb");
  


  //   return (
  //     <>
  //       <orbitControls ref={ orbitControlsRef } args={ [ camera, gl.domElement ] } />
  //       <directionalLight />
  //       {/* <ambientLight intensity={ 1.5 } /> */}
  //       <group 
  //           ref={ dioramaRef }
  //           rotation={[options.x.value, options.y.value, options.z.value]}
  //           position= {isMobile ? [0.0, options.py.value, options.pz.value]  : [options.px.value, options.py.value, options.pz.value]}
  //           // position={ [options.px.value, options.py.value, options.pz.value]}
  //           scale={ 0.006 } 
  //           {...props} 
  //           dispose={null}>
  //           <mesh
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.scene_import002.geometry}
  //             material={materials.PaletteMaterial001}
  //             position={[0, 111.658, 0]}
  //             />
  //         </group>
  //         {/* <axesHelper args={[5]} /> */}
  //     </>
  //   );
  // }
  
  // useGLTF.preload("img/battleheights_diorama-compressed.glb");