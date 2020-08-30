import { search_movie } from '../actions/action';

const initialState = {
    text:'',
    movies: [],
    loading: false,
    movie:[]
};

export default function (state = initialState,action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return {
                ...state,
                text: action.payload,
                loading:false
            }
        case 'FETCH_MOVIES':
            return {
                ...state,
                movies:action.payload
            }
        default:
            return state;
    }
}