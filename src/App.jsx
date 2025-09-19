import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* === Judul Utama === */}
      <h1 className="main-title">Halo, Saya Alena! 🎉</h1>
      <p className="subtitle">WELCOMEEEEE MYY WEBSITE!!!!!</p>

      {/* === Bagian Konten: Foto di kiri, kotak biodata di kanan === */}
      <div className="content-box">
        
        {/* Foto Profil di kiri */}
        <img
          src="alenacantip.jpg"
          alt="Foto Profil"
          className="profile-photo"
        />

        {/* Kotak biodata di kanan */}
        <div className="biodata-box">
          <h2>Biodataku</h2>
          <ul>
            <li><strong>Nama:</strong> ALENA PUTRI ULFA RIKA</li>
            <li><strong>Kelas:</strong> XI RPL A</li>
            <li><strong>Sekolah:</strong> SMKN 8 MALANG</li>
            <li><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</li>
          </ul>

          {/* Tombol Interaktif */}
          <button
            onClick={() => alert("Terima kasih sudah berkunjung!")}
            className="visit-button"
          >
            Klik Saya
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
