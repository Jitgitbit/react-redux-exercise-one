const initialState = {
  posts:[
    {id:'1', title:'Kablam', body:'lalalalalalalalalalalalalaallalalaalalalalalalalalalala'},
    {id:'2', title:'Shazam', body:'dididididdidididiididididididididididididiidid'},
    {id:'3', title:'Baboof', body:'gegegegegegegegegegeegeggegegegegegegegegege'},
    {id:'4', title:'Patat', body:'hihihiihihhihhhihihiihihhiihihhihihihhiihhh'},
    {id:'5', title:'Wozowop', body:'jajajajajaajajajajajjajajajaajajjajajajaajajaj'},
    {id:'6', title:'REP', body:'nononononnonononnonononooononononnononoonnnononnonnonoonnonnoonnononoonnononoonnonono'},
  ]
}

const rootReducer = (state = initialState, action) => {
  console.log(`==============>> recieved ACTION:`, action)
  return state;
}


export default rootReducer;