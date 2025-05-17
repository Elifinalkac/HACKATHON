import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Elif");
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAmount(250); // örnek token verisi
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Kullanıcı Token Bilgisi</h1>
      <div>
        <strong>Kullanıcı adı:</strong> {username}
      </div>
      <div>
        <strong>Gönderdiği Token Miktarı:</strong> {amount !== null ? amount : "Yükleniyor..."}
      </div>
    </div>
  );
}

export default App;
