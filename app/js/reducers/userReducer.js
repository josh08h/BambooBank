const INITIAL_STATE = {
	id: null,
	status: null,
	loading: false,
	error: null,
	bambeuros: null
};

const userReducer = (state=INITIAL_STATE, action) => {
	switch (action.type){
		case 'CREATE_USER':
			return {
				...state,
				status: 'creating user',
				loading: 'true',
				error: null,
				id: null
			};
		case 'CREATE_USER_SUCCESS':
			return {
				...state,
				status: 'Success: User created',
				loading: false,
				error: null,
				id: action.payload.user,
				bambeuros: action.payload.bambeuros
			};
		case 'CREATE_USER_FAILURE':
			return {
				...state,
				status: 'Failure: User not created',
				loading: false,
				error: action.payload.error,
				id: null
			};
		case 'LOGIN_USER':
			return {
				...state,
				status: 'authenticating',
				loading: 'true',
				error: null,
				id: null
			};
		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				id: action.payload.user,
				status: 'authenticated',
				loading: false,
				error: null
			}
		case 'LOGIN_USER_FAILURE':
			return {
				...state,
				status: 'authentication failed',
				loading: false,
				error: action.payload.error,
				id: null
			}
		case 'LOGOUT_USER_SUCCESS':
			return {
				...state,
				id: null,
				status: null,
				loading: false,
				error: null
			}
		case 'GET_BALANCE_SUCCESS':
			return {
				...state,
				bambeuros: action.payload.bambeuros
			}
		case 'DEDUCT_FUNDS':
			return {
				...state,
				bambeuros: state.bambeuros - action.payload.amount
			}
		default:
			return state;
	}
}

export default userReducer;