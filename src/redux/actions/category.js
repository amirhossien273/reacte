import API from "../../api";

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';

export function getCategory() {
   
    return  ( dispatch ) => {
         API.getCategory()
        .then((response) => {dispatch(getCategorySuccess(response));})
        .catch((error) => {dispatch(getCategoryError(error))})
    }
    
};

export function getCategorySuccess(response) {
    return {
        type: GET_ALL_CATEGORY,
        data: response
    };
};

export function getCategoryError(error) {console.log(error)}
