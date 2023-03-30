import React from "react";
import "./sidebar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import VerifiedIcon from "@mui/icons-material/Verified";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = ({ open, setOpen, handle }) => {
	const dispatch = useDispatch();

	const logout = () => {
		window.localStorage.removeItem("findStudio@login");
		dispatch(setAuth({ isAuth: false }));
	};

	return (
		<>
			<div className={`sidebar ${open ? "openSidebar" : ""}`}>
				<div className='sidebarTop'>
					<h2> Fast </h2>

					<h2> ADMIN PANEL </h2>
				</div>
				<div className='sidebarBottom'>
					<ul>
						<Link className='link' to='/users' onClick={handle}>
							<li>
								{" "}
								<PeopleAltIcon style={{ fontSize: "17px" }} />{" "}
								<span> Users </span>{" "}
							</li>
						</Link>
						<Link className='link' to='/studios' onClick={handle}>
							<li>
								{" "}
								<GroupWorkIcon style={{ fontSize: "17px" }} />{" "}
								<span> Studios </span>{" "}
							</li>
						</Link>
						<Link className='link' to='/post' onClick={handle}>
							<li>
								{" "}
								<DynamicFeedIcon style={{ fontSize: "17px" }} />{" "}
								<span> Post </span>{" "}
							</li>
						</Link>
						<Link className='link' to='/verification' onClick={handle}>
							<li>
								{" "}
								<VerifiedIcon style={{ fontSize: "17px" }} />{" "}
								<span> Verification </span>{" "}
							</li>
						</Link>
						<Link className='link' to='/ban-unban' onClick={handle}>
							<li>
								{" "}
								<RemoveCircleOutlineIcon style={{ fontSize: "17px" }} />{" "}
								<span> Ban-UnBan </span>{" "}
							</li>
						</Link>
						{/* <Link className='link' to='/chat' onClick={handle}>
							<li>
								{" "}
								<ChatIcon style={{ fontSize: "17px" }} /> <span> Chat </span>{" "}
							</li>
						</Link>
						<Link className='link' to='/reports' onClick={handle}>
							<li>
								{" "}
								<GoReport style={{ fontSize: "17px" }} /> <span> Reports </span>{" "}
							</li>
						</Link> */}
					</ul>
				</div>
				<div className='logout'>
					<div onClick={logout}>
						<LogoutIcon style={{ fontSize: "17px" }} />
						<span> Logout </span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
