import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
	studios: [],
	posts: [],
	liveStream: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			if (action.payload.users === null) {
				state.users = [];
			} else {
				state.users = action.payload.users;
			}
		},
		setPosts: (state, action) => {
			if (action.payload.posts === null) {
				state.posts = [];
			} else {
				state.posts = action.payload.posts;
			}
		},
		setStudioss: (state, action) => {
			if (action.payload.studios === null) {
				state.studios = [];
			} else {
				state.studios = action.payload.studios;
			}
		},
		setLiveStreams: (state, action) => {
			if (action.payload.employs === null) {
				state.liveStream = [];
			} else {
				state.liveStream = action.payload.liveStream;
			}
		},
	},
});

export const { setLiveStreams, setStudioss, setPosts, setUsers } =
	projectSlice.actions;

export default projectSlice.reducer;
