import React from "react";
import on from "../../images/on2.png";

const VerifyCard = ({
	title,
	subtitle,
	docId,
	status,
	text,
	imglink,
	updateData,
}) => {
	const updatefunction = () => {
		const newstatus = status === true ? false : true;
		updateData(docId, newstatus);
	};
	return (
		<>
			<div className='card' style={{ width: "100%" }}>
				<div className='card-body'>
					<img
						src={imglink ? imglink : on}
						className='card-img-top'
						alt='...'
					/>
					<h4 className='card-title'>{title}</h4>
					<h5 className='card-text'>{subtitle}</h5>
					<p>
						{text}: {status ? "true" : "false"}
					</p>
					<button onClick={updatefunction} className='btn btn-outline-light'>
						{" "}
						Change {text} Status{" "}
					</button>
				</div>
			</div>
		</>
	);
};

export default VerifyCard;
