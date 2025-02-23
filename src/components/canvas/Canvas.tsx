import { useState } from 'react'
import { Layer, Stage } from 'react-konva'
import Shape from '../shape/Shape'
import { CanvasProps, ShapeData } from '../types'

const Canvas = ({ tool, stageRef }: CanvasProps) => {
	const [figures, setFigures] = useState<ShapeData[]>([])

	const handleOnClick = (e: any) => {
		if (tool === 'cursor') return
		const stage = e.target.getStage()
		const stageOffset = stage.absolutePosition()
		const point = stage.getPointerPosition()

		setFigures((prev) => [
			...prev,
			{
				id: Date.now().toString(36),
				width: 100,
				height: 100,
				type: 'rect',
				x: point.x - stageOffset.x,
				y: point.y - stageOffset.y,
				text: '',
				html: '',
			},
		])
	}

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight}
			draggable={tool === 'cursor'}
			onClick={handleOnClick}
			ref={stageRef}
		>
			<Layer>
				{figures.map((figure) => (
					<Shape key={figure.id} {...figure} tool={tool} />
				))}
			</Layer>
		</Stage>
	)
}

export default Canvas
