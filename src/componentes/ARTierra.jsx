function ARTierra() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; debug: false; detectionMode: mono;"
				renderer="logarithmicDepthBuffer: true; precision: medium;"
			>

				<a-entity
					camera="active: true;"
					arjs-camera="smooth: true; smoothCount: 5; smoothTolerance: 0.01; smoothThreshold: 2;"
				></a-entity>

				<a-entity light="type: ambient; intensity: 3;"></a-entity>
				<a-entity light="type: hemisphere; intensity: 1.5; groundColor: #ffffff;"></a-entity>

				<a-marker
					type="pattern"
					url="/marcador/tierra.patt"
					id="tierra-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: tierra-container"
				>
{/*
					<a-plane
						position="0 0 -0.75"
						rotation="-45 0 0"
						height="6"
						width="6"
						material="src: url(/textura/nebula.webp); opacity: 0.6; transparent: true; shader: standard; side: double; roughness: 1; metalness: 0;"
					></a-plane>
*/}
					<a-entity
						class="planeta"
						id="tierra-container"
						position="0 0 -0.75"
						rotation="0 0 0"
						scale="0.75 0.75 0.75"
						gltf-model="/modelo/tierra-movimientos.glb"
						transparent-model="value: 0.9"
					></a-entity>
				</a-marker>

			</a-scene>
		</div>
	);
}

export default ARTierra
