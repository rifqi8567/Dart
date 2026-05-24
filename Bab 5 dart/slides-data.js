// Slides Data untuk Bab 5: Operator Dart Lengkap
const slidesData = {
  aritmatika: [
    {
      title: "Operator Aritmatika & Increment/Decrement",
      category: "Aritmatika",
      icon: "fas fa-plus-minus",
      content: `
        <p class="text-content">
          Operator Aritmatika digunakan untuk melakukan operasi matematika dasar. Dart mendukung penambahan, pengurangan, perkalian, pembagian, sisa bagi (modulus), dan pembagian integer.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">a</span> = <span class="number">10</span>;
  <span class="type">int</span> <span class="variable">b</span> = <span class="number">3</span>;
  
  <span class="function">print</span>(<span class="string">'Penjumlahan (a + b): </span><span class="variable">\${a + b}</span><span class="string">'</span>); <span class="comment">// 13</span>
  <span class="function">print</span>(<span class="string">'Pembagian double (a / b): </span><span class="variable">\${a / b}</span><span class="string">'</span>); <span class="comment">// 3.3333333333333335</span>
  <span class="function">print</span>(<span class="string">'Pembagian integer (a ~/ b): </span><span class="variable">\${a ~/ b}</span><span class="string">'</span>); <span class="comment">// 3 (dibulatkan ke bawah)</span>
  <span class="function">print</span>(<span class="string">'Sisa Bagi/Modulus (a % b): </span><span class="variable">\${a % b}</span><span class="string">'</span>); <span class="comment">// 1</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Increment & Decrement (Prefix vs Postfix)",
      category: "Aritmatika",
      icon: "fas fa-calculator",
      content: `
        <p class="text-content">
          Operator <strong>increment</strong> (<code>++</code>) menambah 1, dan <strong>decrement</strong> (<code>--</code>) mengurangi 1. Letak operator menentukan kapan perhitungan dilakukan:
        </p>
        <div class="two-column">
          <div class="info-box">
            <div class="info-box-title">Postfix (x++)</div>
            <p>Nilai variabel digunakan terlebih dahulu untuk operasi saat ini, baru kemudian nilainya ditambah 1.</p>
            <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">int x = 5;
print(x++); // Cetak 5, x jadi 6</pre>
          </div>
          <div class="info-box">
            <div class="info-box-title">Prefix (++x)</div>
            <p>Nilai variabel ditambah 1 terlebih dahulu, baru nilainya digunakan untuk operasi saat ini.</p>
            <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">int y = 5;
print(++y); // Cetak 6, y jadi 6</pre>
          </div>
        </div>
      `
    }
  ],
  relasional: [
    {
      title: "Operator Perbandingan & Relasional",
      category: "Perbandingan",
      icon: "fas fa-balance-scale",
      content: `
        <p class="text-content">
          Operator perbandingan digunakan untuk membandingkan dua nilai. Hasil dari operasi perbandingan selalu berupa nilai boolean (<code>true</code> atau <code>false</code>).
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">nilai</span> = <span class="number">80</span>;
  
  <span class="function">print</span>(<span class="variable">nilai</span> == <span class="number">80</span>); <span class="comment">// true (Sama dengan)</span>
  <span class="function">print</span>(<span class="variable">nilai</span> != <span class="number">80</span>); <span class="comment">// false (Tidak sama dengan)</span>
  <span class="function">print</span>(<span class="variable">nilai</span> > <span class="number">75</span>);  <span class="comment">// true (Lebih besar dari)</span>
  <span class="function">print</span>(<span class="variable">nilai</span> <span class="keyword">&lt;</span> <span class="number">70</span>);  <span class="comment">// false (Lebih kecil dari)</span>
  <span class="function">print</span>(<span class="variable">nilai</span> >= <span class="number">80</span>); <span class="comment">// true (Lebih besar atau sama dengan)</span>
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-lightbulb"></i> Penting untuk Logika Percabangan</div>
          <p>Operator ini adalah fondasi utama pembuatan kondisi pada struktur <code>if-else</code> yang menentukan arah jalannya program.</p>
        </div>
      `
    }
  ],
  logika: [
    {
      title: "Operator Logika (Logical Operators)",
      category: "Logika",
      icon: "fas fa-brain",
      content: `
        <p class="text-content">
          Digunakan untuk menghubungkan beberapa kondisi boolean:
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-brain"></i> Analogi Dunia Nyata: Gerbang Bioskop & KRL</div>
          <p>Bayangkan <strong>AND (&&)</strong> seperti pintu masuk bioskop: Anda wajib membawa <strong>Tiket DAN Kartu Identitas</strong> (keduanya harus benar). Sedangkan <strong>OR (||)</strong> seperti pintu gerbang KRL: Anda bisa tap menggunakan <strong>Kartu E-money ATAU Barcode HP</strong> (salah satu saja benar, gerbang akan terbuka).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            subgraph "Gerbang AND"
            Cond1{"Kondisi 1: Tiket?"} -->|Ya| Cond2{"Kondisi 2: KTP?"}
            Cond1 -->|Tidak| Closed["Gerbang Tertutup / false"]
            Cond2 -->|Ya| Open["Gerbang Terbuka / true"]
            Cond2 -->|Tidak| Closed
            end
            
            subgraph "Gerbang OR"
            Or1{"Kondisi 1: E-Money?"} -->|Ya| OpenOr["Gerbang Terbuka / true"]
            Or1 -->|Tidak| Or2{"Kondisi 2: Barcode?"}
            Or2 -->|Ya| OpenOr
            Or2 -->|Tidak| ClosedOr["Gerbang Tertutup / false"]
            end
            
            style Cond1 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Cond2 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Open fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style Closed fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
            
            style Or1 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Or2 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style OpenOr fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style ClosedOr fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
        </div>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">&&</div>
            <div class="feature-text">
              <h4>DAN (Logical AND)</h4>
              <p>Menghasilkan <code>true</code> HANYA JIKA semua kondisi bernilai <code>true</code>.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">||</div>
            <div class="feature-text">
              <h4>ATAU (Logical OR)</h4>
              <p>Menghasilkan <code>true</code> JIKA salah satu kondisi bernilai <code>true</code>.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">!</div>
            <div class="feature-text">
              <h4>TIDAK (Logical NOT)</h4>
              <p>Membalikkan nilai boolean (<code>true</code> menjadi <code>false</code>, dan sebaliknya).</p>
            </div>
          </div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">bool</span> <span class="variable">punyaSim</span> = <span class="keyword">true</span>;
  <span class="type">bool</span> <span class="variable">bawaHelm</span> = <span class="keyword">false</span>;
  
  <span class="comment">// Operator AND (&&)</span>
  <span class="function">print</span>(<span class="variable">punyaSim</span> && <span class="variable">bawaHelm</span>); <span class="comment">// false</span>
  
  <span class="comment">// Operator OR (||)</span>
  <span class="function">print</span>(<span class="variable">punyaSim</span> || <span class="variable">bawaHelm</span>); <span class="comment">// true</span>
  
  <span class="comment">// Operator NOT (!)</span>
  <span class="function">print</span>(!<span class="variable">punyaSim</span>); <span class="comment">// false</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  assignment: [
    {
      title: "Operator Assignment (Penugasan)",
      category: "Assignment",
      icon: "fas fa-pen-fancy",
      content: `
        <p class="text-content">
          Operator Assignment digunakan untuk memberikan nilai ke variabel. Selain operator dasar (<code>=</code>), Dart mendukung operator penugasan majemuk (<em>Compound Assignment</em>) untuk mempersingkat penulisan kode.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">double</span> <span class="variable">nilai</span> = <span class="number">10</span>;
  
  <span class="variable">nilai</span> += <span class="number">5</span>;  <span class="comment">// Sama dengan: nilai = nilai + 5 (Hasil: 15)</span>
  <span class="variable">nilai</span> -= <span class="number">2</span>;  <span class="comment">// Sama dengan: nilai = nilai - 2 (Hasil: 13)</span>
  <span class="variable">nilai</span> *= <span class="number">2</span>;  <span class="comment">// Sama dengan: nilai = nilai * 2 (Hasil: 26)</span>
  <span class="variable">nilai</span> /= <span class="number">4</span>;  <span class="comment">// Sama dengan: nilai = nilai / 4 (Hasil: 6.5)</span>
  
  <span class="function">print</span>(<span class="variable">nilai</span>); <span class="comment">// 6.5</span>
  
  <span class="comment">// Null-aware Assignment (??=)</span>
  <span class="keyword">dynamic</span> <span class="variable">nama</span> = <span class="keyword">null</span>;
  <span class="variable">nama</span> ??= <span class="string">'Budi'</span>; <span class="comment">// Diisi 'Budi' hanya jika variabel nama bernilai null</span>
  <span class="function">print</span>(<span class="variable">nama</span>); <span class="comment">// Budi</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 5",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Praktikkan penggunaan operator dengan latihan mandiri di bawah ini:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Evaluasi Kelulusan Beasiswa</div>
          <p>Buat program Dart yang mengevaluasi apakah seorang siswa berhak mendapatkan beasiswa. Syarat kelulusan:</p>
          <ul>
            <li>Nilai Matematika harus di atas 80.</li>
            <li>Nilai Bahasa Inggris harus di atas 75.</li>
            <li>Rata-rata kedua nilai tersebut harus di atas 80.</li>
          </ul>
          <p>Kriteria Implementasi:</p>
          <ul>
            <li>Gunakan operator aritmatika untuk menghitung nilai rata-rata.</li>
            <li>Gunakan operator perbandingan untuk mengecek syarat masing-masing nilai.</li>
            <li>Gunakan operator logika (<code>&&</code>) untuk memvalidasi seluruh kondisi beasiswa.</li>
            <li>Cetak status kelulusan (<code>true</code> / <code>false</code>) ke layar.</li>
          </ul>
        </div>
      `
    }
  ]
};
