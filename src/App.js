import GetAxios from "./GetAxios"
import PostAxios from "./PostAxios"
import Create from "./components/Create"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Read from "./components/Read"
import Edit from "./components/Edit"
function App() {
	return (
		<>
			{/* <GetAxios /> */}
			{/* <PostAxios /> */}
			<div className="container">
				{/* <Create /> */}
				<Routes>
					<Route exact path="/" element={<Read />} />
					<Route exact path="/create" element={<Create />} />
					<Route exact path="/edit" element={<Edit />} />
				</Routes>
			</div>
		</>
	)
}

export default App
