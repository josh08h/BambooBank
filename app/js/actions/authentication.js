const createUser = () => {
  return {
    type: 'CREATE_USER'
  };
};

const createUserFailure = (err) => {
	return {
		type: 'CREATE_USER_FAILURE',
		payload: {
			error: err.message
		}
	}
}

const createUserSuccess = (user) => {
	return {
		type: 'CREATE_USER_SUCCESS',
		payload: {
			user: user.uid
		}
	}
}

export const addUser =  (email, password) => {
	return (dispatch) => {
		dispatch(createUser());
		firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userData)=>{
     dispatch(createUserSuccess(userData));
    })
    .catch((err)=>{
     dispatch(createUserFailure(err))
    });
	}
}

const loginUserRequest = () => {
	return {
		type: 'LOGIN_USER'
	}
}

const loginUserSuccess = (user) => {
	return {
		type: 'LOGIN_USER_SUCCESS',
		payload: {
			user: user.uid
		}
	}
}

const loginUserFailure = (err) => {
	return {
		type: 'LOGIN_FAILURE',
		payload: {
			error: err.message
		}
	}
}

export const loginUser = (email, password) => {
	return (dispatch) => {
		dispatch(loginUserRequest());
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userData)=>{
				dispatch(loginUserSuccess(userData))
			})
			.catch((err) =>{
				dispatch(loginUserFailure(err))
			})

	}
}

const logoutUserFailure = () => {
	return {
		type: 'LOGOUT_FAILURE',
		payload: {
			error: err.message
		}
	}
}

const logoutUserSuccess = () => {
	return {
		type: 'LOGOUT_USER_SUCCESS'
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut()
			.then(()=>{
				dispatch(logoutUserSuccess())
			})
			.catch((err)=>{
				dispatch(logoutUserFailure(err))
			})
	}
}