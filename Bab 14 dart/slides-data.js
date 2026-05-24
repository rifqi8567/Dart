// Slides Data untuk Bab 14: Generics, Type System & Packages
const slidesData = {
  generics: [
    {
      title: "Mengapa Perlu Generics?",
      category: "Generics",
      icon: "fas fa-shapes",
      content: `
        <p class="text-content">
          <strong>Generics</strong> adalah fitur yang memungkinkan kita membuat class, interface, atau function yang dapat bekerja dengan berbagai tipe data tanpa mengorbankan <em>type safety</em> (keamanan tipe data).
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-box-open"></i> Analogi Dunia Nyata: Kontainer Kargo Transparan</div>
          <p>Bayangkan <strong>Generics</strong> seperti sebuah kontainer kargo transparan serbaguna. Anda bisa memasukkan motor, beras, atau baju ke dalamnya. Di pelabuhan, petugas langsung tahu isinya tanpa perlu membongkarnya terlebih dahulu karena kontainernya transparan (Type Safety sejak compile-time). Tanpa generics, kontainernya hitam pekat (seperti Object/dynamic), sehingga petugas terpaksa membongkar paksa (type casting manual) setiap kali ingin memeriksa isinya, yang rawan memicu kerusakan barang (runtime crash jika tipe datanya tidak cocok).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            GenericContainer["Kotak Generik T"] --> T1["T = int: Kotak int"]
            GenericContainer --> T2["T = String: Kotak String"]
            T1 --> Out1["Akses: int, Tanpa Casting"]
            T2 --> Out2["Akses: String, Tanpa Casting"]
            
            style GenericContainer fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style T1 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style T2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Out1 fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style Out2 fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="two-column">
          <div class="info-box danger">
            <div class="info-box-title">Tanpa Generics (dynamic/Object)</div>
            <p>Kita harus sering melakukan type casting manual (raw data) dan rawan memicu runtime error jika konversi gagal.</p>
          </div>
          <div class="info-box tip">
            <div class="info-box-title">Dengan Generics</div>
            <p>Tipe data terdeteksi sejak masa kompilasi (compile-time safety). Tidak perlu konversi tipe data secara paksa.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Tanpa Generics, kita harus menulis class berulang untuk int, String, dll.</span>
<span class="comment">// Dengan Generics, cukup pakai satu parameter tipe &lt;T&gt;</span>
<span class="keyword">class</span> <span class="class">Kotak</span><span class="keyword">&lt;</span><span class="type">T</span><span class="keyword">&gt;</span> {
  <span class="type">T</span> <span class="variable">konten</span>;
  <span class="function">Kotak</span>(<span class="keyword">this</span>.<span class="variable">konten</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">kotakAngka</span> = <span class="class">Kotak</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span>(<span class="number">100</span>);
  <span class="keyword">var</span> <span class="variable">kotakTeks</span> = <span class="class">Kotak</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span>(<span class="string">"Buku Dart"</span>);
  
  <span class="type">int</span> <span class="variable">angka</span> = <span class="variable">kotakAngka</span>.<span class="variable">konten</span>; <span class="comment">// Aman, langsung int!</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Generics pada Function",
      category: "Generics",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Selain pada class, kita juga bisa menerapkan Generics pada method atau function individu. Ini berguna jika perilaku fungsi sama, hanya tipe input/output-nya saja yang bervariasi.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Membuat fungsi generic yang mengembalikan elemen tengah dari List</span>
<span class="type">T</span> <span class="function">ambilTengah</span><span class="keyword">&lt;</span><span class="type">T</span><span class="keyword">&gt;</span>(<span class="type">List</span><span class="keyword">&lt;</span><span class="type">T</span><span class="keyword">&gt;</span> <span class="variable">list</span>) {
  <span class="type">int</span> <span class="variable">tengah</span> = <span class="variable">list</span>.length <span class="operator">~/</span> <span class="number">2</span>;
  <span class="keyword">return</span> <span class="variable">list</span>[<span class="variable">tengah</span>];
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">nilai</span> = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>];
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">nama</span> = [<span class="string">"Andi"</span>, <span class="string">"Budi"</span>, <span class="string">"Cici"</span>];

  <span class="type">int</span> <span class="variable">nilaiTengah</span> = <span class="function">ambilTengah</span>(<span class="variable">nilai</span>); <span class="comment">// Auto-inference &lt;int&gt;: 30</span>
  <span class="type">String</span> <span class="variable">namaTengah</span> = <span class="function">ambilTengah</span>(<span class="variable">nama</span>); <span class="comment">// Auto-inference &lt;String&gt;: Budi</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  constraints: [
    {
      title: "Generic Type Constraints (Pembatasan Tipe)",
      category: "Generics",
      icon: "fas fa-filter",
      content: `
        <p class="text-content">
          Terkadang kita ingin parameter tipe generic tidak benar-benar bebas dimasukkan tipe apa saja. Kita bisa membatasi tipe data tersebut menggunakan keyword <code>extends</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Tipe T dibatasi hanya boleh subclass dari num (int atau double)</span>
<span class="keyword">class</span> <span class="class">Kalkulator</span><span class="keyword">&lt;</span><span class="type">T</span> <span class="keyword">extends</span> <span class="type">num</span><span class="keyword">&gt;</span> {
  <span class="type">T</span> <span class="variable">a</span>;
  <span class="type">T</span> <span class="variable">b</span>;
  <span class="function">Kalkulator</span>(<span class="keyword">this</span>.<span class="variable">a</span>, <span class="keyword">this</span>.<span class="variable">b</span>);

  <span class="type">double</span> <span class="function">tambah</span>() => <span class="variable">a</span>.toDouble() + <span class="variable">b</span>.toDouble();
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">kalku</span> = <span class="class">Kalkulator</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span>(<span class="number">10</span>, <span class="number">5</span>); <span class="comment">// Valid!</span>
  
  <span class="comment">// ERROR! String bukan merupakan turunan dari num</span>
  <span class="comment">// var kalkuGagal = Kalkulator&lt;String&gt;("10", "5");</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  packages: [
    {
      title: "Memahami pubspec.yaml",
      category: "Packages",
      icon: "fas fa-file-invoice",
      content: `
        <p class="text-content">
          <code>pubspec.yaml</code> adalah file konfigurasi utama dari sebuah project Dart/Flutter. Di sini kita menentukan metadata project, minimal SDK yang didukung, serta mendaftarkan package/library luar yang kita butuhkan.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">YAML</span>
          </div>
          <div class="code-content">
<pre>name: belajar_dart
description: Project latihan pemrograman Dart dasar
version: 1.0.0

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  # Package eksternal didaftarkan di sini
  intl: ^0.18.1
  http: ^1.1.0

dev_dependencies:
  # Package khusus masa pengembangan (testing, linting)
  test: ^1.24.0</pre>
          </div>
        </div>
      `
    },
    {
      title: "Menggunakan pub.dev & Perintah CLI",
      category: "Packages",
      icon: "fas fa-cubes",
      content: `
        <p class="text-content">
          <strong>pub.dev</strong> adalah registry package resmi untuk ekosistem Dart dan Flutter. Kita bisa mencari ribuan library siap pakai yang dikembangkan oleh komunitas maupun tim Google.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-shopping-cart"></i> Analogi Dunia Nyata: Belanja Onderdil di Toko Suku Cadang</div>
          <p>Bayangkan <strong>pub.dev</strong> seperti toko grosir suku cadang motor terbesar di kota. Alih-alih membuat knalpot, rantai, atau spion sendiri dari nol (menulis kode manual yang kompleks), Anda tinggal memesan onderdil siap pakai. Anda cukup menuliskan daftar pesanan Anda di nota belanja (file <code>pubspec.yaml</code>), lalu jalankan perintah <code>dart pub get</code> untuk mengambil onderdil-onderdil tersebut agar siap dipasang ke motor (project) Anda.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Cari["Cari Package"] --> Tulis["Tulis di pubspec.yaml"]
            Tulis --> Run["dart pub get"]
            Run --> Import["Import ke Kode Dart"]
            
            style Cari fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Tulis fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Run fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Import fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="info-box tip">
          <div class="info-box-title">Perintah CLI Dart Penting</div>
          <ul>
            <li><code>dart pub get</code> : Mengunduh package yang terdaftar di pubspec.yaml.</li>
            <li><code>dart pub add &lt;nama_package&gt;</code> : Menambahkan package baru secara otomatis ke pubspec.yaml.</li>
            <li><code>dart pub upgrade</code> : Memperbarui semua package terinstal ke versi terbaru yang kompatibel.</li>
          </ul>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">import</span> <span class="string">'package:intl/intl.dart'</span>; <span class="comment">// Mengimpor package intl</span>

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Memformat tanggal menggunakan Intl</span>
  <span class="keyword">var</span> <span class="variable">sekarang</span> = <span class="type">DateTime</span>.<span class="function">now</span>();
  <span class="keyword">var</span> <span class="variable">formatTanggal</span> = <span class="class">DateFormat</span>(<span class="string">'EEEE, d MMMM yyyy'</span>, <span class="string">'id_ID'</span>);
  
  <span class="comment">// Hasil: Jumat, 22 Mei 2026 (tergantung locale)</span>
  <span class="function">print</span>(<span class="variable">formatTanggal</span>.<span class="function">format</span>(<span class="variable">sekarang</span>)); 
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan Mandiri: Generics & Package",
      category: "Generics & Packages",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Tantangan praktik mandiri untuk memperkuat pemahaman Generics dan ekosistem package:
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Buat Class APIResponse&lt;T&gt;</strong><br>
              Mempunyai property <code>int statusCode</code>, <code>String message</code>, dan <code>T? data</code> (nullable T).
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Simulasi Request Data</strong><br>
              Instansiasi <code>APIResponse</code> dengan parameter data berupa class <code>Siswa</code>, dan buat instansiasi lain dengan parameter data berupa <code>List&lt;String&gt;</code> hobi.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Setup Package Lokal</strong><br>
              Jalankan command <code>dart create -t console-full latihan_package</code> di command prompt lokal Anda, lalu instal package <code>http</code> dan print status respon dari web favorit Anda.
            </div>
          </div>
        </div>
      `
    }
  ]
};
