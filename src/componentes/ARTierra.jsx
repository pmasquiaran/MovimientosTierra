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

				<a-entity
					light="type: ambient; intensity: 2;"
				></a-entity>

				<a-entity
					environment="preset: default; lighting: ambient;"
				></a-entity>

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

<a-circle
	position="0 0 -0.25"
	rotation="-45 0 0"
	radius="2.0"
	material="color: #ffffff; opacity: 0.6; transparent: true; depthTest: true; depthWrite: true"
></a-circle>

					<a-entity
						class="planeta"
						id="tierra-container"
						position="0 0 0.25"
						rotation="-45 0 0"
						scale="0.05 0.05 0.05"
						gltf-model="/modelo/tierra-movimientos.glb"
						transparent-model="value: 0.9"
					></a-entity>
				</a-marker>

			</a-scene>
		</div>
	);
}

export default ARTierra
