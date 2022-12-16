import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  set,
  update,
  get,
  child,
  query,
  // equalTo,
  orderByChild,
  onValue,
  equalTo,
  orderByKey,
  // limitToLast
} from "firebase/database";

const config = {
  apiKey: "AIzaSyBUqoQPyY6bJIFBECZCaSDOaBcnLj_k5zc",
  authDomain: "snowai.firebaseapp.com",
  projectId: "snowai",
  storageBucket: "snowai.appspot.com",
  messagingSenderId: "611236056694",
  appId: "1:611236056694:web:e9adfa8fcf89bad8b1d957"
}

const firebaseApp = initializeApp(config)

const db = getDatabase(firebaseApp)

export const pushData = async name => {
  const usersRef = ref(db, 'users/name');
  // const key = users.push().key;
  const addUser = push(usersRef);
  set(addUser, {
    name: name
  })
}
export const checkUser = async name => {
  const findUser = await get(query(ref(db, 'users'), orderByChild('name'), equalTo(name)))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        // console.log(snapshot.key);
        // 如果要先儲存多筆資料的話可以推在這裡
        // data.push(snapshot.val());
        const user = snapshot.val();
        return user;
      }
      else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
    })
  return findUser;
}
export const updateUser = async (name, data) => {
  const dataRef = ref(db, `users/${name}`);
  await update(dataRef, data);
}
export const submitForm = async formData => {
  const dataRef = ref(db, 'forms');
  await push(dataRef, formData);
}
export const aaaaacheckUser = async name => {
  const dataRef = query(ref(db, 'users'), orderByChild('name'), equalTo(name));
  await onValue(dataRef, (snapshot) => {
    if(snapshot.exists()) {
      snapshot.forEach((child) => {
        // const data = child.val();
        // console.log('sas');
        return child.val();
      })
      return snapshot;
    }
    else {
      return false;
    }
  });
  console.log(name);
}
export const aaaacheckUser = name => {
  const dataRef = query(ref(db, 'users'), orderByKey('name'));
  onValue(dataRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      console.log(data);
    });
  });
  console.log(name);
}
export const aacheckUser = name => {
  const dataRef = query(ref(db, 'users'), orderByChild('name'));
  onValue(dataRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      console.log(data);
    });
  });
  console.log(name);
}
export const acheckUser = name => {
  const dataRef = query(ref(db, 'users'), equalTo(name));
  onValue(dataRef, (snapshot) => {
    snapshot.forEach((child) => {
      const data = child.val();
      console.log(data);
    });
  });
  console.log(name);
  console.log(dataRef);
}

export const findUser = name => {
  const userRef = ref(db, `users/${name}`);
  console.log(!!userRef);
  update(userRef, {
    name: 'aaa',
  })
}

export const find = name => {
  // const userRef = ref(db, 'users');
  // console.log(userRef);
  get(child(ref(db), 'users')).then((item) => {
    item.forEach(ite => {
      console.log(ite.key);
      console.log(name);
    })
  })
}
