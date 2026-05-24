// Slides Data untuk Bab 8: Collections secara Mendalam
const slidesData = {
  listset: [
    {
      title: "List (Koleksi Terurut)",
      category: "Collections",
      icon: "fas fa-list-ol",
      content: `
        <p class="text-content">
          <strong>List</strong> adalah kumpulan item terurut yang dimulai dari indeks 0. List mengizinkan duplikat data dan sangat fleksibel.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-shapes"></i> Analogi Dunia Nyata: Koleksi Barang</div>
          <p>Bayangkan <strong>List</strong> seperti daftar absensi siswa (berurutan dari nomor 0, boleh ada nama duplikat). <strong>Set</strong> seperti gantungan kunci rumah (semua kunci wajib unik agar tidak rancu). <strong>Map</strong> seperti buku telepon (mencari nomor HP/Value berdasarkan nama teman/Key).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            subgraph List
            L1["Indeks 0: Budi"]
            L2["Indeks 1: Siti"]
            L3["Indeks 2: Budi"]
            end
            
            subgraph Set
            S1{Elektronik}
            S2{Pakaian}
            end
            
            subgraph Map
            M1["Key: Indonesia"] --> V1["Value: Jakarta"]
            M2["Key: Jepang"] --> V2["Value: Tokyo"]
            end
            
            style L1 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style L2 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style L3 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            
            style S1 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style S2 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            
            style M1 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style M2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">siswa</span> = [<span class="string">'Budi'</span>, <span class="string">'Siti'</span>, <span class="string">'Budi'</span>]; <span class="comment">// Duplikat diizinkan</span>
  
  <span class="comment">// Menambah elemen</span>
  <span class="variable">siswa</span>.<span class="function">add</span>(<span class="string">'Andi'</span>);
  
  <span class="comment">// Mengakses dengan indeks</span>
  <span class="function">print</span>(<span class="variable">siswa</span>[<span class="number">0</span>]); <span class="comment">// Budi</span>
  <span class="function">print</span>(<span class="variable">siswa</span>.length); <span class="comment">// 4</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Set (Koleksi Unik)",
      category: "Collections",
      icon: "fas fa-shapes",
      content: `
        <p class="text-content">
          <strong>Set</strong> adalah kumpulan item yang tidak berurutan dan **tidak mengizinkan nilai duplikat**. Semua elemen di dalam Set harus unik. Ditulis menggunakan kurung kurawal <code>{}</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">Set</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">kategori</span> = {<span class="string">'Elektronik'</span>, <span class="string">'Pakaian'</span>, <span class="string">'Elektronik'</span>};
  
  <span class="function">print</span>(<span class="variable">kategori</span>); <span class="comment">// Output: {Elektronik, Pakaian} -- duplikat dibuang otomatis!</span>
  
  <span class="comment">// Operasi himpunan</span>
  <span class="type">Set</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">a</span> = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>};
  <span class="type">Set</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">b</span> = {<span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};
  
  <span class="comment">// Irisan (Intersection)</span>
  <span class="function">print</span>(<span class="variable">a</span>.<span class="function">intersection</span>(<span class="variable">b</span>)); <span class="comment">// {3}</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  mapqueue: [
    {
      title: "Map (Key-Value Pairs)",
      category: "Collections",
      icon: "fas fa-atlas",
      content: `
        <p class="text-content">
          <strong>Map</strong> menyimpan data berpasangan antara kunci (Key) dan nilai (Value). Kunci pada Map bersifat unik, sedangkan nilainya boleh duplikat.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Deklarasi Map</span>
  <span class="type">Map</span><span class="keyword">&lt;</span><span class="type">String</span>, <span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">ibukota</span> = {
    <span class="string">'Indonesia'</span>: <span class="string">'Jakarta'</span>,
    <span class="string">'Jepang'</span>: <span class="string">'Tokyo'</span>,
  };
  
  <span class="comment">// Menambah data baru</span>
  <span class="variable">ibukota</span>[<span class="string">'Malaysia'</span>] = <span class="string">'Kuala Lumpur'</span>;
  
  <span class="comment">// Mengakses data</span>
  <span class="function">print</span>(<span class="variable">ibukota</span>[<span class="string">'Indonesia'</span>]); <span class="comment">// Jakarta</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Queue (Koleksi Antrean)",
      category: "Collections",
      icon: "fas fa-align-justify",
      content: `
        <p class="text-content">
          <strong>Queue</strong> adalah antrean data di mana manipulasi data di awal atau akhir antrean berlangsung sangat cepat. Untuk menggunakannya, import pustaka <code>dart:collection</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">import</span> <span class="string">'dart:collection'</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">Queue</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">antrean</span> = <span class="type">Queue</span>();
  
  <span class="variable">antrean</span>.<span class="function">addLast</span>(<span class="number">10</span>);
  <span class="variable">antrean</span>.<span class="function">addLast</span>(<span class="number">20</span>);
  <span class="variable">antrean</span>.<span class="function">addFirst</span>(<span class="number">5</span>); <span class="comment">// Ditambah di paling depan</span>
  
  <span class="function">print</span>(<span class="variable">antrean</span>); <span class="comment">// {5, 10, 20}</span>
  
  <span class="variable">antrean</span>.<span class="function">removeFirst</span>(); <span class="comment">// Menghapus elemen terdepan</span>
  <span class="function">print</span>(<span class="variable">antrean</span>); <span class="comment">// {10, 20}</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  modern: [
    {
      title: "Spread Operator & Collection Control Flow",
      category: "Advanced Collections",
      icon: "fas fa-magic",
      content: `
        <p class="text-content">
          Dart menyediakan fitur modern yang sangat mempermudah manipulasi dan penggabungan collection:
        </p>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">...</div>
            <div class="feature-text">
              <h4>Spread Operator</h4>
              <p>Menyisipkan semua elemen dari suatu list ke list lain. Gunakan <code>...?</code> untuk mencegah error jika list bernilai null.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">if</div>
            <div class="feature-text">
              <h4>Collection-If</h4>
              <p>Menyisipkan elemen ke dalam list secara kondisional langsung saat inisialisasi.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">for</div>
            <div class="feature-text">
              <h4>Collection-For</h4>
              <p>Melakukan perulangan langsung di dalam pendefinisian list untuk membuat data baru.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Praktik Fitur Modern Collection",
      category: "Advanced Collections",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Mari lihat bagaimana fitur-fitur ini menghemat penulisan kode di Dart:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 1. Spread Operator</span>
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">listA</span> = [<span class="number">1</span>, <span class="number">2</span>];
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">gabungan</span> = [<span class="number">0</span>, ...<span class="variable">listA</span>, <span class="number">3</span>, <span class="number">4</span>]; <span class="comment">// [0, 1, 2, 3, 4]</span>
  
  <span class="comment">// 2. Collection-If</span>
  <span class="type">bool</span> <span class="variable">admin</span> = <span class="keyword">true</span>;
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">menu</span> = [
    <span class="string">'Home'</span>,
    <span class="string">'Profile'</span>,
    <span class="keyword">if</span> (<span class="variable">admin</span>) <span class="string">'Dashboard Admin'</span>
  ];
  
  <span class="comment">// 3. Collection-For</span>
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">angkaBiasa</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">formatTeks</span> = [
    <span class="string">'Angka nol'</span>,
    <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">x</span> <span class="keyword">in</span> <span class="variable">angkaBiasa</span>) <span class="string">'Angka </span><span class="variable">$x</span><span class="string">'</span>
  ];
  
  <span class="function">print</span>(<span class="variable">gabungan</span>);
  <span class="function">print</span>(<span class="variable">menu</span>);
  <span class="function">print</span>(<span class="variable">formatTeks</span>);
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 8",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Kerjakan latihan di bawah ini untuk melatih pemahaman Anda tentang manipulasi data collections:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Sistem Manajemen Keranjang Belanja</div>
          <p>Tulis program Dart yang melakukan operasi-operasi berikut:</p>
          <ul>
            <li>Buat sebuah list belanjaan bertipe Map berisi nama barang dan harga, contoh: <code>List&lt;Map&lt;String, dynamic&gt;&gt; keranjang = [];</code></li>
            <li>Tambahkan minimal 3 barang ke dalam keranjang.</li>
            <li>Gunakan loop <code>for-in</code> untuk mengiterasi keranjang belanja, mencetak semua nama barang, dan menjumlahkan total harga belanjaan tersebut.</li>
            <li>Buat daftar diskon bertipe <code>Set</code> yang berisi item unik yang sedang diskon. Cek apakah barang di keranjang termasuk dalam Set diskon, jika ya, potong harganya sebesar 10% sebelum ditotalkan.</li>
          </ul>
        </div>
      `
    }
  ]
};
