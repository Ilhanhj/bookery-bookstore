// import {
//   addDoc,
//   collection,
//   doc,
//   getDocs,
//   getFirestore,
//   query,
//   setDoc,
//   updateDoc,
//   where,
// } from "firebase/firestore";
// import bcrypt from "bcryptjs";

// import app from "./init";
// import { CartItem } from "@/types/CartItemProps";

// const firestore = getFirestore(app);

// // Input data ke database
// export async function register(
//   userData: {
//     email: string;
//     fullname: string;
//     password: string;
//     role?: string;
//   },
//   callback: unknown,
// ) {
//   const q = query(
//     collection(firestore, "users"),
//     where("email", "==", userData.email),
//   );
//   const snapshot = await getDocs(q);
//   const data = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   if (data.length > 0) {
//     console.log(data);
//     callback({ status: false, message: "Email already exists" });
//   } else {
//     userData.password = bcrypt.hashSync(userData.password, 10);

//     userData.role = "member";
//     await addDoc(collection(firestore, "users"), userData)
//       .then(() => {
//         callback({ status: true, message: "Register success" });
//       })
//       .catch((error) => {
//         callback({ status: false, message: error });
//       });
//   }
// }

// // Mengambil data dari database
// export async function login(userData: { email: string }) {
//   const q = query(
//     collection(firestore, "users"),
//     where("email", "==", userData.email),
//   );
//   const snapshot = await getDocs(q);
//   const data = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   if (data) {
//     return data[0];
//   } else {
//     return null;
//   }
// }

// export async function signInWithGoogle(userData: unknown, callback: unknown) {
//   const q = query(
//     collection(firestore, "users"),
//     where("email", "==", userData.email),
//   );

//   const snapshot = await getDocs(q);
//   const data: unknown = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   if (data.length > 0) {
//     userData.role = data[0].role;
//     await updateDoc(doc(firestore, "users", data[0].id), userData)
//       .then(() => {
//         callback({
//           status: true,
//           message: "Sign In with Google Success",
//           data: userData,
//         });
//       })
//       .catch(() => {
//         callback({ status: false, message: "Sign In with Google Failed" });
//       });
//   } else {
//     userData.role = "member";
//     await addDoc(collection(firestore, "users"), userData)
//       .then(() => {
//         callback({
//           status: true,
//           message: "Sign In with Google Success",
//           data: userData,
//         });
//       })
//       .catch(() => {
//         callback({ status: false, message: "Sign In with Google Failed" });
//       });
//   }
// }

// export const saveCartToFirebase = async (
//   userId: string,
//   cartItems: CartItem[],
// ) => {
//   const db = getFirestore();

//   try {
//     for (const item of cartItems) {
//       const cartRef = doc(collection(db, "users", userId, "cart"), item.id);

//       await setDoc(cartRef, item, { merge: true });
//     }

//     console.log("Cart berhasil disimpan ke Firebase!");
//   } catch (error) {
//     console.error("Error saat menyimpan ke Firebase:", error);
//   }
// };

// // export const fetchCartFromFirebase = async (
// //   userId: string,
// // ): Promise<CartItem[]> => {
// //   try {
// //     const cartRef = collection(firestore, "users", userId, "cart"); // Referensi ke koleksi
// //     const snapshot = await getDocs(cartRef);

// //     const cartItems: CartItem[] = snapshot.docs.map((doc) => ({
// //       id: doc.id,
// //       ...doc.data(),
// //     })) as CartItem[];

// //     console.log("Data cart berhasil diambil dari Firebase!");
// //     return cartItems;
// //   } catch (error) {
// //     console.error("Gagal mengambil data cart dari Firebase:", error);
// //     return [];
// //   }
// // };

import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import bcrypt from "bcryptjs";

import app from "./init";
import { CartItem } from "@/types/CartItemProps";

const firestore = getFirestore(app);

interface UserData {
  email: string;
  fullname?: string;
  password?: string;
  role?: string;
}

interface CallbackResponse {
  status: boolean;
  message: string;
  data?: unknown;
}

// Input data ke database
export async function register(
  userData: UserData,
  callback: (response: CallbackResponse) => void,
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email),
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    console.log(data);
    callback({ status: false, message: "Email already exists" });
  } else {
    userData.password = bcrypt.hashSync(userData.password!, 10);
    userData.role = "member";

    try {
      await addDoc(collection(firestore, "users"), userData);
      callback({ status: true, message: "Register success" });
    } catch (error) {
      callback({ status: false, message: (error as Error).message });
    }
  }
}

// Mengambil data dari database
export async function login(userData: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email),
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as {
      email: string;
      fullname: string;
      password?: string;
      role: string;
    }), // ✅ Tambahkan `password?`
  }));

  return data.length > 0 ? data[0] : null;
}

// Sign in dengan Google
export async function signInWithGoogle(
  userData: { email: string; role?: string },
  callback: (response: CallbackResponse) => void,
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email),
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as UserData), // ✅ FIX: Cast ke UserData
  }));

  try {
    if (data.length > 0) {
      userData.role = data[0].role; // ✅ Sekarang tidak error
      await updateDoc(doc(firestore, "users", data[0].id), userData);
    } else {
      userData.role = "member";
      await addDoc(collection(firestore, "users"), userData);
    }

    callback({
      status: true,
      message: "Sign In with Google Success",
      data: userData,
    });
  } catch (error) {
    callback({ status: false, message: "Sign In with Google Failed" });
  }
}

// Simpan keranjang belanja ke Firebase
export const saveCartToFirebase = async (
  userId: string,
  cartItems: CartItem[],
) => {
  const db = getFirestore();

  try {
    for (const item of cartItems) {
      const cartRef = doc(collection(db, "users", userId, "cart"), item.id);
      await setDoc(cartRef, item, { merge: true });
    }
    console.log("Cart berhasil disimpan ke Firebase!");
  } catch (error) {
    console.error("Error saat menyimpan ke Firebase:", error);
  }
};
