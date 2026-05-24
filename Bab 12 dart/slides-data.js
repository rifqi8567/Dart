// Slides Data untuk Bab 12: OOP Part 1: Class, Object, & Members
const slidesData = {
  classobject: [
    {
      title: "Konsep Dasar OOP: Class & Object",
      category: "OOP Part 1",
      icon: "fas fa-cube",
      content: `
        <p class="text-content">
          <strong>Object-Oriented Programming (OOP)</strong> adalah paradigma pemrograman yang berorientasi pada objek. 
          <strong>Class</strong> adalah blueprint/cetakan untuk membuat objek. <strong>Object</strong> adalah instance nyata dari Class yang memiliki properti (Fields) dan aksi (Methods).
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-lightbulb"></i> Analogi Dunia Nyata: Cetakan Kue</div>
          <p>Bayangkan <strong>Class</strong> adalah <strong>cetakan kue (cookie cutter)</strong>. Cetakan itu sendiri bukan kue yang bisa dimakan, melainkan cetakan kosong yang menentukan bentuk kue. Sedangkan <strong>Object</strong> adalah <strong>kue-kue nyata</strong> yang Anda buat dari cetakan tersebut. Anda bisa menambahkan taburan keju pada kue A (properti) atau membakar kue B hingga kering (aksi/method).</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Class["Class: Cetakan Kue"] -->|Instansiasi / Cetak| Obj1("Object A: Kue Cokelat")
            Class -->|Instansiasi / Cetak| Obj2("Object B: Kue Keju")
            
            style Class fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Obj1 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Obj2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// 1. Membuat Class</span>
<span class="keyword">class</span> <span class="class">Siswa</span> {
  <span class="type">String</span> <span class="variable">nama</span> = <span class="string">''</span>;
  <span class="type">int</span> <span class="variable">nilai</span> = <span class="number">0</span>;
  
  <span class="keyword">void</span> <span class="function">belajar</span>() {
    <span class="function">print</span>(<span class="string">'</span><span class="variable">$nama</span><span class="string"> sedang belajar Dart!'</span>);
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 2. Membuat Object (Instance)</span>
  <span class="keyword">var</span> <span class="variable">siswa1</span> = <span class="class">Siswa</span>();
  <span class="variable">siswa1</span>.<span class="variable">nama</span> = <span class="string">'Budi'</span>;
  <span class="variable">siswa1</span>.<span class="variable">nilai</span> = <span class="number">90</span>;
  
  <span class="variable">siswa1</span>.<span class="function">belajar</span>(); <span class="comment">// Output: Budi sedang belajar Dart!</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  constructors: [
    {
      title: "Constructors di Dart",
      category: "OOP Part 1",
      icon: "fas fa-hammer",
      content: `
        <p class="text-content">
          <strong>Constructor</strong> adalah fungsi spesial yang otomatis dipanggil saat sebuah objek pertama kali dibuat. Dart memiliki beberapa tipe Constructor:
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-hammer"></i> Analogi Dunia Nyata: Perakitan Pabrik</div>
          <p>Saat memesan mobil baru di pabrik, <strong>Constructor</strong> adalah <strong>lini perakitan</strong> yang otomatis berjalan untuk merakit mesin, mengecat bodi, dan mencantumkan nomor seri. Begitu mobil keluar dari pabrik (objek selesai dibuat), mobil tersebut sudah siap digunakan dengan spesifikasi yang Anda inginkan.</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Start(["new Mobil()"]) --> Init["Inisialisasi Properti"]
            Init --> Default["Default Constructor"]
            Init --> Named["Named Constructor"]
            Default --> Run(["Objek Siap"])
            Named --> Run
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Init fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Default fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Named fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Run fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-tools"></i></div>
            <div class="feature-text">
              <h4>Default Constructor & this</h4>
              <p>Constructor dasar dengan nama sama seperti kelas. Keyword <code>this</code> merujuk pada objek saat ini.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-tag"></i></div>
            <div class="feature-text">
              <h4>Named Constructor</h4>
              <p>Constructor dengan nama kustom agar kita bisa membuat objek dengan kondisi awal berbeda (contoh: <code>Siswa.remedial()</code>).</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-industry"></i></div>
            <div class="feature-text">
              <h4>Factory Constructor</h4>
              <p>Constructor yang tidak selalu membuat objek baru, melainkan bisa mengembalikan objek lama atau sub-class yang sesuai.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Praktik Constructor Lengkap",
      category: "OOP Part 1",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Perhatikan penulisan ringkas constructor Dart menggunakan <code>this.properti</code>:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">Mobil</span> {
  <span class="type">String</span> <span class="variable">merek</span>;
  <span class="type">int</span> <span class="variable">tahun</span>;
  
  <span class="comment">// 1. Default Constructor</span>
  <span class="class">Mobil</span>(<span class="keyword">this</span>.<span class="variable">merek</span>, <span class="keyword">this</span>.<span class="variable">tahun</span>);
  
  <span class="comment">// 2. Named Constructor</span>
  <span class="class">Mobil</span>.<span class="function">baru</span>(<span class="keyword">this</span>.<span class="variable">merek</span>) : <span class="variable">tahun</span> = <span class="number">2026</span>;
  
  <span class="keyword">void</span> <span class="function">info</span>() {
    <span class="function">print</span>(<span class="string">'Mobil </span><span class="variable">$merek</span><span class="string">, Tahun </span><span class="variable">$tahun</span><span class="string">'</span>);
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">m1</span> = <span class="class">Mobil</span>(<span class="string">'Toyota'</span>, <span class="number">2020</span>);
  <span class="keyword">var</span> <span class="variable">m2</span> = <span class="class">Mobil</span>.<span class="function">baru</span>(<span class="string">'Hyundai'</span>);
  
  <span class="variable">m1</span>.<span class="function">info</span>(); <span class="comment">// Mobil Toyota, Tahun 2020</span>
  <span class="variable">m2</span>.<span class="function">info</span>(); <span class="comment">// Mobil Hyundai, Tahun 2026</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  members: [
    {
      title: "Getters & Setters (Enkapsulasi)",
      category: "OOP Part 1",
      icon: "fas fa-key",
      content: `
        <p class="text-content">
          <strong>Enkapsulasi</strong> membatasi akses langsung ke field/property suatu kelas demi keamanan data. Di Dart, kita membuat field menjadi private dengan memberikan awalan underscore (<code>_namaField</code>) dan mengaksesnya secara aman lewat keyword <code>get</code> dan <code>set</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-university"></i> Analogi Dunia Nyata: Teller Bank</div>
          <p>Bayangkan saldo tabungan Anda adalah variabel <code>_saldo</code> (private). Orang lain tidak boleh langsung merogoh laci kasir bank untuk mengambil uang (akses langsung). Mereka harus melalui <strong>Teller (Getter & Setter)</strong>. Teller akan memverifikasi kartu identitas (validasi setter) sebelum mengurangi atau menambahkan saldo secara aman.</p>
        </div>
        <div class="mermaid">
        flowchart TD
            User(["Program"]) -->|"Set Saldo"| Setter{"Setter: saldo"}
            Setter -->|"Validasi >= 0"| Valid{"Valid?"}
            Valid -->|Ya| Commit["Update _saldo"]
            Valid -->|Tidak| Reject["Tolak & Error"]
            
            style User fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Setter fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Valid fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Commit fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style Reject fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">Rekening</span> {
  <span class="type">double</span> <span class="variable">_saldo</span> = <span class="number">0</span>; <span class="comment">// Private field (hanya diakses dalam file ini)</span>
  
  <span class="comment">// Getter</span>
  <span class="type">double</span> <span class="keyword">get</span> <span class="variable">saldo</span> => <span class="keyword">this</span>.<span class="variable">_saldo</span>;
  
  <span class="comment">// Setter dengan validasi pengaman</span>
  <span class="keyword">set</span> <span class="variable">saldo</span>(<span class="type">double</span> <span class="variable">nilai</span>) {
    <span class="keyword">if</span> (<span class="variable">nilai</span> >= <span class="number">0</span>) {
      <span class="keyword">this</span>.<span class="variable">_saldo</span> = <span class="variable">nilai</span>;
    } <span class="keyword">else</span> {
      <span class="function">print</span>(<span class="string">'Error: Saldo tidak boleh negatif!'</span>);
    }
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">tabungan</span> = <span class="class">Rekening</span>();
  <span class="variable">tabungan</span>.<span class="variable">saldo</span> = <span class="number">50000</span>; <span class="comment">// memanggil setter</span>
  <span class="function">print</span>(<span class="variable">tabungan</span>.<span class="variable">saldo</span>);   <span class="comment">// memanggil getter: 50000.0</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 12",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Asah pemahaman OOP dasar Anda dengan mengerjakan tugas beikut secara mandiri:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Sistem Akun Mahasiswa</div>
          <p>Buat program Dart yang mendefinisikan Class bernama <code>Mahasiswa</code>:</p>
          <ul>
            <li>Properti private: <code>_nama</code> (String) dan <code>_nilaiIPK</code> (double).</li>
            <li>Gunakan <strong>Constructor</strong> untuk menginisialisasi properti tersebut saat pertama kali objek dibuat.</li>
            <li>Buat **Getter** untuk masing-masing properti.</li>
            <li>Buat **Setter** untuk properti <code>_nilaiIPK</code> lengkap dengan aturan validasi pengaman (nilai IPK harus berada di rentang 0.0 sampai 4.0). Cetak peringatan jika nilai di luar rentang tersebut.</li>
            <li>Di dalam <code>main()</code>, buat object baru, ubah IPK-nya secara legal melalui setter, lalu cetak info profil mahasiswa tersebut ke console.</li>
          </ul>
        </div>
      `
    }
  ]
};
