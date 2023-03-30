import React from "react";
import "./topbar.scss";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const Topbar = ({ open, setOpen, handle }) => {
	return (
		<>
			<div className='topbar'>
				<div className='topbar__content'>
					<div className='left'>
						<div>
							<h4>
								{" "}
								Welcome to <span>Fast Admin Panel</span>{" "}
							</h4>
						</div>
					</div>
					<div className='right'>
						{open ? (
							<FormatAlignRightIcon className='bars' onClick={handle} />
						) : (
							<FormatAlignJustifyIcon className='bars' onClick={handle} />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;
