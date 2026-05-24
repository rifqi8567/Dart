// Slides Data untuk Bab 4: Tipe Data & Type Casting
const slidesData = {
  dasar: [
    {
      title: "Pengenalan Tipe Data Dasar",
      category: "Tipe Data",
      icon: "fas fa-font",
      content: `
        <p class="text-content">
          Dart adalah bahasa pemrograman <strong>statically typed</strong>, yang artinya setiap variabel memiliki tipe data yang jelas. Dart menyediakan beberapa tipe data bawaan yang sangat kuat untuk menangani data angka, teks, kebenaran, dan lainnya.
        </p>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-hashtag"></i></div>
            <div class="feature-text">
              <h4>Numbers (int, double, num)</h4>
              <p><code>int</code> untuk bilangan bulat (contoh: 10, -5). <code>double</code> untuk desimal/pecahan (contoh: 3.14, 0.5). <code>num</code> adalah tipe induk yang bisa menampung keduanya.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-font"></i></div>
            <div class="feature-text">
              <h4>String</h4>
              <p>Digunakan untuk menyimpan teks. Ditulis menggunakan petik tunggal (<code>'</code>) atau ganda (<code>"</code>).</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-toggle-on"></i></div>
            <div class="feature-text">
              <h4>Boolean (bool)</h4>
              <p>Hanya memiliki dua nilai: <code>true</code> (benar) atau <code>false</code> (salah). Sangat penting untuk control flow.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Praktik Tipe Data Angka & Boolean",
      category: "Tipe Data",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Mari kita lihat cara mendeklarasikan dan memanipulasi tipe data dasar di Dart:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">jumlahSiswa</span> = <span class="number">32</span>;
  <span class="type">double</span> <span class="variable">nilaiRataRata</span> = <span class="number">87.5</span>;
  
  <span class="comment">// num bisa menampung int maupun double</span>
  <span class="type">num</span> <span class="variable">jarak</span> = <span class="number">10</span>; 
  <span class="variable">jarak</span> = <span class="number">12.5</span>; <span class="comment">// Berhasil!</span>
  
  <span class="type">bool</span> <span class="variable">apakahLulus</span> = <span class="keyword">true</span>;
  
  <span class="function">print</span>(<span class="string">'Jumlah Siswa: </span><span class="variable">$jumlahSiswa</span><span class="string">'</span>);
  <span class="function">print</span>(<span class="string">'Nilai: </span><span class="variable">$nilaiRataRata</span><span class="string">'</span>);
  <span class="function">print</span>(<span class="string">'Lulus? </span><span class="variable">$apakahLulus</span><span class="string">'</span>);
}</pre>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Jumlah Siswa: 32
Nilai: 87.5
Lulus? true</div>
        </div>
      `
    }
  ],
  strings: [
    {
      title: "String Interpolation & Expressions",
      category: "String",
      icon: "fas fa-quote-left",
      content: `
        <p class="text-content">
          <strong>String Interpolation</strong> adalah cara menyisipkan nilai variabel langsung ke dalam teks dengan simbol <code>$variableName</code>. Jika berupa ekspresi/perhitungan, gunakan kurung kurawal: <code>\${ekspresi}</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String</span> <span class="variable">depan</span> = <span class="string">'Sandhika'</span>;
  <span class="type">String</span> <span class="variable">belakang</span> = <span class="string">'Galih'</span>;
  
  <span class="comment">// Interpolasi variabel tunggal</span>
  <span class="type">String</span> <span class="variable">namaLengkap</span> = <span class="string">'</span><span class="variable">$depan</span><span class="string"> </span><span class="variable">$belakang</span><span class="string">'</span>; 
  
  <span class="comment">// Interpolasi ekspresi</span>
  <span class="type">String</span> <span class="variable">pesanUmur</span> = <span class="string">'Tahun depan umur saya: \${17 + 1} tahun'</span>;
  
  <span class="function">print</span>(<span class="variable">namaLengkap</span>);
  <span class="function">print</span>(<span class="variable">pesanUmur</span>);
}</pre>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Sandhika Galih
Tahun depan umur saya: 18 tahun</div>
        </div>
      `
    },
    {
      title: "Multiline String & Raw String",
      category: "String",
      icon: "fas fa-align-left",
      content: `
        <p class="text-content">
          Dart mendukung <strong>Multiline String</strong> menggunakan tiga tanda petik tunggal/ganda (<code>'''</code> atau <code>"""</code>). Jika ingin mengabaikan escape characters (seperti <code>\\n</code>), gunakan <strong>Raw String</strong> dengan menambahkan awalan huruf <code>r</code> sebelum tanda petik.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Multiline String</span>
  <span class="type">String</span> <span class="variable">puisi</span> = <span class="string">'''
Hari ini belajar Dart,
Bahasa modern buatan Google,
Sangat seru dan menyenangkan!
'''</span>;
  
  <span class="comment">// Raw String (simbol \\n dicetak apa adanya, tidak menjadi baris baru)</span>
  <span class="type">String</span> <span class="variable">path</span> = <span class="string">r'C:\\users\\admin\\document\\nota.pdf'</span>;
  
  <span class="function">print</span>(<span class="variable">puisi</span>);
  <span class="function">print</span>(<span class="variable">path</span>);
}</pre>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Hari ini belajar Dart,
Bahasa modern buatan Google,
Sangat seru dan menyenangkan!

C:\\users\\admin\\document\\nota.pdf</div>
        </div>
      `
    }
  ],
  casting: [
    {
      title: "Konversi Data (Parsing)",
      category: "Type Casting",
      icon: "fas fa-exchange-alt",
      content: `
        <p class="text-content">
          Seringkali kita perlu mengubah tipe data dari teks ke angka (atau sebaliknya). Proses ini biasa disebut <strong>Parsing</strong>. Dart mempermudah hal ini lewat method <code>parse()</code> dan <code>toString()</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-exchange-alt"></i> Analogi Dunia Nyata: Penuangan Air</div>
          <p>Bayangkan konversi tipe data seperti menuangkan air. Menuang dari <strong>gelas kecil (int) ke ember besar (double)</strong> terjamin aman dan otomatis (Implicit). Namun, menuang dari <strong>ember (double) ke gelas (int)</strong> berisiko tumpah/pecah, sehingga butuh filter khusus atau pemotongan angka desimal (Explicit Casting menggunakan <code>as</code> atau method pembulatan).</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Str["String: '10'"] -->|int.parse| Int["int: 10"]
            Int -->|toDouble| Dbl["double: 10.0"]
            Dbl -->|toInt| Int2["int: 10"]
            
            style Str fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Int fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Dbl fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Int2 fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 1. String ke int / double</span>
  <span class="type">int</span> <span class="variable">angkaSatu</span> = <span class="type">int</span>.<span class="function">parse</span>(<span class="string">'10'</span>);
  <span class="type">double</span> <span class="variable">desimalSatu</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="string">'3.14'</span>);
  
  <span class="comment">// 2. Angka ke String</span>
  <span class="type">String</span> <span class="variable">teksAngka</span> = <span class="number">100</span>.<span class="function">toString</span>();
  <span class="type">String</span> <span class="variable">teksDesimal</span> = <span class="number">3.14159</span>.<span class="function">toStringAsFixed</span>(<span class="number">2</span>); <span class="comment">// dibatasi 2 angka desimal</span>
  
  <span class="function">print</span>(<span class="variable">angkaSatu</span> + <span class="variable">desimalSatu</span>); <span class="comment">// 13.14</span>
  <span class="function">print</span>(<span class="variable">teksAngka</span>); <span class="comment">// "100"</span>
  <span class="function">print</span>(<span class="variable">teksDesimal</span>); <span class="comment">// "3.14"</span>
}</pre>
          </div>
        </div>
        <div class="info-box danger">
          <div class="info-box-title"><i class="fas fa-radiation"></i> Perhatian Saat Parsing!</div>
          <p>Jika String yang di-parse tidak valid (misalnya <code>int.parse('10a')</code>), Dart akan melempar error <code>FormatException</code>. Untuk amannya, gunakan <code>tryParse()</code> yang akan mengembalikan <code>null</code> jika gagal.</p>
        </div>
      `
    },
    {
      title: "Type Test & Casting (as, is, is!)",
      category: "Type Casting",
      icon: "fas fa-shield-alt",
      content: `
        <p class="text-content">
          Untuk memeriksa tipe variabel di runtime, kita dapat menggunakan operator <strong>type test</strong> (<code>is</code> dan <code>is!</code>). Sedangkan untuk memaksa konversi tipe (downcasting), kita gunakan keyword <code>as</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">dynamic</span> <span class="variable">nilai</span> = <span class="string">'Halo Belajar Dart'</span>;
  
  <span class="comment">// Uji tipe data</span>
  <span class="keyword">if</span> (<span class="variable">nilai</span> <span class="keyword">is</span> <span class="type">String</span>) {
    <span class="comment">// Type Promotion: Di dalam blok ini, "nilai" otomatis bertipe String!</span>
    <span class="function">print</span>(<span class="variable">nilai</span>.length); <span class="comment">// Output: 17</span>
  }
  
  <span class="comment">// Downcasting secara eksplisit menggunakan 'as'</span>
  <span class="type">String</span> <span class="variable">teks</span> = <span class="variable">nilai</span> <span class="keyword">as</span> <span class="type">String</span>;
  <span class="function">print</span>(<span class="variable">teks</span>.toUpperCase());
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 4",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Kerjakan latihan berikut untuk menguji pemahaman Anda mengenai Tipe Data dan Casting:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Konverter Nilai dan Profil</div>
          <p>Tulis program Dart yang melakukan hal berikut:</p>
          <ul>
            <li>Buat variabel String berisi nilai numerik mentah, misalnya: <code>String inputNilai = "89.5";</code></li>
            <li>Konversikan String tersebut ke tipe <code>double</code> menggunakan <code>double.parse()</code>.</li>
            <li>Konversikan kembali double tersebut ke tipe <code>int</code> dengan memotong angka di belakang koma (cari method bawaan double untuk membulatkan atau memotong nilai).</li>
            <li>Cetak profil pengguna yang memuat Nama (String), Umur (int), dan Nilai Baru (int) menggunakan <strong>Multiline String</strong> dan <strong>String Interpolation</strong>.</li>
          </ul>
        </div>
      `
    }
  ]
};
