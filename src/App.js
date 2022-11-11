import './scss/style.scss';
import { Canvas, extend, useFrame } from 'react-three-fiber';
import { useRef } from 'react';


const Box = () => {
	useFrame((state)=>{			//useFrame 화면의주사율에 맞게 1초마다 재랜더링해주는아이
		console.log(state);
	})
	return(
		<mesh>
			<boxBufferGeometry />
			<meshBasicMaterial color='blue' />
		</mesh>

	)
}

function App() {
	return (
		<figure>
			<Canvas				
				style={{ background: '#111' }}
				// x,y,z 축
				camera={{ position: [7, 7, 7] }}>
											
				<axesHelper args={[6]} />
				<Box />
			</Canvas>
		</figure>
	);
}

export default App;
