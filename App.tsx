import { InteractionType } from '@azure/msal-browser';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from '@azure/msal-react';
import { ReactElement } from 'react';
import './App.css';
import Button from './components/button/button';
import { loginRequest } from './modules/authentication/authConfig';

const HomePageContent = () => {
  return (
    <header className="App-header">
      <h1>Hello WSO</h1>
      <Button key="Button" value="Click"></Button>
    </header>
  );
};

const App = (): ReactElement => {

  // Hook used for Authentication
  const { login, result, error } = useMsalAuthentication(InteractionType.Popup, loginRequest);
  
  // Hook used to get account details once logged in
  // eslint-disable-next-line no-console
  if (login && result) console.log('Result: ', result);
  // eslint-disable-next-line no-console
  else if (error) console.log('Error while logging in: ', error);

  return (
    <div className="App">
      <AuthenticatedTemplate>
        <HomePageContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">Please Sign-in to see your Dashboard</h5>
      </UnauthenticatedTemplate>
    </div>
  );
}
export default App;