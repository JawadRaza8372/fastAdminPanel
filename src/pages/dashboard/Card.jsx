import React from "react";
import on from "../../images/on2.png";

const Card = ({ name, img, data }) => {
	console.log(data);
	// Bio: "Set your Bio";
	// Notification: false;
	// NotificationToken: "";
	// Studio: false;
	// UserID: "AIYQOJlqiRQwmvha5Vx7NRnUX0E2";
	// email: "umeraftab44@gmail.com";
	// gender: "Other";
	// id: "AIYQOJlqiRQwmvha5Vx7NRnUX0E2";
	// image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNdMgrRFXgRDPrxcKcc7VA_MAoE3zkphM_g&usqp=CAU";
	// language: "English";
	// name: "Ummer";
	// password: "123456789";
	// phone: "123456789";
	// reviews: 0;
	//isBaned;false;
	//isVerified;true;
	return (
		<>
			<div className='one'>
				<div className='left'>
					<div className='pic'>
						<img src={data?.image ? data?.image : on} alt='' />
					</div>
					<div>
						<h3> Name: {data?.name ? data?.name : "---"} </h3>
						<h6> Email: {data?.email ? data?.email : "---"} </h6>
						<p>Phone : {data?.phone ? data?.phone : "---"}</p>
						<p>
							Verified : {data?.isVerified ? " True" : " False"} Account Status
							:{data?.isBaned ? " Baned" : " Active"}
						</p>
					</div>
				</div>
				<div className='right'>
					{/* {ban ? <div className='unban' onClick={onClick}><button>  Unban</button></div>
                        :
                        <div className='ban' onClick={onClick}><button>  Ban</button></div>
                    }  */}
				</div>
			</div>
		</>
	);
};

export default Card;
