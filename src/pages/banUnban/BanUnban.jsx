import React, { useState } from "react";
import Topbar from "../../layout/topbar/Topbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import "./ban.scss";
import { useSelector } from "react-redux";
import VerifyCard from "../verification/VerifyCard";
import { db } from "../../Firebase";
import { doc, updateDoc } from "firebase/firestore";

const BanUnban = () => {
	const [open, setOpen] = useState(false);
	const { users, studios } = useSelector((state) => state.project);
	const [isAccounts, setisAccounts] = useState(true);
	const switchdata = () => {
		setisAccounts(!isAccounts);
	};
	const updateDataFunction = (id, value) => {
		if (isAccounts) {
			const docRef = doc(db, "Users", `${id}`);
			updateDoc(docRef, { isBaned: value })
				.then((docRef) => {
					alert("User Data Updated");
					console.log("done");
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			const docRef = doc(db, "studio", `${id}`);
			updateDoc(docRef, { isBaned: value })
				.then((docRef) => {
					console.log("done");
					alert("Studio Data Updated");
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	const handle = () => {
		setOpen(!open);
	};

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} handle={handle} />
			<div className='layout-2'>
				<Topbar open={open} setOpen={setOpen} handle={handle} />
				<div style={{ padding: "40px" }}>
					<h1> BAN </h1>
					<div
						className='row w-100'
						style={{
							marginBottom: "30px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<button
							className='btn'
							style={{ background: "black", color: "white" }}
							onClick={switchdata}>
							{isAccounts ? "Show Studios" : "Show Accounts"}
						</button>
					</div>
					<h3 style={{ color: "black" }}>
						Active {isAccounts ? "Accounts" : "Studios"}{" "}
					</h3>
					<div className='Services'>
						{isAccounts &&
							users?.map((dat) => {
								if (!dat.isBaned) {
									return (
										<VerifyCard
											key={dat.id}
											docId={dat.id}
											title={dat.email}
											subtitle={"Name: " + dat.name + " Phone: " + dat.phone}
											status={dat.isBaned}
											text={"Ban "}
											imglink={dat.image}
											updateData={updateDataFunction}
										/>
									);
								} else {
									return null;
								}
							})}
						{!isAccounts &&
							studios?.map((dat) => {
								if (!dat.isBaned) {
									return (
										<VerifyCard
											key={dat.id}
											docId={dat.id}
											title={dat.email}
											subtitle={"Name: " + dat.name + " Phone: " + dat.phone}
											status={dat.isBaned}
											text={"Ban "}
											imglink={dat.image}
											updateData={updateDataFunction}
										/>
									);
								} else {
									return null;
								}
							})}
					</div>
					<h3 style={{ color: "black" }}>
						Banned {isAccounts ? "Accounts" : "Studios"}
					</h3>
					<div className='Services'>
						{!isAccounts &&
							studios?.map((dat) => {
								if (dat.isBaned) {
									return (
										<VerifyCard
											key={dat.id}
											docId={dat.id}
											title={dat.email}
											subtitle={"Name: " + dat.name + " Phone: " + dat.phone}
											status={dat.isBaned}
											text={"Ban "}
											imglink={dat.image}
											updateData={updateDataFunction}
										/>
									);
								} else {
									return null;
								}
							})}
						{isAccounts &&
							users?.map((dat) => {
								if (dat.isBaned) {
									return (
										<VerifyCard
											key={dat.id}
											docId={dat.id}
											title={dat.email}
											subtitle={"Name: " + dat.name + " Phone: " + dat.phone}
											status={dat.isBaned}
											text={"Ban "}
											imglink={dat.image}
											updateData={updateDataFunction}
										/>
									);
								} else {
									return null;
								}
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default BanUnban;
