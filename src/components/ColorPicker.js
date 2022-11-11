import * as THREE from 'three';

function ColorPicker() {
    const handleClick = e => {
		//색상 패널 클릭시 만약 전역에 등록한 오브제가 없으면 종료
		if (!window.activeMesh) return;
		window.activeMesh.material.color = new THREE.Color(e.target.style.background);
	}
  return (
    <article className="colorPicker">
				<div style={{ background: 'blue' }} onClick={handleClick}></div>
				<div style={{ background: 'red' }} onClick={handleClick}></div>
				<div style={{ background: 'green' }} onClick={handleClick}></div>
				<div style={{ background: 'transparent' }} onClick={handleClick}></div>
			</article>
  );
}

export default ColorPicker;
