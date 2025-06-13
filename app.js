// app.js (using Firebase v11.9.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app-check.js";

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeEz14rAAAAACA7ruaNsLfhNyq8RRM7ywmTsl-D'),
  isTokenAutoRefreshEnabled: true // Automatically refresh App Check token
});



// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC1jlEwCii2hx7qMKcsWd6qgyFHnTWvlVo",
  authDomain: "the-cyber-nerd-ctf.firebaseapp.com",
  projectId: "the-cyber-nerd-ctf",
  storageBucket: "the-cyber-nerd-ctf.appspot.com",  // ✅ fixed `.app` to `.appspot.com`
  messagingSenderId: "418449152677",
  appId: "1:418449152677:web:411ee06d639b013d6b8b4c",
  measurementId: "G-PDF6M6ZXR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
const form = document.getElementById("ctf-registration-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formEntries = Object.fromEntries(formData.entries());

  formEntries.discord = formEntries.discord.toLowerCase();
  formEntries.email = formEntries.email.toLowerCase();


  const tableBody = document.getElementById("hackers-table-body");
  if (tableBody.rows.length >= 30) {
    alert("Sorry, all spots have been filled!");
    return;
  }

  try {
    // 🔍 Check for duplicates
    const q = query(
      collection(db, "participants"),
      where("email", "==", formEntries.email)
    );
    const q2 = query(
      collection(db, "participants"),
      where("discord", "==", formEntries.discord.toLowerCase())

    );

    const [emailSnap, discordSnap] = await Promise.all([
      getDocs(q),
      getDocs(q2),
    ]);

    if (!emailSnap.empty) {
      alert("This email is already registered.");
      return;
    }
    if (!discordSnap.empty) {
      alert("This Discord username is already registered.");
      return;
    }

    await addDoc(collection(db, "participants"), formEntries);
    form.reset();
    alert("Registration successful!");
  } catch (err) {
    alert("Error submitting form: " + err.message);
  }
});


// Real-time updates
const tableBody = document.getElementById("hackers-table-body");

onSnapshot(collection(db, "participants"), (snapshot) => {
  tableBody.innerHTML = "";
  let i = 1;

  snapshot.forEach((doc) => {
    const data = doc.data();
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${i++}</td>
      <td>${data.name}</td>
      <td>${data.discord}</td>
      <td>${data["ctf-username"]}</td>
      <td>${data.age}</td>
      <td>${capitalize(data.gender)}</td>
      <td>${mapSpecialty(data.specialty)}</td>
      <td>${capitalize(data.experience)}</td>
    `;
  });

  document.getElementById("spots-count").textContent = 30 - tableBody.rows.length;
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function mapSpecialty(value) {
  const map = {
    pentester: "Penetration Testing",
    network: "Network Security",
    reverse: "Reverse Engineering",
    crypto: "Cryptography",
    forensics: "Digital Forensics",
    malware: "Malware Analysis",
    mobile: "Mobile Security",
    cloud: "Cloud Security",
    other: "Other"
  };
  return map[value] || value;
}



const searchInput = document.getElementById("search-hackers");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  Array.from(tableBody.rows).forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(searchTerm) ? "" : "none";
  });
});
