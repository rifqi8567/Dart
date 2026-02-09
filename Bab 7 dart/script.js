/* ========================================
   DART WEB PPT - SCRIPT.JS
   Slide Navigation and Content Management
======================================== */

// ========================================
// SLIDE DATA
// ========================================

const slidesData = {
  "short-expression": {
    title: "Function Short Expression",
    slides: [
      {
        title: "Apa itu Arrow Function?",
        subtitle: "Cara singkat menulis function dalam Dart",
        content: `
                    <div class="slide-content">
                        <div class="content-box">
                            <h3>📖 Penjelasan</h3>
                            <p>Function Short Expression (Arrow Function) adalah cara singkat menulis function yang hanya memiliki <strong>satu expression</strong> atau statement.</p>
                            <p style="margin-top: 15px;">Menggunakan sintaks <code>=></code> (fat arrow) sebagai pengganti kurung kurawal <code>{}</code> dan keyword <code>return</code>.</p>
                        </div>
                        <div class="content-box">
                            <h3>✨ Keuntungan</h3>
                            <ul>
                                <li>Kode lebih ringkas dan mudah dibaca</li>
                                <li>Cocok untuk operasi sederhana</li>
                                <li>Mengurangi boilerplate code</li>
                                <li>Sintaks lebih modern dan clean</li>
                            </ul>
                        </div>
                    </div>
                    <div class="slide-content full-width" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📝 Format Sintaks</h3>
                            <div class="code-block">
<pre><span class="type">returnType</span> <span class="function">namaFunction</span>(<span class="type">parameter</span>) <span class="operator">=></span> expression;</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Contoh Dasar Arrow Function",
        subtitle: "Perbandingan normal function vs arrow function",
        content: `
                    <div class="slide-content">
                        <div class="content-box">
                            <h3>📦 Normal Function</h3>
                            <div class="code-block">
<pre><span class="comment">// Normal function dengan return</span>
<span class="type">int</span> <span class="function">kaliNormal</span>(<span class="type">int</span> a, <span class="type">int</span> b) {
  <span class="keyword">return</span> a * b;
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">kaliNormal</span>(<span class="number">4</span>, <span class="number">5</span>)); 
  <span class="comment">// Output: 20</span>
}</pre>
                            </div>
                        </div>
                        <div class="content-box">
                            <h3>⚡ Arrow Function</h3>
                            <div class="code-block">
<pre><span class="comment">// Arrow function (lebih ringkas)</span>
<span class="type">int</span> <span class="function">kaliArrow</span>(<span class="type">int</span> a, <span class="type">int</span> b) <span class="operator">=></span> a * b;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">kaliArrow</span>(<span class="number">4</span>, <span class="number">5</span>));
  <span class="comment">// Output: 20</span>
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content full-width" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>🎯 Contoh Sederhana</h3>
                            <div class="code-block">
<pre><span class="type">int</span> <span class="function">tambah</span>(<span class="type">int</span> a, <span class="type">int</span> b) <span class="operator">=></span> a + b;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">tambah</span>(<span class="number">5</span>, <span class="number">3</span>));  <span class="comment">// Output: 8</span>
  <span class="function">print</span>(<span class="function">tambah</span>(<span class="number">10</span>, <span class="number">20</span>)); <span class="comment">// Output: 30</span>
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Arrow Function dengan Single Parameter",
        subtitle: "Contoh penggunaan dengan satu parameter",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>👋 Contoh: Fungsi Sapaan</h3>
                            <div class="code-block">
<pre><span class="type">String</span> <span class="function">sapaan</span>(<span class="type">String</span> nama) <span class="operator">=></span> <span class="string">"Halo, $nama!"</span>;
<span class="type">String</span> <span class="function">selamatDatang</span>(<span class="type">String</span> nama) <span class="operator">=></span> <span class="string">"Selamat datang, $nama di sistem kami"</span>;
<span class="type">int</span> <span class="function">kuadrat</span>(<span class="type">int</span> angka) <span class="operator">=></span> angka * angka;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">sapaan</span>(<span class="string">"Budi"</span>));           <span class="comment">// Output: Halo, Budi!</span>
  <span class="function">print</span>(<span class="function">selamatDatang</span>(<span class="string">"Ani"</span>));     <span class="comment">// Output: Selamat datang, Ani di sistem kami</span>
  <span class="function">print</span>(<span class="string">"5² = \${<span class="function">kuadrat</span>(<span class="number">5</span>)}"</span>);     <span class="comment">// Output: 5² = 25</span>
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>💡 Poin Penting</h3>
                            <ul>
                                <li>Satu parameter = langsung diproses</li>
                                <li>String interpolation tetap bisa digunakan</li>
                                <li>Operasi matematika sederhana sangat cocok</li>
                            </ul>
                        </div>
                        <div class="content-box">
                            <h3>🔍 Kapan Digunakan?</h3>
                            <ul>
                                <li>Transformasi data sederhana</li>
                                <li>Format string output</li>
                                <li>Kalkulasi matematika basic</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Arrow Function Tanpa Parameter",
        subtitle: "Fungsi yang mengembalikan nilai konstan",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🔧 Contoh: Getter Functions</h3>
                            <div class="code-block">
<pre><span class="type">String</span> <span class="function">getDepartemen</span>() <span class="operator">=></span> <span class="string">"IT"</span>;
<span class="type">int</span> <span class="function">getUmurMinimal</span>() <span class="operator">=></span> <span class="number">18</span>;
<span class="type">String</span> <span class="function">getVersiAplikasi</span>() <span class="operator">=></span> <span class="string">"1.0.0"</span>;
<span class="type">bool</span> <span class="function">isDebugMode</span>() <span class="operator">=></span> <span class="keyword">true</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">"Departemen: \${<span class="function">getDepartemen</span>()}"</span>);
  <span class="function">print</span>(<span class="string">"Umur minimal: \${<span class="function">getUmurMinimal</span>()} tahun"</span>);
  <span class="function">print</span>(<span class="string">"Versi: \${<span class="function">getVersiAplikasi</span>()}"</span>);
  <span class="function">print</span>(<span class="string">"Debug mode: \${<span class="function">isDebugMode</span>()}"</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">Departemen: IT
Umur minimal: 18 tahun
Versi: 1.0.0
Debug mode: true</div>
                        </div>
                        <div class="content-box">
                            <h3>💡 Use Cases</h3>
                            <ul>
                                <li>Konfigurasi aplikasi</li>
                                <li>Nilai default/konstan</li>
                                <li>Feature flags</li>
                                <li>Metadata aplikasi</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Arrow Function dengan Kondisi Ternary",
        subtitle: "Menggabungkan arrow function dengan operator ternary",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🎯 Contoh: Evaluasi Kondisi</h3>
                            <div class="code-block">
<pre><span class="type">String</span> <span class="function">cekNilai</span>(<span class="type">int</span> nilai) <span class="operator">=></span> nilai >= <span class="number">70</span> ? <span class="string">"Lulus"</span> : <span class="string">"Tidak Lulus"</span>;
<span class="type">String</span> <span class="function">kategoriUmur</span>(<span class="type">int</span> umur) <span class="operator">=></span> umur >= <span class="number">18</span> ? <span class="string">"Dewasa"</span> : <span class="string">"Anak-anak"</span>;

<span class="comment">// Nested ternary untuk multiple kondisi</span>
<span class="type">String</span> <span class="function">statusMember</span>(<span class="type">int</span> poin) <span class="operator">=></span> poin >= <span class="number">1000</span> ? <span class="string">"Gold"</span> :
                                  poin >= <span class="number">500</span> ? <span class="string">"Silver"</span> : <span class="string">"Bronze"</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">cekNilai</span>(<span class="number">85</span>));        <span class="comment">// Output: Lulus</span>
  <span class="function">print</span>(<span class="function">cekNilai</span>(<span class="number">60</span>));        <span class="comment">// Output: Tidak Lulus</span>
  <span class="function">print</span>(<span class="function">kategoriUmur</span>(<span class="number">20</span>));    <span class="comment">// Output: Dewasa</span>
  <span class="function">print</span>(<span class="function">statusMember</span>(<span class="number">750</span>));   <span class="comment">// Output: Silver</span>
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>⚠️ Tips</h3>
                            <ul>
                                <li>Gunakan untuk kondisi sederhana</li>
                                <li>Nested ternary bisa sulit dibaca</li>
                                <li>Untuk kondisi kompleks, gunakan if-else</li>
                            </ul>
                        </div>
                        <div class="content-box">
                            <h3>📊 Format Ternary</h3>
                            <div class="code-block">
<pre><span class="comment">// kondisi ? nilaiTrue : nilaiFalse</span>
nilai >= <span class="number">70</span> ? <span class="string">"Lulus"</span> : <span class="string">"Gagal"</span></pre>
                            </div>
                        </div>
                    </div>
                `,
      },
    ],
  },
  "inner-function": {
    title: "Inner Function",
    slides: [
      {
        title: "Apa itu Inner Function?",
        subtitle: "Nested Function dalam Dart",
        content: `
                    <div class="slide-content">
                        <div class="content-box">
                            <h3>📖 Penjelasan</h3>
                            <p>Inner Function (Nested Function) adalah function yang didefinisikan <strong>di dalam function lain</strong>.</p>
                            <p style="margin-top: 15px;">Inner function memiliki akses ke variabel dan parameter dari function induknya (closure).</p>
                        </div>
                        <div class="content-box">
                            <h3>🔑 Karakteristik</h3>
                            <ul>
                                <li>Hanya bisa diakses di dalam function induk</li>
                                <li>Dapat mengakses variabel dari function induk</li>
                                <li>Berguna untuk helper functions spesifik</li>
                                <li>Membuat kode lebih terorganisir</li>
                            </ul>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>❓ Kapan Menggunakan</h3>
                            <ul>
                                <li>Operasi yang hanya dipakai di satu function</li>
                                <li>Memecah function kompleks menjadi bagian kecil</li>
                                <li>Perlu mengakses variabel dari function induk</li>
                            </ul>
                        </div>
                        <div class="content-box">
                            <h3>🎯 Scope Diagram</h3>
                            <div class="code-block">
<pre><span class="function">fungsiLuar</span>() {
  <span class="comment">// scope luar</span>
  <span class="function">fungsiDalam</span>() {
    <span class="comment">// scope dalam (bisa akses luar)</span>
  }
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Contoh Dasar Inner Function",
        subtitle: "Memahami scope dan closure",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🔄 Contoh: Basic Inner Function</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">fungsiLuar</span>() {
  <span class="type">String</span> pesan = <span class="string">"Hello dari luar"</span>;

  <span class="keyword">void</span> <span class="function">fungsiDalam</span>() {
    <span class="function">print</span>(pesan); <span class="comment">// Bisa akses variabel dari fungsi luar</span>
    <span class="function">print</span>(<span class="string">"Hello dari dalam"</span>);
  }

  <span class="function">fungsiDalam</span>(); <span class="comment">// Panggil inner function</span>
  <span class="function">fungsiDalam</span>(); <span class="comment">// Bisa dipanggil berkali-kali</span>
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">fungsiLuar</span>();
  <span class="comment">// fungsiDalam(); // ❌ ERROR! Tidak bisa dipanggil di luar</span>
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">Hello dari luar
Hello dari dalam
Hello dari luar
Hello dari dalam</div>
                        </div>
                        <div class="content-box">
                            <h3>⚠️ Ingat!</h3>
                            <ul>
                                <li>Inner function TIDAK bisa dipanggil dari luar</li>
                                <li>Scope terbatas hanya di function induk</li>
                                <li>Cocok untuk helper functions private</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Inner Function dengan Parameter",
        subtitle: "Membuat kalkulator dengan inner functions",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🧮 Contoh: Kalkulator</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">hitung</span>(<span class="type">int</span> a, <span class="type">int</span> b) {
  <span class="function">print</span>(<span class="string">"=== KALKULATOR ==="</span>);
  <span class="function">print</span>(<span class="string">"Angka 1: $a"</span>);
  <span class="function">print</span>(<span class="string">"Angka 2: $b\\n"</span>);

  <span class="comment">// Inner functions untuk setiap operasi</span>
  <span class="type">int</span> <span class="function">tambah</span>() <span class="operator">=></span> a + b;
  <span class="type">int</span> <span class="function">kurang</span>() <span class="operator">=></span> a - b;
  <span class="type">int</span> <span class="function">kali</span>() <span class="operator">=></span> a * b;
  <span class="type">double</span> <span class="function">bagi</span>() <span class="operator">=></span> a / b;

  <span class="comment">// Tampilkan hasil</span>
  <span class="function">print</span>(<span class="string">"$a + $b = \${<span class="function">tambah</span>()}"</span>);
  <span class="function">print</span>(<span class="string">"$a - $b = \${<span class="function">kurang</span>()}"</span>);
  <span class="function">print</span>(<span class="string">"$a × $b = \${<span class="function">kali</span>()}"</span>);
  <span class="function">print</span>(<span class="string">"$a ÷ $b = \${<span class="function">bagi</span>().toStringAsFixed(<span class="number">2</span>)}"</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">hitung</span>(<span class="number">10</span>, <span class="number">5</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">=== KALKULATOR ===
Angka 1: 10
Angka 2: 5

10 + 5 = 15
10 - 5 = 5
10 × 5 = 50
10 ÷ 5 = 2.00</div>
                        </div>
                        <div class="content-box">
                            <h3>💡 Keunggulan</h3>
                            <ul>
                                <li>Inner functions akses a dan b langsung</li>
                                <li>Tidak perlu passing parameter lagi</li>
                                <li>Kode lebih bersih dan terorganisir</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Nested Multi-Level",
        subtitle: "Inner function di dalam inner function",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🔄 Contoh: Multi-Level Nesting</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">level1</span>() {
  <span class="function">print</span>(<span class="string">">> Masuk Level 1"</span>);
  <span class="type">String</span> dataLevel1 = <span class="string">"Data dari Level 1"</span>;

  <span class="keyword">void</span> <span class="function">level2</span>() {
    <span class="function">print</span>(<span class="string">"  >> Masuk Level 2"</span>);
    <span class="function">print</span>(<span class="string">"  >> Akses: $dataLevel1"</span>);
    <span class="type">String</span> dataLevel2 = <span class="string">"Data dari Level 2"</span>;

    <span class="keyword">void</span> <span class="function">level3</span>() {
      <span class="function">print</span>(<span class="string">"    >> Masuk Level 3"</span>);
      <span class="function">print</span>(<span class="string">"    >> Akses: $dataLevel1"</span>);
      <span class="function">print</span>(<span class="string">"    >> Akses: $dataLevel2"</span>);
    }
    <span class="function">level3</span>();
  }
  <span class="function">level2</span>();
}

<span class="keyword">void</span> <span class="function">main</span>() { <span class="function">level1</span>(); }</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">>> Masuk Level 1
  >> Masuk Level 2
  >> Akses: Data dari Level 1
    >> Masuk Level 3
    >> Akses: Data dari Level 1
    >> Akses: Data dari Level 2</div>
                        </div>
                        <div class="content-box">
                            <h3>🔑 Key Points</h3>
                            <ul>
                                <li>Level 3 bisa akses Level 1 & 2</li>
                                <li>Level 2 hanya akses Level 1</li>
                                <li>Scope mengalir dari luar ke dalam</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Inner Function dengan Return Value",
        subtitle: "Helper functions untuk memproses data",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>📝 Contoh: Format Nama</h3>
                            <div class="code-block">
<pre><span class="type">String</span> <span class="function">formatNama</span>(<span class="type">String</span> namaDepan, <span class="type">String</span> namaBelakang) {
  <span class="comment">// Inner function untuk capitalize</span>
  <span class="type">String</span> <span class="function">capitalize</span>(<span class="type">String</span> text) {
    <span class="keyword">if</span> (text.isEmpty) <span class="keyword">return</span> text;
    <span class="keyword">return</span> text[<span class="number">0</span>].toUpperCase() + text.substring(<span class="number">1</span>).toLowerCase();
  }

  <span class="comment">// Inner function untuk membersihkan spasi</span>
  <span class="type">String</span> <span class="function">trimExtra</span>(<span class="type">String</span> text) {
    <span class="keyword">return</span> text.trim().replaceAll(RegExp(<span class="string">r'\\s+'</span>), <span class="string">' '</span>);
  }

  <span class="comment">// Proses nama</span>
  <span class="type">String</span> depan = <span class="function">capitalize</span>(<span class="function">trimExtra</span>(namaDepan));
  <span class="type">String</span> belakang = <span class="function">capitalize</span>(<span class="function">trimExtra</span>(namaBelakang));

  <span class="keyword">return</span> <span class="string">"$depan $belakang"</span>;
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="function">formatNama</span>(<span class="string">"budi"</span>, <span class="string">"SANTOSO"</span>));        <span class="comment">// Budi Santoso</span>
  <span class="function">print</span>(<span class="function">formatNama</span>(<span class="string">"  ANDI  "</span>, <span class="string">"  wijaya  "</span>)); <span class="comment">// Andi Wijaya</span>
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Inner Function untuk Validasi",
        subtitle: "Memvalidasi input user dengan helper functions",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>✅ Contoh: Validasi User</h3>
                            <div class="code-block">
<pre><span class="type">bool</span> <span class="function">validasiUser</span>(<span class="type">String</span> username, <span class="type">String</span> password, <span class="type">String</span> email) {
  <span class="comment">// Inner validation functions</span>
  <span class="type">bool</span> <span class="function">validasiUsername</span>() {
    <span class="keyword">if</span> (username.length < <span class="number">5</span>) { <span class="function">print</span>(<span class="string">"❌ Username min 5 karakter"</span>); <span class="keyword">return false</span>; }
    <span class="keyword">if</span> (username.contains(<span class="string">' '</span>)) { <span class="function">print</span>(<span class="string">"❌ Username tidak boleh spasi"</span>); <span class="keyword">return false</span>; }
    <span class="function">print</span>(<span class="string">"✓ Username valid"</span>); <span class="keyword">return true</span>;
  }

  <span class="type">bool</span> <span class="function">validasiPassword</span>() {
    <span class="keyword">if</span> (password.length < <span class="number">8</span>) { <span class="function">print</span>(<span class="string">"❌ Password min 8 karakter"</span>); <span class="keyword">return false</span>; }
    <span class="function">print</span>(<span class="string">"✓ Password valid"</span>); <span class="keyword">return true</span>;
  }

  <span class="type">bool</span> <span class="function">validasiEmail</span>() {
    <span class="keyword">if</span> (!email.contains(<span class="string">'@'</span>)) { <span class="function">print</span>(<span class="string">"❌ Email harus ada @"</span>); <span class="keyword">return false</span>; }
    <span class="function">print</span>(<span class="string">"✓ Email valid"</span>); <span class="keyword">return true</span>;
  }

  <span class="keyword">return</span> <span class="function">validasiUsername</span>() && <span class="function">validasiPassword</span>() && <span class="function">validasiEmail</span>();
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">validasiUser</span>(<span class="string">"budi123"</span>, <span class="string">"password123"</span>, <span class="string">"budi@mail.com"</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
    ],
  },
  "main-function": {
    title: "Main Function",
    slides: [
      {
        title: "Apa itu Main Function?",
        subtitle: "Entry point setiap program Dart",
        content: `
                    <div class="slide-content">
                        <div class="content-box">
                            <h3>📖 Penjelasan</h3>
                            <p>Main Function adalah <strong>entry point</strong> (titik masuk) dari setiap program Dart.</p>
                            <p style="margin-top: 15px;">Ini adalah function khusus yang akan dijalankan <strong>pertama kali</strong> saat program dieksekusi.</p>
                        </div>
                        <div class="content-box">
                            <h3>🔑 Karakteristik</h3>
                            <ul>
                                <li>Setiap program Dart <strong>HARUS</strong> memiliki function main()</li>
                                <li>Program dimulai dari main() dan berakhir ketika main() selesai</li>
                                <li>Bisa memiliki parameter atau tanpa parameter</li>
                                <li>Return type biasanya <code>void</code></li>
                            </ul>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Variasi Main Function</h3>
                            <ul>
                                <li><code>void main()</code> - Main function standar</li>
                                <li><code>void main(List&lt;String&gt; args)</code> - Dengan command-line arguments</li>
                                <li><code>Future&lt;void&gt; main() async</code> - Main function asynchronous</li>
                            </ul>
                        </div>
                        <div class="content-box">
                            <h3>🚀 Flow Diagram</h3>
                            <div class="code-block">
<pre><span class="comment">// Program Start</span>
       ↓
   <span class="function">main</span>()
       ↓
<span class="comment">// Program End</span></pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Main Function Standar",
        subtitle: "Bentuk paling sederhana",
        content: `
                    <div class="slide-content">
                        <div class="content-box">
                            <h3>🎯 Contoh: Hello World</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">"Hello, Dart!"</span>);
  <span class="function">print</span>(<span class="string">"Ini adalah program Dart pertama saya"</span>);
  <span class="function">print</span>(<span class="string">"Program dimulai dari function main()"</span>);
}</pre>
                            </div>
                        </div>
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">Hello, Dart!
Ini adalah program Dart pertama saya
Program dimulai dari function main()</div>
                        </div>
                    </div>
                    <div class="slide-content full-width" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>💡 Penjelasan</h3>
                            <ul>
                                <li><code>void</code> - Tidak mengembalikan nilai</li>
                                <li><code>main</code> - Nama function (wajib)</li>
                                <li><code>()</code> - Tanpa parameter</li>
                                <li><code>{ }</code> - Body function dengan statements</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Main Memanggil Function Lain",
        subtitle: "Mengorganisir kode dengan multiple functions",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>👋 Contoh: Fungsi Sapaan</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">sapaBudi</span>() {
  <span class="function">print</span>(<span class="string">"Halo Budi! Selamat pagi!"</span>);
}

<span class="keyword">void</span> <span class="function">sapaAndi</span>() {
  <span class="function">print</span>(<span class="string">"Halo Andi! Apa kabar?"</span>);
}

<span class="keyword">void</span> <span class="function">sapaAllah</span>() {
  <span class="function">print</span>(<span class="string">"Assalamu'alaikum"</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">"=== Program Dimulai ===\\n"</span>);
  <span class="function">sapaBudi</span>();
  <span class="function">sapaAndi</span>();
  <span class="function">sapaAllah</span>();
  <span class="function">print</span>(<span class="string">"\\n=== Program Selesai ==="</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output</h3>
                            <div class="output-preview">=== Program Dimulai ===

Halo Budi! Selamat pagi!
Halo Andi! Apa kabar?
Assalamu'alaikum

=== Program Selesai ===</div>
                        </div>
                        <div class="content-box">
                            <h3>💡 Best Practice</h3>
                            <ul>
                                <li>Main function sebagai orchestrator</li>
                                <li>Pisahkan logika ke function terpisah</li>
                                <li>Main tetap bersih dan readable</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
      {
        title: "Main dengan Inisialisasi",
        subtitle: "Pattern startup aplikasi",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>🚀 Contoh: Startup Aplikasi</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">inisialisasiDatabase</span>() {
  <span class="function">print</span>(<span class="string">"→ Menghubungkan ke database..."</span>);
  <span class="function">print</span>(<span class="string">"→ Koneksi database berhasil!"</span>);
}

<span class="keyword">void</span> <span class="function">inisialisasiKonfigurasi</span>() {
  <span class="function">print</span>(<span class="string">"→ Memuat konfigurasi..."</span>);
  <span class="function">print</span>(<span class="string">"→ Konfigurasi loaded!"</span>);
}

<span class="keyword">void</span> <span class="function">jalankanAplikasi</span>() {
  <span class="function">print</span>(<span class="string">"\\n✓ Aplikasi berjalan..."</span>);
  <span class="function">print</span>(<span class="string">"✓ Sistem siap digunakan!"</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">print</span>(<span class="string">"=== STARTUP APLIKASI ===\\n"</span>);
  <span class="function">inisialisasiDatabase</span>();
  <span class="function">inisialisasiKonfigurasi</span>();
  <span class="function">jalankanAplikasi</span>();
  <span class="function">print</span>(<span class="string">"\\n=== APLIKASI AKTIF ==="</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Main dengan Menu System",
        subtitle: "Contoh aplikasi interaktif",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>📋 Contoh: Menu Utama</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">tampilkanMenu</span>() {
  <span class="function">print</span>(<span class="string">"╔════════════════════════╗"</span>);
  <span class="function">print</span>(<span class="string">"║     MENU UTAMA         ║"</span>);
  <span class="function">print</span>(<span class="string">"╠════════════════════════╣"</span>);
  <span class="function">print</span>(<span class="string">"║ 1. Lihat Data          ║"</span>);
  <span class="function">print</span>(<span class="string">"║ 2. Tambah Data         ║"</span>);
  <span class="function">print</span>(<span class="string">"║ 3. Keluar              ║"</span>);
  <span class="function">print</span>(<span class="string">"╚════════════════════════╝"</span>);
}

<span class="keyword">void</span> <span class="function">prosesMenu</span>(<span class="type">int</span> pilihan) {
  <span class="keyword">switch</span> (pilihan) {
    <span class="keyword">case</span> <span class="number">1</span>: <span class="function">print</span>(<span class="string">"→ Menampilkan data..."</span>); <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">2</span>: <span class="function">print</span>(<span class="string">"→ Menambah data..."</span>); <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">3</span>: <span class="function">print</span>(<span class="string">"→ Keluar..."</span>); <span class="keyword">break</span>;
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">tampilkanMenu</span>();
  <span class="function">prosesMenu</span>(<span class="number">1</span>);
}</pre>
                            </div>
                        </div>
                    </div>
                `,
      },
      {
        title: "Main dengan Arguments",
        subtitle: "Menerima input dari command line",
        content: `
                    <div class="slide-content full-width">
                        <div class="content-box">
                            <h3>⌨️ Contoh: Command Line Arguments</h3>
                            <div class="code-block">
<pre><span class="keyword">void</span> <span class="function">main</span>(<span class="type">List</span><<span class="type">String</span>> args) {
  <span class="function">print</span>(<span class="string">"=== PROGRAM DENGAN ARGUMENTS ===\\n"</span>);
  <span class="function">print</span>(<span class="string">"Jumlah argument: \${args.length}"</span>);

  <span class="keyword">if</span> (args.isEmpty) {
    <span class="function">print</span>(<span class="string">"Tidak ada argument yang diberikan"</span>);
    <span class="function">print</span>(<span class="string">"\\nCara penggunaan:"</span>);
    <span class="function">print</span>(<span class="string">"dart program.dart nama umur kota"</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">"\\nArguments yang diterima:"</span>);
    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i < args.length; i++) {
      <span class="function">print</span>(<span class="string">"  \${i + <span class="number">1</span>}. \${args[i]}"</span>);
    }
  }
}

<span class="comment">// Cara menjalankan: dart program.dart Budi 25 Jakarta</span></pre>
                            </div>
                        </div>
                    </div>
                    <div class="slide-content" style="margin-top: 25px;">
                        <div class="content-box">
                            <h3>📋 Output (dengan args)</h3>
                            <div class="output-preview">=== PROGRAM DENGAN ARGUMENTS ===

Jumlah argument: 3

Arguments yang diterima:
  1. Budi
  2. 25
  3. Jakarta</div>
                        </div>
                        <div class="content-box">
                            <h3>💡 Use Cases</h3>
                            <ul>
                                <li>CLI tools dan scripts</li>
                                <li>Konfigurasi runtime</li>
                                <li>Batch processing</li>
                            </ul>
                        </div>
                    </div>
                `,
      },
    ],
  },
  "project-kelas": {
    title: "Mini Project Kelas",
    slides: [
      {
        title: "Mini Project Kelas",
        subtitle: "4 Project untuk praktik di kelas",
        content: `
                    <div class="project-grid">
                        <div class="project-item">
                            <h4>📊 Project 1: Sistem Penilaian Siswa</h4>
                            <p>Buat program untuk menghitung nilai akhir siswa dengan komponen nilai ujian, tugas, dan UTS.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Nilai Akhir = (Ujian × 40%) + (Tugas × 30%) + (UTS × 30%)</li>
                                    <li>Grade: A (≥85), B (≥70), C (≥60), D (≥50), E (<50)</li>
                                    <li>Lulus jika nilai akhir ≥60</li>
                                    <li>Gunakan arrow functions & inner functions</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>🛒 Project 2: Kalkulator Belanja</h4>
                            <p>Buat program kasir yang menghitung total belanja dengan diskon bertingkat dan pajak.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Diskon: ≥500rb (Rp50.000), ≥300rb (Rp30.000), ≥100rb (Rp10.000)</li>
                                    <li>Pajak 10% dari subtotal setelah diskon</li>
                                    <li>Tampilkan struk belanja yang rapi</li>
                                    <li>Gunakan arrow functions & inner functions</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>💱 Project 3: Konversi Mata Uang</h4>
                            <p>Buat program untuk mengkonversi Rupiah ke berbagai mata uang asing.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Kurs: 1 USD = 15.000, 1 EUR = 17.000</li>
                                    <li>1 JPY = 100, 1 SGD = 11.000</li>
                                    <li>Gunakan arrow functions untuk konversi</li>
                                    <li>Format output yang rapi</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>🔐 Project 4: Sistem Login</h4>
                            <p>Buat program registrasi user dengan validasi username, email, dan password.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Username: 5-20 karakter, tanpa spasi</li>
                                    <li>Email: harus ada @ dan .</li>
                                    <li>Password: minimal 8 karakter</li>
                                    <li>Tampilkan kekuatan password</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `,
      },
    ],
  },
  "project-rumah": {
    title: "Mini Project Rumah",
    slides: [
      {
        title: "Mini Project Rumah",
        subtitle: "4 Project tugas untuk latihan mandiri",
        content: `
                    <div class="project-grid">
                        <div class="project-item">
                            <h4>📦 Project 1: Manajemen Inventori Elektronik</h4>
                            <p>Buat program untuk mengelola inventori toko elektronik dengan tracking stok dan nilai barang.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Status stok: Aman (>10), Menipis (>5), Kritis (>0), Habis (0)</li>
                                    <li>Hitung nilai total per produk (stok × harga)</li>
                                    <li>Buat daftar produk yang perlu restock (stok ≤5)</li>
                                    <li>Gunakan arrow functions & inner functions</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>💰 Project 2: Kalkulator Gaji Karyawan</h4>
                            <p>Buat program untuk menghitung gaji karyawan dengan berbagai komponen tunjangan dan potongan.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Gaji Pokok: Senior (8jt), Junior (5jt), Intern (3.5jt)</li>
                                    <li>Tunjangan: Keluarga, Transport, Makan</li>
                                    <li>Uang Lembur: 75rb/jam</li>
                                    <li>Generate slip gaji lengkap</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>📈 Project 3: Analisis Transaksi Penjualan</h4>
                            <p>Buat program untuk menganalisis data transaksi penjualan per hari dan laporan mingguan.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Kategori: Excellent (≥1jt), Good (≥500rb), Average, Low</li>
                                    <li>Cek pencapaian target harian</li>
                                    <li>Hitung statistik mingguan</li>
                                    <li>Ringkasan dengan hari tertinggi/terendah</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-item">
                            <h4>📚 Project 4: Manajemen Perpustakaan Mini</h4>
                            <p>Buat program untuk mengelola katalog buku dan transaksi peminjaman dengan sistem denda.</p>
                            <div class="requirements">
                                <h5>📋 Ketentuan:</h5>
                                <ul>
                                    <li>Status buku: Tersedia (stok > 0), Dipinjam (stok = 0)</li>
                                    <li>Denda: 2000/hari untuk keterlambatan (>7 hari)</li>
                                    <li>Kategori denda: Tinggi (≥50rb), Sedang (≥20rb), Rendah</li>
                                    <li>Statistik peminjaman tepat waktu vs terlambat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `,
      },
    ],
  },
};

// ========================================
// DOM ELEMENTS
// ========================================

const landing = document.getElementById("landing");
const slidesContainer = document.getElementById("slides-container");
const slidesWrapper = document.getElementById("slidesWrapper");
const topicTitle = document.getElementById("topicTitle");
const currentSlideEl = document.getElementById("currentSlide");
const totalSlidesEl = document.getElementById("totalSlides");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");
const topicCards = document.querySelectorAll(".topic-card");

// ========================================
// STATE
// ========================================

let currentTopic = null;
let currentSlideIndex = 0;
let totalSlides = 0;

// ========================================
// FUNCTIONS
// ========================================

function showLanding() {
  landing.classList.add("active");
  slidesContainer.classList.remove("active");
  currentTopic = null;
  currentSlideIndex = 0;
}

function showSlides(topicId) {
  const topicData = slidesData[topicId];
  if (!topicData) return;

  currentTopic = topicId;
  currentSlideIndex = 0;
  totalSlides = topicData.slides.length;

  // Update UI
  topicTitle.textContent = topicData.title;
  totalSlidesEl.textContent = totalSlides;

  // Generate slides
  slidesWrapper.innerHTML = topicData.slides
    .map(
      (slide, index) => `
        <div class="slide ${index === 0 ? "active" : ""}" data-index="${index}">
            <div class="slide-header">
                <h2>${slide.title}</h2>
                <p>${slide.subtitle}</p>
            </div>
            ${slide.content}
        </div>
    `,
    )
    .join("");

  // Show slides container
  landing.classList.remove("active");
  slidesContainer.classList.add("active");

  updateSlideUI();
}

function updateSlideUI() {
  currentSlideEl.textContent = currentSlideIndex + 1;
  progressFill.style.width = `${((currentSlideIndex + 1) / totalSlides) * 100}%`;

  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === totalSlides - 1;

  // Update active slide
  const slides = slidesWrapper.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlideIndex);
  });
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    updateSlideUI();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlideUI();
  }
}

// ========================================
// EVENT LISTENERS
// ========================================

topicCards.forEach((card) => {
  card.addEventListener("click", () => {
    const topicId = card.dataset.topic;
    showSlides(topicId);
  });
});

homeBtn.addEventListener("click", showLanding);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!slidesContainer.classList.contains("active")) return;

  switch (e.key) {
    case "ArrowRight":
    case "Space":
      nextSlide();
      break;
    case "ArrowLeft":
      prevSlide();
      break;
    case "Escape":
      showLanding();
      break;
  }
});

// Initialize
showLanding();

console.log("🎯 Dart Web PPT initialized!");
console.log("📚 Topics:", Object.keys(slidesData).length);
