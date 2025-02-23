export type ToolType = 'cursor' | 'shape'

export interface ShapeData {
	id: string
	x: number
	y: number
	width: number
	height: number
	text: string
	html: string
}

export interface CanvasProps {
	tool: ToolType
	stageRef: React.RefObject<any>
}

export interface ShapeProps extends ShapeData {
	tool: ToolType
}

export interface ControlProps {
	tool: ToolType
	setTool: (tool: ToolType) => void
}
