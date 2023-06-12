import Keycloak from "keycloak-js";

 export const keycloak = new Keycloak({
    
 url: "http://localhost:8080/admin/master/console/#/myrealm/users/add-user",
 realm: "myrealm",
 clientId: "react-client",
});

// export default keycloak;