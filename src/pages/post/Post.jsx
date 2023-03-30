import React, { useState } from "react";
import Topbar from "../../layout/topbar/Topbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import "./post.scss";
import { useSelector } from "react-redux";

const Post = () => {
	const { posts } = useSelector((state) => state.project);
	const [open, setOpen] = useState(false);

	// PostId: "424995ba-7eae-458e-9311-3d18c60a992d";
	// PostImage: "";
	// Profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNdMgrRFXgRDPrxcKcc7VA_MAoE3zkphM_g&usqp=CAU";
	// Userid: "NsM1mcdXShPREtXArWhVPcazA973";
	// comment: [];
	// email: "kingjultb@icloud.com";
	// id: "424995ba-7eae-458e-9311-3d18c60a992d";
	// likes: [];
	// name: "Kingjul";
	// notification: "";
	// post: "What’s up team! ";

	const handle = () => {
		setOpen(!open);
	};

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} handle={handle} />
			<div className='layout-2'>
				<Topbar open={open} setOpen={setOpen} handle={handle} />
				{/* <div className='search__bar'>
					<SearchIcon className='rightIcon' />
					<input
						type='text'
						placeholder='SEARCH'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div> */}
				<div className='Services' style={{ color: "#fff", padding: "40px" }}>
					{posts?.map((item, index) => (
						<>
							<div key={index} className='card' style={{ width: "18rem" }}>
								<img
									src={item?.PostImage ? item?.PostImage : item?.Profile}
									className='card-img-top'
									alt='...'
								/>
								<div className='card-body'>
									<h2 className='card-title'>
										{item?.post ? item?.post : " --"}
									</h2>
									<p className='card-text'>
										Likes : {item?.likes?.length ? item?.likes?.length : "0"}{" "}
										Comments :{" "}
										{item?.comment?.length ? item?.comment?.length : "0"}
									</p>
									<div className='butns'>
										{/* <div className='de'>
											{" "}
											<button type='button'> Details </button>{" "}
										</div>
										<div className='re'>
											{" "}
											<button> Remove </button>{" "}
										</div> */}
									</div>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default Post;
