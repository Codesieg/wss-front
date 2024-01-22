// export const isAuthenticated = () => {
//     // Vérifier si l'utilisateur est authentifié (par exemple, en vérifiant s'il y a un jeton d'authentification dans le stockage local)
//     const authToken = localStorage.getItem('authToken');
//     return !!authToken; // Renvoie true si authToken est présent, sinon false
//   };
import { decodeToken } from "react-jwt";


export const isAuthenticated = () => {
  let isAdmin = false;
  // Vérifier si l'utilisateur est authentifié (par exemple, en vérifiant s'il y a un jeton d'authentification dans le stockage local)
  if (localStorage.getItem('authToken') != null) {
    const authToken = localStorage.getItem('authToken');
    const decodedToken = decodeToken(authToken);

    isAdmin = decodedToken.admin;
  } else {
    isAdmin = false;
  }

  return isAdmin;  // Renvoie true si authToken est présent, sinon false
};
