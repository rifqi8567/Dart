// Slides Data untuk Bab 3: Variabel, Konstanta & Scope
const slidesData = {
  variables: [
    {
      title: "Variabel & Type Inference",
      category: "Variabel",
      icon: "fas fa-box",
      content: `
        <p class="text-content">
          <strong>Variabel</strong> adalah kontainer memori untuk menyimpan data. Di Dart, kita bisa mendeklarasikan variabel dengan tipe data eksplisit (seperti <code>String</code>, <code>int</code>) atau menggunakan keyword <code>var</code> yang memicu <em>Type Inference</em>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-box"></i> Analogi Dunia Nyata: Kotak Penyimpanan</div>
          <p>Bayangkan <strong>Variabel</strong> seperti <strong>kotak penyimpanan berlabel</strong>. Label pada kotak menentukan barang apa yang boleh dimasukkan (tipe data). Kotak berlabel <em>String</em> hanya boleh diisi teks. Kotak <code>var</code> akan ditempeli label permanen setelah barang pertama dimasukkan (Type Inference). Kotak <code>dynamic</code> adalah kotak ajaib yang isinya bisa diganti barang apa saja kapan saja.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            VarString["var nama = 'Ahmad'"] -->|"Tebakan Otomatis"| Infer["String"]
            VarInt["var umur = 17"] -->|"Tebakan Otomatis"| InferInt["int"]
            
            style VarString fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style VarInt fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Infer fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style InferInt fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 1. Deklarasi Eksplisit</span>
  <span class="type">String</span> <span class="variable">nama</span> = <span class="string">'Ahmad'</span>;
  
  <span class="comment">// 2. Type Inference (Dart menebak tipenya otomatis)</span>
  <span class="keyword">var</span> <span class="variable">umur</span> = <span class="number">17</span>; <span class="comment">// Dianggap int secara otomatis</span>
  
  <span class="comment">// umur = 'Tujuh Belas'; // ERROR! Variabel var bersifat type-safe</span>
  <span class="function">print</span>(<span class="string">'Nama: </span><span class="variable">$nama</span><span class="string">, Umur: </span><span class="variable">$umur</span><span class="string">'</span>);
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-info-circle"></i> Type Inference</div>
          <p>Meskipun menggunakan <code>var</code>, Dart tetap memeriksa tipe data secara ketat. Sekali variabel dideklarasikan dan diisi nilai, tipe datanya tidak bisa diubah.</p>
        </div>
      `
    },
    {
      title: "Tipe Data Dynamic",
      category: "Variabel",
      icon: "fas fa-sync-alt",
      content: `
        <p class="text-content">
          Jika Anda memerlukan variabel yang tipenya dapat berubah secara dinamis selama program berjalan, gunakan keyword <code>dynamic</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">dynamic</span> <span class="variable">data</span> = <span class="string">'Hello'</span>;
  <span class="function">print</span>(<span class="variable">data</span>); <span class="comment">// Output: Hello</span>
  
  <span class="variable">data</span> = <span class="number">100</span>; <span class="comment">// Berhasil diubah menjadi int!</span>
  <span class="function">print</span>(<span class="variable">data</span>); <span class="comment">// Output: 100</span>
  
  <span class="variable">data</span> = <span class="keyword">true</span>; <span class="comment">// Berhasil diubah menjadi bool!</span>
  <span class="function">print</span>(<span class="variable">data</span>); <span class="comment">// Output: true</span>
}</pre>
          </div>
        </div>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-exclamation-triangle"></i> Caution</div>
          <p>Hindari penggunaan <code>dynamic</code> yang berlebihan karena akan mematikan fitur type checking Dart, yang bisa menyebabkan aplikasi crash di runtime jika terjadi kesalahan operasi.</p>
        </div>
      `
    }
  ],
  constants: [
    {
      title: "Perbandingan: final vs const",
      category: "Konstanta",
      icon: "fas fa-lock",
      content: `
        <p class="text-content">
          Gunakan <code>final</code> dan <code>const</code> untuk membuat variabel imut (tidak bisa diubah nilainya). Meskipun tampak mirip, ada perbedaan fundamental dalam cara alokasi memorinya:
        </p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Fitur</th>
              <th>final</th>
              <th>const</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Karakteristik</strong></td>
              <td><em>Read-only</em> setelah pertama kali diinisialisasi.</td>
              <td>Konstanta murni dari compile-time.</td>
            </tr>
            <tr>
              <td><strong>Inisialisasi Nilai</strong></td>
              <td>Bisa diisi nilai yang baru diketahui saat runtime (misal: waktu saat ini, data sensor, input user).</td>
              <td>Wajib diisi dengan nilai yang sudah pasti saat kode dikompilasi (literal konstan).</td>
            </tr>
            <tr>
              <td><strong>Contoh Kode</strong></td>
              <td><code>final time = DateTime.now();</code> ✓</td>
              <td><code>const pi = 3.14;</code> ✓</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Keyword late (Lazy Variable)",
      category: "Konstanta",
      icon: "fas fa-hourglass-start",
      content: `
        <p class="text-content">
          Keyword <code>late</code> digunakan untuk menunda inisialisasi variabel non-nullable sampai variabel tersebut benar-benar diakses pertama kali dalam program (lazy evaluation), atau untuk memberi tahu compiler bahwa variabel pasti diisi sebelum dibaca.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">late</span> <span class="type">String</span> <span class="variable">deskripsi</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Mengisi nilai sebelum diakses agar aman</span>
  <span class="variable">deskripsi</span> = <span class="string">'Belajar Dart itu menyenangkan!'</span>;
  <span class="function">print</span>(<span class="variable">deskripsi</span>);
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-check-circle"></i> Use Case late</div>
          <p>Sangat berguna dalam integrasi Flutter saat inisialisasi state membutuhkan kalkulasi kompleks atau bergantung pada siklus hidup component (widget lifecycles).</p>
        </div>
      `
    }
  ],
  scopes: [
    {
      title: "Variable Scopes di Dart",
      category: "Scope",
      icon: "fas fa-bullseye",
      content: `
        <p class="text-content">
          <strong>Scope</strong> (cakupan) menentukan di mana suatu variabel dapat diakses di dalam kode. Dart menggunakan Lexical Scoping, artinya cakupan ditentukan oleh struktur kurung kurawal <code>{}</code>.
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">G</div>
            <div class="step-content">
              <h4>Global/Top-level Scope</h4>
              <p>Dideklarasikan di luar fungsi manapun. Dapat diakses dari baris mana saja dalam file tersebut.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">L</div>
            <div class="step-content">
              <h4>Local Scope</h4>
              <p>Dideklarasikan di dalam suatu fungsi (seperti <code>main()</code>). Hanya bisa diakses dari dalam fungsi tersebut.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">B</div>
            <div class="step-content">
              <h4>Block Scope</h4>
              <p>Dideklarasikan di dalam blok kontrol seperti <code>if</code>, <code>for</code>, atau <code>while</code>. Hanya berlaku di dalam blok kurung kurawal tersebut.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Contoh Kode Scoping",
      category: "Scope",
      icon: "fas fa-eye",
      content: `
        <p class="text-content">
          Perhatikan baik-baik di mana variabel dideklarasikan dan batas aksesibilitasnya:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="type">String</span> <span class="variable">globalName</span> = <span class="string">'Siswa Global'</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">localAge</span> = <span class="number">16</span>; <span class="comment">// Local scope</span>
  
  <span class="keyword">if</span> (<span class="variable">localAge</span> >= <span class="number">15</span>) {
    <span class="type">String</span> <span class="variable">blockMsg</span> = <span class="string">'Sudah Remaja'</span>; <span class="comment">// Block scope</span>
    <span class="function">print</span>(<span class="variable">globalName</span>); <span class="comment">// Bisa diakses</span>
    <span class="function">print</span>(<span class="variable">blockMsg</span>);   <span class="comment">// Bisa diakses</span>
  }
  
  <span class="comment">// print(blockMsg); // ERROR! blockMsg tidak dikenali di luar blok if</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 3",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Ayo asah pemahaman Anda tentang variabel, konstanta, dan scope dengan latihan mandiri berikut:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Sistem Kartu Identitas Kelas</div>
          <p>Buat program Dart yang menyimpan profil sekolah secara statis. Kriteria:</p>
          <ul>
            <li>Gunakan <code>const</code> untuk nama sekolah (karena nilainya konstan compile-time).</li>
            <li>Gunakan <code>final</code> untuk waktu pencetakan kartu (runtime menggunakan <code>DateTime.now()</code>).</li>
            <li>Gunakan <code>var</code> untuk menyimpan nama siswa dan nilainya.</li>
            <li>Buat sebuah variabel di dalam blok <code>if</code> (block scope) yang menentukan status kelulusan siswa, lalu buktikan bahwa variabel tersebut tidak bisa diakses dari luar blok.</li>
          </ul>
        </div>
      `
    }
  ]
};
