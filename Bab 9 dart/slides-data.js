// Slides Data for Smart Calculator Presentation
const slidesData = {
  closure: [
    {
      title: "Apa itu Closure?",
      category: "Closure",
      icon: "fas fa-box-archive",
      content: `
                <p class="text-content">
                    <strong>Closure</strong> adalah fungsi yang memiliki akses ke variabel dari <span class="highlight">scope luarnya</span>, 
                    bahkan setelah fungsi luar tersebut selesai dieksekusi. Ini memungkinkan kita untuk 
                    <span class="highlight">menyimpan state</span> secara private.
                </p>
                
                <div class="info-box">
                    <div class="info-box-title">
                        <i class="fas fa-lightbulb"></i> Konsep Utama
                    </div>
                    <ul>
                        <li>Fungsi dapat "mengingat" variabel dari scope tempat ia diciptakan</li>
                        <li>Variabel tersebut tetap hidup selama closure masih ada</li>
                        <li>Cocok untuk enkapsulasi data dan membuat state yang persistent</li>
                    </ul>
                </div>

                <div class="diagram-box">
                    <div class="diagram-title">Closure Menyimpan State</div>
                    <div class="diagram-flow">
                        <div class="diagram-node">Outer Function</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Local Variables</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Inner Function (Closure)</div>
                    </div>
                </div>
            `,
    },
    {
      title: "Closure Dasar",
      category: "Closure",
      icon: "fas fa-code",
      content: `
                <p class="text-content">
                    Mari lihat contoh sederhana bagaimana closure dapat menyimpan dan memodifikasi state:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="comment">// Fungsi yang mengembalikan closure</span>
<span class="type">Function</span> <span class="function">createCounter</span>() {
  <span class="keyword">var</span> <span class="variable">count</span> = <span class="number">0</span>; <span class="comment">// State yang di-capture</span>
  
  <span class="keyword">return</span> () {
    <span class="variable">count</span>++;
    <span class="keyword">return</span> <span class="variable">count</span>;
  };
}

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">counter1</span> = <span class="function">createCounter</span>();
  <span class="keyword">var</span> <span class="variable">counter2</span> = <span class="function">createCounter</span>();
  
  <span class="function">print</span>(<span class="variable">counter1</span>()); <span class="comment">// Output: 1</span>
  <span class="function">print</span>(<span class="variable">counter1</span>()); <span class="comment">// Output: 2</span>
  <span class="function">print</span>(<span class="variable">counter2</span>()); <span class="comment">// Output: 1 (terpisah!)</span>
}</pre>
                    </div>
                </div>

                <div class="result-box">
                    <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
                    <div class="result-content">1
2
1</div>
                </div>

                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-check-circle"></i> Poin Penting</div>
                    <p>Setiap pemanggilan <code>createCounter()</code> membuat closure baru dengan state terpisah!</p>
                </div>
            `,
    },
    {
      title: "Closure untuk History",
      category: "Closure",
      icon: "fas fa-history",
      content: `
                <p class="text-content">
                    Closure sangat berguna untuk menyimpan <span class="highlight">history operasi</span>. 
                    Mari buat sistem history sederhana:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">Function</span>&gt; <span class="function">createHistoryManager</span>() {
  <span class="type">List</span>&lt;<span class="type">String</span>&gt; <span class="variable">history</span> = [];
  
  <span class="keyword">return</span> {
    <span class="string">'add'</span>: (<span class="type">String</span> <span class="variable">item</span>) {
      <span class="variable">history</span>.<span class="function">add</span>(<span class="variable">item</span>);
      <span class="function">print</span>(<span class="string">'Added: </span><span class="variable">$item</span><span class="string">'</span>);
    },
    <span class="string">'getAll'</span>: () => <span class="type">List</span>.<span class="function">from</span>(<span class="variable">history</span>),
    <span class="string">'getLast'</span>: () => <span class="variable">history</span>.<span class="variable">isNotEmpty</span> 
        ? <span class="variable">history</span>.<span class="variable">last</span> 
        : <span class="keyword">null</span>,
    <span class="string">'undo'</span>: () {
      <span class="keyword">if</span> (<span class="variable">history</span>.<span class="variable">isNotEmpty</span>) {
        <span class="keyword">var</span> <span class="variable">removed</span> = <span class="variable">history</span>.<span class="function">removeLast</span>();
        <span class="function">print</span>(<span class="string">'Undo: \$removed'</span>);
        <span class="keyword">return</span> <span class="variable">removed</span>;
      }
      <span class="keyword">return</span> <span class="keyword">null</span>;
    },
    <span class="string">'clear'</span>: () => <span class="variable">history</span>.<span class="function">clear</span>(),
  };
}</pre>
                    </div>
                </div>

                <div class="feature-list">
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-plus"></i></div>
                        <div class="feature-text">
                            <h4>add()</h4>
                            <p>Menambahkan item ke history</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-undo"></i></div>
                        <div class="feature-text">
                            <h4>undo()</h4>
                            <p>Menghapus dan mengembalikan item terakhir</p>
                        </div>
                    </div>
                </div>
            `,
    },
    {
      title: "Closure untuk State Calculator",
      category: "Closure",
      icon: "fas fa-calculator",
      content: `
                <p class="text-content">
                    Sekarang mari implementasikan closure untuk menyimpan state calculator:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">Map</span>&lt;<span class="type">String</span>, <span class="type">Function</span>&gt; <span class="function">createCalculatorState</span>() {
  <span class="type">double</span> <span class="variable">currentValue</span> = <span class="number">0</span>;
  <span class="type">List</span>&lt;<span class="type">Map</span>&lt;<span class="type">String</span>, dynamic&gt;&gt; <span class="variable">history</span> = [];
  
  <span class="keyword">void</span> <span class="function">saveToHistory</span>(<span class="type">String</span> <span class="variable">op</span>, <span class="type">double</span> <span class="variable">val</span>, <span class="type">double</span> <span class="variable">res</span>) {
    <span class="variable">history</span>.<span class="function">add</span>({
      <span class="string">'operation'</span>: <span class="variable">op</span>,
      <span class="string">'value'</span>: <span class="variable">val</span>,
      <span class="string">'result'</span>: <span class="variable">res</span>,
      <span class="string">'prevValue'</span>: <span class="variable">currentValue</span>,
    });
  }
  
  <span class="keyword">return</span> {
    <span class="string">'add'</span>: (<span class="type">double</span> <span class="variable">n</span>) {
      <span class="function">saveToHistory</span>(<span class="string">'+'</span>, <span class="variable">n</span>, <span class="variable">currentValue</span> + <span class="variable">n</span>);
      <span class="variable">currentValue</span> += <span class="variable">n</span>;
      <span class="keyword">return</span> <span class="variable">currentValue</span>;
    },
    <span class="string">'subtract'</span>: (<span class="type">double</span> <span class="variable">n</span>) {
      <span class="function">saveToHistory</span>(<span class="string">'-'</span>, <span class="variable">n</span>, <span class="variable">currentValue</span> - <span class="variable">n</span>);
      <span class="variable">currentValue</span> -= <span class="variable">n</span>;
      <span class="keyword">return</span> <span class="variable">currentValue</span>;
    },
    <span class="string">'getValue'</span>: () => <span class="variable">currentValue</span>,
    <span class="string">'getHistory'</span>: () => <span class="type">List</span>.<span class="function">from</span>(<span class="variable">history</span>),
    <span class="string">'undo'</span>: () {
      <span class="keyword">if</span> (<span class="variable">history</span>.<span class="variable">isNotEmpty</span>) {
        <span class="keyword">var</span> <span class="variable">last</span> = <span class="variable">history</span>.<span class="function">removeLast</span>();
        <span class="variable">currentValue</span> = <span class="variable">last</span>[<span class="string">'prevValue'</span>];
        <span class="keyword">return</span> <span class="variable">currentValue</span>;
      }
      <span class="keyword">return</span> <span class="variable">currentValue</span>;
    },
  };
}</pre>
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-database"></i> State yang Disimpan</div>
                    <ul>
                        <li><strong>currentValue</strong> - Nilai hasil perhitungan saat ini</li>
                        <li><strong>history</strong> - Daftar semua operasi yang dilakukan</li>
                        <li><strong>prevValue</strong> - Nilai sebelumnya untuk fitur undo</li>
                    </ul>
                </div>
            `,
    },
  ],
  recursive: [
    {
      title: "Apa itu Recursive Function?",
      category: "Recursive Function",
      icon: "fas fa-code-branch",
      content: `
                <p class="text-content">
                    <strong>Recursive Function</strong> adalah fungsi yang <span class="highlight">memanggil dirinya sendiri</span> 
                    untuk memecahkan masalah yang lebih kecil sampai mencapai kondisi dasar (base case).
                </p>

                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-key"></i> Komponen Rekursi</div>
                    <ul>
                        <li><strong>Base Case</strong> - Kondisi berhenti untuk menghindari loop tak terbatas</li>
                        <li><strong>Recursive Case</strong> - Pemanggilan fungsi dengan masalah yang lebih kecil</li>
                        <li><strong>Convergence</strong> - Setiap langkah harus mendekat ke base case</li>
                    </ul>
                </div>

                <div class="diagram-box">
                    <div class="diagram-title">Alur Rekursi</div>
                    <div class="diagram-flow">
                        <div class="diagram-node">Input Besar</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Pecah Masalah</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Base Case</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Gabung Hasil</div>
                    </div>
                </div>
            `,
    },
    {
      title: "Contoh Rekursi Sederhana",
      category: "Recursive Function",
      icon: "fas fa-sort-numeric-up",
      content: `
                <p class="text-content">
                    Contoh klasik: menghitung <span class="highlight">faktorial</span> dan <span class="highlight">fibonacci</span>:
                </p>

                <div class="two-column">
                    <div class="code-block">
                        <div class="code-header">
                            <div class="code-dots"><span></span><span></span><span></span></div>
                            <span class="code-lang">Faktorial</span>
                        </div>
                        <div class="code-content">
<pre><span class="type">int</span> <span class="function">factorial</span>(<span class="type">int</span> <span class="variable">n</span>) {
  <span class="comment">// Base case</span>
  <span class="keyword">if</span> (<span class="variable">n</span> <= <span class="number">1</span>) {
    <span class="keyword">return</span> <span class="number">1</span>;
  }
  <span class="comment">// Recursive case</span>
  <span class="keyword">return</span> <span class="variable">n</span> * <span class="function">factorial</span>(<span class="variable">n</span> - <span class="number">1</span>);
}

<span class="comment">// factorial(5) = 120</span>
<span class="comment">// 5 * 4 * 3 * 2 * 1</span></pre>
                        </div>
                    </div>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="code-dots"><span></span><span></span><span></span></div>
                            <span class="code-lang">Fibonacci</span>
                        </div>
                        <div class="code-content">
<pre><span class="type">int</span> <span class="function">fibonacci</span>(<span class="type">int</span> <span class="variable">n</span>) {
  <span class="comment">// Base cases</span>
  <span class="keyword">if</span> (<span class="variable">n</span> <= <span class="number">0</span>) <span class="keyword">return</span> <span class="number">0</span>;
  <span class="keyword">if</span> (<span class="variable">n</span> == <span class="number">1</span>) <span class="keyword">return</span> <span class="number">1</span>;
  
  <span class="comment">// Recursive case</span>
  <span class="keyword">return</span> <span class="function">fibonacci</span>(<span class="variable">n</span>-<span class="number">1</span>) 
       + <span class="function">fibonacci</span>(<span class="variable">n</span>-<span class="number">2</span>);
}

<span class="comment">// 0,1,1,2,3,5,8,13...</span></pre>
                        </div>
                    </div>
                </div>

                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-check-circle"></i> Tips</div>
                    <p>Selalu pastikan ada <strong>base case</strong> yang jelas untuk menghindari stack overflow!</p>
                </div>
            `,
    },
    {
      title: "Parsing Nested Expression",
      category: "Recursive Function",
      icon: "fas fa-sitemap",
      content: `
                <p class="text-content">
                    Rekursi sangat berguna untuk <span class="highlight">parsing ekspresi matematika</span> 
                    yang memiliki tanda kurung bersarang:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - Expression Parser</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">double</span> <span class="function">evaluateExpression</span>(<span class="type">String</span> <span class="variable">expr</span>) {
  <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceAll</span>(<span class="string">' '</span>, <span class="string">''</span>);
  
  <span class="comment">// Handle parentheses recursively</span>
  <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="string">'('</span>)) {
    <span class="keyword">var</span> <span class="variable">regex</span> = <span class="type">RegExp</span>(<span class="string">r'\(([^()]+)\)'</span>);
    <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceAllMapped</span>(<span class="variable">regex</span>, (<span class="variable">m</span>) {
      <span class="keyword">return</span> <span class="function">evaluateSimple</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">1</span>)!)
          .<span class="function">toString</span>();
    });
  }
  
  <span class="keyword">return</span> <span class="function">evaluateSimple</span>(<span class="variable">expr</span>);
}

<span class="comment">// "(2 + 3) * (4 - 1)" → "5" * "3" → 15</span></pre>
                    </div>
                </div>

                <div class="step-list">
                    <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Temukan Kurung Terdalam</h4>
                            <p>Cari ekspresi dalam kurung yang tidak memiliki kurung lagi di dalamnya</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Evaluasi</h4>
                            <p>Hitung nilai ekspresi tersebut</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Ganti dengan Hasil</h4>
                            <p>Ulangi sampai tidak ada kurung tersisa</p>
                        </div>
                    </div>
                </div>
            `,
    },
    {
      title: "Evaluasi Simple Expression",
      category: "Recursive Function",
      icon: "fas fa-calculator",
      content: `
                <p class="text-content">
                    Fungsi untuk mengevaluasi ekspresi tanpa kurung dengan urutan operasi yang benar:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">double</span> <span class="function">evaluateSimple</span>(<span class="type">String</span> <span class="variable">expr</span>) {
  <span class="comment">// Handle perkalian dan pembagian terlebih dahulu</span>
  <span class="keyword">var</span> <span class="variable">mulDiv</span> = <span class="type">RegExp</span>(<span class="string">r'(-?\d+\.?\d*)\s*([*/])\s*(-?\d+\.?\d*)'</span>);
  
  <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="variable">mulDiv</span>)) {
    <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceFirstMapped</span>(<span class="variable">mulDiv</span>, (<span class="variable">m</span>) {
      <span class="keyword">var</span> <span class="variable">a</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">1</span>)!);
      <span class="keyword">var</span> <span class="variable">op</span> = <span class="variable">m</span>.<span class="function">group</span>(<span class="number">2</span>);
      <span class="keyword">var</span> <span class="variable">b</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">3</span>)!);
      <span class="keyword">var</span> <span class="variable">result</span> = <span class="variable">op</span> == <span class="string">'*'</span> ? <span class="variable">a</span> * <span class="variable">b</span> : <span class="variable">a</span> / <span class="variable">b</span>;
      <span class="keyword">return</span> <span class="variable">result</span>.<span class="function">toString</span>();
    });
  }
  
  <span class="comment">// Kemudian handle penjumlahan dan pengurangan</span>
  <span class="keyword">var</span> <span class="variable">addSub</span> = <span class="type">RegExp</span>(<span class="string">r'(-?\d+\.?\d*)\s*([+-])\s*(-?\d+\.?\d*)'</span>);
  
  <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="variable">addSub</span>)) {
    <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceFirstMapped</span>(<span class="variable">addSub</span>, (<span class="variable">m</span>) {
      <span class="keyword">var</span> <span class="variable">a</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">1</span>)!);
      <span class="keyword">var</span> <span class="variable">op</span> = <span class="variable">m</span>.<span class="function">group</span>(<span class="number">2</span>);
      <span class="keyword">var</span> <span class="variable">b</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">3</span>)!);
      <span class="keyword">var</span> <span class="variable">result</span> = <span class="variable">op</span> == <span class="string">'+'</span> ? <span class="variable">a</span> + <span class="variable">b</span> : <span class="variable">a</span> - <span class="variable">b</span>;
      <span class="keyword">return</span> <span class="variable">result</span>.<span class="function">toString</span>();
    });
  }
  
  <span class="keyword">return</span> <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">expr</span>);
}</pre>
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-sort-amount-down"></i> Urutan Operasi</div>
                    <p><strong>PEMDAS/BODMAS:</strong> Parentheses → Exponent → Multiply/Divide → Add/Subtract</p>
                </div>
            `,
    },
  ],
  testing: [
    {
      title: "Pentingnya Testing",
      category: "Comprehensive Tests",
      icon: "fas fa-vial",
      content: `
                <p class="text-content">
                    <strong>Testing</strong> adalah bagian krusial dalam pengembangan software untuk memastikan 
                    kode berjalan sesuai <span class="highlight">ekspektasi</span> dan mendeteksi <span class="highlight">bug</span> lebih awal.
                </p>

                <div class="feature-list">
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-bug"></i></div>
                        <div class="feature-text">
                            <h4>Deteksi Bug Early</h4>
                            <p>Menemukan masalah sebelum masuk ke production</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                        <div class="feature-text">
                            <h4>Confidence</h4>
                            <p>Yakin bahwa perubahan tidak merusak fitur lain</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-book"></i></div>
                        <div class="feature-text">
                            <h4>Documentation</h4>
                            <p>Test berfungsi sebagai dokumentasi perilaku kode</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-sync"></i></div>
                        <div class="feature-text">
                            <h4>Refactoring Safety</h4>
                            <p>Aman untuk mengubah kode internal</p>
                        </div>
                    </div>
                </div>

                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-lightbulb"></i> Best Practice</div>
                    <p>Test harus <strong>independent</strong>, <strong>repeatable</strong>, dan <strong>fast</strong>!</p>
                </div>
            `,
    },
    {
      title: "Unit Testing di Dart",
      category: "Comprehensive Tests",
      icon: "fas fa-check-double",
      content: `
                <p class="text-content">
                    Dart menggunakan package <code>test</code> untuk unit testing. 
                    Mari lihat struktur dasar test:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - test/calculator_test.dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="keyword">import</span> <span class="string">'package:test/test.dart'</span>;
<span class="keyword">import</span> <span class="string">'../lib/calculator.dart'</span>;

<span class="keyword">void</span> <span class="function">main</span>() {
  <span class="function">group</span>(<span class="string">'Calculator Tests'</span>, () {
    <span class="function">test</span>(<span class="string">'should add two numbers'</span>, () {
      <span class="keyword">var</span> <span class="variable">calc</span> = <span class="function">createCalculator</span>();
      <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">5</span>);
      <span class="function">expect</span>(<span class="variable">calc</span>[<span class="string">'getValue'</span>](), <span class="function">equals</span>(<span class="number">5</span>));
    });
    
    <span class="function">test</span>(<span class="string">'should subtract numbers'</span>, () {
      <span class="keyword">var</span> <span class="variable">calc</span> = <span class="function">createCalculator</span>();
      <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">10</span>);
      <span class="variable">calc</span>[<span class="string">'subtract'</span>](<span class="number">3</span>);
      <span class="function">expect</span>(<span class="variable">calc</span>[<span class="string">'getValue'</span>](), <span class="function">equals</span>(<span class="number">7</span>));
    });
    
    <span class="function">test</span>(<span class="string">'should undo last operation'</span>, () {
      <span class="keyword">var</span> <span class="variable">calc</span> = <span class="function">createCalculator</span>();
      <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">5</span>);
      <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">3</span>);
      <span class="variable">calc</span>[<span class="string">'undo'</span>]();
      <span class="function">expect</span>(<span class="variable">calc</span>[<span class="string">'getValue'</span>](), <span class="function">equals</span>(<span class="number">5</span>));
    });
  });
}</pre>
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-terminal"></i> Menjalankan Test</div>
                    <p><code>dart test</code> atau <code>flutter test</code></p>
                </div>
            `,
    },
    {
      title: "Test untuk Expression Parser",
      category: "Comprehensive Tests",
      icon: "fas fa-code",
      content: `
                <p class="text-content">
                    Testing expression parser dengan berbagai kasus:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - Parser Tests</span>
                    </div>
                    <div class="code-content">
<pre><span class="function">group</span>(<span class="string">'Expression Parser Tests'</span>, () {
  <span class="function">test</span>(<span class="string">'simple addition'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'2 + 3'</span>), <span class="function">equals</span>(<span class="number">5</span>));
  });
  
  <span class="function">test</span>(<span class="string">'operator precedence'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'2 + 3 * 4'</span>), <span class="function">equals</span>(<span class="number">14</span>));
  });
  
  <span class="function">test</span>(<span class="string">'parentheses'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'(2 + 3) * 4'</span>), <span class="function">equals</span>(<span class="number">20</span>));
  });
  
  <span class="function">test</span>(<span class="string">'nested parentheses'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'((2 + 3) * 2) + 5'</span>), 
           <span class="function">equals</span>(<span class="number">15</span>));
  });
  
  <span class="function">test</span>(<span class="string">'division with decimals'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'10 / 4'</span>), <span class="function">equals</span>(<span class="number">2.5</span>));
  });
  
  <span class="function">test</span>(<span class="string">'complex expression'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'(5 + 3) * (10 - 4) / 2'</span>), 
           <span class="function">equals</span>(<span class="number">24</span>));
  });
});</pre>
                    </div>
                </div>

                <div class="result-box">
                    <div class="result-title"><i class="fas fa-check-circle"></i> Expected Results</div>
                    <div class="result-content">✓ All 6 tests passed</div>
                </div>
            `,
    },
    {
      title: "Edge Case Testing",
      category: "Comprehensive Tests",
      icon: "fas fa-exclamation-triangle",
      content: `
                <p class="text-content">
                    Jangan lupa menguji <span class="highlight">edge cases</span> dan <span class="highlight">error handling</span>:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - Edge Cases</span>
                    </div>
                    <div class="code-content">
<pre><span class="function">group</span>(<span class="string">'Edge Cases'</span>, () {
  <span class="function">test</span>(<span class="string">'undo on empty history returns 0'</span>, () {
    <span class="keyword">var</span> <span class="variable">calc</span> = <span class="function">createCalculator</span>();
    <span class="function">expect</span>(<span class="variable">calc</span>[<span class="string">'undo'</span>](), <span class="function">equals</span>(<span class="number">0</span>));
  });
  
  <span class="function">test</span>(<span class="string">'multiple undo operations'</span>, () {
    <span class="keyword">var</span> <span class="variable">calc</span> = <span class="function">createCalculator</span>();
    <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">5</span>);
    <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">3</span>);
    <span class="variable">calc</span>[<span class="string">'add'</span>](<span class="number">2</span>);
    <span class="variable">calc</span>[<span class="string">'undo'</span>]();
    <span class="variable">calc</span>[<span class="string">'undo'</span>]();
    <span class="function">expect</span>(<span class="variable">calc</span>[<span class="string">'getValue'</span>](), <span class="function">equals</span>(<span class="number">5</span>));
  });
  
  <span class="function">test</span>(<span class="string">'division by zero'</span>, () {
    <span class="function">expect</span>(() => <span class="function">evaluate</span>(<span class="string">'5 / 0'</span>), 
           <span class="function">throwsA</span>(<span class="function">isA</span>&lt;<span class="type">Exception</span>&gt;()));
  });
  
  <span class="function">test</span>(<span class="string">'negative numbers'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'-5 + 3'</span>), <span class="function">equals</span>(-<span class="number">2</span>));
  });
  
  <span class="function">test</span>(<span class="string">'decimal numbers'</span>, () {
    <span class="function">expect</span>(<span class="function">evaluate</span>(<span class="string">'3.5 + 2.5'</span>), <span class="function">equals</span>(<span class="number">6.0</span>));
  });
});</pre>
                    </div>
                </div>

                <div class="info-box warning">
                    <div class="info-box-title"><i class="fas fa-exclamation-triangle"></i> Perhatikan</div>
                    <ul>
                        <li>Empty state handling</li>
                        <li>Boundary values (max/min)</li>
                        <li>Invalid input handling</li>
                        <li>Concurrent operations</li>
                    </ul>
                </div>
            `,
    },
  ],
  implementation: [
    {
      title: "Smart Calculator Overview",
      category: "Final Implementation",
      icon: "fas fa-calculator",
      content: `
                <p class="text-content">
                    Sekarang kita gabungkan semua konsep untuk membuat <span class="highlight">Smart Calculator</span> 
                    yang lengkap dengan history dan undo!
                </p>

                <div class="feature-list">
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-box-archive"></i></div>
                        <div class="feature-text">
                            <h4>Closure untuk State</h4>
                            <p>Menyimpan hasil dan history secara private</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-code-branch"></i></div>
                        <div class="feature-text">
                            <h4>Recursive Parser</h4>
                            <p>Mengevaluasi ekspresi kompleks dengan kurung</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-undo"></i></div>
                        <div class="feature-text">
                            <h4>Undo/Redo</h4>
                            <p>Membatalkan operasi terakhir</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-history"></i></div>
                        <div class="feature-text">
                            <h4>History Tracking</h4>
                            <p>Menyimpan semua operasi yang dilakukan</p>
                        </div>
                    </div>
                </div>

                <div class="diagram-box">
                    <div class="diagram-title">Arsitektur Smart Calculator</div>
                    <div class="diagram-flow">
                        <div class="diagram-node">Input Expression</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Parser (Recursive)</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">History (Closure)</div>
                        <span class="diagram-arrow"><i class="fas fa-arrow-right"></i></span>
                        <div class="diagram-node">Result</div>
                    </div>
                </div>
            `,
    },
    {
      title: "Implementasi Lengkap - Part 1",
      category: "Final Implementation",
      icon: "fas fa-file-code",
      content: `
                <p class="text-content">
                    Berikut implementasi lengkap Smart Calculator:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - smart_calculator.dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="keyword">class</span> <span class="type">SmartCalculator</span> {
  <span class="keyword">late</span> <span class="type">List</span>&lt;<span class="type">Map</span>&lt;<span class="type">String</span>, dynamic&gt;&gt; <span class="variable">_history</span>;
  <span class="keyword">late</span> <span class="type">double</span> <span class="variable">_currentValue</span>;
  
  <span class="type">SmartCalculator</span>() {
    <span class="variable">_history</span> = [];
    <span class="variable">_currentValue</span> = <span class="number">0</span>;
  }
  
  <span class="comment">// Recursive expression evaluator</span>
  <span class="type">double</span> <span class="function">evaluate</span>(<span class="type">String</span> <span class="variable">expr</span>) {
    <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceAll</span>(<span class="string">' '</span>, <span class="string">''</span>);
    
    <span class="comment">// Handle parentheses recursively</span>
    <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="string">'('</span>)) {
      <span class="keyword">var</span> <span class="variable">regex</span> = <span class="type">RegExp</span>(<span class="string">r'\(([^()]+)\)'</span>);
      <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceAllMapped</span>(<span class="variable">regex</span>, (<span class="variable">m</span>) {
        <span class="keyword">return</span> <span class="function">_evaluateSimple</span>(<span class="variable">m</span>.<span class="function">group</span>(<span class="number">1</span>)!)
            .<span class="function">toString</span>();
      });
    }
    
    <span class="keyword">var</span> <span class="variable">result</span> = <span class="function">_evaluateSimple</span>(<span class="variable">expr</span>);
    <span class="function">_saveToHistory</span>(<span class="variable">expr</span>, <span class="variable">result</span>);
    <span class="variable">_currentValue</span> = <span class="variable">result</span>;
    <span class="keyword">return</span> <span class="variable">result</span>;
  }
  
  <span class="type">double</span> <span class="keyword">get</span> <span class="function">value</span> => <span class="variable">_currentValue</span>;
  <span class="type">List</span> <span class="keyword">get</span> <span class="function">history</span> => <span class="type">List</span>.<span class="function">from</span>(<span class="variable">_history</span>);
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Implementasi Lengkap - Part 2",
      category: "Final Implementation",
      icon: "fas fa-file-code",
      content: `
                <p class="text-content">
                    Lanjutan implementasi dengan helper methods:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - Helper Methods</span>
                    </div>
                    <div class="code-content">
<pre>  <span class="type">double</span> <span class="function">_evaluateSimple</span>(<span class="type">String</span> <span class="variable">expr</span>) {
    <span class="comment">// Multiplication & Division first</span>
    <span class="keyword">var</span> <span class="variable">mulDiv</span> = <span class="type">RegExp</span>(<span class="string">r'(-?\d+\.?\d*)([*/])(-?\d+\.?\d*)'</span>);
    <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="variable">mulDiv</span>)) {
      <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceFirstMapped</span>(<span class="variable">mulDiv</span>, (<span class="variable">m</span>) {
        <span class="keyword">var</span> <span class="variable">a</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>[<span class="number">1</span>]!);
        <span class="keyword">var</span> <span class="variable">b</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>[<span class="number">3</span>]!);
        <span class="keyword">return</span> (<span class="variable">m</span>[<span class="number">2</span>] == <span class="string">'*'</span> ? <span class="variable">a</span>*<span class="variable">b</span> : <span class="variable">a</span>/<span class="variable">b</span>).<span class="function">toString</span>();
      });
    }
    
    <span class="comment">// Then Addition & Subtraction</span>
    <span class="keyword">var</span> <span class="variable">addSub</span> = <span class="type">RegExp</span>(<span class="string">r'(-?\d+\.?\d*)([+-])(\d+\.?\d*)'</span>);
    <span class="keyword">while</span> (<span class="variable">expr</span>.<span class="function">contains</span>(<span class="variable">addSub</span>)) {
      <span class="variable">expr</span> = <span class="variable">expr</span>.<span class="function">replaceFirstMapped</span>(<span class="variable">addSub</span>, (<span class="variable">m</span>) {
        <span class="keyword">var</span> <span class="variable">a</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>[<span class="number">1</span>]!);
        <span class="keyword">var</span> <span class="variable">b</span> = <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">m</span>[<span class="number">3</span>]!);
        <span class="keyword">return</span> (<span class="variable">m</span>[<span class="number">2</span>] == <span class="string">'+'</span> ? <span class="variable">a</span>+<span class="variable">b</span> : <span class="variable">a</span>-<span class="variable">b</span>).<span class="function">toString</span>();
      });
    }
    <span class="keyword">return</span> <span class="type">double</span>.<span class="function">parse</span>(<span class="variable">expr</span>);
  }
  
  <span class="keyword">void</span> <span class="function">_saveToHistory</span>(<span class="type">String</span> <span class="variable">expr</span>, <span class="type">double</span> <span class="variable">result</span>) {
    <span class="variable">_history</span>.<span class="function">add</span>({
      <span class="string">'expression'</span>: <span class="variable">expr</span>,
      <span class="string">'result'</span>: <span class="variable">result</span>,
      <span class="string">'prevValue'</span>: <span class="variable">_currentValue</span>,
      <span class="string">'timestamp'</span>: <span class="type">DateTime</span>.<span class="function">now</span>(),
    });
  }
  
  <span class="type">double</span>? <span class="function">undo</span>() {
    <span class="keyword">if</span> (<span class="variable">_history</span>.<span class="variable">isEmpty</span>) <span class="keyword">return null</span>;
    <span class="keyword">var</span> <span class="variable">last</span> = <span class="variable">_history</span>.<span class="function">removeLast</span>();
    <span class="variable">_currentValue</span> = <span class="variable">last</span>[<span class="string">'prevValue'</span>];
    <span class="keyword">return</span> <span class="variable">_currentValue</span>;
  }
  
  <span class="keyword">void</span> <span class="function">clear</span>() {
    <span class="variable">_history</span>.<span class="function">clear</span>();
    <span class="variable">_currentValue</span> = <span class="number">0</span>;
  }</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Contoh Penggunaan",
      category: "Final Implementation",
      icon: "fas fa-play",
      content: `
                <p class="text-content">
                    Mari lihat contoh penggunaan Smart Calculator:
                </p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart - main.dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">main</span>() {
  <span class="keyword">var</span> <span class="variable">calc</span> = <span class="type">SmartCalculator</span>();
  
  <span class="comment">// Evaluasi ekspresi kompleks</span>
  <span class="function">print</span>(<span class="variable">calc</span>.<span class="function">evaluate</span>(<span class="string">'(5 + 3) * 2'</span>)); <span class="comment">// 16</span>
  <span class="function">print</span>(<span class="variable">calc</span>.<span class="function">evaluate</span>(<span class="string">'10 + 5 * 2'</span>)); <span class="comment">// 20</span>
  <span class="function">print</span>(<span class="variable">calc</span>.<span class="function">evaluate</span>(<span class="string">'((2 + 3) * (4 - 1))'</span>)); <span class="comment">// 15</span>
  
  <span class="comment">// Lihat history</span>
  <span class="function">print</span>(<span class="string">'History: \${calc.history.length} items'</span>);
  
  <span class="comment">// Undo operasi terakhir</span>
  <span class="function">print</span>(<span class="string">'Current: \${calc.value}'</span>); <span class="comment">// 15</span>
  <span class="variable">calc</span>.<span class="function">undo</span>();
  <span class="function">print</span>(<span class="string">'After undo: \${calc.value}'</span>); <span class="comment">// 20</span>
  
  <span class="comment">// Clear semua</span>
  <span class="variable">calc</span>.<span class="function">clear</span>();
  <span class="function">print</span>(<span class="string">'After clear: \${calc.value}'</span>); <span class="comment">// 0</span>
}</pre>
                    </div>
                </div>

                <div class="result-box">
                    <div class="result-title"><i class="fas fa-terminal"></i> Output</div>
                    <div class="result-content">16.0
20.0
15.0
History: 3 items
Current: 15.0
After undo: 20.0
After clear: 0.0</div>
                </div>
            `,
    },
    {
      title: "Kesimpulan",
      category: "Final Implementation",
      icon: "fas fa-flag-checkered",
      content: `
                <p class="text-content">
                    Selamat! Kamu telah mempelajari konsep-konsep penting dalam pemrograman Dart:
                </p>

                <div class="feature-list">
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check"></i></div>
                        <div class="feature-text">
                            <h4>Closure</h4>
                            <p>Menyimpan state secara private dan persistent</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check"></i></div>
                        <div class="feature-text">
                            <h4>Recursive Function</h4>
                            <p>Memecah masalah kompleks menjadi lebih sederhana</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check"></i></div>
                        <div class="feature-text">
                            <h4>Comprehensive Testing</h4>
                            <p>Memastikan kode berjalan sesuai ekspektasi</p>
                        </div>
                    </div>
                </div>

                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-rocket"></i> Tantangan Selanjutnya</div>
                    <ul>
                        <li>Tambahkan operasi pangkat (^)</li>
                        <li>Implementasi redo functionality</li>
                        <li>Buat UI interaktif dengan Flutter</li>
                        <li>Simpan history ke local storage</li>
                    </ul>
                </div>

                <div class="diagram-box">
                    <div class="diagram-title">🎉 Kamu Sudah Menguasai Bab 9!</div>
                    <div class="diagram-flow">
                        <div class="diagram-node">Closure ✓</div>
                        <span class="diagram-arrow"><i class="fas fa-plus"></i></span>
                        <div class="diagram-node">Recursive ✓</div>
                        <span class="diagram-arrow"><i class="fas fa-plus"></i></span>
                        <div class="diagram-node">Testing ✓</div>
                        <span class="diagram-arrow"><i class="fas fa-equals"></i></span>
                        <div class="diagram-node">Smart Calculator! 🚀</div>
                    </div>
                </div>
            `,
    },
  ],
  rangkuman: [
    {
      title: "Rangkuman Materi",
      category: "Rangkuman",
      icon: "fas fa-list-check",
      content: `
                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-box-archive"></i> Closure</div>
                    <ul>
                        <li>Fungsi yang "mengingat" variabel dari scope pembuatannya</li>
                        <li>Berguna untuk data encapsulation dan private variables</li>
                        <li>Setiap closure memiliki state independen</li>
                        <li>Aplikasi: counter, cache, factory functions, event handlers</li>
                    </ul>
                </div>
                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-code-branch"></i> Recursive Function</div>
                    <ul>
                        <li>Fungsi yang memanggil dirinya sendiri</li>
                        <li>Memerlukan base case dan recursive case</li>
                        <li>Cocok untuk struktur data tree/graph dan divide-and-conquer</li>
                        <li>Perhatikan stack overflow pada rekursi dalam</li>
                    </ul>
                </div>
            `,
    },
    {
      title: "Rangkuman Testing",
      category: "Rangkuman",
      icon: "fas fa-vial",
      content: `
                <div class="info-box warning">
                    <div class="info-box-title"><i class="fas fa-vial"></i> Testing</div>
                    <ul>
                        <li>Manual testing: assert dan print</li>
                        <li>Test normal cases, edge cases, dan error cases</li>
                        <li>Buat test framework sederhana untuk organize tests</li>
                        <li>Testing membantu memastikan code quality</li>
                    </ul>
                </div>
            `,
    },
  ],
  miniproject: [
    {
      title: "Project 1: Smart Cache System",
      category: "Mini Project",
      icon: "fas fa-bolt",
      content: `
                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">Function</span> <span class="function">createCachedFunction</span>(<span class="type">Function</span> <span class="variable">expensiveFunction</span>) {
  <span class="type">Map</span>&lt;<span class="type">String</span>, dynamic&gt; <span class="variable">cache</span> = {};
  <span class="type">int</span> <span class="variable">hitCount</span> = <span class="number">0</span>;
  
  <span class="keyword">return</span> (dynamic <span class="variable">input</span>) {
    <span class="type">String</span> <span class="variable">key</span> = <span class="variable">input</span>.<span class="function">toString</span>();
    <span class="keyword">if</span> (<span class="variable">cache</span>.<span class="function">containsKey</span>(<span class="variable">key</span>)) {
      <span class="variable">hitCount</span>++;
      <span class="function">print</span>(<span class="string">'Cache HIT! (Total: \$hitCount)'</span>);
      <span class="keyword">return</span> <span class="variable">cache</span>[<span class="variable">key</span>];
    }
    <span class="keyword">var</span> <span class="variable">result</span> = <span class="variable">expensiveFunction</span>(<span class="variable">input</span>);
    <span class="variable">cache</span>[<span class="variable">key</span>] = <span class="variable">result</span>;
    <span class="keyword">return</span> <span class="variable">result</span>;
  };
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 2: Binary Search Rekursi",
      category: "Mini Project",
      icon: "fas fa-search",
      content: `
                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="type">int</span> <span class="function">binarySearch</span>(<span class="type">List</span>&lt;<span class="type">int</span>&gt; <span class="variable">arr</span>, <span class="type">int</span> <span class="variable">target</span>, [<span class="type">int</span>? <span class="variable">low</span>, <span class="type">int</span>? <span class="variable">high</span>]) {
  <span class="variable">low</span> ??= <span class="number">0</span>; <span class="variable">high</span> ??= <span class="variable">arr</span>.<span class="variable">length</span> - <span class="number">1</span>;
  <span class="keyword">if</span> (<span class="variable">low</span> > <span class="variable">high</span>) <span class="keyword">return</span> -<span class="number">1</span>;
  <span class="type">int</span> <span class="variable">mid</span> = (<span class="variable">low</span> + <span class="variable">high</span>) ~/ <span class="number">2</span>;
  <span class="keyword">if</span> (<span class="variable">arr</span>[<span class="variable">mid</span>] == <span class="variable">target</span>) <span class="keyword">return</span> <span class="variable">mid</span>;
  <span class="keyword">if</span> (<span class="variable">arr</span>[<span class="variable">mid</span>] > <span class="variable">target</span>) <span class="keyword">return</span> <span class="function">binarySearch</span>(<span class="variable">arr</span>, <span class="variable">target</span>, <span class="variable">low</span>, <span class="variable">mid</span> - <span class="number">1</span>);
  <span class="keyword">return</span> <span class="function">binarySearch</span>(<span class="variable">arr</span>, <span class="variable">target</span>, <span class="variable">mid</span> + <span class="number">1</span>, <span class="variable">high</span>);
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 3: File System Tree",
      category: "Mini Project",
      icon: "fas fa-folder-tree",
      content: `
                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">printTree</span>(<span class="type">FileNode</span> <span class="variable">node</span>, [<span class="type">int</span> <span class="variable">level</span> = <span class="number">0</span>]) {
  <span class="type">String</span> <span class="variable">indent</span> = <span class="string">'  '</span> * <span class="variable">level</span>;
  <span class="type">String</span> <span class="variable">icon</span> = <span class="variable">node</span>.<span class="variable">isDirectory</span> ? <span class="string">'📁'</span> : <span class="string">'📄'</span>;
  <span class="function">print</span>(<span class="string">'\$indent\$icon \${node.name}'</span>);
  <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">child</span> <span class="keyword">in</span> <span class="variable">node</span>.<span class="variable">children</span>) {
    <span class="function">printTree</span>(<span class="variable">child</span>, <span class="variable">level</span> + <span class="number">1</span>);
  }
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 4: Testing Framework",
      category: "Mini Project",
      icon: "fas fa-vials",
      content: `
                <div class="code-block">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-lang">Dart</span>
                    </div>
                    <div class="code-content">
<pre><span class="keyword">void</span> <span class="function">run</span>() {
  <span class="function">print</span>(<span class="string">'Running Test Suite: \$name'</span>);
  <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">test</span> <span class="keyword">in</span> <span class="variable">tests</span>) {
    <span class="keyword">var</span> <span class="variable">result</span> = <span class="variable">test</span>.<span class="function">testFunction</span>();
    <span class="keyword">if</span> (<span class="variable">result</span> == <span class="variable">test</span>.<span class="variable">expected</span>) {
      <span class="function">print</span>(<span class="string">'✓ PASS: \${test.description}'</span>);
    } <span class="keyword">else</span> {
      <span class="function">print</span>(<span class="string">'✗ FAIL: \${test.description}'</span>);
    }
  }
}</pre>
                    </div>
                </div>
            `,
    },
  ],
  tugasrumah: [
    {
      title: "Project 1: Rate Limiter",
      category: "Tugas Rumah",
      icon: "fas fa-hourglass-half",
      content: `
                <div class="info-box tip">
                    <div class="info-box-title"><i class="fas fa-shield"></i> Rate Limiter</div>
                    <p>Buat rate limiter yang membatasi berapa kali sebuah fungsi dapat dipanggil dalam periode waktu tertentu menggunakan <strong>closure</strong>.</p>
                </div>
                <div class="code-block">
                    <div class="code-content">
<pre><span class="type">Function</span> <span class="function">createRateLimiter</span>(<span class="type">Function</span> <span class="variable">fn</span>, <span class="type">int</span> <span class="variable">limit</span>, <span class="type">Duration</span> <span class="variable">period</span>) {
  <span class="type">List</span>&lt;<span class="type">DateTime</span>&gt; <span class="variable">calls</span> = [];
  <span class="keyword">return</span> (args) {
    <span class="keyword">var</span> <span class="variable">now</span> = <span class="type">DateTime</span>.<span class="function">now</span>();
    <span class="variable">calls</span>.<span class="function">removeWhere</span>((<span class="variable">t</span>) => <span class="variable">now</span>.<span class="function">difference</span>(<span class="variable">t</span>) > <span class="variable">period</span>);
    <span class="keyword">if</span> (<span class="variable">calls</span>.<span class="variable">length</span> >= <span class="variable">limit</span>) <span class="keyword">return</span> <span class="keyword">null</span>;
    <span class="variable">calls</span>.<span class="function">add</span>(<span class="variable">now</span>); <span class="keyword">return</span> <span class="function">fn</span>(<span class="variable">args</span>);
  };
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 2: Permutasi String",
      category: "Tugas Rumah",
      icon: "fas fa-shuffle",
      content: `
                <div class="info-box">
                    <div class="info-box-title"><i class="fas fa-code-branch"></i> Permutasi</div>
                    <p>Buat program yang menghasilkan semua permutasi dari sebuah string menggunakan <strong>rekursi</strong>.</p>
                </div>
                <div class="code-block">
                    <div class="code-content">
<pre><span class="type">List</span>&lt;<span class="type">String</span>&gt; <span class="function">permutations</span>(<span class="type">String</span> <span class="variable">s</span>) {
  <span class="keyword">if</span> (<span class="variable">s</span>.<span class="variable">length</span> <= <span class="number">1</span>) <span class="keyword">return</span> [<span class="variable">s</span>];
  <span class="type">List</span>&lt;<span class="type">String</span>&gt; <span class="variable">res</span> = [];
  <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> = <span class="number">0</span>; <span class="variable">i</span> < <span class="variable">s</span>.<span class="variable">length</span>; <span class="variable">i</span>++) {
    <span class="keyword">var</span> <span class="variable">rem</span> = <span class="variable">s</span>.<span class="function">substring</span>(<span class="number">0</span>, <span class="variable">i</span>) + <span class="variable">s</span>.<span class="function">substring</span>(<span class="variable">i</span> + <span class="number">1</span>);
    <span class="keyword">for</span> (<span class="keyword">var</span> <span class="variable">p</span> <span class="keyword">in</span> <span class="function">permutations</span>(<span class="variable">rem</span>)) <span class="variable">res</span>.<span class="function">add</span>(<span class="variable">s</span>[<span class="variable">i</span>] + <span class="variable">p</span>);
  }
  <span class="keyword">return</span> <span class="variable">res</span>;
}</pre>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 3: Maze Solver",
      category: "Tugas Rumah",
      icon: "fas fa-map-location-dot",
      content: `
                <div class="info-box warning">
                    <div class="info-box-title"><i class="fas fa-route"></i> Backtracking</div>
                    <p>Implementasi Maze Solver menggunakan <strong>recursive backtracking</strong> untuk mencari jalan keluar.</p>
                </div>
                <div class="step-list">
                    <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content"><h4>Pilih Arah</h4><p>Coba koordinat (row, col) berikutnya.</p></div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content"><h4>Cek Target</h4><p>Jika mencapai 2, rute ditemukan.</p></div>
                    </div>
                </div>
            `,
    },
    {
      title: "Project 4: Comprehensive Test Suite",
      category: "Tugas Rumah",
      icon: "fas fa-shield-check",
      content: `
                <p>Buat <strong>Comprehensive Testing Suite</strong> untuk menguji semua fungsi yang telah dibuat pada project sebelumnya.</p>
                <div class="diagram-box">
                    <div class="diagram-title">Target Testing</div>
                    <div class="diagram-flow">
                        <div class="diagram-node">Normal Cases</div>
                        <span class="diagram-arrow"><i class="fas fa-plus"></i></span>
                        <div class="diagram-node">Edge Cases</div>
                        <span class="diagram-arrow"><i class="fas fa-plus"></i></span>
                        <div class="diagram-node">Error Cases</div>
                    </div>
                </div>
            `,
    },
  ],
};

// Export for use in script.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = slidesData;
}
