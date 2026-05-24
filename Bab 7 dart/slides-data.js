// Slides Data untuk Bab 7: Control Flow: Perulangan
const slidesData = {
  forloop: [
    {
      title: "Perulangan for (Tradisional)",
      category: "Loops",
      icon: "fas fa-redo",
      content: `
        <p class="text-content">
          Perulangan <code>for</code> digunakan jika kita sudah mengetahui dengan pasti berapa kali perulangan harus berjalan. Perulangan ini terdiri dari tiga bagian utama: inisialisasi, kondisi, dan increment/decrement.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-redo"></i> Analogi Dunia Nyata: Latihan Push-Up & Treadmill</div>
          <p>Bayangkan perulangan <strong>for</strong> seperti melakukan push-up sebanyak 10 kali (Anda tahu target putaran secara pasti). Sedangkan perulangan <strong>while</strong> seperti berlari di treadmill: Anda terus berlari berulang-ulang selama belum lelah (kondisi bernilai true), dan langsung berhenti begitu kelelahan melanda (kondisi menjadi false).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Start(["Mulai: Inisialisasi i=1"]) --> Cond{"Apakah i <= 5?"}
            Cond -->|Ya| Body["Jalankan print: Perulangan ke-i"]
            Body --> Inc["Increment: i++"]
            Inc --> Cond
            Cond -->|Tidak| End([Selesai])
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Cond fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Body fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Inc fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style End fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Mencetak angka 1 sampai 5</span>
  <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> = <span class="number">1</span>; <span class="variable">i</span> &lt;= <span class="number">5</span>; <span class="variable">i</span>++) {
    <span class="function">print</span>(<span class="string">'Perulangan ke-</span><span class="variable">$i</span><span class="string">'</span>);
  }
}</pre>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Perulangan ke-1
Perulangan ke-2
Perulangan ke-3
Perulangan ke-4
Perulangan ke-5</div>
        </div>
      `
    }
  ],
  whileloop: [
    {
      title: "Perulangan while",
      category: "Loops",
      icon: "fas fa-sync",
      content: `
        <p class="text-content">
          Perulangan <code>while</code> memeriksa kondisi terlebih dahulu sebelum menjalankan blok kode. Jika kondisi bernilai <code>true</code>, blok kode dijalankan. Pastikan ada penambahan/perubahan nilai agar tidak terjadi <em>infinite loop</em> (perulangan abadi).
        </p>
        <div class="mermaid">
        flowchart TD
            Start(["Mulai: Inisialisasi counter=1"]) --> Cond{"Apakah counter <= 3?"}
            Cond -->|Ya| Body["Cetak counter & Increment counter++"]
            Body --> Cond
            Cond -->|Tidak| End([Selesai])
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Cond fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Body fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style End fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">counter</span> = <span class="number">1</span>;
  
  <span class="keyword">while</span> (<span class="variable">counter</span> &lt;= <span class="number">3</span>) {
    <span class="function">print</span>(<span class="string">'Nilai counter: </span><span class="variable">$counter</span><span class="string">'</span>);
    <span class="variable">counter</span>++; <span class="comment">// Increment agar kondisi suatu saat menjadi false</span>
  }
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Perulangan do-while",
      category: "Loops",
      icon: "fas fa-history",
      content: `
        <p class="text-content">
          Perulangan <code>do-while</code> menjalankan blok kode terlebih dahulu baru memeriksa kondisi di akhir. Sehingga, **blok kode dijamin minimal berjalan 1 kali** meskipun kondisi sejak awal bernilai <code>false</code>.
        </p>
        <div class="mermaid">
        flowchart TD
            Start(["Mulai: Inisialisasi counter=10"]) --> Body["Cetak & Increment counter++"]
            Body --> Cond{"Apakah counter <= 3?"}
            Cond -->|Ya| Body
            Cond -->|Tidak| End([Selesai])
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Body fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Cond fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style End fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">int</span> <span class="variable">counter</span> = <span class="number">10</span>;
  
  <span class="comment">// Kondisi counter <= 3 bernilai false, tapi kode di dalam do tetap jalan sekali!</span>
  <span class="keyword">do</span> {
    <span class="function">print</span>(<span class="string">'Ini dicetak sekali.'</span>);
    <span class="variable">counter</span>++;
  } <span class="keyword">while</span> (<span class="variable">counter</span> &lt;= <span class="number">3</span>);
}</pre>
          </div>
        </div>
      `
    }
  ],
  kontrol: [
    {
      title: "Break & Continue",
      category: "Loops",
      icon: "fas fa-ban",
      content: `
        <p class="text-content">
          Gunakan <code>break</code> untuk menghentikan seluruh proses perulangan seketika. Gunakan <code>continue</code> untuk melewati sisa kode di perulangan saat ini dan langsung melompat ke iterasi berikutnya.
        </p>
        <div class="mermaid">
        flowchart TD
            Start([Mulai Perulangan]) --> Cond{"Apakah i <= 5?"}
            Cond -->|Ya| Check{"Apakah i == 3?"}
            Check -->|Ya: Hantam Break| Break["break: Hentikan & Keluar Perulangan"]
            Check -->|Tidak| Print[Cetak Iterasi]
            Print --> Inc[i++] --> Cond
            Break --> End([Selesai])
            Cond -->|Tidak| End
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Cond fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Check fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Break fill:#e63946,stroke:#e63946,stroke-width:2px,color:#fff
            style Print fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style End fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Contoh Continue (mencetak angka ganjil saja)</span>
  <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> = <span class="number">1</span>; <span class="variable">i</span> &lt;= <span class="number">5</span>; <span class="variable">i</span>++) {
    <span class="keyword">if</span> (<span class="variable">i</span> % <span class="number">2</span> == <span class="number">0</span>) {
      <span class="keyword">continue</span>; <span class="comment">// Lewati angka genap</span>
    }
    <span class="function">print</span>(<span class="string">'Angka Ganjil: </span><span class="variable">$i</span><span class="string">'</span>);
  }
  
  <span class="comment">// Contoh Break (berhenti jika i bernilai 3)</span>
  <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> = <span class="number">1</span>; <span class="variable">i</span> &lt;= <span class="number">5</span>; <span class="variable">i</span>++) {
    <span class="keyword">if</span> (<span class="variable">i</span> == <span class="number">3</span>) {
      <span class="keyword">break</span>; <span class="comment">// Hentikan paksa!</span>
    }
    <span class="function">print</span>(<span class="string">'Iterasi: </span><span class="variable">$i</span><span class="string">'</span>);
  }
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Perulangan Collection (For-In)",
      category: "Loops",
      icon: "fas fa-folder-open",
      content: `
        <p class="text-content">
          Untuk melakukan iterasi pada elemen-elemen di dalam List atau Set, Dart menyediakan cara yang sangat rapi bernama loop <code>for-in</code>.
        </p>
        <div class="mermaid">
        flowchart TD
            Start(["Mulai: List buah"]) --> Cond{"Apakah ada buah berikutnya?"}
            Cond -->|Ya: Ambil buah| Body[Jalankan print buah]
            Body --> Cond
            Cond -->|Tidak| End([Selesai])
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Cond fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Body fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style End fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">List</span><span class="keyword">&lt;</span><span class="type">String</span><span class="keyword">&gt;</span> <span class="variable">daftarBuah</span> = [<span class="string">'Apel'</span>, <span class="string">'Jeruk'</span>, <span class="string">'Mangga'</span>];
  
  <span class="comment">// Loop for-in mengambil setiap buah secara otomatis</span>
  <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">buah</span> <span class="keyword">in</span> <span class="variable">daftarBuah</span>) {
    <span class="function">print</span>(<span class="string">'Buah: </span><span class="variable">$buah</span><span class="string">'</span>);
  }
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 7",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Kerjakan latihan berikut untuk melatih penulisan loop Anda secara mandiri:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Pola Bintang Tangga Terbalik</div>
          <p>Tulis program Dart yang menggunakan perulangan bersarang (nested loop) untuk mencetak pola tangga terbalik berikut menggunakan bintang:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; font-family: monospace; color: #fff;">
*****
****
***
**
*</pre>
          <p>Petunjuk: Gunakan perulangan <code>for</code> terluar untuk baris dan perulangan <code>for</code> terdalam untuk kolom pencetakan karakter.</p>
        </div>
      `
    }
  ]
};
