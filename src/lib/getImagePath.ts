export const getImagePath = (imagePath?:string , fullWidth?:boolean)=>{
 
    return imagePath
    ?`http://image.tmdb.org/t/p/${fullWidth ? "original":"w500"}/${imagePath}`
    :"https://links.papareact.com/o8z"

}