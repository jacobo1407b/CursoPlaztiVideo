 export const setFavorit = payload=>({
     type: 'SET_FAVORITE',
     payload,
 });

 export const deleteFavorite = payload =>(
     {
         type:'DELETE_FAVORITE',
         payload,
     }
 );