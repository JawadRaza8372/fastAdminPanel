import React, { useState } from "react";
import Topbar from "../../layout/topbar/Topbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import "./studios.scss";
import "react-toastify/dist/ReactToastify.css";
import StudiosCard from "./StudiosCard";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Studios = () => {
	const { studios } = useSelector((state) => state.project);
	console.log(studios);
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handle = () => {
		setOpen(!open);
	};
	const filterData = () => {
		if (searchQuery.length > 0) {
			return studios?.filter(
				(item) =>
					item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.name.toLowerCase() === searchQuery.toLowerCase()
			);
		} else {
			return studios;
		}
	};

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} handle={handle} />
			<div className='layout-2'>
				<Topbar open={open} setOpen={setOpen} handle={handle} />
				<div className='search__bar'>
					<SearchIcon className='rightIcon' />
					<input
						type='text'
						placeholder='SEARCH'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					{/* <input type="text" placeholder='SEARCH' /> */}
				</div>
				<div className='Services' style={{ color: "#fff", padding: "40px" }}>
					{filterData().map((curElm, index) => {
						return (
							<>
								<StudiosCard key={index} data={curElm} />
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Studios;
