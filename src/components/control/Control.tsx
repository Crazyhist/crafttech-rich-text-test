import { ControlProps } from '../types'

const Control = ({ tool, setTool }: ControlProps) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				padding: '10px',
				background: 'rgba(255, 255, 255, 0.9)',
				borderRadius: '5px',
			}}
		>
			<label>
				<input
					type='radio'
					value='cursor'
					checked={tool === 'cursor'}
					onChange={(e) => setTool(e.target.value as ControlProps['tool'])}
				/>
				Взаимодействие
			</label>
			<label>
				<input
					type='radio'
					value='shape'
					checked={tool === 'shape'}
					onChange={(e) => setTool(e.target.value as ControlProps['tool'])}
				/>
				Добавление
			</label>
		</div>
	)
}

export default Control
