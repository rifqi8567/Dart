// ===== SLIDES DATA =====
const slidesData = {
    aritmatika: {
        title: "3.1 Operator Aritmatika",
        slides: [
            {
                title: "Apa itu Operator Aritmatika?",
                subtitle: "Pengenalan dasar operasi matematika di Dart",
                content: `
                    <div class="info-box highlight">
                        <h3>📌 Definisi</h3>
                        <p>Operator Aritmatika digunakan untuk melakukan operasi matematika pada nilai numerik (int dan double).</p>
                    </div>
                    <div class="feature-grid">
                        <div class="feature-card"><div class="icon">➕</div><h4>+</h4><p>Penjumlahan</p></div>
                        <div class="feature-card"><div class="icon">➖</div><h4>-</h4><p>Pengurangan</p></div>
                        <div class="feature-card"><div class="icon">✖️</div><h4>*</h4><p>Perkalian</p></div>
                        <div class="feature-card"><div class="icon">➗</div><h4>/</h4><p>Pembagian (double)</p></div>
                        <div class="feature-card"><div class="icon">📐</div><h4>~/</h4><p>Pembagian Integer</p></div>
                        <div class="feature-card"><div class="icon">🔢</div><h4>%</h4><p>Modulus (sisa bagi)</p></div>
                    </div>
                `
            },
            {
                title: "Operator Dasar: +, -, *, /",
                content: `
                    <div class="code-block">
                        <div class="code-header"><span>Contoh Operasi Dasar</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">int</span> a = <span class="number">10</span>;
<span class="keyword">int</span> b = <span class="number">3</span>;

<span class="comment">// Penjumlahan</span>
<span class="keyword">int</span> tambah = a + b;  <span class="comment">// 13</span>

<span class="comment">// Pengurangan</span>
<span class="keyword">int</span> kurang = a - b;  <span class="comment">// 7</span>

<span class="comment">// Perkalian</span>
<span class="keyword">int</span> kali = a * b;    <span class="comment">// 30</span>

<span class="comment">// Pembagian (hasil double)</span>
<span class="keyword">double</span> bagi = a / b; <span class="comment">// 3.333...</span></pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>a + b = 13
a - b = 7
a × b = 30
a ÷ b = 3.3333333333333335</pre>
                    </div>
                `
            },
            {
                title: "Pembagian Integer & Modulus",
                content: `
                    <div class="two-columns">
                        <div class="info-box">
                            <h3>📐 ~/ (Integer Division)</h3>
                            <p>Menghasilkan hasil bagi dalam bentuk integer (tanpa desimal)</p>
                            <div class="code-block">
                                <div class="code-content"><pre><span class="keyword">int</span> a = <span class="number">10</span>;
<span class="keyword">int</span> b = <span class="number">3</span>;
<span class="keyword">int</span> hasil = a ~/ b;
<span class="function">print</span>(hasil); <span class="comment">// 3</span></pre></div>
                            </div>
                        </div>
                        <div class="info-box">
                            <h3>🔢 % (Modulus)</h3>
                            <p>Menghasilkan sisa pembagian</p>
                            <div class="code-block">
                                <div class="code-content"><pre><span class="keyword">int</span> a = <span class="number">10</span>;
<span class="keyword">int</span> b = <span class="number">3</span>;
<span class="keyword">int</span> sisa = a % b;
<span class="function">print</span>(sisa); <span class="comment">// 1</span></pre></div>
                            </div>
                        </div>
                    </div>
                    <div class="alert alert-info">
                        <span class="alert-icon">💡</span>
                        <div>Modulus sangat berguna untuk cek bilangan genap/ganjil: <code>n % 2 == 0</code> = genap</div>
                    </div>
                `
            },
            {
                title: "Increment & Decrement",
                content: `
                    <div class="table-container">
                        <table class="data-table">
                            <tr><th>Operator</th><th>Nama</th><th>Penjelasan</th></tr>
                            <tr><td><code>x++</code></td><td>Post-increment</td><td>Gunakan x, lalu tambah 1</td></tr>
                            <tr><td><code>++x</code></td><td>Pre-increment</td><td>Tambah 1, lalu gunakan x</td></tr>
                            <tr><td><code>x--</code></td><td>Post-decrement</td><td>Gunakan x, lalu kurang 1</td></tr>
                            <tr><td><code>--x</code></td><td>Pre-decrement</td><td>Kurang 1, lalu gunakan x</td></tr>
                        </table>
                    </div>
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">int</span> x = <span class="number">10</span>;
<span class="function">print</span>(x++);  <span class="comment">// Output: 10 (print dulu, baru +1)</span>
<span class="function">print</span>(x);    <span class="comment">// Output: 11</span>
<span class="function">print</span>(++x);  <span class="comment">// Output: 12 (+1 dulu, baru print)</span></pre></div>
                    </div>
                `
            },
            {
                title: "Contoh Praktis",
                subtitle: "Menghitung luas dan keliling persegi panjang",
                content: `
                    <div class="code-block">
                        <div class="code-header"><span>Aplikasi Nyata</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">int</span> panjang = <span class="number">10</span>;
<span class="keyword">int</span> lebar = <span class="number">5</span>;

<span class="keyword">int</span> luas = panjang * lebar;
<span class="keyword">int</span> keliling = <span class="number">2</span> * (panjang + lebar);

<span class="function">print</span>(<span class="string">"Luas = </span>\$luas<span class="string"> cm²"</span>);
<span class="function">print</span>(<span class="string">"Keliling = </span>\$keliling<span class="string"> cm"</span>);</pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>Luas = 50 cm²
Keliling = 30 cm</pre>
                    </div>
                `
            }
        ]
    },
    perbandingan: {
        title: "3.2 Operator Perbandingan",
        slides: [
            {
                title: "Operator Perbandingan",
                subtitle: "Membandingkan dua nilai → menghasilkan boolean",
                content: `
                    <div class="info-box highlight">
                        <h3>📌 Definisi</h3>
                        <p>Operator Perbandingan digunakan untuk membandingkan dua nilai dan <strong>selalu menghasilkan boolean</strong> (true/false).</p>
                    </div>
                    <div class="table-container">
                        <table class="data-table">
                            <tr><th>Operator</th><th>Nama</th><th>Contoh</th><th>Hasil</th></tr>
                            <tr><td><code>==</code></td><td>Sama dengan</td><td>5 == 5</td><td>true</td></tr>
                            <tr><td><code>!=</code></td><td>Tidak sama</td><td>5 != 3</td><td>true</td></tr>
                            <tr><td><code>></code></td><td>Lebih besar</td><td>5 > 3</td><td>true</td></tr>
                            <tr><td><code><</code></td><td>Lebih kecil</td><td>5 < 3</td><td>false</td></tr>
                            <tr><td><code>>=</code></td><td>Lebih besar/sama</td><td>5 >= 5</td><td>true</td></tr>
                            <tr><td><code><=</code></td><td>Lebih kecil/sama</td><td>5 <= 3</td><td>false</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "Contoh Penggunaan",
                content: `
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">int</span> nilai1 = <span class="number">75</span>;
<span class="keyword">int</span> nilai2 = <span class="number">60</span>;

<span class="function">print</span>(nilai1 == nilai2); <span class="comment">// false</span>
<span class="function">print</span>(nilai1 != nilai2); <span class="comment">// true</span>
<span class="function">print</span>(nilai1 > nilai2);  <span class="comment">// true</span>
<span class="function">print</span>(nilai1 < nilai2);  <span class="comment">// false</span>
<span class="function">print</span>(nilai1 >= nilai2); <span class="comment">// true</span>
<span class="function">print</span>(nilai1 <= nilai2); <span class="comment">// false</span></pre></div>
                    </div>
                    <div class="alert alert-warning">
                        <span class="alert-icon">⚠️</span>
                        <div><strong>Ingat!</strong> Gunakan <code>==</code> untuk perbandingan, bukan <code>=</code> (assignment)</div>
                    </div>
                `
            },
            {
                title: "Aplikasi Praktis",
                subtitle: "Cek kelulusan dan kelayakan diskon",
                content: `
                    <div class="two-columns">
                        <div class="info-box">
                            <h3>🎓 Cek Kelulusan</h3>
                            <div class="code-block">
                                <div class="code-content"><pre><span class="keyword">int</span> nilaiUjian = <span class="number">75</span>;
<span class="keyword">int</span> nilaiMinimal = <span class="number">70</span>;

<span class="keyword">bool</span> lulus = nilaiUjian >= nilaiMinimal;
<span class="function">print</span>(<span class="string">"Lulus: </span>\$lulus<span class="string">"</span>);
<span class="comment">// Output: Lulus: true</span></pre></div>
                            </div>
                        </div>
                        <div class="info-box">
                            <h3>💰 Cek Diskon</h3>
                            <div class="code-block">
                                <div class="code-content"><pre><span class="keyword">int</span> belanja = <span class="number">150000</span>;
<span class="keyword">int</span> minimal = <span class="number">100000</span>;

<span class="keyword">bool</span> diskon = belanja >= minimal;
<span class="function">print</span>(<span class="string">"Dapat Diskon: </span>\$diskon<span class="string">"</span>);
<span class="comment">// Output: Dapat Diskon: true</span></pre></div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    penugasan: {
        title: "3.3 Operator Penugasan",
        slides: [
            {
                title: "Operator Penugasan",
                subtitle: "Memberikan nilai ke variabel",
                content: `
                    <div class="table-container">
                        <table class="data-table">
                            <tr><th>Operator</th><th>Contoh</th><th>Sama Dengan</th></tr>
                            <tr><td><code>=</code></td><td>x = 5</td><td>x = 5</td></tr>
                            <tr><td><code>+=</code></td><td>x += 3</td><td>x = x + 3</td></tr>
                            <tr><td><code>-=</code></td><td>x -= 3</td><td>x = x - 3</td></tr>
                            <tr><td><code>*=</code></td><td>x *= 3</td><td>x = x * 3</td></tr>
                            <tr><td><code>/=</code></td><td>x /= 3</td><td>x = x / 3</td></tr>
                            <tr><td><code>~/=</code></td><td>x ~/= 3</td><td>x = x ~/ 3</td></tr>
                            <tr><td><code>%=</code></td><td>x %= 3</td><td>x = x % 3</td></tr>
                            <tr><td><code>??=</code></td><td>x ??= 5</td><td>Assign jika null</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "Compound Assignment",
                content: `
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">int</span> saldo = <span class="number">100000</span>;

saldo += <span class="number">50000</span>;  <span class="comment">// Deposit: 150000</span>
saldo -= <span class="number">30000</span>;  <span class="comment">// Tarik: 120000</span>
saldo *= <span class="number">2</span>;      <span class="comment">// Double: 240000</span>

<span class="function">print</span>(<span class="string">"Saldo: Rp</span>\$saldo<span class="string">"</span>);
<span class="comment">// Output: Saldo: Rp240000</span></pre></div>
                    </div>
                    <div class="alert alert-success">
                        <span class="alert-icon">✅</span>
                        <div>Compound assignment membuat kode lebih ringkas dan mudah dibaca!</div>
                    </div>
                `
            },
            {
                title: "Null-Aware Assignment (??=)",
                content: `
                    <div class="info-box highlight">
                        <h3>📌 ??= Operator</h3>
                        <p>Memberikan nilai <strong>hanya jika variabel masih null</strong></p>
                    </div>
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">String?</span> nama;
<span class="function">print</span>(nama);  <span class="comment">// null</span>

nama ??= <span class="string">"Guest"</span>;
<span class="function">print</span>(nama);  <span class="comment">// Guest</span>

nama ??= <span class="string">"Admin"</span>;  <span class="comment">// Tidak berubah!</span>
<span class="function">print</span>(nama);  <span class="comment">// Guest</span></pre></div>
                    </div>
                `
            }
        ]
    },
    logika: {
        title: "3.4 Operator Logika",
        slides: [
            {
                title: "Operator Logika",
                subtitle: "Menggabungkan kondisi boolean",
                content: `
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="icon">🔗</div>
                            <h4>&& (AND)</h4>
                            <p>True jika SEMUA kondisi true</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">⚡</div>
                            <h4>|| (OR)</h4>
                            <p>True jika SALAH SATU true</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">🔄</div>
                            <h4>! (NOT)</h4>
                            <p>Membalik nilai boolean</p>
                        </div>
                    </div>
                `
            },
            {
                title: "Truth Table",
                content: `
                    <div class="two-columns">
                        <div class="table-container">
                            <h3 style="color: var(--primary-light); margin-bottom: 15px;">AND (&&)</h3>
                            <table class="data-table">
                                <tr><th>A</th><th>B</th><th>A && B</th></tr>
                                <tr><td>true</td><td>true</td><td style="color:#4CAF50">true</td></tr>
                                <tr><td>true</td><td>false</td><td style="color:#f44336">false</td></tr>
                                <tr><td>false</td><td>true</td><td style="color:#f44336">false</td></tr>
                                <tr><td>false</td><td>false</td><td style="color:#f44336">false</td></tr>
                            </table>
                        </div>
                        <div class="table-container">
                            <h3 style="color: var(--primary-light); margin-bottom: 15px;">OR (||)</h3>
                            <table class="data-table">
                                <tr><th>A</th><th>B</th><th>A || B</th></tr>
                                <tr><td>true</td><td>true</td><td style="color:#4CAF50">true</td></tr>
                                <tr><td>true</td><td>false</td><td style="color:#4CAF50">true</td></tr>
                                <tr><td>false</td><td>true</td><td style="color:#4CAF50">true</td></tr>
                                <tr><td>false</td><td>false</td><td style="color:#f44336">false</td></tr>
                            </table>
                        </div>
                    </div>
                `
            },
            {
                title: "Contoh Praktis: Validasi Login",
                content: `
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">String</span> username = <span class="string">"admin"</span>;
<span class="keyword">String</span> password = <span class="string">"12345"</span>;
<span class="keyword">bool</span> isActive = <span class="keyword">true</span>;

<span class="keyword">bool</span> usernameOK = username == <span class="string">"admin"</span>;
<span class="keyword">bool</span> passwordOK = password == <span class="string">"12345"</span>;

<span class="keyword">bool</span> loginSuccess = usernameOK && passwordOK && isActive;
<span class="function">print</span>(<span class="string">"Login: </span>\$loginSuccess<span class="string">"</span>);
<span class="comment">// Output: Login: true</span></pre></div>
                    </div>
                `
            }
        ]
    },
    typetest: {
        title: "3.5 Operator Type Test",
        slides: [
            {
                title: "Operator Type Test",
                subtitle: "Mengecek dan mengubah tipe data",
                content: `
                    <div class="table-container">
                        <table class="data-table">
                            <tr><th>Operator</th><th>Fungsi</th><th>Contoh</th></tr>
                            <tr><td><code>is</code></td><td>Cek apakah object adalah tipe tertentu</td><td>x is int</td></tr>
                            <tr><td><code>is!</code></td><td>Cek apakah object BUKAN tipe tertentu</td><td>x is! String</td></tr>
                            <tr><td><code>as</code></td><td>Type casting</td><td>x as String</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "Contoh Penggunaan",
                content: `
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">dynamic</span> nilai = <span class="number">100</span>;

<span class="function">print</span>(nilai <span class="keyword">is</span> <span class="type">int</span>);     <span class="comment">// true</span>
<span class="function">print</span>(nilai <span class="keyword">is</span> <span class="type">String</span>);  <span class="comment">// false</span>
<span class="function">print</span>(nilai <span class="keyword">is!</span> <span class="type">String</span>); <span class="comment">// true</span>

<span class="keyword">dynamic</span> teks = <span class="string">"Hello"</span>;
<span class="type">String</span> str = teks <span class="keyword">as</span> <span class="type">String</span>;
<span class="function">print</span>(str.length);  <span class="comment">// 5</span></pre></div>
                    </div>
                `
            },
            {
                title: "Safe Type Checking",
                content: `
                    <div class="code-block">
                        <div class="code-content"><pre><span class="keyword">dynamic</span> value = <span class="string">"Dart"</span>;

<span class="comment">// SAFE: Cek dulu dengan is</span>
<span class="keyword">if</span> (value <span class="keyword">is</span> <span class="type">String</span>) {
  <span class="function">print</span>(value.toUpperCase());
  <span class="comment">// Output: DART</span>
} <span class="keyword">else if</span> (value <span class="keyword">is</span> <span class="type">int</span>) {
  <span class="function">print</span>(value * <span class="number">2</span>);
}</pre></div>
                    </div>
                    <div class="alert alert-warning">
                        <span class="alert-icon">⚠️</span>
                        <div>Selalu gunakan <code>is</code> sebelum <code>as</code> untuk menghindari runtime error!</div>
                    </div>
                `
            }
        ]
    },
    projects: {
        title: "Mini Projects",
        slides: [
            {
                title: "4 Mini Projects",
                subtitle: "Praktik langsung menggunakan operator",
                content: `
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="icon">🧮</div>
                            <h4>Project 1</h4>
                            <p>Kalkulator Lengkap dengan Validasi</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">📊</div>
                            <h4>Project 2</h4>
                            <p>Sistem Penilaian Siswa dengan Grade</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">🛒</div>
                            <h4>Project 3</h4>
                            <p>Aplikasi Kasir dengan Diskon</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">✅</div>
                            <h4>Project 4</h4>
                            <p>Validator Data dengan Type Checking</p>
                        </div>
                    </div>
                `
            },
            {
                title: "Project 1: Kalkulator Lengkap",
                subtitle: "Menggunakan semua operator aritmatika + validasi",
                content: `
                    <div class="info-box highlight">
                        <h3>🎯 Tujuan Project</h3>
                        <p>Membuat kalkulator yang dapat melakukan semua operasi aritmatika dengan <strong>validasi pembagian nol</strong>.</p>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>kalkulator.dart</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">void</span> main() {
  <span class="keyword">double</span> a = <span class="number">20</span>;
  <span class="keyword">double</span> b = <span class="number">4</span>;

  <span class="function">print</span>(<span class="string">"=== KALKULATOR DART ==="</span>);
  <span class="function">print</span>(<span class="string">"Angka 1: </span>\$a<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Angka 2: </span>\$b<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"─────────────────────"</span>);

  <span class="function">print</span>(<span class="string">"Penjumlahan: </span>\${a + b}<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Pengurangan: </span>\${a - b}<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Perkalian: </span>\${a * b}<span class="string">"</span>);
  
  <span class="comment">// Validasi pembagian nol</span>
  <span class="keyword">if</span> (b != <span class="number">0</span>) {
    <span class="function">print</span>(<span class="string">"Pembagian: </span>\${a / b}<span class="string">"</span>);
    <span class="function">print</span>(<span class="string">"Pembagian Int: </span>\${a ~/ b}<span class="string">"</span>);
    <span class="function">print</span>(<span class="string">"Modulus: </span>\${a % b}<span class="string">"</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">"❌ Error: Tidak bisa bagi dengan nol!"</span>);
  }
}</pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>=== KALKULATOR DART ===
Angka 1: 20.0
Angka 2: 4.0
─────────────────────
Penjumlahan: 24.0
Pengurangan: 16.0
Perkalian: 80.0
Pembagian: 5.0
Pembagian Int: 5
Modulus: 0.0</pre>
                    </div>
                `
            },
            {
                title: "Project 2: Sistem Penilaian Siswa",
                subtitle: "Menghitung nilai akhir & menentukan grade",
                content: `
                    <div class="info-box highlight">
                        <h3>🎯 Tujuan Project</h3>
                        <p>Menghitung nilai akhir berdasarkan bobot (Tugas 30%, UTS 30%, UAS 40%) dan menentukan grade.</p>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>penilaian_siswa.dart</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">void</span> main() {
  <span class="type">String</span> nama = <span class="string">"Ahmad Rizki"</span>;
  <span class="keyword">int</span> tugas = <span class="number">85</span>;
  <span class="keyword">int</span> uts = <span class="number">78</span>;
  <span class="keyword">int</span> uas = <span class="number">90</span>;

  <span class="comment">// Hitung nilai akhir dengan bobot</span>
  <span class="keyword">double</span> nilaiAkhir = (tugas * <span class="number">0.3</span>) + (uts * <span class="number">0.3</span>) + (uas * <span class="number">0.4</span>);

  <span class="comment">// Tentukan grade dengan operator perbandingan</span>
  <span class="type">String</span> grade;
  <span class="keyword">if</span> (nilaiAkhir >= <span class="number">85</span>) {
    grade = <span class="string">"A"</span>;
  } <span class="keyword">else if</span> (nilaiAkhir >= <span class="number">75</span>) {
    grade = <span class="string">"B"</span>;
  } <span class="keyword">else if</span> (nilaiAkhir >= <span class="number">65</span>) {
    grade = <span class="string">"C"</span>;
  } <span class="keyword">else if</span> (nilaiAkhir >= <span class="number">50</span>) {
    grade = <span class="string">"D"</span>;
  } <span class="keyword">else</span> {
    grade = <span class="string">"E"</span>;
  }

  <span class="comment">// Cek kelulusan (minimal grade C)</span>
  <span class="keyword">bool</span> lulus = nilaiAkhir >= <span class="number">65</span>;

  <span class="function">print</span>(<span class="string">"📋 RAPOR SISWA"</span>);
  <span class="function">print</span>(<span class="string">"Nama: </span>\$nama<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Nilai Akhir: </span>\${nilaiAkhir.toStringAsFixed(<span class="number">2</span>)}<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Grade: </span>\$grade<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Status: </span>\${lulus ? <span class="string">'✅ LULUS'</span> : <span class="string">'❌ TIDAK LULUS'</span>}<span class="string">"</span>);
}</pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>📋 RAPOR SISWA
Nama: Ahmad Rizki
Nilai Akhir: 84.90
Grade: B
Status: ✅ LULUS</pre>
                    </div>
                `
            },
            {
                title: "Project 3: Aplikasi Kasir",
                subtitle: "Menghitung total belanja dengan diskon bertingkat",
                content: `
                    <div class="info-box highlight">
                        <h3>🎯 Tujuan Project</h3>
                        <p>Membuat sistem kasir dengan perhitungan diskon otomatis berdasarkan total belanja.</p>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>kasir.dart</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">void</span> main() {
  <span class="comment">// Data belanja</span>
  <span class="keyword">int</span> hargaBarang = <span class="number">50000</span>;
  <span class="keyword">int</span> jumlah = <span class="number">5</span>;

  <span class="comment">// Hitung subtotal</span>
  <span class="keyword">int</span> subtotal = hargaBarang * jumlah;

  <span class="comment">// Tentukan diskon dengan operator perbandingan</span>
  <span class="keyword">double</span> persenDiskon;
  <span class="keyword">if</span> (subtotal >= <span class="number">500000</span>) {
    persenDiskon = <span class="number">0.15</span>;  <span class="comment">// Diskon 15%</span>
  } <span class="keyword">else if</span> (subtotal >= <span class="number">200000</span>) {
    persenDiskon = <span class="number">0.10</span>;  <span class="comment">// Diskon 10%</span>
  } <span class="keyword">else if</span> (subtotal >= <span class="number">100000</span>) {
    persenDiskon = <span class="number">0.05</span>;  <span class="comment">// Diskon 5%</span>
  } <span class="keyword">else</span> {
    persenDiskon = <span class="number">0</span>;
  }

  <span class="comment">// Hitung nilai diskon dan total</span>
  <span class="keyword">double</span> nilaiDiskon = subtotal * persenDiskon;
  <span class="keyword">double</span> totalBayar = subtotal - nilaiDiskon;

  <span class="function">print</span>(<span class="string">"🛒 STRUK BELANJA"</span>);
  <span class="function">print</span>(<span class="string">"Subtotal: Rp</span>\$subtotal<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"Diskon (</span>\${(persenDiskon * <span class="number">100</span>).toInt()}<span class="string">%): -Rp</span>\${nilaiDiskon.toInt()}<span class="string">"</span>);
  <span class="function">print</span>(<span class="string">"─────────────────"</span>);
  <span class="function">print</span>(<span class="string">"TOTAL: Rp</span>\${totalBayar.toInt()}<span class="string">"</span>);
}</pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>🛒 STRUK BELANJA
Subtotal: Rp250000
Diskon (10%): -Rp25000
─────────────────
TOTAL: Rp225000</pre>
                    </div>
                `
            },
            {
                title: "Project 4: Validator Data",
                subtitle: "Menggunakan operator type test untuk validasi input",
                content: `
                    <div class="info-box highlight">
                        <h3>🎯 Tujuan Project</h3>
                        <p>Membuat sistem validasi data yang memeriksa tipe data dan memberikan respons yang sesuai.</p>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>validator.dart</span><span class="lang-badge">DART</span></div>
                        <div class="code-content"><pre><span class="keyword">void</span> main() {
  <span class="comment">// Data yang akan divalidasi</span>
  <span class="keyword">dynamic</span> nama = <span class="string">"Budi"</span>;
  <span class="keyword">dynamic</span> umur = <span class="number">25</span>;
  <span class="keyword">dynamic</span> isActive = <span class="keyword">true</span>;
  <span class="keyword">dynamic</span> dataAneh = <span class="number">3.14</span>;

  <span class="function">print</span>(<span class="string">"🔍 HASIL VALIDASI DATA"</span>);
  <span class="function">print</span>(<span class="string">"─────────────────────"</span>);

  <span class="comment">// Validasi nama (harus String)</span>
  <span class="keyword">if</span> (nama <span class="keyword">is</span> <span class="type">String</span>) {
    <span class="function">print</span>(<span class="string">"✅ Nama valid: </span>\${nama.toUpperCase()}<span class="string">"</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">"❌ Nama harus berupa teks!"</span>);
  }

  <span class="comment">// Validasi umur (harus int dan positif)</span>
  <span class="keyword">if</span> (umur <span class="keyword">is</span> <span class="type">int</span> && umur > <span class="number">0</span>) {
    <span class="function">print</span>(<span class="string">"✅ Umur valid: </span>\$umur<span class="string"> tahun"</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">"❌ Umur tidak valid!"</span>);
  }

  <span class="comment">// Validasi status (harus bool)</span>
  <span class="keyword">if</span> (isActive <span class="keyword">is</span> <span class="type">bool</span>) {
    <span class="function">print</span>(<span class="string">"✅ Status: </span>\${isActive ? <span class="string">'Aktif'</span> : <span class="string">'Nonaktif'</span>}<span class="string">"</span>);
  }

  <span class="comment">// Cek tipe yang tidak dikenal</span>
  <span class="keyword">if</span> (dataAneh <span class="keyword">is!</span> <span class="type">int</span> && dataAneh <span class="keyword">is!</span> <span class="type">String</span>) {
    <span class="function">print</span>(<span class="string">"⚠️ Tipe data tidak dikenal: </span>\${dataAneh.runtimeType}<span class="string">"</span>);
  }
}</pre></div>
                    </div>
                    <div class="output-box">
                        <h4>📤 Output</h4>
                        <pre>🔍 HASIL VALIDASI DATA
─────────────────────
✅ Nama valid: BUDI
✅ Umur valid: 25 tahun
✅ Status: Aktif
⚠️ Tipe data tidak dikenal: double</pre>
                    </div>
                `
            }
        ]
    },
    tugas: {
        title: "Tugas Rumah",
        slides: [
            {
                title: "4 Tugas Praktik",
                subtitle: "Kerjakan secara mandiri untuk mengasah kemampuan",
                content: `
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="icon">⚖️</div>
                            <h4>Tugas 1</h4>
                            <p>Kalkulator BMI (Body Mass Index)</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">💰</div>
                            <h4>Tugas 2</h4>
                            <p>Sistem Absensi & Gaji Karyawan</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">🎬</div>
                            <h4>Tugas 3</h4>
                            <p>Aplikasi Booking Tiket Bioskop</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">🔍</div>
                            <h4>Tugas 4</h4>
                            <p>Data Validator Universal</p>
                        </div>
                    </div>
                    <div class="alert alert-info">
                        <span class="alert-icon">📝</span>
                        <div>Gunakan navigasi <strong>→</strong> untuk melihat detail setiap tugas!</div>
                    </div>
                `
            },
            {
                title: "Tugas 1: Kalkulator BMI",
                subtitle: "Menghitung dan mengkategorikan Body Mass Index",
                content: `
                    <div class="two-columns">
                        <div class="info-box">
                            <h3>📋 Spesifikasi</h3>
                            <ul>
                                <li>Input: Berat badan (kg) dan Tinggi badan (cm)</li>
                                <li>Konversi tinggi dari cm ke meter</li>
                                <li>Hitung BMI = Berat / (Tinggi × Tinggi)</li>
                                <li>Kategorikan: Kurus, Normal, Gemuk, Obesitas</li>
                                <li>Hitung berat ideal (BMI = 22)</li>
                            </ul>
                        </div>
                        <div class="info-box">
                            <h3>📊 Kategori BMI</h3>
                            <div class="table-container">
                                <table class="data-table">
                                    <tr><th>BMI</th><th>Kategori</th></tr>
                                    <tr><td>< 18.5</td><td>Kurus</td></tr>
                                    <tr><td>18.5 - 24.9</td><td>Normal</td></tr>
                                    <tr><td>25 - 29.9</td><td>Gemuk</td></tr>
                                    <tr><td>≥ 30</td><td>Obesitas</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>Contoh Output yang Diharapkan</span></div>
                        <div class="code-content"><pre>⚖️ KALKULATOR BMI
─────────────────
Berat: 70 kg
Tinggi: 170 cm

BMI Anda: 24.22
Kategori: Normal ✅
Berat Ideal: 63.58 kg</pre></div>
                    </div>
                `
            },
            {
                title: "Tugas 2: Sistem Absensi & Gaji",
                subtitle: "Menghitung gaji berdasarkan kehadiran",
                content: `
                    <div class="two-columns">
                        <div class="info-box">
                            <h3>📋 Spesifikasi</h3>
                            <ul>
                                <li>Input: Nama, gaji pokok, hari kerja, hari hadir</li>
                                <li>Hitung persentase kehadiran</li>
                                <li>Potong gaji jika kehadiran < 100%</li>
                                <li>Bonus jika kehadiran 100%</li>
                                <li>Gunakan operator logika untuk validasi</li>
                            </ul>
                        </div>
                        <div class="info-box">
                            <h3>💵 Aturan Perhitungan</h3>
                            <ul>
                                <li>Kehadiran 100%: Bonus 10%</li>
                                <li>Kehadiran 80-99%: Gaji normal</li>
                                <li>Kehadiran < 80%: Potong 20%</li>
                                <li>Potongan per hari = Gaji / Hari Kerja</li>
                            </ul>
                        </div>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>Contoh Output yang Diharapkan</span></div>
                        <div class="code-content"><pre>💰 SLIP GAJI KARYAWAN
─────────────────────
Nama: Siti Nurhaliza
Gaji Pokok: Rp5.000.000

Kehadiran: 22/22 hari (100%)
Status: FULL ATTENDANCE ✅

Bonus 10%: +Rp500.000
─────────────────────
TOTAL GAJI: Rp5.500.000</pre></div>
                    </div>
                `
            },
            {
                title: "Tugas 3: Booking Tiket Bioskop",
                subtitle: "Sistem pemesanan tiket dengan berbagai kondisi",
                content: `
                    <div class="two-columns">
                        <div class="info-box">
                            <h3>📋 Spesifikasi</h3>
                            <ul>
                                <li>Input: Jenis tiket (Reguler/VIP), jumlah tiket, hari</li>
                                <li>Hitung total harga dengan diskon</li>
                                <li>Cek ketersediaan kursi</li>
                                <li>Validasi umur untuk film dewasa</li>
                                <li>Gunakan semua jenis operator</li>
                            </ul>
                        </div>
                        <div class="info-box">
                            <h3>🎬 Aturan Harga</h3>
                            <ul>
                                <li>Reguler: Rp50.000 | VIP: Rp100.000</li>
                                <li>Weekend: +25%</li>
                                <li>Beli ≥ 5 tiket: Diskon 10%</li>
                                <li>Member: Diskon tambahan 5%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>Contoh Output yang Diharapkan</span></div>
                        <div class="code-content"><pre>🎬 TIKET BIOSKOP CINEMA XXI
───────────────────────────
Film: Avengers: Endgame
Jenis: VIP | Hari: Sabtu (Weekend)
Jumlah: 4 tiket

Harga Normal: Rp100.000 x 4 = Rp400.000
Weekend (+25%): +Rp100.000
───────────────────────────
TOTAL BAYAR: Rp500.000</pre></div>
                    </div>
                `
            },
            {
                title: "Tugas 4: Data Validator Universal",
                subtitle: "Validasi berbagai tipe data dengan type checking",
                content: `
                    <div class="info-box highlight">
                        <h3>📋 Spesifikasi</h3>
                        <ul>
                            <li>Buat fungsi validasi untuk berbagai tipe data</li>
                            <li>Gunakan operator <code>is</code>, <code>is!</code>, dan <code>as</code></li>
                            <li>Validasi: Email, Nomor HP, Umur, Nama</li>
                            <li>Berikan pesan error yang informatif</li>
                        </ul>
                    </div>
                    <div class="code-block">
                        <div class="code-header"><span>Contoh Output yang Diharapkan</span></div>
                        <div class="code-content"><pre>🔍 VALIDASI DATA PENDAFTARAN
────────────────────────────
Email: user@example.com
  → Tipe: String ✅
  → Format: Valid ✅

Nomor HP: 081234567890
  → Tipe: String ✅
  → Panjang: 12 digit ✅
  → Format: Valid ✅

Umur: 25
  → Tipe: int ✅
  → Range (17-60): Valid ✅

Status: SEMUA DATA VALID ✅</pre></div>
                    </div>
                `
            },
            {
                title: "Kriteria Penilaian",
                subtitle: "Panduan penilaian untuk semua tugas",
                content: `
                    <div class="table-container">
                        <table class="data-table">
                            <tr><th>Aspek</th><th>Poin</th><th>Keterangan</th></tr>
                            <tr><td>Ketepatan Logika</td><td>30</td><td>Program berjalan sesuai spesifikasi</td></tr>
                            <tr><td>Penggunaan Operator</td><td>25</td><td>Menggunakan berbagai jenis operator dengan benar</td></tr>
                            <tr><td>Format & Output</td><td>20</td><td>Output rapi, informatif, dan mudah dibaca</td></tr>
                            <tr><td>Validasi & Error Handling</td><td>15</td><td>Menangani kasus khusus dan edge cases</td></tr>
                            <tr><td>Code Quality</td><td>10</td><td>Kode bersih, ada komentar, nama variabel jelas</td></tr>
                            <tr><th>Total</th><th>100</th><th></th></tr>
                        </table>
                    </div>
                    <div class="alert alert-success">
                        <span class="alert-icon">🎯</span>
                        <div><strong>Deadline:</strong> 1 minggu dari sekarang. Kumpulkan dalam format .dart dengan nama file: <code>tugas[nomor]_[nama].dart</code></div>
                    </div>
                    <div class="alert alert-warning">
                        <span class="alert-icon">⚠️</span>
                        <div><strong>Catatan:</strong> Plagiarisme akan mendapat nilai 0. Kerjakan secara mandiri!</div>
                    </div>
                `
            }
        ]
    }

};
