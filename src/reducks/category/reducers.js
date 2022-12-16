import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CategoriesReducer = (state = initialState.categories, action) => {
	switch (action.type) {
		case Actions.FETCH_CATEGORIES:
			// console.log(action.payload.categories)
			var abc = [action.payload.categories]
			console.log(abc);
			console.log(action.payload.categories);
			return {
				...state,
				results: [...action.payload.categories.data]
			};
		default:
			return state;
	}
};
