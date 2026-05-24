// Slides Data untuk Bab 11: Null Safety secara Mendalam
const slidesData = {
  konsep: [
    {
      title: "Konsep Null Safety & Nullable vs Non-Nullable",
      category: "Null Safety",
      icon: "fas fa-shield-alt",
      content: `
        <p class="text-content">
          Sebelum adanya <strong>Null Safety</strong>, error yang paling sering menyebabkan aplikasi crash adalah <em>Null Pointer Exception</em> (mencoba mengakses properti/metode dari objek yang bernilai <code>null</code>).
          Sejak Dart 2.12, Dart mendukung **Sound Null Safety**, memisahkan variabel menjadi:
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-box"></i> Analogi Dunia Nyata: Label Pengiriman Fragile</div>
          <p>Bayangkan <strong>Null Safety</strong> seperti pengiriman paket belanja online. Kotak <strong>Non-Nullable</strong> seperti paket baju biasa yang aman dan padat (kurir bisa melemparnya langsung tanpa cemas). Sedangkan kotak <strong>Nullable (?)</strong> seperti paket berisi gelas kaca berlabel <strong>"FRAGILE"</strong>. Sebelum membukanya, Anda wajib berhati-hati dan memeriksa kondisinya terlebih dahulu agar tidak pecah (crash).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Start(["Variabel"]) --> Check{"Nullable?"}
            Check -->|Ya| SafeCheck{"Cek Null / ?."}
            Check -->|Tidak| Direct["Akses Langsung"]
            SafeCheck -->|Null| SafeOutput["Return null"]
            SafeCheck -->|Ada Data| Success["Akses Sukses"]
            
            style Start fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Check fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style SafeCheck fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
            style Direct fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            style Success fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="two-column">
          <div class="info-box danger">
            <div class="info-box-title">Non-Nullable (Bawaan)</div>
            <p>Variabel yang secara mutlak tidak boleh bernilai <code>null</code>.</p>
            <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">int umur = 17;
// umur = null; // ERROR!</pre>
          </div>
          <div class="info-box tip">
            <div class="info-box-title">Nullable Type (?)</div>
            <p>Variabel yang diizinkan menampung nilai atau bernilai <code>null</code>. Ditandai dengan tanda tanya <code>?</code>.</p>
            <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">int? tinggi = 170;
tinggi = null; // Berhasil!</pre>
          </div>
        </div>
      `
    }
  ],
  operators: [
    {
      title: "Null-aware Operators",
      category: "Null Safety",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Dart menyediakan operator khusus (null-aware) untuk berinteraksi dengan variabel nullable secara aman tanpa crash:
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-tools"></i> Analogi Dunia Nyata: Sabuk Pengaman & Ban Serep</div>
          <p>
            1. <strong>?. (Conditional Access)</strong>: Seperti mengetuk pintu rumah orang. Jika ada orangnya di dalam, kita ajak bicara. Jika kosong (null), kita pulang dengan tenang tanpa mendobrak pintu.<br>
            2. <strong>?? (Null Coalescing)</strong>: Seperti membawa ban serep mobil. Jika ban utama bocor (null), gunakan ban serep (nilai default/fallback).<br>
            3. <strong>! (Null Assertion)</strong>: Seperti melompat dari pesawat tanpa parasut karena Anda yakin ada tumpukan jerami empuk di bawah. Jika tebakan Anda salah (ternyata null), Anda akan crash seketika!
          </p>
        </div>
        <div class="mermaid">
        flowchart LR
            VarNull{"Variabel Null?"} -->|?.| AccessNull["Return null"]
            VarNull -->|??| Fallback["Nilai Default"]
            VarNull -->|!| Crash["Runtime Error!"]
            
            style VarNull fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style AccessNull fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Fallback fill:#1de9b6,stroke:#0175c2,stroke-width:2px,color:#000
            style Crash fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">?.</div>
            <div class="feature-text">
              <h4>Conditional Property Access</h4>
              <p>Mengakses properti/method hanya jika objek tidak null. Contoh: <code>nama?.length</code> (menghasilkan null jika nama null, bukan crash).</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">??</div>
            <div class="feature-text">
              <h4>Null Coalescing Operator</h4>
              <p>Memberikan nilai alternatif jika variabel bernilai null. Contoh: <code>nama ?? 'Guest'</code>.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">!</div>
            <div class="feature-text">
              <h4>Null Assertion (Bang) Operator</h4>
              <p>Memaksa compiler percaya bahwa variabel pasti tidak null. **Gunakan hati-hati**, bisa memicu crash jika ternyata null di runtime.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Praktik Null-aware Operators",
      category: "Null Safety",
      icon: "fas fa-terminal",
      content: `
        <p class="text-content">
          Perhatikan bagaimana operator ini menangani nilai null secara anggun:
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String?</span> <span class="variable">nama</span> = <span class="keyword">null</span>;
  
  <span class="comment">// 1. Akses properti aman (?. )</span>
  <span class="function">print</span>(<span class="variable">nama</span>?.length); <span class="comment">// Output: null</span>
  
  <span class="comment">// 2. Nilai default fallback (?? )</span>
  <span class="type">String</span> <span class="variable">tampilan</span> = <span class="variable">nama</span> ?? <span class="string">'Tamu Baru'</span>;
  <span class="function">print</span>(<span class="variable">tampilan</span>); <span class="comment">// Output: Tamu Baru</span>
  
  <span class="comment">// 3. Null-aware assignment (??= )</span>
  <span class="type">int?</span> <span class="variable">angka</span> = <span class="keyword">null</span>;
  <span class="variable">angka</span> ??= <span class="number">10</span>; <span class="comment">// Diisi 10 jika null</span>
  <span class="function">print</span>(<span class="variable">angka</span>); <span class="comment">// 10</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  promotion: [
    {
      title: "Type Promotion & Flow Analysis",
      category: "Type Promotion",
      icon: "fas fa-level-up-alt",
      content: `
        <p class="text-content">
          Compiler Dart sangat cerdas. Melalui **Flow Analysis**, jika kita melakukan pengecekan null di dalam blok pengkondisian <code>if</code>, Dart akan otomatis mempromosikan tipe data tersebut menjadi non-nullable di dalam blok tersebut (<strong>Type Promotion</strong>).
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">cetakPanjangTeks</span>(<span class="type">String?</span> <span class="variable">teks</span>) {
  <span class="comment">// print(teks.length); // ERROR! teks bisa bernilai null</span>
  
  <span class="keyword">if</span> (<span class="variable">teks</span> != <span class="keyword">null</span>) {
    <span class="comment">// Di dalam blok ini, tipe teks dipromosikan dari String? menjadi String</span>
    <span class="function">print</span>(<span class="variable">teks</span>.length); <span class="comment">// Berhasil tanpa operator ?. atau !</span>
  } <span class="keyword">else</span> {
    <span class="function">print</span>(<span class="number">0</span>);
  }
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan & Tugas Mandiri Bab 11",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Asah pemahaman Null Safety Anda dengan tugas mandiri di bawah ini:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Parser Data Pengguna opsional</div>
          <p>Tulis program Dart dengan spesifikasi berikut:</p>
          <ul>
            <li>Buat fungsi bernama <code>dapatkanNamaKlub</code> yang menerima parameter bernama <code>{String? namaKlub}</code>.</li>
            <li>Di dalam fungsi, kembalikan nama klub tersebut. Jika parameternya bernilai <code>null</code>, gunakan operator null-aware coalescing (<code>??</code>) untuk mengembalikan teks <code>"Klub Tanpa Nama"</code>.</li>
            <li>Di <code>main()</code>, buat list profil bertipe Map yang menampung <code>nama</code> (wajib) dan <code>klub</code> (boleh null/opsional).</li>
            <li>Iterasi list tersebut menggunakan <code>for-in</code>, panggil fungsi <code>dapatkanNamaKlub</code> untuk menampilkan klub masing-masing profil, dan cetak laporannya ke console secara teratur.</li>
          </ul>
        </div>
      `
    }
  ]
};
