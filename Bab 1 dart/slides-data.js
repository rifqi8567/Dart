// Slides Data untuk Bab 1: Pengenalan & Setup Environment
const slidesData = {
  pengenalan: [
    {
      title: "Selamat Datang di Dart Masterclass!",
      category: "Pengenalan",
      icon: "fas fa-rocket",
      content: `
        <p class="text-content">
          Selamat datang di perjalanan belajar pemrograman Dart! Modul ini dirancang khusus untuk memandu Anda dari nol hingga menjadi mahir dalam menulis aplikasi modern menggunakan Dart.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-compass"></i> Apa yang Akan Kita Pelajari?</div>
          <p>Kita akan mengenal bahasa Dart, memahami sejarah pembuatannya, melihat arsitektur di balik performanya yang super cepat, dan melakukan instalasi tools pembangunan.</p>
        </div>
        <div class="diagram-box">
          <div class="diagram-title">Peta Pembelajaran Bab 1</div>
          <div class="diagram-flow">
            <div class="diagram-node">Pengenalan Dart</div>
            <span class="diagram-arrow"><i class="fas fa-chevron-right"></i></span>
            <div class="diagram-node secondary">Lars Bak & Kasper Lund</div>
            <span class="diagram-arrow"><i class="fas fa-chevron-right"></i></span>
            <div class="diagram-node">Setup SDK & IDE</div>
            <span class="diagram-arrow"><i class="fas fa-chevron-right"></i></span>
            <div class="diagram-node secondary">Program Pertama</div>
          </div>
        </div>
      `
    },
    {
      title: "Apa itu Dart?",
      category: "Pengenalan",
      icon: "fas fa-info-circle",
      content: `
        <p class="text-content">
          <strong>Dart</strong> adalah bahasa pemrograman modern, <em>strongly-typed</em>, dan berorientasi objek (OOP) yang dikembangkan oleh <strong>Google</strong>. Tujuan utamanya adalah memudahkan pembuatan aplikasi klien (client-side) berkinerja tinggi seperti mobile, web, dan desktop.
        </p>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-mobile-alt"></i></div>
            <div class="feature-text">
              <h4>Multiplatform (Flutter)</h4>
              <p>Dart merupakan bahasa resmi di balik Flutter, framework UI terpopuler untuk membuat aplikasi iOS, Android, Web, dan Desktop dari satu basis kode.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><i class="fas fa-tachometer-alt"></i></div>
            <div class="feature-text">
              <h4>Kompilasi Fleksibel</h4>
              <p>Dart mendukung JIT (Just-in-Time) untuk siklus build yang cepat (Hot Reload) dan AOT (Ahead-of-Time) untuk performa rilis yang maksimal.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Sejarah Dart: Lars Bak & Kasper Lund",
      category: "Sejarah",
      icon: "fas fa-clock",
      content: `
        <p class="text-content">
          Dart pertama kali diperkenalkan oleh Google pada konferensi <strong>GOTO Aarhus</strong> di Denmark pada bulan <strong>Oktober 2011</strong>. Tokoh utama di balik perancangan Dart adalah <strong>Lars Bak</strong> dan <strong>Kasper Lund</strong>.
        </p>
        <div class="two-column founder-grid">
          <div class="info-box founder-card">
            <img class="founder-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lars_Bak.png/250px-Lars_Bak.png" alt="Foto Lars Bak" loading="lazy" referrerpolicy="no-referrer" />
            <div class="founder-meta">
              <div class="info-box-title"><i class="fas fa-user"></i> Lars Bak</div>
              <span>Co-designer Dart & arsitek V8</span>
            </div>
            <p>Seorang pakar Virtual Machine asal Denmark yang juga memimpin pengembangan V8 JavaScript Engine di Google Chrome. Keahliannya membuat Dart memiliki manajemen memori yang sangat efisien.</p>
          </div>
          <div class="info-box founder-card">
            <img class="founder-photo" src="https://files.gotocon.com/uploads/portraits/183/square_medium/kasper_lund_1622799585.jpg" alt="Foto Kasper Lund" loading="lazy" referrerpolicy="no-referrer" />
            <div class="founder-meta">
              <div class="info-box-title"><i class="fas fa-user"></i> Kasper Lund</div>
              <span>Co-founder V8 & Dart projects</span>
            </div>
            <p>Seorang software engineer senior di Google yang bersama Lars Bak merancang arsitektur awal Dart VM dan memimpin transisi Dart menjadi bahasa pemrograman mobile terdepan.</p>
          </div>
        </div>
      `
    },
    {
      title: "Arsitektur Kompilasi: JIT vs AOT",
      category: "Kompilasi",
      icon: "fas fa-cogs",
      content: `
        <p class="text-content">
          Salah satu rahasia kekuatan Dart adalah dukungannya terhadap dua model kompilasi sekaligus:
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-shipping-fast"></i> Analogi Dunia Nyata: JIT vs AOT</div>
          <p>Bayangkan <strong>JIT</strong> seperti <strong>koki restoran sushi</strong> yang memotong bahan secara langsung ketika dipesan. Sangat fleksibel karena resep bisa diubah di tengah jalan (Hot Reload). Sedangkan <strong>AOT</strong> seperti <strong>makanan katering kotak</strong> yang sudah dimasak dan dikemas di pabrik (Kompilasi) lalu dikirim ke rumah Anda. Saat dibuka, langsung siap santap dengan instan (Performa super cepat).</p>
        </div>
        <div class="mermaid">
        flowchart LR
            subgraph "Development JIT"
            direction LR
            CodeJIT["Kode Dart Baru"] -->|Hot Reload| VM["Dart Virtual Machine"]
            VM -->|"Jalankan<br/>Langsung"| RunJIT["Aplikasi<br/>Terupdate"]
            end
            
            subgraph "Production AOT"
            direction LR
            CodeAOT["Kode Dart Final"] -->|"Kompilasi<br/>Ahead-of-Time"| Native["Bahasa Mesin<br/>Native<br/>.exe / .apk"]
            Native -->|"Jalankan<br/>Instan"| RunAOT["Aplikasi<br/>Super Lancar"]
            end
            
            style CodeJIT fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style VM fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style RunJIT fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
            
            style CodeAOT fill:#ff006e,stroke:#ff006e,stroke-width:2px,color:#fff
            style Native fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
            style RunAOT fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Fitur</th>
              <th>Just-in-Time (JIT)</th>
              <th>Ahead-of-Time (AOT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cara Kerja</strong></td>
              <td>Mengompilasi kode saat dijalankan di VM secara real-time.</td>
              <td>Mengompilasi kode langsung menjadi bahasa mesin native sebelum aplikasi dijalankan.</td>
            </tr>
            <tr>
              <td><strong>Kelebihan</strong></td>
              <td>Mendukung <strong>Hot Reload</strong> (perubahan kode langsung terlihat tanpa restart).</td>
              <td>Startup aplikasi instan dan performa super lancar (60/120 FPS).</td>
            </tr>
            <tr>
              <td><strong>Digunakan pada</strong></td>
              <td>Fase Development / Pengembangan.</td>
              <td>Fase Production / Rilis aplikasi ke App Store/Play Store.</td>
            </tr>
          </tbody>
        </table>
      `
    }
  ],
  setup: [
    {
      title: "Instalasi Dart SDK",
      category: "Setup",
      icon: "fas fa-download",
      content: `
        <p class="text-content">
          Sebelum mulai menulis kode Dart di komputer Anda, Anda membutuhkan <strong>Dart SDK (Software Development Kit)</strong>.
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Download Flutter/Dart SDK</h4>
              <p>Cara terbaik mendapatkan Dart SDK adalah dengan menginstal Flutter SDK dari <a href="https://docs.flutter.dev/get-started/install" target="_blank">flutter.dev</a>. Dart SDK sudah terbundel di dalamnya.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Konfigurasi PATH</h4>
              <p>Tambahkan folder <code>flutter/bin</code> atau <code>dart-sdk/bin</code> ke dalam System Environment Variables (PATH) sistem operasi Anda agar command <code>dart</code> bisa dipanggil dari mana saja.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Verifikasi Instalasi</h4>
              <p>Buka Terminal atau Command Prompt lalu ketik perintah: <code>dart --version</code></p>
            </div>
          </div>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Verifikasi Terminal</div>
          <div class="result-content">C:\\Users\\User> dart --version
Dart SDK version: 3.3.0 (stable) (Wed Feb 14 13:12:49 2024) on "windows_x64"</div>
        </div>
      `
    },
    {
      title: "Setup IDE & Editor Terbaik",
      category: "Setup",
      icon: "fas fa-desktop",
      content: `
        <p class="text-content">
          Untuk pengalaman menulis kode terbaik, kami menyarankan menggunakan editor teks modern dengan ekstensi resmi:
        </p>
        <div class="two-column">
          <div class="info-box tip">
            <div class="info-box-title"><i class="fab fa-microsoft"></i> VS Code (Sangat Direkomendasikan)</div>
            <ul>
              <li>Install Visual Studio Code</li>
              <li>Buka menu Extensions (Ctrl+Shift+X)</li>
              <li>Cari dan install ekstensi <strong>"Dart"</strong> dan <strong>"Flutter"</strong></li>
              <li>Menawarkan fitur autocomplete, formatting otomatis, dan debugging cepat</li>
            </ul>
          </div>
          <div class="info-box">
            <div class="info-box-title"><i class="fas fa-globe"></i> DartPad (Praktis Tanpa Install)</div>
            <p>Jika Anda ingin langsung mencoba tanpa instalasi apapun, kunjungi portal resmi <a href="https://dartpad.dev" target="_blank">dartpad.dev</a> langsung di browser Anda.</p>
          </div>
        </div>
      `
    },
    {
      title: "Program Hello World Pertama Anda",
      category: "Praktik",
      icon: "fas fa-code",
      content: `
        <p class="text-content">
          Mari tulis program pertama kita dalam file bernama <code>main.dart</code>. Setiap kode Dart yang dijalankan wajib diletakkan di dalam fungsi <code>main()</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="comment">// Mencetak pesan ke console/layar</span>
  <span class="function">print</span>(<span class="string">'Hello, World!'</span>);
  <span class="function">print</span>(<span class="string">'Selamat datang di Dart Masterclass!'</span>);
}</pre>
          </div>
        </div>
        <div class="info-box">
          <div class="info-box-title"><i class="fas fa-play"></i> Cara Menjalankan Kode</div>
          <p>Buka terminal di folder tempat file disimpan, lalu jalankan perintah:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-family: monospace;">dart run main.dart</pre>
        </div>
        <div class="result-box">
          <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
          <div class="result-content">Hello, World!
Selamat datang di Dart Masterclass!</div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan Mandiri & Tugas Rumah",
      category: "Tugas",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Untuk memantapkan pemahaman Anda pada Bab 1 ini, kerjakan latihan berikut di DartPad atau editor lokal Anda:
        </p>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-tasks"></i> Project: Informasi Pengguna</div>
          <p>Buat sebuah program Dart yang mencetak profil diri Anda dengan format yang megah dan teratur. Contoh output yang diharapkan:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; font-family: monospace; color: #fff;">
========================================
       DART DEVELOPER PROFILE
========================================
Nama       : Muhammad Reifqi
Sekolah    : Madrasah Digital 10B
Kota       : Jakarta
Motivasi   : Belajar Flutter untuk masa depan!
========================================</pre>
        </div>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-lightbulb"></i> Tips Clean Code</div>
          <p>Selalu gunakan akhiran tanda titik koma (<code>;</code>) untuk menutup setiap pernyataan di Dart, dan gunakan penamaan folder/file dengan gaya <em>snake_case</em> (contoh: <code>profil_saya.dart</code>).</p>
        </div>
      `
    }
  ]
};
