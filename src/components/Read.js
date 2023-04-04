import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Read = () => {
	const [apiData, setApiData] = useState([])

	const getData = async () => {
		//to get data from api and print data browser
		await axios
			.get("https://642be68e208dfe2547226199.mockapi.io/crud")
			.then((res) => {
				// console.log(res.data)
				setApiData(res.data)
			})
	}

	const handleDelete = async (id) => {
		await axios
			.delete(`https://642be68e208dfe2547226199.mockapi.io/crud/${id}`)
			.then(() => {
				getData()
			})
	}

	function setDataToStorage(id, name, age, email) {
		localStorage.setItem("id", id)
		localStorage.setItem("name", name)
		localStorage.setItem("age", age)
		localStorage.setItem("email", email)
	}

	useEffect(() => {
		getData()
	}, [])

	getData()
	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<div className="mb-2 mt-2">
						<Link to="/create">
							<button className="btn btn-primary">Create New Data</button>
						</Link>
					</div>
					<table className="table table-bordered table-striped table-dark table-hover text-center">
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>AGE</th>
								<th>EMAIL</th>
								<th>EDIT</th>
								<th>DELETE</th>
							</tr>
						</thead>
						<tbody>
							{apiData.map((item, id) => {
								return (
									<tr key={id}>
										<td>{item.id}</td>
										<td>{item.e_name}</td>
										<td>{item.e_age}</td>
										<td>{item.e_email}</td>
										<td>
											<Link to="/edit">
												<button
													className="btn btn-primary"
													onClick={() =>
														setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)
													}>
													Edit
												</button>
											</Link>
										</td>
										<td>
											<button
												className="btn btn-danger"
												onClick={() => {
													if (window.confirm("Are you Sure To Delete Data ??"))
														handleDelete(item.id)
												}}>
												Delete
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Read
