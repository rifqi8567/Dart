// Slides Data untuk Bab 10: Advanced Functions & Functional Dart
const slidesData = {
  arrowlambda: [
    {
      title: "Arrow Function & Inner Function",
      category: "Functional",
      icon: "fas fa-location-arrow",
      content: `
        <p class="text-content">
          <strong>Arrow Function</strong> (atau short-hand syntax <code>=></code>) digunakan untuk mendeklarasikan fungsi satu baris secara ringkas. Ekspresi di kanan <code>=></code> otomatis di-return.
          <strong>Inner Function</strong> adalah fungsi yang dideklarasikan di dalam fungsi lain, membatasi cakupan aksesibilitasnya hanya di dalam fungsi induk.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Arrow Function</span>
<span class="type">double</span> <span class="function">kaliDua</span>(<span class="type">double</span> <span class="variable">x</span>) => <span class="variable">x</span> * <span class="number">2</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Inner Function</span>
  <span class="keyword">void</span> <span class="function">katakanHalo</span>() {
    <span class="function">print</span>(<span class="string">'Halo dari dalam main!'</span>);
  }
  
  <span class="function">katakanHalo</span>();
  <span class="function">print</span>(<span class="function">kaliDua</span>(<span class="number">4.5</span>)); <span class="comment">// 9.0</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Anonymous Function (Lambda)",
      category: "Functional",
      icon: "fas fa-user-secret",
      content: `
        <p class="text-content">
          <strong>Anonymous Function</strong> adalah fungsi yang tidak memiliki nama. Berguna ketika kita butuh fungsi sekali pakai sebagai argument untuk fungsi lain.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-user-secret"></i> Analogi Dunia Nyata: Kurir Lepas Sekali Pakai</div>
          <p>Bayangkan <strong>Anonymous Function</strong> seperti menggunakan jasa kurir ojek online lepas untuk mengantar satu paket secara instan. Anda tidak perlu merekrut dia sebagai karyawan tetap di perusahaan Anda (tidak perlu diberi nama fungsi), Anda cukup memberi tahu tugasnya (instruksi kode) lalu setelah paket sampai, selesai.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            Var["var kapital"] --> AnonFunc["Anonymous Function"]
            AnonFunc --> Call["kapital dart"] --> Out["Output: DART"]
            
            style Var fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style AnonFunc fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Call fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Out fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// 1. Anonymous Function disimpan di variabel</span>
  <span class="keyword">var</span> <span class="variable">kapital</span> = (<span class="type">String</span> <span class="variable">teks</span>) {
    <span class="keyword">return</span> <span class="variable">teks</span>.toUpperCase();
  };
  
  <span class="comment">// 2. Versi Arrow Function singkatan</span>
  <span class="keyword">var</span> <span class="variable">jumlahKarakter</span> = (<span class="type">String</span> <span class="variable">t</span>) => <span class="variable">t</span>.length;
  
  <span class="function">print</span>(<span class="variable">kapital</span>(<span class="string">'dart'</span>)); <span class="comment">// DART</span>
  <span class="function">print</span>(<span class="variable">jumlahKarakter</span>(<span class="string">'hello'</span>)); <span class="comment">// 5</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  hof: [
    {
      title: "Higher-Order Functions (HOF)",
      category: "Functional",
      icon: "fas fa-cogs",
      content: `
        <p class="text-content">
          <strong>Higher-Order Function</strong> adalah fungsi yang menerima fungsi lain sebagai parameter, atau mengembalikan sebuah fungsi. Ini adalah pilar utama pemrograman fungsional di Dart.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-user-tie"></i> Analogi Dunia Nyata: Mandor Proyek & Tukang Cat</div>
          <p>Bayangkan <strong>Higher-Order Function (HOF)</strong> seperti seorang Mandor Proyek. Mandor tersebut tidak mengecat dinding sendiri, melainkan menerima pekerja spesialis cat (fungsi callback) sebagai asistennya. Si Mandor tinggal menyuruh si pekerja cat beraksi ketika waktunya tiba. Jadi, fungsi HOF mengatur kapan dan bagaimana fungsi lain yang dikirimkan dijalankan.</p>
        </div>
        <div class="mermaid">
        flowchart LR
            HOF["HOF<br/>filterDanCetak"] -->|"Terima"| Callback["Callback<br/>item.startsWith"]
            HOF -->|"Iterasi"| Callback
            Callback -->|"Return"| Hasil["Hasil Filter"]
            
            style HOF fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Callback fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Hasil fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Fungsi HOF menerima fungsi filter</span>
<span class="keyword">void</span> <span class="function">filterDanCetak</span>(<span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">list</span>, <span class="type">bool</span> <span class="function">Function</span>(<span class="type">String</span>) <span class="variable">uji</span>) {
  <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">item</span> <span class="keyword">in</span> <span class="variable">list</span>) {
    <span class="keyword">if</span> (<span class="function">uji</span>(<span class="variable">item</span>)) {
      <span class="function">print</span>(<span class="variable">item</span>);
    }
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">bahasa</span> = [<span class="string">'Java'</span>, <span class="string">'Dart'</span>, <span class="string">'C++'</span>, <span class="string">'Python'</span>];
  
  <span class="comment">// Mengirimkan anonymous function sebagai parameter</span>
  <span class="function">filterDanCetak</span>(<span class="variable">bahasa</span>, (<span class="variable">item</span>) => <span class="variable">item</span>.startsWith(<span class="string">'D'</span>)); <span class="comment">// Cetak: Dart</span>
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Built-in HOF: map(), where(), & reduce()",
      category: "Functional",
      icon: "fas fa-filter",
      content: `
        <p class="text-content">
          Dart menyediakan HOF bawaan pada Collections yang sangat kuat untuk memanipulasi data tanpa mengubah array aslinya:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">int</span><span class="keyword">&gt;</span> <span class="variable">angka</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];
  
  <span class="comment">// 1. map() - mengubah setiap elemen</span>
  <span class="keyword">var</span> <span class="variable">kuadrat</span> = <span class="variable">angka</span>.<span class="function">map</span>((<span class="variable">x</span>) => <span class="variable">x</span> * <span class="variable">x</span>).<span class="function">toList</span>(); <span class="comment">// [1, 4, 9, 16, 25]</span>
  
  <span class="comment">// 2. where() - menyaring elemen (filter)</span>
  <span class="keyword">var</span> <span class="variable">genap</span> = <span class="variable">angka</span>.<span class="function">where</span>((<span class="variable">x</span>) => <span class="variable">x</span> % <span class="number">2</span> == <span class="number">0</span>).<span class="function">toList</span>(); <span class="comment">// [2, 4]</span>
  
  <span class="comment">// 3. reduce() - mengakumulasi seluruh elemen</span>
  <span class="type">int</span> <span class="variable">total</span> = <span class="variable">angka</span>.<span class="function">reduce</span>((<span class="variable">val</span>, <span class="variable">el</span>) => <span class="variable">val</span> + <span class="variable">el</span>); <span class="comment">// 15</span>
  
  <span class="function">print</span>(<span class="variable">kuadrat</span>);
  <span class="function">print</span>(<span class="variable">genap</span>);
  <span class="function">print</span>(<span class="variable">total</span>);
}</pre>
          </div>
        </div>
      `
    }
  ],
  closure: [
    {
      title: "Memahami Closure",
      category: "Closure",
      icon: "fas fa-box-archive",
      content: `
        <p class="text-content">
          <strong>Closure</strong> adalah fungsi yang dapat menangkap/mengingat variabel dari cakupan (lexical scope) luarnya, bahkan setelah fungsi luarnya selesai dieksekusi. Ini sangat berguna untuk enkapsulasi state private.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-piggy-bank"></i> Analogi Dunia Nyata: Celengan Target Memori</div>
          <p>Bayangkan <strong>Closure</strong> seperti sebuah celengan target tabungan. Ketika Anda membuat celengan baru dengan target awal 5 ribu, celengan tersebut memprogram dirinya sendiri untuk selalu mengingat angka '5' tersebut (di-capture), meskipun Anda sudah selesai membuat fungsinya. Setiap kali Anda memasukkan uang baru x, dia akan menambahkannya ke angka 5 yang dia ingat.</p>
        </div>
        <div class="mermaid">
        flowchart TD
            ScopeLuar["Scope Luar<br/>nilaiAwal = 5"] -->|"Di-capture"| ClosureFunc["Closure<br/>nilaiAwal + x"]
            ClosureFunc -->|"tambahLima(3)"| OutClosure["Hasil: 8"]
            
            style ScopeLuar fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style ClosureFunc fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style OutClosure fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="type">Function</span> <span class="function">buatPenjumlah</span>(<span class="type">int</span> <span class="variable">nilaiAwal</span>) {
  <span class="keyword">return</span> (<span class="type">int</span> <span class="variable">x</span>) => <span class="variable">nilaiAwal</span> + <span class="variable">x</span>; <span class="comment">// nilaiAwal di-capture oleh closure</span>
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">tambahLima</span> = <span class="function">buatPenjumlah</span>(<span class="number">5</span>);
  <span class="keyword">var</span> <span class="variable">tambahSepuluh</span> = <span class="function">buatPenjumlah</span>(<span class="number">10</span>);
  
  <span class="function">print</span>(<span class="variable">tambahLima</span>(<span class="number">3</span>));     <span class="comment">// 8</span>
  <span class="function">print</span>(<span class="variable">tambahSepuluh</span>(<span class="number">3</span>));  <span class="comment">// 13</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 10",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Kerjakan latihan fungsional pemrograman berikut secara mandiri:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Sistem Analisis Nilai Kelas</div>
          <p>Tulis program Dart yang memanfaatkan list siswa bertipe Map berikut:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; font-family: monospace; color: #fff;">
List&lt;Map&lt;String, dynamic&gt;&gt; siswa = [
  {'nama': 'Budi', 'nilai': 75},
  {'nama': 'Siti', 'nilai': 90},
  {'nama': 'Andi', 'nilai': 60},
  {'nama': 'Dewi', 'nilai': 85},
];</pre>
          <p>Kriteria Latihan:</p>
          <ul>
            <li>Gunakan method <code>where()</code> untuk memfilter siswa yang mendapat nilai di atas atau sama dengan 75 (Lulus).</li>
            <li>Gunakan method <code>map()</code> untuk mengubah list siswa lulus tadi menjadi list String nama mereka saja.</li>
            <li>Gunakan HOF <code>reduce()</code> untuk menghitung rata-rata nilai dari seluruh siswa yang lulus.</li>
            <li>Cetak daftar nama siswa lulus beserta nilai rata-rata mereka ke console.</li>
          </ul>
        </div>
      `
    }
  ]
};
