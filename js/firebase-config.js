// KẾT NỐI VỚI CÁC THƯ VIỆN CỦA FIREBASE THÔNG QUA LINK CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// THÔNG TIN CẤU HÌNH DỰ ÁN CỦA BẠN
const firebaseConfig = {
  apiKey: "AIzaSyD7Z6SuYj2m_HpAEhr0mDZyz2Si6Ubo4wQ",
  authDomain: "thuc-an-nhanh-ga-kfc.firebaseapp.com",
  projectId: "thuc-an-nhanh-ga-kfc",
  storageBucket: "thuc-an-nhanh-ga-kfc.firebasestorage.app",
  messagingSenderId: "102501888283",
  appId: "1:102501888283:web:eac4b318007ad87c44a3be",
  measurementId: "G-7RBMPKVJHB"
};

// KHỞI TẠO FIREBASE
const app = initializeApp(firebaseConfig);

// XUẤT (EXPORT) CÁC BIẾN ĐỂ CÁC TRANG KHÁC CÓ THỂ DÙNG CHUNG
export const auth = getAuth(app);
export const db = getFirestore(app);
