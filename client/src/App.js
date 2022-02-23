import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth } from './firebase';

function App() {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const idTokenResult = (await result.user.getIdTokenResult()).token;
				console.log('AUTHTOKEN==>>', idTokenResult);
				console.log('RESPONSE_EMAIL=>', result);
			})
			.catch((e) => console.log(e.message));
	};

	return (
		<div className="App">
			<Profile />
			<Login />
			<ChangeColor />
			<button onClick={signInWithGoogle}>Login with Google</button>
		</div>
	);
}

export default App;
