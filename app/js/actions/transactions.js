export const getUsernames = () => {
	return (dispatch) => {
		firebase.database().ref('users/').on('value', function(snapshot){
			console.log(snapshot.val())
		})
	}
}

const deductFunds = (amount) => {
	return {
		type: 'DEDUCT_FUNDS',
		payload: {
			amount
		}
	}
}

export const transferFunds = (amount, recipientId) => {
	return (dispatch, getState) => {
		dispatch(deductFunds(amount))
		firebase.database().ref('/users/' + recipientId + '/bambeuros').once('value')
		.then((snapshot)=>{
			let totalBambeuros = getState().user.bambeuros;
			let senderId = getState().user.id;
			let recipientTotalBambeuros = snapshot.val() + amount;
			let updates = {};
			updates['/users/' + senderId + '/bambeuros'] = totalBambeuros;
			updates['/users/' + recipientId + '/bambeuros'] = recipientTotalBambeuros;
			firebase.database().ref().update(updates);
		})
		
		
		
	}
}