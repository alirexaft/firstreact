export function AuthCheck(){

   if(localStorage.getItem("Auth-Token")){
       return null;
          }
   else {
       return "UnAuthorized"
   }
}
