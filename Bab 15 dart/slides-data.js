// Slides Data untuk Bab 15: Asynchronous Dart & Unit Testing
const slidesData = {
  async: [
    {
      title: "Synchronous vs Asynchronous",
      category: "Asynchronous",
      icon: "fas fa-hourglass-start",
      content: `
        <p class="text-content">
          Secara default, kode Dart berjalan secara <strong>Synchronous</strong> (baris per baris, memblokir baris berikutnya hingga baris aktif selesai dijalankan). 
          Namun, operasi seperti mengambil data dari internet (API) atau membaca file membutuhkan waktu. Agar aplikasi tidak membeku (freeze), kita menggunakan <strong>Asynchronous programming</strong> (non-blocking).
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-utensils"></i> Analogi Dunia Nyata: Antrean Kasir vs Alarm Getar Restoran</div>
          <p>
            1. <strong>Synchronous</strong>: Seperti mengantre di kasir tradisional. Anda memesan makanan, lalu kasir berdiri diam menunggu koki memasak burger Anda. Semua orang di belakang Anda terpaksa menunggu berdiri di antrean dan tidak bisa melakukan apa pun (aplikasi membeku).<br>
            2. <strong>Asynchronous</strong>: Seperti memesan makanan di kasir modern yang memberikan <strong>alat alarm getar (pager)</strong>. Setelah memesan, Anda bisa duduk santai atau main HP (non-blocking). Ketika burger matang, alat tersebut akan bergetar (callback / Future selesai) memberi tahu Anda untuk mengambil makanan.
          </p>
        </div>
        <div class="mermaid">
        flowchart TD
            subgraph "Synchronous"
            S1["Pesan Makanan"] --> S2["Tunggu Koki - Freeze"]
            S2 --> S3["Terima Burger"]
            end
            
            subgraph "Asynchronous"
            A1["Pesan Makanan"] --> A2["Terima Pager"]
            A2 --> A3["Duduk Santai"]
            A3 -->|"Alarm Bergetar"| A4["Ambil Burger"]
            end
            
            style S2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style A3 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style A4 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="info-box info">
          <div class="info-box-title">Dart Event Loop</div>
          <p>Dart adalah bahasa <strong>single-threaded</strong>. Menggunakan sistem <em>Event Loop</em> untuk mengelola tugas asynchronous, mirip seperti pelayan restoran yang mencatat pesanan lalu beralih ke meja lain tanpa menunggu makanan matang.</p>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">'Langkah 1'</span>);
  
  <span class="comment">// Menunda eksekusi selama 2 detik secara asynchronous</span>
  <span class="class">Future</span>.<span class="function">delayed</span>(<span class="class">Duration</span>(<span class="variable">seconds</span>: <span class="number">2</span>), () {
    <span class="function">print</span>(<span class="string">'Langkah 2 (Selesai Loading)'</span>);
  });
  
  <span class="function">print</span>(<span class="string">'Langkah 3'</span>);
}
<span class="comment">// Output urutan cetak: Langkah 1 -> Langkah 3 -> Langkah 2</span></pre>
          </div>
        </div>
      `
    },
    {
      title: "Memahami Future di Dart",
      category: "Asynchronous",
      icon: "fas fa-cloud-download-alt",
      content: `
        <p class="text-content">
          <strong>Future&lt;T&gt;</strong> adalah objek yang mewakili nilai potensial atau error yang akan tersedia di masa mendatang. Ada tiga status utama pada objek Future:
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Uncompleted (Belum Selesai)</strong><br>
              Proses asynchronous masih berjalan di background (loading).
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Completed with Value (Selesai Sukses)</strong><br>
              Proses berhasil dan mengembalikan data hasil operasi. Kita tangkap dengan method <code>.then()</code>.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Completed with Error (Selesai Gagal)</strong><br>
              Proses gagal (misal koneksi putus) dan melempar exception. Kita tangkap dengan <code>.catchError()</code>.
            </div>
          </div>
        </div>
      `
    }
  ],
  asyncawait: [
    {
      title: "Menulis Asynchronous dengan async-await",
      category: "Asynchronous",
      icon: "fas fa-bolt",
      content: `
        <p class="text-content">
          Sintaks <code>.then()</code> bisa menjadi rumit jika terjadi pemanggilan asynchronous berantai (callback hell). Dart menyediakan keyword <code>async</code> dan <code>await</code> agar kode asynchronous dapat ditulis dan dibaca layaknya kode synchronous biasa.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Fungsi mengembalikan Future, wajib ditandai kata kunci async</span>
<span class="class">Future</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="function">ambilDataProduk</span>() <span class="keyword">async</span> {
  <span class="keyword">await</span> <span class="class">Future</span>.<span class="function">delayed</span>(<span class="class">Duration</span>(<span class="variable">seconds</span>: <span class="number">2</span>)); <span class="comment">// Menunggu loading selesai</span>
  <span class="keyword">return</span> <span class="string">'Laptop Premium'</span>;
}

<span class="keyword">void</span> <span class="function">main</span>() <span class="keyword">async</span> {
  <span class="function">print</span>(<span class="string">'Mengambil data...'</span>);
  <span class="comment">// await mengunci jalannya baris berikutnya sampai Future selesai</span>
  <span class="type">String</span> <span class="variable">produk</span> = <span class="keyword">await</span> <span class="function">ambilDataProduk</span>();
  <span class="function">print</span>(<span class="string">'Produk ditemukan: $produk'</span>);
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Penanganan Error & Pengenalan Stream",
      category: "Asynchronous",
      icon: "fas fa-stream",
      content: `
        <p class="text-content">
          Pada sintaks <code>async-await</code>, penanganan error dilakukan menggunakan blok standard <code>try-catch</code>. 
          Selain Future, Dart juga memiliki <strong>Stream</strong>, yaitu aliran data asynchronous yang menghasilkan banyak nilai secara berkala dari waktu ke waktu (seperti data sensor realtime atau chat room).
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// 1. Try-Catch pada async-await</span>
<span class="keyword">try</span> {
  <span class="keyword">var</span> <span class="variable">data</span> = <span class="keyword">await</span> <span class="function">fetchUser</span>();
} <span class="keyword">catch</span> (<span class="variable">e</span>) {
  <span class="function">print</span>(<span class="string">'Terjadi error: $e'</span>);
}

<span class="comment">// 2. Mendengarkan Stream</span>
<span class="class">Stream</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="function">aliranAngka</span>() <span class="keyword">async*</span> {
  <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> = <span class="number">1</span>; <span class="variable">i</span> &lt;= <span class="number">3</span>; <span class="variable">i</span>++) {
    <span class="keyword">await</span> <span class="class">Future</span>.<span class="function">delayed</span>(<span class="class">Duration</span>(<span class="variable">seconds</span>: <span class="number">1</span>));
    <span class="keyword">yield</span> <span class="variable">i</span>; <span class="comment">// yield digunakan untuk mengirim nilai ke Stream</span>
  }
}</pre>
          </div>
        </div>
      `
    }
  ],
  testing: [
    {
      title: "Pengenalan Unit Testing di Dart",
      category: "Unit Testing",
      icon: "fas fa-vial",
      content: `
        <p class="text-content">
          <strong>Unit Testing</strong> adalah proses pengujian otomatis pada bagian terkecil kode program (biasanya fungsi atau metode terisolasi) untuk memastikan kebenaran logikanya sebelum dipublikasikan.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-microscope"></i> Analogi Dunia Nyata: Uji Benturan Helm (Quality Control)</div>
          <p>Bayangkan <strong>Unit Testing</strong> seperti departemen Quality Control (QC) di pabrik helm. Alih-alih langsung meluncurkan helm ke jalan raya untuk dicoba oleh pengendara asli (production crash/bug di user), helm dipasang ke manekin lalu dihantam mesin hidrolik otomatis di laboratorium. Jika helm kuat menahan benturan standar (expect equals), helm lulus uji. Jika pecah, pabrik harus memperbaiki kodenya sebelum helm didistribusikan.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Kode["Tulis Fungsi"] --> Test["Buat Unit Test"]
            Test --> RunTest["dart test"]
            RunTest -->|"Cocok"| Pass["Lulus - Hijau"]
            RunTest -->|"Tidak Cocok"| Fail["Gagal - Perbaiki"]
            
            style Kode fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Test fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style RunTest fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Pass fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style Fail fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
        </div>
        <div class="info-box tip">
          <div class="info-box-title">Mengapa Harus Testing?</div>
          <p>Mencegah regresi (bug baru muncul akibat perbaikan kode lama), mendeteksi error sejak dini, serta mendokumentasikan perilaku program secara terstruktur.</p>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart (test/kalkulator_test.dart)</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">import</span> <span class="string">'package:test/test.dart'</span>;
<span class="keyword">import</span> <span class="string">'../lib/kalkulator.dart'</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  // Fungsi test() menampung pengujian individu
  <span class="function">test</span>(<span class="string">'Fungsi tambah harus menjumlahkan dua angka secara benar'</span>, () {
    <span class="keyword">var</span> <span class="variable">hasil</span> = <span class="function">tambah</span>(<span class="number">3</span>, <span class="number">5</span>);
    
    // Assertions: expect(aktual, ekspektasi)
    <span class="function">expect</span>(<span class="variable">hasil</span>, <span class="function">equals</span>(<span class="number">8</span>));
  });
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Mengelompokkan Pengujian (group)",
      category: "Unit Testing",
      icon: "fas fa-vials",
      content: `
        <p class="text-content">
          Ketika skenario pengujian bertambah banyak, kita bisa mengelompokkan pengujian-pengujian yang sejenis ke dalam satu kategori besar menggunakan fungsi <code>group()</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Mengelompokkan test aritmatika dasar</span>
  <span class="function">group</span>(<span class="string">'Pengujian Matematika Dasar'</span>, () {
    <span class="function">test</span>(<span class="string">'Penjumlahan'</span>, () {
      <span class="function">expect</span>(<span class="function">tambah</span>(<span class="number">2</span>, <span class="number">2</span>), <span class="number">4</span>);
    });

    <span class="function">test</span>(<span class="string">'Pengurangan'</span>, () {
      <span class="function">expect</span>(<span class="function">kurang</span>(<span class="number">5</span>, <span class="number">2</span>), <span class="number">3</span>);
    });
  });
  
  <span class="comment">// Jalankan test di terminal dengan perintah:</span>
  <span class="comment">// dart test</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan Mandiri: Async & Testing",
      category: "Asynchronous & Testing",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Tantangan praktik mandiri terakhir untuk menguji keahlian pemrograman asynchronous dan unit testing Anda:
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Buat Fungsi async hitungFaktorial(int n)</strong><br>
              Buat fungsi yang menunda eksekusi 1 detik secara async, lalu hitung faktorial dari n.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Tulis Test Case Faktorial</strong><br>
              Tulis unit test menggunakan package <code>test</code> untuk memverifikasi bahwa <code>hitungFaktorial(5)</code> mengembalikan nilai 120.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Buat Group Pengujian String</strong><br>
              Buat <code>group('Pengujian Helper String')</code> berisi dua test: satu untuk menguji pembalikan teks (reverse) dan satu untuk memeriksa kecocokan format email.
            </div>
          </div>
        </div>
      `
    }
  ]
};
