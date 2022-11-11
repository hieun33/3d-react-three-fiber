import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useEffect, useRef } from 'react';

extend({ DragControls });

function Dragable(props) {
    const groupRef = useRef(null);
    const {camera, gl} = useThree();

    useEffect(() => {
        console.log(groupRef.current);
    },[])

  return (
    <group ref={groupRef}>
      {props.children}
    </group>
  );
}

export default Dragable;
