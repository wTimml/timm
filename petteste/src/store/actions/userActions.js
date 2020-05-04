export const createUser = (users) => {
	return (dispatch, getState, { getFirebase, getFirestore }) =>{

		const firestore = getFirestore();
		firestore.collection('users').add({
			...users,
			createdAt: new Date()
		})
		dispatch({type: 'CREATE_USER', users});
	}

}