export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,
    //remove after final product >> set back to null
    //token: 'BQB6D-cAYJZeiSqAWJ26_9QucGuJb2RhHPSbh48eKHfJ3Quhv5U_ehZxUtFuFSUnB-5Gc90SWcjCb0vNpnuO49igrw7ZEa2wHLActmtCoTJzxhYYBUOJQl87qpV-VeYub8ZwHpO1DgPbRj8xb-PC0egUJrFdF1wgvKxbYHbD4IJ4FEDa-8yS',
}

const reducer = (state, action) => {
    //console.log(action)

    //Action has two things in it ==> The type and the payload/data to be set in the state
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            //console.log('setting token >>> ', action.token);
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            //console.log("JUST RECIEVED THE PLAYLIST >>>", action.playlists)
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };       
            
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }; 
            
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default: 
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
    }
}

export default reducer