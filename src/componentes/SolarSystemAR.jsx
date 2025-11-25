function SolarSystemAR() {
	return (
		<div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
{/*
			<div class="arjs-loader">
				<div>Cargando, por favor espera....</div>
			</div>
*/}
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
					url="/marcadores/death-star.patt"
					id="death-star-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: death-star-container"
				>
					<a-entity
						id="death-star-container"
						class="planeta"
						position="0 0.3 0"
						rotation="0 0 0"
						scale="0.05 0.05 0.05"
						visible="false"
					>
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
							transparent-model="value: 0.9"
							gltf-model="/modelos/death-star.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/sol.patt"
					id="sol-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: sol-container"
				>
					<a-entity
						id="sol-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="7.5 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/sol.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/mercurio.patt"
					id="mercurio-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: mercurio-container"
				>
					<a-entity
						id="mercurio-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="0.03 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/mercurio.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/venus.patt"
					id="venus-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: venus-container"
				>
					<a-entity
						id="venus-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="177 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/venus.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/tierra.patt"
					id="tierra-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: tierra-container"
				>
					<a-entity
						class="planeta"
						id="tierra-container"
						position="0 0.3 0"
						rotation="23.5 0 0"
						scale="0.5 0.5 0.5"
						visible="false"
					>
						<a-entity
							animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
							transparent-model="value: 0.9"
							gltf-model="/modelos/tierra.glb"
						></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/luna.patt"
					id="luna-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: luna-container"
				>
					<a-entity
						id="luna-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="6.68 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/luna.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/marte.patt"
					id="marte-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: marte-container"
				>
					<a-entity
						id="marte-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="25 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/marte.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/jupiter.patt"
					id="jupiter-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: jupiter-container"
				>
					<a-entity
						id="jupiter-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="3 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/jupiter.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/saturno.patt"
					id="saturno-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: saturno-container"
				>
					<a-entity
						id="saturno-container"
						position="0 0.5 0"
						scale="0.008 0.008 0.008"
						class="planeta"
						visible="false"
						rotation="116.7 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/saturno.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/urano.patt"
					id="urano-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: urano-container"
				>
					<a-entity
						id="urano-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="97.8 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/urano.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/neptuno.patt"
					id="neptuno-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: neptuno-container"
				>
					<a-entity
						id="neptuno-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						rotation="28.3 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/neptuno.glb"
							></a-entity>
					</a-entity>
				</a-marker>

				<a-marker
					type="pattern"
					url="/marcadores/pluton.patt"
					id="pluton-marker"
					emitevents="true"
					smooth="true"
					smoothCount="5"
					smoothTolerance="0.01"
					smoothThreshold="2"
					control-planeta="target: pluton-container"
				>
					<a-entity
						id="pluton-container"
						position="0 0.5 0"
						scale="0.2 0.2 0.2"
						class="planeta"
						visible="false"
						rotation="119.6 0 0">
							<a-entity
								animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
								gltf-model="/modelos/pluton.glb"
							></a-entity>
					</a-entity>
				</a-marker>

			</a-scene>
		</div>
	);
}

export default SolarSystemAR
