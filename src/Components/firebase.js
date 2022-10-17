// // import { initializeApp } from "firebase/app";
// // import { getStorage } from "firebase/storage";
// import firebase from "firebase/compat/app";

// const firebaseConfig = {
// 	apiKey: "AIzaSyB1FFcBNwcGiH8Pc1Ztnkc0HiR85ZEHFx8",
// 	authDomain: "myworld-59df4.firebaseapp.com",
// 	projectId: "myworld-59df4",
// 	storageBucket: "myworld-59df4.appspot.com",
// 	messagingSenderId: "647610343720",
// 	appId: "1:647610343720:web:15f8cd76ba633e826c701d",
// 	measurementId: "G-D5X02YTPGE",
// };

// const app = firebase.initializeApp(firebaseConfig);
// var storage = firebase.getStorage(app);

// export default storage;

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB1FFcBNwcGiH8Pc1Ztnkc0HiR85ZEHFx8",
	authDomain: "myworld-59df4.firebaseapp.com",
	projectId: "myworld-59df4",
	storageBucket: "myworld-59df4.appspot.com",
	messagingSenderId: "647610343720",
	appId: "1:647610343720:web:15f8cd76ba633e826c701d",
	measurementId: "G-D5X02YTPGE",
};

const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;

// export default storage;
