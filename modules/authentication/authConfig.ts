import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to MSal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "ed4c5f0c-e2f6-412c-8e5f-3cae9df66262",
        authority: "https://login.microsoftonline.com/0728d852-e19a-44a5-80b8-ef6b8484cb23",
        redirectUri: "https://gray-grass-0eac6be0f.azurestaticapps.net"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    },
};

// Coordinates and required scopes for your web API
export const apiConfig = {
    resourceScopes: ["api://6a73f5d5-1cad-4c72-8d5b-fc996e3603d9/User.Read"]
};

// Scopes for access token used at MS-Identity-Platform-endpoints
export const loginRequest: PopupRequest = {
    scopes: ["openid", "profile", "offline_access", ...apiConfig.resourceScopes]
};
