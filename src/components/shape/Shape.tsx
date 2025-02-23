import html2canvas from 'html2canvas'
import Konva from 'konva'
import { useEffect, useRef, useState } from 'react'
import { Group, Rect } from 'react-konva'
import { Html } from 'react-konva-utils'
import { ShapeProps } from '../types'

const Shape = ({ x, y, width, height, tool, id, text }: ShapeProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState(text)
	const groupRef = useRef<Konva.Group>(null)
	const imageRef = useRef<Konva.Image | null>(null)

	const renderImage = async () => {
		const htmltext = document.getElementById(`htmltext_${id}`)
		if (!htmltext) return

		const canvas = await html2canvas(htmltext, {
			backgroundColor: 'transparent',
		})
		const shape = new Konva.Image({
			x: 0,
			y: height / 2,
			scaleX: 1 / window.devicePixelRatio,
			scaleY: 1 / window.devicePixelRatio,
			image: canvas,
		})

		groupRef.current?.add(shape)
		imageRef.current = shape
	}

	useEffect(() => {
		renderImage()
	}, [value])

	const handleClick = () => {
		if (tool === 'shape') return
		setIsEditing((prev) => !prev)
	}

	return (
		<Group x={x} y={y} onClick={handleClick} ref={groupRef} draggable>
			<Rect stroke={'black'} width={width} height={height} />
			{isEditing && (
				<Html>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div>
							<button onClick={() => setValue(`<b>${value}</b>`)}>B</button>
							<button onClick={() => setValue(`<i>${value}</i>`)}>I</button>
							<button onClick={() => setValue(`<u>${value}</u>`)}>U</button>
						</div>
						<textarea
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</Html>
			)}
		</Group>
	)
}

export default Shape
