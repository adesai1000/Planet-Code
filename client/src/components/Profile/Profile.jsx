import React from 'react';
import './Profile.scss';
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton} from '@clerk/clerk-react';

const clerkPubKey = 'pk_test_ZmFtb3VzLXNuaXBlLTUuY2xlcmsuYWNjb3VudHMuZGV2JA';

const Profile = () => {
  return (
    <div className="Profile">
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <Welcome />
          <Signout />
        </SignedIn>
        <SignedOut>
          <div><h3>Sign in for a better experience.</h3></div>
          <SignInButton mode="modal">
            <button className="btn">Sign in</button>
          </SignInButton>
        </SignedOut>
      </ClerkProvider>
    </div>
  );
};

function Welcome() {
  return <div></div>;
}

function Signout() {
  return <UserButton/>;
}

export default Profile;
