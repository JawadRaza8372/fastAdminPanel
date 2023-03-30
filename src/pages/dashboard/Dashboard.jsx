import React, { useState } from "react";
import "./dashboard.scss";
import Topbar from "../../layout/topbar/Topbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import Card from "./Card";
import SearchIcon from "@mui/icons-material/Search";
import { Data } from "./cardApi";
import { useSelector } from "react-redux";

// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../../Firebase"
// import { doc, updateDoc } from 'firebase/firestore';

const Dashboard = () => {
	const { users } = useSelector((state) => state.project);
	const [searchQuery, setSearchQuery] = useState("");
	const [open, setOpen] = useState(false);

	const handle = () => {
		setOpen(!open);
	};

	const filterData = () => {
		if (searchQuery.length > 0) {
			return users?.filter(
				(item) =>
					item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.name.toLowerCase() === searchQuery.toLowerCase()
			);
		} else {
			return users;
		}
	};

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} handle={handle} />
			<div className='layout-2'>
				<Topbar open={open} setOpen={setOpen} handle={handle} />
				<div className='dashboard'>
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
					<div className='dashboard__left'>
						{filterData().map((curElm, index) => {
							return (
								<>
									<Card
										key={index}
										name={curElm.name}
										img={curElm.image}
										data={curElm}
									/>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
