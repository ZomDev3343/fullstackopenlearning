import Course from "./Course"

function App() {

	const courses = [
		{
			name: 'Half Stack application development',
			id: 1,
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Test',
					exercises: 89,
					id: 4
				}
			]
		},
		{
			name: 'Test course',
			id: 2,
			parts: [
				{
					name: 'Fundamentals of test',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using test to pass data',
					exercises: 24,
					id: 2
				},
				{
					name: 'Test of a component',
					exercises: 2,
					id: 3
				},
				{
					name: 'Another Test',
					exercises: 13,
					id: 4
				}
			]
		}
	]
	
	return (
		<div>
			<h1>Web development curriculum</h1>
			{courses.map(course => <Course key={course.id} course={course} />)}
		</div>
	)
}

export default App
