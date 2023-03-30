import React from "react";
import on from "../../images/on2.png";

const StudiosCard = ({ data }) => {
	// NotificationToken: '"cZu1TP9XSI2pUVlnZ3RjVH:APA91bHfF_hNtEKRwsz25hNhBpN_vHz9EYjQdWxQyVyN2990Mq19Yx2vTgND77_a23i4uPB5uLtYE8-wc_5tdskQpOJUbovZHK9ZVa7FkxOsTlO8x5QB8cleP9EeuL3UWOhL3oN_RkYR"';
	// OwnerID: "IJwp89oqrsZPY42LXB6e7nnevXp1";
	// Ownername: "Dream World SGD";
	// StudioImage: "https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
	// email: "dream@gmail.com";
	// id: "IJwp89oqrsZPY42LXB6e7nnevXp1";
	// image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
	// name: "Dream World SGD";
	// phone: "12313123";
	// price: "122";
	// reviews: 0;
	// service:""
	return (
		<>
			<div className='card' style={{ width: "18rem" }}>
				<img
					src={data?.StudioImage ? data?.StudioImage : on}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h2 className='card-title'>
						Name: {data?.name ? data?.name : "---"}
					</h2>
					<p className='card-text'>
						Email: {data?.email ? data?.email : "==="}
					</p>
					<p className='card-text'>
						Price Per Day : ${data?.price ? data?.price : "---"}
					</p>
					<p className='card-text'>
						Phone : ${data?.phone ? data?.phone : "---"}
					</p>
					<p className='card-text'>
						Service: {data?.service ? data?.service : "---"}
					</p>

					<div className='butns'>
						{/* <div className='de'>
							{" "}
							<button type='button' data-toggle='modal' data-target='#myModal'>
								{" "}
								Details{" "}
							</button>{" "}
						</div> */}
						{/* <div className='re'>
							{" "}
							<button> Remove </button>{" "}
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default StudiosCard;
