import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'


function App() {
	const course = 'Half Stack application development'
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total exercices={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} />
		</div>
	)
}

export default App
