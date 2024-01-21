import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

const Experience = () => {
    const threeCanvas = useRef();
    const { camera, gl } = useThree()
    const destructuredTexture = new THREE.TextureLoader().load('/img/hero_slide_1.jpg');

    return (
        <>
            <orbitControls args={ [ camera, gl.domElement ] } />

            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
            <ambientLight intensity={ 1.5 } />

            <mesh ref ={threeCanvas}  scale={0.5}>
                <boxGeometry 
                    args={[5, 5, 5]}
                />
                
                <meshStandardMaterial 
                    map={destructuredTexture}
                   
                />
            </mesh>
        </>
        
    )
};

export default Experience;
