import React, { useEffect } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route, Navigate, Link } from "react-router-dom";
// import FAQ from './pages/verification/Verification'
import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import Forget from "./pages/signup/Forget";
import Studios from "./pages/Studios/Studios";
import Post from "./pages/post/Post";
import Verification from "./pages/verification/Verification";
import BanUnban from "./pages/banUnban/BanUnban";
import { setAuth } from "./store/authSlice";
import {
	setPosts,
	setLiveStreams,
	setStudioss,
	setUsers,
} from "./store/projectSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase";

const App = () => {
	const dispatch = useDispatch();

	const checkdata = async () => {
		const checklogin = await window.localStorage.getItem("findStudio@login");
		if (checklogin && checklogin === "login") {
			dispatch(setAuth({ isAuth: true }));
		} else {
			dispatch(setAuth({ isAuth: false }));
		}
	};
	useEffect(() => {
		checkdata();
		onSnapshot(collection(db, "Users"), (snapshot) => {
			const result = snapshot.docs.map((doc) => {
				return { id: doc?.id, ...doc.data() };
			});
			dispatch(setUsers({ users: result }));
		});
		onSnapshot(collection(db, "studio"), (snapshot) => {
			const result = snapshot.docs.map((doc) => {
				return { id: doc?.id, ...doc.data() };
			});
			dispatch(setStudioss({ studios: result }));
		});
		onSnapshot(collection(db, "liveStream"), (snapshot) => {
			const result = snapshot.docs.map((doc) => {
				return { id: doc?.id, ...doc.data() };
			});
			dispatch(setLiveStreams({ liveStream: result }));
		});
		onSnapshot(collection(db, "post"), (snapshot) => {
			const result = snapshot.docs.map((doc) => {
				return { id: doc?.id, ...doc.data() };
			});
			dispatch(setPosts({ posts: result }));
		});
	});
	let ProtectedRoute = ({ children }) => {
		const { isAuth } = useSelector((state) => state.auth);
		return isAuth ? children : <Navigate to='/' />;
	};
	let AuthRoute = ({ children }) => {
		const { isAuth } = useSelector((state) => state.auth);
		return isAuth ? <Navigate to='/users' /> : children;
	};
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<AuthRoute>
							<Login />
						</AuthRoute>
					}
				/>
				{/* <Route path='/signup' element={<Signup />} /> */}
				<Route
					path='/users'
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/studios'
					element={
						<ProtectedRoute>
							<Studios />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/post'
					element={
						<ProtectedRoute>
							<Post />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/verification'
					element={
						<ProtectedRoute>
							<Verification />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/ban-unban'
					element={
						<ProtectedRoute>
							<BanUnban />
						</ProtectedRoute>
					}
				/>
				{/* <Route
					path='/chat'
					element={
						<ProtectedRoute>
							<Chat />
						</ProtectedRoute>
					}
				/> */}
				{/* <Route path='/forget' element={<Forget />} /> */}
				{/* <Route
					path='/reports'
					element={
						<ProtectedRoute>
							<Reports />
						</ProtectedRoute>
					}
				/> */}
				<Route
					path='*'
					element={
						<div
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}>
							<h1 style={{ color: "#3d3d3d", marginTop: "20%" }}>
								{" "}
								Page Not Found{" "}
							</h1>
							<Link
								to='/'
								className='btn'
								style={{ background: "black", color: "white" }}>
								Home
							</Link>
						</div>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
