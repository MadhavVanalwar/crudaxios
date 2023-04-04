import React, { useEffect, useState } from "react"
import Axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com/posts"

const GetAxios = () => {
	const [mydata, setMyData] = useState([])
	useEffect(() => {
		Axios.get(baseURL)
			.then((response) => {
				console.log(response.data)
				setMyData(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	return (
		<>
			<div className="App">
				<h1>Get Axios</h1>
				{/* <h1>{mydata.id}</h1>
			<h1>{mydata.title}</h1>
			<h1>{mydata.body}</h1> */}

				{mydata.map((item) => {
					const { id, title, body } = item
					return (
						<>
							<div className="data" key={id}>
								<h1>{id}</h1>
								<h1>{title.slice(0, 10).toUpperCase()}</h1>
								<h1>{body.slice(0, 50).toLowerCase()}</h1>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default GetAxios
