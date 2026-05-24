// Slides Data untuk Bab 13: OOP Part 2: Inheritance & Abstraction
const slidesData = {
  inheritance: [
    {
      title: "Konsep Pewarisan (Inheritance)",
      category: "OOP Part 2",
      icon: "fas fa-sitemap",
      content: `
        <p class="text-content">
          <strong>Inheritance (Pewarisan)</strong> adalah mekanisme di mana sebuah class (disebut <em>subclass</em> atau <em>child class</em>) dapat mewarisi properti (fields) dan perilaku (methods) dari class lain (disebut <em>superclass</em> atau <em>parent class</em>) menggunakan keyword <code>extends</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-sitemap"></i> Analogi Dunia Nyata: Pewarisan Sifat</div>
          <p>Bayangkan <strong>Inheritance</strong> seperti <strong>sifat genetik orang tua (Superclass)</strong> yang diwarisi oleh <strong>anaknya (Subclass)</strong>. Seorang anak otomatis mendapatkan nama belakang, warna mata, atau tinggi badan orang tuanya (field/method) tanpa harus membuat sendiri dari nol. Anak tersebut juga bebas menambahkan kemampuan khususnya sendiri (method baru) atau mengubah gaya bicaranya (@override).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Parent["Superclass: Hewan<br/>nama, bersuara()"] -->|extends| Child["Subclass: Kucing<br/>nama (waris)<br/>bersuara() + mengeong()"]
            
            style Parent fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Child fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="info-box tip">
          <div class="info-box-title">Aturan Pewarisan Dart</div>
          <p>Dart hanya mendukung <strong>Single Inheritance</strong>, artinya sebuah class hanya bisa mewarisi langsung dari satu parent class. Hal ini mencegah konflik struktur kelas.</p>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">Hewan</span> {
  <span class="type">String</span> <span class="variable">nama</span>;
  <span class="function">Hewan</span>(<span class="keyword">this</span>.<span class="variable">nama</span>);

  <span class="keyword">void</span> <span class="function">bersuara</span>() {
    <span class="function">print</span>(<span class="string">'$nama sedang bersuara!'</span>);
  }
}

<span class="comment">// Kucing mewarisi dari Hewan</span>
<span class="keyword">class</span> <span class="class">Kucing</span> <span class="keyword">extends</span> <span class="class">Hewan</span> {
  <span class="function">Kucing</span>(<span class="type">String</span> <span class="variable">nama</span>) : <span class="keyword">super</span>(<span class="variable">nama</span>);
  
  <span class="keyword">void</span> <span class="function">mengeong</span>() {
    <span class="function">print</span>(<span class="string">'$nama: Meow... Meow...'</span>);
  }
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Constructor Parent & Keyword super",
      category: "OOP Part 2",
      icon: "fas fa-level-up-alt",
      content: `
        <p class="text-content">
          Jika parent class memiliki constructor dengan parameter, child class **wajib** memanggil constructor parent tersebut menggunakan keyword <code>super</code>. Kita juga bisa menggunakan <code>super</code> untuk memanggil field/method parent dari subclass.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">Kendaraan</span> {
  <span class="type">String</span> <span class="variable">merek</span>;
  <span class="type">int</span> <span class="variable">tahun</span>;

  <span class="function">Kendaraan</span>(<span class="keyword">this</span>.<span class="variable">merek</span>, <span class="keyword">this</span>.<span class="variable">tahun</span>);
}

<span class="keyword">class</span> <span class="class">Mobil</span> <span class="keyword">extends</span> <span class="class">Kendaraan</span> {
  <span class="type">int</span> <span class="variable">jumlahPintu</span>;

  <span class="comment">// Memanggil constructor parent lewat inisialisasi super</span>
  <span class="function">Mobil</span>(<span class="type">String</span> <span class="variable">merek</span>, <span class="type">int</span> <span class="variable">tahun</span>, <span class="keyword">this</span>.<span class="variable">jumlahPintu</span>) : <span class="keyword">super</span>(<span class="variable">merek</span>, <span class="variable">tahun</span>);

  <span class="keyword">void</span> <span class="function">infoMobil</span>() {
    <span class="comment">// Mengakses properti parent</span>
    <span class="function">print</span>(<span class="string">'Mobil $merek dirakit tahun $tahun memiliki $jumlahPintu pintu.'</span>);
  }
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Method Overriding & Polimorfisme",
      category: "OOP Part 2",
      icon: "fas fa-redo",
      content: `
        <p class="text-content">
          <strong>Method Overriding</strong> adalah penulisan ulang implementasi method yang diwarisi dari parent class agar sesuai dengan kebutuhan child class. Kita menandainya dengan decorator <code>@override</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">Hewan</span> {
  <span class="keyword">void</span> <span class="function">suara</span>() => <span class="function">print</span>(<span class="string">'Suara hewan umum'</span>);
}

<span class="keyword">class</span> <span class="class">Anjing</span> <span class="keyword">extends</span> <span class="class">Hewan</span> {
  <span class="metadata">@override</span>
  <span class="keyword">void</span> <span class="function">suara</span>() {
    <span class="function">print</span>(<span class="string">'Anjing menggonggong: Guk Guk!'</span>);
  }
}

<span class="keyword">class</span> <span class="class">Kucing</span> <span class="keyword">extends</span> <span class="class">Hewan</span> {
  <span class="metadata">@override</span>
  <span class="keyword">void</span> <span class="function">suara</span>() {
    <span class="keyword">super</span>.<span class="function">suara</span>(); <span class="comment">// Memanggil method asli parent</span>
    <span class="function">print</span>(<span class="string">'Kucing mengeong: Meow!'</span>);
  }
}</pre>
          </div>
        </div>
      `
    }
  ],
  abstraction: [
    {
      title: "Abstract Class di Dart",
      category: "OOP Part 2",
      icon: "fas fa-ghost",
      content: `
        <p class="text-content">
          <strong>Abstract Class</strong> adalah kelas setengah jadi yang tidak bisa di-instansiasi (dibuat objeknya secara langsung dengan keyword <code>new</code> atau panggil constructor biasa). Kelas ini biasanya digunakan sebagai kerangka dasar untuk kelas turunan.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-ghost"></i> Analogi Dunia Nyata: Standar Pemerintah</div>
          <p>Bayangkan <strong>Abstract Class</strong> seperti <strong>standar kelayakan dari pemerintah</strong> untuk kendaraan bermotor. Pemerintah hanya menetapkan aturan: <em>"Setiap kendaraan bermotor wajib bisa melaju dan ngerem!"</em> (Abstract Method). Pemerintah tidak menjual kendaraan gaib ini. Pabrik Toyota atau Honda (Subclass) yang wajib merakit mesin aslinya agar bisa berjalan (@override).</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Abs["Abstract: Shape<br/>hitungLuas()"] -.->|extends| Conc["Subclass: Persegi<br/>sisi<br/>hitungLuas()"]
            
            style Abs fill:#ff006e,stroke:#ff006e,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
            style Conc fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
        </div>
        <div class="info-box warning">
          <div class="info-box-title">Karakteristik Abstract Class</div>
          <ul>
            <li>Dideklarasikan menggunakan keyword <code>abstract class</code>.</li>
            <li>Dapat berisi <strong>abstract method</strong> (method tanpa body/kurung kurawal).</li>
            <li>Subclass wajib mengimplementasikan seluruh abstract method tersebut.</li>
          </ul>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">abstract class</span> <span class="class">Shape</span> {
  <span class="comment">// Abstract method (tanpa body/kurung kurawal)</span>
  <span class="type">double</span> <span class="function">hitungLuas</span>();
}

<span class="keyword">class</span> <span class="class">Persegi</span> <span class="keyword">extends</span> <span class="class">Shape</span> {
  <span class="type">double</span> <span class="variable">sisi</span>;
  <span class="function">Persegi</span>(<span class="keyword">this</span>.<span class="variable">sisi</span>);

  <span class="metadata">@override</span>
  <span class="type">double</span> <span class="function">hitungLuas</span>() => <span class="variable">sisi</span> * <span class="variable">sisi</span>;
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Implicit Interface & implements",
      category: "OOP Part 2",
      icon: "fas fa-plug",
      content: `
        <p class="text-content">
          Dart **tidak memiliki** keyword khusus <code>interface</code>. Namun, **setiap class secara implisit bertindak sebagai interface**. Kita menggunakan keyword <code>implements</code> untuk mewajibkan class baru meniru total seluruh kontrak dari class interface tersebut.
        </p>
        <div class="two-column">
          <div class="info-box tip">
            <div class="info-box-title">extends vs implements</div>
            <p><strong>extends:</strong> Mewarisi struktur & implementasi method (Pewarisan/Inheritance).</p>
            <p><strong>implements:</strong> Hanya mewarisi kontrak kosong. Wajib mengoverride ulang semua field & method.</p>
          </div>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              <span class="code-lang">Dart</span>
            </div>
            <div class="code-content">
<pre><span class="keyword">class</span> <span class="class">BisaTerbang</span> {
  <span class="keyword">void</span> <span class="function">terbang</span>() {}
}

<span class="comment">// Wajib override terbang()</span>
<span class="keyword">class</span> <span class="class">Burung</span> <span class="keyword">implements</span> <span class="class">BisaTerbang</span> {
  <span class="metadata">@override</span>
  <span class="keyword">void</span> <span class="function">terbang</span>() {
    <span class="function">print</span>(<span class="string">'Mengepakkan sayap...'</span>);
  }
}</pre>
            </div>
          </div>
        </div>
      `
    }
  ],
  mixin: [
    {
      title: "Mixins: Kode Modular Tanpa Inheritance",
      category: "OOP Part 2",
      icon: "fas fa-puzzle-piece",
      content: `
        <p class="text-content">
          <strong>Mixin</strong> adalah cara membagikan properti/method ke beberapa class tanpa menggunakan pewarisan bertingkat. Mixin berguna untuk menghindari keterbatasan Single Inheritance. Dideklarasikan dengan keyword <code>mixin</code> dan disematkan memakai keyword <code>with</code>.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-puzzle-piece"></i> Analogi Dunia Nyata: Kursus Keterampilan</div>
          <p>Bayangkan <strong>Mixin</strong> seperti <strong>sertifikat kursus mengemudi atau berenang</strong>. Seorang anak hanya bisa memiliki satu orang tua kandung (Single Inheritance), tapi ia bebas mengambil kursus berenang (Mixin A) dan kursus beladiri (Mixin B) untuk menambah keahliannya tanpa memedulikan silsilah keluarga.</p>
        </div>
        <div class="mermaid">
        flowchart TD
            Parent["Superclass: Hewan"] -->|extends| Child["LumbaLumba"]
            Mixin["Mixin: BisaBerenang"] -.->|with| Child
            
            style Parent fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
            style Mixin fill:#ff006e,stroke:#ff006e,stroke-width:2px,color:#fff
            style Child fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="keyword">mixin</span> <span class="class">BisaBerenang</span> {
  <span class="keyword">void</span> <span class="function">berenang</span>() => <span class="function">print</span>(<span class="string">'Berenang di air!'</span>);
}

<span class="keyword">mixin</span> <span class="class">BisaMelompat</span> {
  <span class="keyword">void</span> <span class="function">lompat</span>() => <span class="function">print</span>(<span class="string">'Melompat tinggi!'</span>);
}

<span class="comment">// LumbaLumba mewarisi Hewan, dan menyematkan mixin</span>
<span class="keyword">class</span> <span class="class">LumbaLumba</span> <span class="keyword">extends</span> <span class="class">Hewan</span> <span class="keyword">with</span> <span class="class">BisaBerenang</span> {
  <span class="function">LumbaLumba</span>(<span class="type">String</span> <span class="variable">nama</span>) : <span class="keyword">super</span>(<span class="variable">nama</span>);
}

<span class="keyword">class</span> <span class="class">Katak</span> <span class="keyword">extends</span> <span class="class">Hewan</span> <span class="keyword">with</span> <span class="class">BisaBerenang</span>, <span class="class">BisaMelompat</span> {
  <span class="function">Katak</span>(<span class="type">String</span> <span class="variable">nama</span>) : <span class="keyword">super</span>(<span class="variable">nama</span>);
}</pre>
          </div>
        </div>
      `
    },
    {
      title: "Extension Methods di Dart",
      category: "OOP Part 2",
      icon: "fas fa-expand-arrows-alt",
      content: `
        <p class="text-content">
          <strong>Extension Methods</strong> (diperkenalkan sejak Dart 2.7) memungkinkan kita menambahkan method baru ke tipe data/class yang sudah ada (bahkan library bawaan Dart seperti <code>String</code>, <code>int</code>, dll) tanpa melakukan pewarisan atau membungkusnya dalam helper class.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre><span class="comment">// Membuat extension untuk tipe data String</span>
<span class="keyword">extension</span> <span class="class">StringExtension</span> <span class="keyword">on</span> <span class="type">String</span> {
  <span class="type">int</span> <span class="keyword">get</span> <span class="function">hitungKata</span> {
    <span class="keyword">return</span> <span class="keyword">this</span>.trim().split(<span class="string">' '</span>).length;
  }
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="type">String</span> <span class="variable">kalimat</span> = <span class="string">"Belajar pemrograman Dart di Dicoding sangat seru"</span>;
  <span class="comment">// Memanggil method extension seolah method bawaan String</span>
  <span class="function">print</span>(<span class="variable">kalimat</span>.<span class="function">hitungKata</span>); <span class="comment">// Output: 7</span>
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan Mandiri: Pewarisan & Abstraksi",
      category: "OOP Part 2",
      icon: "fas fa-edit",
      content: `
        <p class="text-content">
          Cobalah buat implementasi sistem manajemen Karyawan berikut di DartPad:
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Buat Abstract Class Karyawan</strong><br>
              Mempunyai properti <code>nama</code>, <code>gajiPokok</code>, dan abstract method <code>hitungBonus()</code>.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Buat Class Programmer & Salesman</strong><br>
              Gunakan <code>extends Karyawan</code>. Override method <code>hitungBonus()</code>. 
              Programmer mendapat bonus berdasarkan jumlah project, Salesman mendapat bonus berdasarkan penjualan.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Buat Mixin Absensi</strong><br>
              Berisi method <code>catatKehadiran()</code> yang menampilkan info jam datang karyawan. Gunakan <code>with</code> pada class Programmer.
            </div>
          </div>
        </div>
      `
    }
  ]
};
