export const getUsernames = () => {
	return (dispatch) => {
		firebase.database().ref('users/').on('value', function(snapshot){
			console.log(snapshot.val())
		})
	}
}

export const transferFunds = (amount, recipient) => {
	
}