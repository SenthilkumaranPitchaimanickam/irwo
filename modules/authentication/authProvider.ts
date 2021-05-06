import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const authProvider = new PublicClientApplication(msalConfig);

export default authProvider;