// ===== SLIDE DATA =====
const slidesData = {
    null: {
        title: "Null",
        slides: [
            {
                title: "Apa itu Null?",
                content: `
                    <h2><span class="emoji">🔲</span> Apa itu Null?</h2>
                    <p><strong>Null</strong> adalah nilai khusus dalam Dart yang merepresentasikan <em>"tidak ada nilai"</em> atau <em>"kosong"</em>.</p>
                    <p>Variabel yang bernilai null berarti variabel tersebut belum diisi atau sengaja dikosongkan.</p>
                    <div class="info-box note">
                        <div class="info-box-title">📌 Penting</div>
                        <p>Untuk membuat variabel yang bisa bernilai null, tambahkan tanda <code>?</code> setelah tipe data.</p>
                    </div>
                `
            },
            {
                title: "Contoh 1 & 2",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Null</h2>
                    <h3>Contoh 1: Deklarasi variabel null</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? nama;
<span class="function">print</span>(nama);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">null</div></div>
                    
                    <h3>Contoh 2: Mengisi variabel dengan null</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span>? umur = <span class="keyword">null</span>;
<span class="function">print</span>(umur);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">null</div></div>
                `
            },
            {
                title: "Contoh 3 & 4",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Lanjutan</h2>
                    <h3>Contoh 3: Variabel yang bisa null</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? alamat;
alamat = <span class="string">"Jakarta"</span>;
<span class="function">print</span>(alamat); <span class="comment">// Jakarta</span>
alamat = <span class="keyword">null</span>;
<span class="function">print</span>(alamat); <span class="comment">// null</span></pre></div>
                    </div>
                    
                    <h3>Contoh 4: Mengecek null</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? email;
<span class="keyword">if</span> (email == <span class="keyword">null</span>) {
  <span class="function">print</span>(<span class="string">"Email belum diisi"</span>);
} <span class="keyword">else</span> {
  <span class="function">print</span>(<span class="string">"Email: \$email"</span>);
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Email belum diisi</div></div>
                `
            }
        ]
    },
    ternary: {
        title: "Ternary Operator",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">❓</span> Ternary Operator</h2>
                    <p><strong>Ternary operator</strong> adalah cara singkat untuk menulis statement if-else dalam satu baris.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">format</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre>kondisi <span class="operator">?</span> nilaiJikaTrue <span class="operator">:</span> nilaiJikaFalse</pre></div>
                    </div>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Tips</div>
                        <p>Gunakan ternary operator untuk kondisi sederhana. Untuk logika kompleks, gunakan if-else biasa.</p>
                    </div>
                `
            },
            {
                title: "Contoh 1 & 2",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Ternary</h2>
                    <h3>Contoh 1: Dasar ternary operator</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> nilai = <span class="number">75</span>;
<span class="type">String</span> hasil = nilai >= <span class="number">70</span> <span class="operator">?</span> <span class="string">"Lulus"</span> <span class="operator">:</span> <span class="string">"Tidak Lulus"</span>;
<span class="function">print</span>(hasil);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Lulus</div></div>
                    
                    <h3>Contoh 2: Menentukan kategori umur</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> umur = <span class="number">17</span>;
<span class="type">String</span> kategori = umur >= <span class="number">18</span> <span class="operator">?</span> <span class="string">"Dewasa"</span> <span class="operator">:</span> <span class="string">"Anak-anak"</span>;
<span class="function">print</span>(<span class="string">"Kategori: \$kategori"</span>);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Kategori: Anak-anak</div></div>
                `
            },
            {
                title: "Contoh 3 & 4",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Lanjutan</h2>
                    <h3>Contoh 3: Nested ternary operator</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> angka = <span class="number">0</span>;
<span class="type">String</span> status = angka > <span class="number">0</span> <span class="operator">?</span> <span class="string">"Positif"</span> 
               <span class="operator">:</span> angka < <span class="number">0</span> <span class="operator">?</span> <span class="string">"Negatif"</span> 
               <span class="operator">:</span> <span class="string">"Nol"</span>;
<span class="function">print</span>(status);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Nol</div></div>
                    
                    <h3>Contoh 4: Ternary untuk perhitungan</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> harga = <span class="number">50000</span>;
<span class="type">int</span> diskon = harga > <span class="number">100000</span> <span class="operator">?</span> <span class="number">20000</span> <span class="operator">:</span> <span class="number">5000</span>;
<span class="type">int</span> totalBayar = harga - diskon;
<span class="function">print</span>(<span class="string">"Total bayar: Rp \$totalBayar"</span>);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Total bayar: Rp 45000</div></div>
                `
            }
        ]
    },
    nullsafety: {
        title: "Null Safety",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">🛡️</span> Null Safety</h2>
                    <p><strong>Null Safety</strong> adalah fitur Dart yang membantu mencegah error karena mengakses nilai null.</p>
                    <h3>Dua jenis variabel:</h3>
                    <ul>
                        <li><strong>Non-nullable</strong> (tanpa <code>?</code>): tidak bisa diisi null</li>
                        <li><strong>Nullable</strong> (dengan <code>?</code>): bisa diisi null</li>
                    </ul>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span> nama = <span class="string">"Budi"</span>;  <span class="comment">// Non-nullable</span>
<span class="type">String</span>? alamat;         <span class="comment">// Nullable</span></pre></div>
                    </div>
                `
            },
            {
                title: "Null-aware Operators",
                content: `
                    <h2><span class="emoji">🔧</span> Null-aware Operators</h2>
                    <h3>Operator ?? (Null-coalescing)</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? username;
<span class="type">String</span> tampil = username <span class="operator">??</span> <span class="string">"Guest"</span>;
<span class="function">print</span>(tampil);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Guest</div></div>
                    
                    <h3>Operator ??= (Null-aware assignment)</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span>? skor;
skor <span class="operator">??=</span> <span class="number">100</span>; <span class="comment">// Jika skor null, isi dengan 100</span>
<span class="function">print</span>(skor);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">100</div></div>
                `
            },
            {
                title: "Safe Navigation & Force Unwrap",
                content: `
                    <h2><span class="emoji">🔐</span> Safe Navigation & Force Unwrap</h2>
                    <h3>Operator ?. (Safe navigation)</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? email;
<span class="function">print</span>(email<span class="operator">?.</span>length);      <span class="comment">// null (tidak error)</span>
<span class="function">print</span>(email<span class="operator">?.</span>toUpperCase()); <span class="comment">// null (tidak error)</span></pre></div>
                    </div>
                    
                    <h3>Operator ! (Force unwrap)</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span>? kota = <span class="string">"Jakarta"</span>;
<span class="function">print</span>(kota<span class="operator">!</span>.length);</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">7</div></div>
                    <div class="info-box warning">
                        <div class="info-box-title">⚠️ Perhatian</div>
                        <p>Gunakan <code>!</code> dengan hati-hati! Jika nilai null, akan terjadi error.</p>
                    </div>
                `
            }
        ]
    },
    forloop: {
        title: "For Loop",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">🔁</span> For Loop</h2>
                    <p><strong>For loop</strong> digunakan untuk mengulangi kode sebanyak jumlah tertentu.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">format</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (inisialisasi; kondisi; increment) {
  <span class="comment">// kode yang diulang</span>
}</pre></div>
                    </div>
                    <ul>
                        <li><strong>Inisialisasi</strong>: nilai awal counter</li>
                        <li><strong>Kondisi</strong>: selama true, loop berjalan</li>
                        <li><strong>Increment</strong>: perubahan counter setiap iterasi</li>
                    </ul>
                `
            },
            {
                title: "Contoh 1 & 2",
                content: `
                    <h2><span class="emoji">📝</span> Contoh For Loop</h2>
                    <h3>Contoh 1: For loop dasar</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">1</span>; i <= <span class="number">5</span>; i++) {
  <span class="function">print</span>(<span class="string">"Perulangan ke-\$i"</span>);
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Perulangan ke-1
Perulangan ke-2
Perulangan ke-3
Perulangan ke-4
Perulangan ke-5</div></div>
                    
                    <h3>Contoh 2: Menghitung mundur</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">10</span>; i >= <span class="number">1</span>; i--) {
  <span class="function">print</span>(i);
}
<span class="function">print</span>(<span class="string">"Start!"</span>);</pre></div>
                    </div>
                `
            },
            {
                title: "Contoh 3 & 4",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Lanjutan</h2>
                    <h3>Contoh 3: Loop dengan step 2</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i <= <span class="number">10</span>; i += <span class="number">2</span>) {
  <span class="function">print</span>(<span class="string">"Angka genap: \$i"</span>);
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Angka genap: 0
Angka genap: 2
Angka genap: 4
...</div></div>
                    
                    <h3>Contoh 4: Nested for loop</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">1</span>; i <= <span class="number">3</span>; i++) {
  <span class="keyword">for</span> (<span class="type">int</span> j = <span class="number">1</span>; j <= <span class="number">3</span>; j++) {
    <span class="function">print</span>(<span class="string">"\$i x \$j = \${i * j}"</span>);
  }
}</pre></div>
                    </div>
                `
            },
            {
                title: "Contoh 5: Loop Array",
                content: `
                    <h2><span class="emoji">📋</span> Loop dengan Array</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">List</span>&lt;<span class="type">String</span>&gt; buah = [<span class="string">"Apel"</span>, <span class="string">"Jeruk"</span>, <span class="string">"Mangga"</span>];

<span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i < buah.length; i++) {
  <span class="function">print</span>(<span class="string">"Buah ke-\${i + 1}: \${buah[i]}"</span>);
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Buah ke-1: Apel
Buah ke-2: Jeruk
Buah ke-3: Mangga</div></div>
                `
            }
        ]
    },
    whileloop: {
        title: "While Loop",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">🔄</span> While Loop</h2>
                    <p><strong>While loop</strong> mengulangi kode selama kondisi masih true.</p>
                    <p>Pengecekan kondisi dilakukan <em>di awal</em> sebelum eksekusi kode.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">format</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">while</span> (kondisi) {
  <span class="comment">// kode yang diulang</span>
}</pre></div>
                    </div>
                    <div class="info-box note">
                        <div class="info-box-title">📌 Ingat</div>
                        <p>Jika kondisi false dari awal, kode di dalam while tidak akan dijalankan.</p>
                    </div>
                `
            },
            {
                title: "Contoh 1 & 2",
                content: `
                    <h2><span class="emoji">📝</span> Contoh While Loop</h2>
                    <h3>Contoh 1: While loop dasar</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> i = <span class="number">1</span>;
<span class="keyword">while</span> (i <= <span class="number">5</span>) {
  <span class="function">print</span>(<span class="string">"Nomor: \$i"</span>);
  i++;
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Nomor: 1
Nomor: 2
Nomor: 3
Nomor: 4
Nomor: 5</div></div>
                `
            },
            {
                title: "Contoh 3 & 4",
                content: `
                    <h2><span class="emoji">🎮</span> Contoh Game & Pencarian</h2>
                    <h3>Contoh 3: Game sederhana</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> hp = <span class="number">100</span>;
<span class="type">int</span> damage = <span class="number">15</span>;
<span class="keyword">while</span> (hp > <span class="number">0</span>) {
  hp -= damage;
  <span class="function">print</span>(<span class="string">"HP tersisa: \$hp"</span>);
}
<span class="function">print</span>(<span class="string">"Game Over!"</span>);</pre></div>
                    </div>
                    
                    <h3>Contoh 4: Mencari angka dengan break</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">List</span>&lt;<span class="type">int</span>&gt; angka = [<span class="number">5</span>, <span class="number">10</span>, <span class="number">15</span>, <span class="number">20</span>, <span class="number">25</span>];
<span class="type">int</span> index = <span class="number">0</span>, cari = <span class="number">15</span>;
<span class="keyword">while</span> (index < angka.length) {
  <span class="keyword">if</span> (angka[index] == cari) {
    <span class="function">print</span>(<span class="string">"Ditemukan di index \$index"</span>);
    <span class="keyword">break</span>;
  }
  index++;
}</pre></div>
                    </div>
                `
            }
        ]
    },
    dowhile: {
        title: "Do While Loop",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">🔃</span> Do While Loop</h2>
                    <p><strong>Do While loop</strong> mirip dengan while loop, tetapi pengecekan kondisi dilakukan <em>di akhir</em>.</p>
                    <p>Artinya kode akan dijalankan <strong>minimal 1 kali</strong>.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">format</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">do</span> {
  <span class="comment">// kode yang diulang (minimal 1x)</span>
} <span class="keyword">while</span> (kondisi);</pre></div>
                    </div>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Kapan digunakan?</div>
                        <p>Gunakan do-while ketika Anda ingin kode dijalankan setidaknya sekali, seperti menu program atau validasi input.</p>
                    </div>
                `
            },
            {
                title: "Contoh 1 & 2",
                content: `
                    <h2><span class="emoji">📝</span> Contoh Do While</h2>
                    <h3>Contoh 1: Do while dasar</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> i = <span class="number">1</span>;
<span class="keyword">do</span> {
  <span class="function">print</span>(<span class="string">"Angka: \$i"</span>);
  i++;
} <span class="keyword">while</span> (i <= <span class="number">5</span>);</pre></div>
                    </div>
                    
                    <h3>Contoh 2: Perbedaan dengan while</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">int</span> x = <span class="number">10</span>;
<span class="keyword">do</span> {
  <span class="function">print</span>(<span class="string">"Ini dijalankan meski kondisi false"</span>);
} <span class="keyword">while</span> (x < <span class="number">5</span>); <span class="comment">// Tetap jalan 1 kali!</span></pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Ini dijalankan meski kondisi false</div></div>
                `
            },
            {
                title: "Contoh 3: Menu Program",
                content: `
                    <h2><span class="emoji">📋</span> Contoh Menu Program</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span> pilihan;
<span class="keyword">do</span> {
  <span class="function">print</span>(<span class="string">"\\n=== MENU ==="</span>);
  <span class="function">print</span>(<span class="string">"1. Tambah"</span>);
  <span class="function">print</span>(<span class="string">"2. Kurang"</span>);
  <span class="function">print</span>(<span class="string">"3. Keluar"</span>);
  pilihan = <span class="string">"3"</span>; <span class="comment">// Simulasi input</span>

  <span class="keyword">if</span> (pilihan == <span class="string">"1"</span>) {
    <span class="function">print</span>(<span class="string">"Anda memilih Tambah"</span>);
  } <span class="keyword">else if</span> (pilihan == <span class="string">"2"</span>) {
    <span class="function">print</span>(<span class="string">"Anda memilih Kurang"</span>);
  }
} <span class="keyword">while</span> (pilihan != <span class="string">"3"</span>);
<span class="function">print</span>(<span class="string">"Program selesai"</span>);</pre></div>
                    </div>
                `
            }
        ]
    },
    forin: {
        title: "For In Loop",
        slides: [
            {
                title: "Penjelasan",
                content: `
                    <h2><span class="emoji">📋</span> For In Loop</h2>
                    <p><strong>For In loop</strong> digunakan untuk iterasi langsung pada elemen-elemen dalam collection (List, Set, Map) <em>tanpa perlu index</em>.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">format</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">for</span> (<span class="type">var</span> item <span class="keyword">in</span> collection) {
  <span class="comment">// akses langsung ke item</span>
}</pre></div>
                    </div>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Tips</div>
                        <p>For-in lebih simple dan readable dibanding for loop biasa jika Anda tidak butuh index.</p>
                    </div>
                `
            },
            {
                title: "Contoh dengan List & Set",
                content: `
                    <h2><span class="emoji">📝</span> For In dengan Collection</h2>
                    <h3>Contoh 1: For in dengan List</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">List</span>&lt;<span class="type">String</span>&gt; makanan = [<span class="string">"Nasi Goreng"</span>, <span class="string">"Mie Ayam"</span>, <span class="string">"Soto"</span>];
<span class="keyword">for</span> (<span class="type">String</span> item <span class="keyword">in</span> makanan) {
  <span class="function">print</span>(<span class="string">"Saya suka \$item"</span>);
}</pre></div>
                    </div>
                    
                    <h3>Contoh 2: For in dengan Set</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">Set</span>&lt;<span class="type">int</span>&gt; angkaUnik = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};
<span class="type">int</span> total = <span class="number">0</span>;
<span class="keyword">for</span> (<span class="type">int</span> angka <span class="keyword">in</span> angkaUnik) {
  total += angka;
}
<span class="function">print</span>(<span class="string">"Total: \$total"</span>); <span class="comment">// Total: 15</span></pre></div>
                    </div>
                `
            },
            {
                title: "Contoh dengan Map & String",
                content: `
                    <h2><span class="emoji">🗺️</span> For In dengan Map & String</h2>
                    <h3>Contoh 3: For in dengan Map (keys)</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">int</span>&gt; nilai = {
  <span class="string">"Matematika"</span>: <span class="number">85</span>,
  <span class="string">"Bahasa"</span>: <span class="number">90</span>,
  <span class="string">"IPA"</span>: <span class="number">88</span>
};
<span class="keyword">for</span> (<span class="type">String</span> mapel <span class="keyword">in</span> nilai.keys) {
  <span class="function">print</span>(<span class="string">"\$mapel: \${nilai[mapel]}"</span>);
}</pre></div>
                    </div>
                    
                    <h3>Contoh 4: For in dengan String</h3>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">String</span> kata = <span class="string">"DART"</span>;
<span class="keyword">for</span> (<span class="type">String</span> huruf <span class="keyword">in</span> kata.split(<span class="string">''</span>)) {
  <span class="function">print</span>(huruf);
}</pre></div>
                    </div>
                `
            },
            {
                title: "Contoh Filtering",
                content: `
                    <h2><span class="emoji">🔍</span> Filtering Data</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="type">List</span>&lt;<span class="type">int</span>&gt; numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>, <span class="number">7</span>, <span class="number">8</span>, <span class="number">9</span>, <span class="number">10</span>];

<span class="function">print</span>(<span class="string">"Angka genap:"</span>);
<span class="keyword">for</span> (<span class="type">int</span> num <span class="keyword">in</span> numbers) {
  <span class="keyword">if</span> (num % <span class="number">2</span> == <span class="number">0</span>) {
    <span class="function">print</span>(num);
  }
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output</div><div class="output-text">Angka genap:
2
4
6
8
10</div></div>
                `
            }
        ]
    },
    projectkelas: {
        title: "Mini Project Kelas",
        slides: [
            {
                title: "Project 1: Kalkulator Nilai",
                content: `
                    <h2><span class="emoji">🎓</span> Project 1: Kalkulator Nilai Mahasiswa</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span>&lt;<span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">dynamic</span>&gt;&gt; mahasiswa = [
    {<span class="string">"nama"</span>: <span class="string">"Andi"</span>, <span class="string">"nilai"</span>: <span class="number">85</span>},
    {<span class="string">"nama"</span>: <span class="string">"Budi"</span>, <span class="string">"nilai"</span>: <span class="number">72</span>},
    {<span class="string">"nama"</span>: <span class="string">"Citra"</span>, <span class="string">"nilai"</span>: <span class="number">90</span>},
    {<span class="string">"nama"</span>: <span class="string">"Deni"</span>, <span class="string">"nilai"</span>: <span class="number">65</span>},
  ];

  <span class="keyword">for</span> (<span class="type">var</span> mhs <span class="keyword">in</span> mahasiswa) {
    <span class="type">String</span>? nama = mhs[<span class="string">"nama"</span>];
    <span class="type">int</span>? nilai = mhs[<span class="string">"nilai"</span>];
    
    <span class="keyword">if</span> (nama == <span class="keyword">null</span> || nilai == <span class="keyword">null</span>) <span class="keyword">continue</span>;

    <span class="type">String</span> grade = nilai >= <span class="number">80</span> ? <span class="string">"A"</span> :
                   nilai >= <span class="number">70</span> ? <span class="string">"B"</span> :
                   nilai >= <span class="number">60</span> ? <span class="string">"C"</span> : <span class="string">"D"</span>;
    <span class="type">String</span> status = nilai >= <span class="number">70</span> ? <span class="string">"LULUS"</span> : <span class="string">"TIDAK LULUS"</span>;

    <span class="function">print</span>(<span class="string">"\$nama - Nilai: \$nilai, Grade: \$grade, \$status"</span>);
  }
}</pre></div>
                    </div>
                `
            },
            {
                title: "Project 2: Program Kasir",
                content: `
                    <h2><span class="emoji">🛒</span> Project 2: Program Kasir Sederhana</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">int</span>&gt; belanja = {
    <span class="string">"Beras 5kg"</span>: <span class="number">65000</span>,
    <span class="string">"Minyak Goreng"</span>: <span class="number">25000</span>,
    <span class="string">"Gula 1kg"</span>: <span class="number">15000</span>,
    <span class="string">"Telur 1kg"</span>: <span class="number">28000</span>,
  };

  <span class="type">int</span> totalBelanja = <span class="number">0</span>;
  <span class="keyword">for</span> (<span class="type">String</span> item <span class="keyword">in</span> belanja.keys) {
    <span class="type">int</span>? harga = belanja[item];
    harga ??= <span class="number">0</span>; <span class="comment">// Null safety</span>
    <span class="function">print</span>(<span class="string">"\$item: Rp \$harga"</span>);
    totalBelanja += harga;
  }

  <span class="type">int</span> diskon = totalBelanja > <span class="number">100000</span> ? <span class="number">10000</span> : <span class="number">0</span>;
  <span class="function">print</span>(<span class="string">"Total: Rp \${totalBelanja - diskon}"</span>);
}</pre></div>
                    </div>
                `
            },
            {
                title: "Project 3: Tabel Perkalian",
                content: `
                    <h2><span class="emoji">✖️</span> Project 3: Generator Tabel Perkalian</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> batas = <span class="number">5</span>;
  <span class="function">print</span>(<span class="string">"=== TABEL PERKALIAN ==="</span>);

  <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">1</span>; i <= batas; i++) {
    <span class="keyword">for</span> (<span class="type">int</span> j = <span class="number">1</span>; j <= batas; j++) {
      <span class="type">int</span> hasil = i * j;
      <span class="function">print</span>(<span class="string">"\$i x \$j = \$hasil"</span>);
    }
    <span class="function">print</span>(<span class="string">"---"</span>); <span class="comment">// Separator</span>
  }
}</pre></div>
                    </div>
                    <div class="output-block"><div class="output-label">Output (partial)</div><div class="output-text">=== TABEL PERKALIAN ===
1 x 1 = 1
1 x 2 = 2
...</div></div>
                `
            },
            {
                title: "Project 4: Validasi Password",
                content: `
                    <h2><span class="emoji">🔐</span> Project 4: Validasi Password Berulang</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">dart</span><div class="code-dots"><span></span><span></span><span></span></div></div>
                        <div class="code-body"><pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String</span> passwordBenar = <span class="string">"dart2024"</span>;
  <span class="type">int</span> maxPercobaan = <span class="number">3</span>, percobaan = <span class="number">0</span>;
  <span class="type">bool</span> berhasil = <span class="keyword">false</span>;

  <span class="keyword">do</span> {
    percobaan++;
    <span class="function">print</span>(<span class="string">"Percobaan ke-\$percobaan"</span>);
    
    <span class="comment">// Simulasi input</span>
    <span class="type">String</span>? input = percobaan == <span class="number">2</span> ? <span class="string">"dart2024"</span> : <span class="string">"salah"</span>;

    <span class="keyword">if</span> (input == passwordBenar) {
      berhasil = <span class="keyword">true</span>;
      <span class="function">print</span>(<span class="string">"✓ Login berhasil!"</span>);
      <span class="keyword">break</span>;
    } <span class="keyword">else</span> {
      <span class="type">int</span> sisa = maxPercobaan - percobaan;
      <span class="function">print</span>(sisa > <span class="number">0</span> ? <span class="string">"Salah! Sisa: \$sisa"</span> : <span class="string">"Akun dikunci!"</span>);
    }
  } <span class="keyword">while</span> (percobaan < maxPercobaan && !berhasil);
}</pre></div>
                    </div>
                `
            }
        ]
    },
    projectrumah: {
        title: "Tugas Rumah",
        slides: [
            {
                title: "Project 1: Sistem Inventori",
                content: `
                    <h2><span class="emoji">📦</span> Tugas 1: Sistem Manajemen Inventori</h2>
                    <p>Buat program untuk mengelola inventori toko dengan fitur:</p>
                    <ul>
                        <li>Data produk: id, nama, stok, harga</li>
                        <li>Hitung total nilai barang (stok × harga)</li>
                        <li>Status stok: Aman (>5), Menipis (>0), Habis (0)</li>
                        <li>Ringkasan: total produk, produk habis, total nilai</li>
                    </ul>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Hint</div>
                        <p>Gunakan List&lt;Map&gt; untuk data, for-in untuk iterasi, ternary untuk status.</p>
                    </div>
                `
            },
            {
                title: "Project 2: Simulasi ATM",
                content: `
                    <h2><span class="emoji">🏧</span> Tugas 2: Simulasi ATM</h2>
                    <p>Buat simulator ATM dengan fitur:</p>
                    <ul>
                        <li>Saldo awal: Rp 1.000.000</li>
                        <li>Transaksi: tarik tunai & setor</li>
                        <li>Validasi: tolak jika saldo tidak cukup</li>
                        <li>Tampilkan status setiap transaksi</li>
                        <li>Ringkasan akhir: total transaksi & saldo</li>
                    </ul>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Hint</div>
                        <p>Gunakan List transaksi, for-in loop, null safety untuk validasi.</p>
                    </div>
                `
            },
            {
                title: "Project 3: Analisis Penjualan",
                content: `
                    <h2><span class="emoji">📊</span> Tugas 3: Analisis Penjualan Mingguan</h2>
                    <p>Buat program analisis penjualan dengan fitur:</p>
                    <ul>
                        <li>Data per hari (Senin-Minggu), boleh null (tutup)</li>
                        <li>Hitung total, rata-rata, hari operasional</li>
                        <li>Cari penjualan tertinggi & terendah</li>
                        <li>Evaluasi target (>= Rp 1.000.000)</li>
                    </ul>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Hint</div>
                        <p>Gunakan Map&lt;String, int?&gt;, for-in dengan .keys, null check.</p>
                    </div>
                `
            },
            {
                title: "Project 4: Program Absensi",
                content: `
                    <h2><span class="emoji">📋</span> Tugas 4: Program Absensi Karyawan</h2>
                    <p>Buat sistem absensi dengan fitur:</p>
                    <ul>
                        <li>Data karyawan dengan absensi 5 hari (true/false)</li>
                        <li>Hitung persentase kehadiran</li>
                        <li>Predikat: Perfect (100%), Baik (≥80%), Cukup (≥60%), Kurang</li>
                        <li>Warning jika ada alfa berturut-turut</li>
                    </ul>
                    <div class="info-box tip">
                        <div class="info-box-title">💡 Hint</div>
                        <p>Gunakan List&lt;bool&gt; untuk absensi, nested loops, ternary untuk predikat.</p>
                    </div>
                `
            },
            {
                title: "Latihan Tambahan",
                content: `
                    <h2><span class="emoji">🎯</span> Latihan Tambahan</h2>
                    <p>Setelah menyelesaikan mini project, coba tantangan ini:</p>
                    <ol>
                        <li><strong>Konversi Suhu</strong> - Celsius, Fahrenheit, Kelvin</li>
                        <li><strong>Kalkulator BMI</strong> - dengan kategori berat badan</li>
                        <li><strong>Game Tebak Angka</strong> - dengan batas percobaan</li>
                        <li><strong>Sistem Booking Tiket</strong> - pilih kursi, hitung total</li>
                        <li><strong>Daftar Belanja</strong> - tambah, hapus, hitung total</li>
                    </ol>
                    <div class="info-box note">
                        <div class="info-box-title">📌 Tips</div>
                        <p>Kombinasikan semua konsep: null safety, ternary, dan berbagai jenis loop!</p>
                    </div>
                `
            }
        ]
    }
};

// ===== GLOBAL STATE =====
let currentTopic = null;
let currentSlideIndex = 0;

// ===== DOM ELEMENTS =====
const landing = document.getElementById('landing');
const slideContainer = document.getElementById('slideContainer');
const slideTitle = document.getElementById('slideTitle');
const slideContent = document.getElementById('slideContent');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
const slideIndicators = document.getElementById('slideIndicators');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ===== NAVIGATION FUNCTIONS =====
function showLanding() {
    slideContainer.classList.add('hidden');
    landing.style.display = 'flex';
    currentTopic = null;
    currentSlideIndex = 0;
}

function openTopic(topicId) {
    if (!slidesData[topicId]) return;
    
    currentTopic = topicId;
    currentSlideIndex = 0;
    
    landing.style.display = 'none';
    slideContainer.classList.remove('hidden');
    
    updateSlideDisplay();
}

function nextSlide() {
    if (!currentTopic) return;
    const slides = slidesData[currentTopic].slides;
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateSlideDisplay();
    }
}

function prevSlide() {
    if (!currentTopic) return;
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlideDisplay();
    }
}

function goToSlide(index) {
    if (!currentTopic) return;
    const slides = slidesData[currentTopic].slides;
    if (index >= 0 && index < slides.length) {
        currentSlideIndex = index;
        updateSlideDisplay();
    }
}

// ===== DISPLAY FUNCTIONS =====
function updateSlideDisplay() {
    if (!currentTopic) return;
    
    const topic = slidesData[currentTopic];
    const slides = topic.slides;
    const slide = slides[currentSlideIndex];
    
    // Update title
    slideTitle.textContent = topic.title;
    
    // Update content
    slideContent.innerHTML = `<div class="slide">${slide.content}</div>`;
    
    // Update counter
    currentSlideEl.textContent = currentSlideIndex + 1;
    totalSlidesEl.textContent = slides.length;
    
    // Update indicators
    updateIndicators(slides.length);
    
    // Update progress bar
    const progress = ((currentSlideIndex + 1) / slides.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update button states
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

function updateIndicators(total) {
    slideIndicators.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const indicator = document.createElement('div');
        indicator.className = `indicator ${i === currentSlideIndex ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(i);
        slideIndicators.appendChild(indicator);
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (currentTopic) {
        if (e.key === 'ArrowRight') nextSlide();
        else if (e.key === 'ArrowLeft') prevSlide();
        else if (e.key === 'Escape') showLanding();
    }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    showLanding();
});
