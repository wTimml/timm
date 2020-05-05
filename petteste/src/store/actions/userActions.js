export const createUser = (users) => {
	return (dispatch, getState, { getFirebase, getFirestore }) =>{

		const firestore = getFirestore();
		firestore.collection('users').add({
			...users,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_USER', users });
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err});
		}
			)
		
	}

}