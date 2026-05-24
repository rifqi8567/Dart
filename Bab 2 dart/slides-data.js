// Slides Data untuk Bab 2: Struktur Program & Komentar
const slidesData = {
  anatomy: [
    {
      title: "Anatomi Kode Dart",
      category: "Struktur",
      icon: "fas fa-sitemap",
      content: `
        <p class="text-content">
          Setiap program Dart memiliki struktur dasar yang wajib dipatuhi agar compiler dapat memahami instruksi Anda. Komponen paling utama adalah <strong>main function</strong>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-utensils"></i> Analogi Dunia Nyata: Resep Masakan</div>
          <p>Bayangkan program Dart seperti <strong>resep masakan</strong>. Dapur adalah compiler-nya, dan fungsi <code>main()</code> adalah <strong>langkah pertama memasak</strong>. Tanda titik koma (<code>;</code>) adalah batas pemisah antar instruksi (contoh: <em>iris bawang; panaskan wajan; tumis bahan;</em>). Tanpa titik koma, koki akan bingung membaca instruksi Anda!</p>
        </div>
        <div class="mermaid mermaid-compact">
        flowchart LR
            Start(["Mulai<br/>Eksekusi"]) --> Main["Fungsi<br/>main"]
            Main --> Print["Jalankan<br/>print"]
            Print --> EndInst["Cek<br/>titik koma"]
            EndInst --> Finish(["Selesai"])
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Main fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Print fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style EndInst fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Finish fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">'Struktur Program Dart'</span>);
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-key"></i> Komponen Penting</div>
          <ul>
            <li><strong>void</strong>: Keyword yang menunjukkan bahwa fungsi ini tidak mengembalikan nilai (return type kosong).</li>
            <li><strong>main()</strong>: Titik awal (entry point) eksekusi program. Dart VM tidak akan bisa menjalankan file jika fungsi ini tidak ada.</li>
            <li><strong>Kurung Kurawal { }</strong>: Menandakan awal dan akhir dari blok kode (body) fungsi.</li>
            <li><strong>print()</strong>: Fungsi bawaan Dart untuk menampilkan teks ke layar.</li>
            <li><strong>Semicolon ;</strong>: Setiap statement/perintah di Dart wajib ditutup dengan tanda titik koma (<code>;</code>). Kelalaian tanda ini memicu syntax error.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Statement & Expression",
      category: "Struktur",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Memahami perbedaan antara <strong>Statement</strong> (pernyataan tindakan) dan <strong>Expression</strong> (penghasil nilai) sangat penting untuk menulis kode yang bersih.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 1. Expression (menghasilkan nilai)</span>
  <span class="number">10</span> + <span class="number">5</span>; 
  
  <span class="comment">// 2. Statement (melakukan tindakan lengkap)</span>
  <span class="keyword">var</span> <span class="variable">hasil</span> = <span class="number">10</span> + <span class="number">5</span>; 
  
  <span class="function">print</span>(<span class="variable">hasil</span>); 
}</pre>
          </div>
        </div>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-exclamation-triangle"></i> Aturan Penulisan</div>
          <p>Expression dapat menjadi bagian dari Statement, seperti <code>10 + 5</code> di dalam penugasan variabel <code>hasil</code>. Semua baris di atas adalah instruksi terpisah yang diakhiri semicolon.</p>
        </div>
      `
    }
  ],
  comments: [
    {
      title: "Jenis-Jenis Komentar di Dart",
      category: "Komentar",
      icon: "fas fa-comments",
      content: `
        <p class="text-content">
          Komentar adalah catatan yang ditulis di dalam kode untuk membantu developer lain (atau diri Anda sendiri di masa depan). Komentar diabaikan sepenuhnya oleh compiler Dart.
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Single-line Comment (//)</h4>
              <p>Digunakan untuk penjelasan singkat satu baris.</p>
              <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">// Ini komentar satu baris</pre>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Multi-line Comment (/* */)</h4>
              <p>Digunakan untuk penjelasan panjang yang memakan beberapa baris.</p>
              <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">/*
Ini komentar 
beberapa baris sekaligus
*/</pre>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Documentation Comment (///)</h4>
              <p>Komentar dokumentasi yang dibaca oleh editor/IDE untuk menampilkan tooltip saat kursor diarahkan ke variabel/fungsi tersebut.</p>
              <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">/// Fungsi untuk menghitung kuadrat angka</pre>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Praktik Penggunaan Komentar",
      category: "Komentar",
      icon: "fas fa-file-code",
      content: `
        <p class="text-content">
          Berikut adalah demonstrasi penggunaan ketiga jenis komentar dalam kode nyata:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">/// Menghitung luas persegi panjang.</span>
<span class="comment">/// [panjang] adalah sisi vertikal, [lebar] adalah horizontal.</span>
<span class="keyword">double</span> <span class="function">hitungLuas</span>(<span class="keyword">double</span> <span class="variable">panjang</span>, <span class="keyword">double</span> <span class="variable">lebar</span>) {
  <span class="comment">/* 
     Rumus matematika: 
     Luas = Panjang x Lebar
  */</span>
  <span class="keyword">return</span> <span class="variable">panjang</span> * <span class="variable">lebar</span>; <span class="comment">// Kembalikan hasil perkalian</span>
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-lightbulb"></i> Tips IDE</div>
          <p>Ketika Anda menggunakan <code>///</code>, VS Code akan memformatnya sebagai dokumen Markdown interaktif saat fungsi <code>hitungLuas</code> diakses di tempat lain.</p>
        </div>
      `
    }
  ],
  imports: [
    {
      title: "Keyword import & Library",
      category: "Library",
      icon: "fas fa-file-import",
      content: `
        <p class="text-content">
          Untuk menggunakan fungsi, kelas, atau variabel yang berada di file atau library lain, Dart menggunakan keyword <code>import</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Mengimpor library matematika bawaan Dart</span>
<span class="keyword">import</span> <span class="string">'dart:math'</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Menggunakan konstanta pi dan fungsi min dari dart:math</span>
  <span class="function">print</span>(<span class="string">'Nilai Pi: </span><span class="variable">$pi</span><span class="string">'</span>);
  <span class="keyword">var</span> <span class="variable">angkaTerkecil</span> = <span class="function">min</span>(<span class="number">12</span>, <span class="number">5</span>);
  <span class="function">print</span>(<span class="string">'Angka terkecil: </span><span class="variable">$angkaTerkecil</span><span class="string">'</span>);
}</pre>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Nilai Pi: 3.141592653589793
Angka terkecil: 5</div>
        </div>
      `
    },
    {
      title: "Top-Level vs Local Scope",
      category: "Scope",
      icon: "fas fa-globe-asia",
      content: `
        <p class="text-content">
          Di Dart, fungsi dan variabel tidak harus diletakkan di dalam kelas. Mereka bisa dideklarasikan secara global (top-level) di luar fungsi manapun.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Top-level Variable (Global)</span>
<span class="type">String</span> <span class="variable">appVersion</span> = <span class="string">'1.0.0'</span>;

<span class="comment">// Top-level Function</span>
<span class="keyword">void</span> <span class="function">logMessage</span>(<span class="type">String</span> <span class="variable">msg</span>) {
  <span class="function">print</span>(<span class="string">'[LOG]: </span><span class="variable">$msg</span><span class="string">'</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">logMessage</span>(<span class="string">'Aplikasi dimulai...'</span>);
  <span class="function">print</span>(<span class="string">'Versi: </span><span class="variable">$appVersion</span><span class="string">'</span>);
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-info"></i> Keuntungan</div>
          <p>Top-level elements sangat berguna untuk mendefinisikan utilitas global atau konstanta konfigurasi aplikasi yang sering diakses tanpa harus menginstansiasi objek.</p>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Rumah Bab 2",
      category: "Tugas",
      icon: "fas fa-pencil-alt",
      content: `
        <p class="text-content">
          Mari kembangkan pemahaman tentang struktur kode dan komentar dengan menyelesaikan tantangan praktis berikut:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Dokumentasi Kalkulator Sederhana</div>
          <p>Buat program Dart yang berisi 3 fungsi matematika top-level (tambah, kurang, kali). Setiap fungsi wajib didokumentasikan menggunakan <strong>Documentation Comment (///)</strong> yang detail beserta tipe parameter dan return. Panggil fungsi-fungsi tersebut di dalam fungsi <code>main()</code>.</p>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-check"></i> Kriteria Clean Code</div>
          <ul>
            <li>Fungsi dideklarasikan di luar main (top-level).</li>
            <li>Menggunakan indentasi 2 spasi yang rapi.</li>
            <li>Gunakan <code>dart:math</code> jika diperlukan.</li>
          </ul>
        </div>
      `
    }
  ]
};
