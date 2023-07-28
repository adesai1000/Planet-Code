import React from 'react';
import '../Cart/Cart.scss';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const clerkPubKey = 'pk_test_ZmFtb3VzLXNuaXBlLTUuY2xlcmsuYWNjb3VudHMuZGV2JA';

const Profile = () => {
  return (
    <div className="cart">
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <Welcome />
          <Signout />
        </SignedIn>
        <SignedOut>
          <UserButton afterSignOut={() => window.location.reload(false)} />
        </SignedOut>
        {!UserButton && <div>Hello from clerk</div>}
      </ClerkProvider>
    </div>
  );
};

function Welcome() {
  return <div>Hello you are signed in</div>;
}
function Signout() {
    return <UserButton/>;
  }
  

export default Profile;