// Slides Data untuk Bab 9: Functions Dasar & Parameter
const slidesData = {
  deklarasi: [
    {
      title: "Deklarasi Fungsi & Return Value",
      category: "Functions Dasar",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          <strong>Fungsi (Function)</strong> adalah sekumpulan instruksi terisolasi yang dapat digunakan kembali berkali-kali. Fungsi dapat menerima input (parameter) dan dapat mengembalikan output (return value). Jika tidak mengembalikan apa-apa, gunakan tipe <code>void</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-blender"></i> Analogi Dunia Nyata: Mesin Blender Buah</div>
          <p>Bayangkan <strong>Fungsi (Function)</strong> seperti mesin blender di dapur. <strong>Parameter</strong> adalah buah-buahan segar yang dimasukkan ke dalam blender (input). Proses blender di dalam mesin adalah <strong>blok kode fungsi</strong>. Dan <strong>Return Value</strong> adalah segelas jus segar yang siap dituang dan diminum (output). Jika blendernya hanya berfungsi untuk membersihkan diri sendiri tanpa mengeluarkan jus baru, itu seperti fungsi <code>void</code>.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Input["Input: Parameter / Buah"] --> Proses["Proses: Badan Fungsi / Blender"]
            Proses --> Output["Output: Return Value / Segelas Jus"]
            
            style Input fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Proses fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Output fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Fungsi dengan return value int</span>
<span class="type">int</span> <span class="function">hitungLuasPersegi</span>(<span class="type">int</span> <span class="variable">sisi</span>) {
  <span class="keyword">return</span> <span class="variable">sisi</span> * <span class="variable">sisi</span>;
}

// Fungsi void (tanpa return)
<span class="keyword">void</span> <span class="function">sapaPengguna</span>(<span class="type">String</span> <span class="variable">nama</span>) {
  <span class="function">print</span>(<span class="string">'Halo, Selamat Belajar </span><span class="variable">$nama</span><span class="string">!'</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">luas</span> = <span class="function">hitungLuasPersegi</span>(<span class="number">5</span>);
  <span class="function">print</span>(<span class="string">'Luas: </span><span class="variable">$luas</span><span class="string">'</span>); // 25
  <span class="function">sapaPengguna</span>(<span class="string">'Andi'</span>);
}</pre>
          </div>
        </div>
      `
    }
  ],
  parameter: [
    {
      title: "Positional Parameters (Posisi)",
      category: "Parameter",
      icon: "fas fa-sort-numeric-down",
      content: `
        <p class="text-content">
          Secara default, parameter bersifat <strong>positional</strong>, artinya posisi argumen saat memanggil fungsi harus sama persis dengan deklarasinya. Kita bisa membuat parameter opsional dengan membungkusnya menggunakan kurung siku <code>[]</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-chair"></i> Analogi Dunia Nyata: Kursi Bioskop Terurut</div>
          <p>Bayangkan <strong>Positional Parameters</strong> seperti deretan kursi penonton bioskop yang tertera di tiket (Kursi A1, A2, A3). Orang pertama yang datang harus duduk di kursi pertama, orang kedua di kursi kedua, dan seterusnya. Posisinya tidak boleh tertukar. Jika ada kursi opsional (misal baris tambahan yang dibungkus <code>[]</code>), kursi itu boleh kosong jika penontonnya tidak datang.</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Arg1["Argumen ke-1: 'Budi'"] --> Param1["Parameter ke-1: String depan"]
            Arg2["Argumen ke-2: 'Pratama'"] --> Param2["Parameter ke-2: String belakang"]
            
            subgraph "Urutan Wajib"
            Param1
            end
            
            subgraph "Opsional dalam Kurung Siku"
            Param2
            end
            
            style Arg1 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Arg2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Param1 fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Param2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Parameter opsional 'belakang'. Nilainya null jika tidak dikirim</span>
<span class="keyword">void</span> <span class="function">sayHello</span>(<span class="type">String</span> <span class="variable">depan</span>, [<span class="type">String?</span> <span class="variable">belakang</span>]) {
  <span class="keyword">if</span> (<span class="variable">belakang</span> != <span class="keyword">null</span>) {
    <span class="function">print</span>(<span class="string">'Halo </span><span class="variable">$depan</span><span class="string"> </span><span class="variable">$belakang</span><span class="string">'</span>);
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="string">'Halo </span><span class="variable">$depan</span><span class="string">'</span>);
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">sayHello</span>(<span class="string">'Budi'</span>); // Output: Halo Budi
  <span class="function">sayHello</span>(<span class="string">'Budi'</span>, <span class="string">'Pratama'</span>); // Output: Halo Budi Pratama
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Named Parameters & Default Value",
      category: "Parameter",
      icon: "fas fa-signature",
      content: `
        <p class="text-content">
          <strong>Named Parameters</strong> dibungkus dengan kurung kurawal <code>{}</code>. Saat pemanggilan, kita wajib menyertakan nama parameternya. Gaya ini membuat kode sangat mudah dibaca, terutama jika parameternya banyak. Tambahkan keyword <code>required</code> untuk parameter wajib, atau beri nilai default.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-wpforms"></i> Analogi Dunia Nyata: Formulir Online</div>
          <p>Bayangkan <strong>Named Parameters</strong> seperti mengisi formulir online. Setiap kolom input ada labelnya (Nama: ..., Alamat: ..., Pesan: ...). Anda bebas mengisi kolom tersebut tanpa peduli urutan mana yang diisi duluan, asalkan labelnya cocok. Kolom bertanda bintang (*) adalah parameter wajib (<code>required</code>), sedangkan kolom yang sudah terisi otomatis adalah parameter dengan <strong>Default Value</strong>.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Call["Kirim: nama='Siti', pesan='Kabar?'"] --> Map1["Parameter nama (required)"]
            Call --> Map2["Parameter pesan (default value)"]
            
            style Call fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Map1 fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Map2 fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Named parameter: 'nama' wajib, 'pesan' opsional dengan nilai default</span>
<span class="keyword">void</span> <span class="function">kirimPesan</span>({<span class="keyword">required</span> <span class="type">String</span> <span class="variable">nama</span>, <span class="type">String</span> <span class="variable">pesan</span> = <span class="string">'Halo!'</span>}) {
  <span class="function">print</span>(<span class="string">'Kirim ke </span><span class="variable">$nama</span><span class="string}: </span><span class="variable">$pesan</span><span class="string">'</span>);
}

<span class="keyword">void</span> <span class="function">main</span>() {
  // Posisi pemanggilan bisa diacak asalkan menyebutkan namanya!
  <span class="function">kirimPesan</span>(pesan: <span class="string">'Apa kabar?'</span>, nama: <span class="string">'Siti'</span>);
  <span class="function">kirimPesan</span>(nama: <span class="string">'Budi'</span>); // Menggunakan pesan default: 'Halo!'
}</pre>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-check-circle"></i> Mengapa Flutter menyukai Named Parameters?</div>
          <p>Hampir seluruh widget UI Flutter memanfaatkan named parameters karena properti konfigurasi widget sangat banyak dan urutannya tidak boleh membingungkan developer.</p>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 9",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Asah kemampuan menulis fungsi Anda dengan tugas mandiri di bawah ini:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Pembuat Format Laporan Siswa</div>
          <p>Buat program Dart dengan spesifikasi fungsi sebagai berikut:</p>
          <ul>
            <li>Buat fungsi bernama <code>hitungRataRata</code> yang menerima parameter positional list angka <code>List&lt;int&gt; nilai</code> dan mengembalikan nilai <code>double</code>.</li>
            <li>Buat fungsi bernama <code>buatLaporan</code> yang menggunakan <strong>Named Parameters</strong>:
              <ul>
                <li><code>required String nama</code></li>
                <li><code>required double rataRata</code></li>
                <li><code>String status = 'Sedang Ditinjau'</code> (memiliki nilai default)</li>
              </ul>
              Fungsi ini mengembalikan <code>String</code> berupa format laporan siswa yang megah.
            </li>
            <li>Panggil fungsi tersebut di <code>main()</code> lalu cetak laporannya ke console.</li>
          </ul>
        </div>
      `
    }
  ]
};
