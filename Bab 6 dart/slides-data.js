// Slides Data untuk Bab 6: Control Flow: Percabangan
const slidesData = {
  ifelse: [
    {
      title: "Kondisi: If, Else If, & Else",
      category: "If-Else",
      icon: "fas fa-code-branch",
      content: `
        <p class="text-content">
          Struktur percabangan digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi boolean yang terpenuhi. Kondisi harus menghasilkan nilai <code>true</code> agar blok <code>if</code> dijalankan.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-code-branch"></i> Analogi Dunia Nyata: Rambu Pertigaan Jalan</div>
          <p>Bayangkan percabangan <code>if-else</code> seperti pertigaan jalan. Anda hanya bisa memilih satu arah berdasarkan rambu penunjuk jalan (kondisi). Jika kondisi pertama terpenuhi, Anda ambil jalur kiri. Jika tidak, Anda periksa rambu berikutnya (else if), atau mengambil jalur lurus default (else).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Start([Mulai]) --> CondA{"Apakah Nilai >= 90?"}
            CondA -->|Ya| PathA[Predikat A]
            CondA -->|Tidak| CondB{"Apakah Nilai >= 80?"}
            CondB -->|Ya| PathB[Predikat B]
            CondB -->|Tidak| CondC{"Apakah Nilai >= 70?"}
            CondC -->|Ya| PathC[Predikat C]
            CondC -->|Tidak| PathD[Predikat D]
            
            PathA --> End([Selesai])
            PathB --> End
            PathC --> End
            PathD --> End
            
            style CondA fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style CondB fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style CondC fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style PathA fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style PathB fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style PathC fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style PathD fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">nilaiUjian</span> = <span class="number">85</span>;
  
  <span class="keyword">if</span> (<span class="variable">nilaiUjian</span> >= <span class="number">90</span>) {
    <span class="function">print</span>(<span class="string">'Predikat: A (Istimewa)'</span>);
  } <span class="keyword">else</span> <span class="keyword">if</span> (<span class="variable">nilaiUjian</span> >= <span class="number">80</span>) {
    <span class="function">print</span>(<span class="string">'Predikat: B (Sangat Baik)'</span>); <span class="comment">// Jalur ini terpilih</span>
  } <span class="keyword">else</span> <span class="keyword">if</span> (<span class="variable">nilaiUjian</span> >= <span class="number">70</span>) {
    <span class="function">print</span>(<span class="string">'Predikat: C (Cukup)'</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">'Predikat: D (Remedial)'</span>);
  }
}</pre>
          </div>
        </div>
      `
    }
  ],
  ternary: [
    {
      title: "Ternary Operator (Kondisi Singkat)",
      category: "Ternary",
      icon: "fas fa-bolt",
      content: `
        <p class="text-content">
          Ternary Operator adalah singkatan dari blok <code>if-else</code> sederhana. Ditulis dengan sintaks: <code>kondisi ? nilai_jika_true : nilai_jika_false</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">umur</span> = <span class="number">18</span>;
  
  <span class="comment">// Menggunakan if-else biasa</span>
  <span class="type">String</span> <span class="variable">status1</span>;
  <span class="keyword">if</span> (<span class="variable">umur</span> >= <span class="number">17</span>) {
    <span class="variable">status1</span> = <span class="string">'Dewasa'</span>;
  } <span class="keyword">else</span> {
    <span class="variable">status1</span> = <span class="string">'Anak-anak'</span>;
  }
  
  <span class="comment">// Menggunakan Ternary Operator (Lebih ringkas & bersih!)</span>
  <span class="type">String</span> <span class="variable">status2</span> = (<span class="variable">umur</span> >= <span class="number">17</span>) ? <span class="string">'Dewasa'</span> : <span class="string">'Anak-anak'</span>;
  
  <span class="function">print</span>(<span class="variable">status2</span>); <span class="comment">// Output: Dewasa</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  switchcase: [
    {
      title: "Switch-Case Tradisional",
      category: "Switch",
      icon: "fas fa-list-ol",
      content: `
        <p class="text-content">
          <code>switch-case</code> digunakan jika kita memiliki satu variabel dengan banyak kemungkinan nilai tetap yang ingin diperiksa. Gunakan <code>break</code> di akhir setiap case agar eksekusi tidak bocor ke case berikutnya.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String</span> <span class="variable">hari</span> = <span class="string">'Senin'</span>;
  
  <span class="keyword">switch</span> (<span class="variable">hari</span>) {
    <span class="keyword">case</span> <span class="string">'Senin'</span>:
      <span class="function">print</span>(<span class="string">'Hari pertama masuk sekolah.'</span>);
      <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="string">'Jumat'</span>:
      <span class="function">print</span>(<span class="string">'Hari krida dan olahraga.'</span>);
      <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="string">'Minggu'</span>:
      <span class="function">print</span>(<span class="string">'Hari libur nasional!'</span>);
      <span class="keyword">break</span>;
    <span class="keyword">default</span>:
      <span class="function">print</span>(<span class="string">'Hari biasa untuk belajar.'</span>);
  }
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Switch Expression (Fitur Baru Dart 3+)",
      category: "Switch Expression",
      icon: "fas fa-star",
      content: `
        <p class="text-content">
          Diperkenalkan mulai **Dart 3.0**, **Switch Expression** memungkinkan switch untuk langsung mengembalikan nilai (return value) secara ekspresif, ringkas, tanpa memerlukan keyword <code>case</code> dan <code>break</code>. Simbol <code>_</code> digunakan sebagai default case (wildcard).
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart 3+</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String</span> <span class="variable">lampu</span> = <span class="string">'kuning'</span>;
  
  <span class="comment">// Switch Expression mengembalikan nilai ke variabel instruksi</span>
  <span class="type">String</span> <span class="variable">instruksi</span> = <span class="keyword">switch</span> (<span class="variable">lampu</span>) {
    <span class="string">'merah'</span> => <span class="string">'Berhenti!'</span>,
    <span class="string">'kuning'</span> => <span class="string">'Bersiap-siap!'</span>,
    <span class="string">'hijau'</span> => <span class="string">'Jalan terus!'</span>,
    <span class="keyword">_</span> => <span class="string">'Lampu rusak!'</span> <span class="comment">// default case</span>
  };
  
  <span class="function">print</span>(<span class="variable">instruksi</span>); <span class="comment">// Output: Bersiap-siap!</span>
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-check-circle"></i> Keuntungan Switch Expression</div>
          <p>Mencegah bug akibat lupa menulis keyword <code>break</code> yang sering memicu eksekusi bocor (fall-through) pada switch-case lama.</p>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 6",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Asah logika percabangan Anda dengan tugas mandiri di bawah ini:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Sistem Kasir Toko Buku</div>
          <p>Buat program Dart yang mensimulasikan sistem pembayaran di kasir dengan ketentuan:</p>
          <ul>
            <li>Ada variabel <code>int totalBelanja</code> dan <code>bool punyaKartuMember</code>.</li>
            <li>Jika belanja di atas Rp 200.000 dan punya kartu member, mendapat diskon 15%.</li>
            <li>Jika belanja di atas Rp 200.000 tapi tidak punya kartu member, mendapat diskon 10%.</li>
            <li>Jika belanja di bawah Rp 200.000 tapi punya kartu member, mendapat diskon 5%.</li>
            <li>Gunakan <strong>Nested If (If bersarang)</strong> atau kombinasi operator logika untuk menghitung diskon.</li>
            <li>Cetak total belanja awal, diskon yang didapat, dan total akhir yang harus dibayar.</li>
          </ul>
        </div>
      `
    }
  ]
};
