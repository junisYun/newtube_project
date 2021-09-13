import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

initializeApp(firebaseConfig);

class AuthService {
  login(provideName) {
    let provide;
    if (provideName === 'Google') provide = new GoogleAuthProvider();
    if (provideName === 'Github') provide = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provide);
  }
  logout() {
    const auth = getAuth();
    auth.signOut();
  }
  onAuthChange(onChange) {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      onChange(user);
    });
  }
}

export default AuthService;
