const initState= {
	projects: [
		{id:'1',title: 'Title test', content: 'teste content teste content teste content'},
		{id:'2',title: 'Title test1', content: 'teste content teste content teste content'},
		{id:'3',title: 'Title test2', content: 'teste content teste content teste content'},
		]

}

const projectReducer = (state = initState, action) =>{
	switch (action.type){
		case 'CREATE_PROJECT':
			console.log("created project", action.project)
		case 'CREATE_USER':
			console.log("created user", action.project)
			return state;
		case 'CREATE-PROJECT-ERROR':
			console.log('create user error', action.err)
			return state;

		default:
			return state;
	}
}

export default projectReducer;