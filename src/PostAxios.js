import axios from "axios"
import React, { useState } from "react"

const PostAxios = () => {
	const [my_title, setTitle] = useState("")
	const [my_body, setBody] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: my_title,
				body: my_body,
			})
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error.message)
			})
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">Enter Title:</label>
				<input
					type="text"
					name="title"
					value={my_title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br />
				<br />
				<label htmlFor="">Enter Body:</label>
				<input
					type="text"
					name="body"
					value={my_body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<br />
				<br />
				<button type="submit" value="Post">
					Submit
				</button>
			</form>
		</>
	)
}

export default PostAxios
