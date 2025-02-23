// entities/Shape/ui/Shape.tsx
import { Group, Rect } from 'react-konva'
import { Html } from 'react-konva-utils'
import styles from './shape.module.scss'

const Shape = () => {
	return (
		<Group draggable>
			<Rect width={100} height={100} stroke='black' />
			<Html>
				<div className={styles.textContainer}>Твой текст</div>
			</Html>
		</Group>
	)
}

export default Shape
