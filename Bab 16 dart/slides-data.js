// Slides Data untuk Bab 16: Modern Dart & Robust Code
const slidesData = {
  modern: [
    {
      title: "Records: Mengembalikan Banyak Nilai",
      category: "Modern Dart 3",
      icon: "fas fa-layer-group",
      content: `
        <p class="text-content">
          <strong>Record</strong> adalah tipe data ringan untuk mengelompokkan beberapa nilai tanpa harus membuat class baru.
          Fitur ini cocok untuk return value kecil, hasil parsing, koordinat, statistik, atau tuple sederhana.
        </p>
        <div class="info-box tip">
          <div class="info-box-title"><i class="fas fa-lightbulb"></i> Kapan dipakai?</div>
          <p>Gunakan record saat datanya pendek dan konteksnya jelas. Kalau data punya perilaku, validasi kompleks, atau hidup lama di banyak bagian aplikasi, gunakan class/model biasa.</p>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre>(String, int) userSummary() {
  return ('Raka', 17);
}

({String name, int age}) userProfile() {
  return (name: 'Raka', age: 17);
}

void main() {
  final summary = userSummary();
  print(summary.$1); // Raka
  print(summary.$2); // 17

  final profile = userProfile();
  print(profile.name);
}</pre>
          </div>
        </div>
        <table class="comparison-table">
          <thead><tr><th>Bentuk</th><th>Contoh</th><th>Kegunaan</th></tr></thead>
          <tbody>
            <tr><td>Positional</td><td><code>(String, int)</code></td><td>Cepat, ringkas, urutan penting.</td></tr>
            <tr><td>Named</td><td><code>({String name, int age})</code></td><td>Lebih jelas karena field punya nama.</td></tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Patterns & Destructuring",
      category: "Modern Dart 3",
      icon: "fas fa-random",
      content: `
        <p class="text-content">
          <strong>Pattern</strong> membantu Dart mencocokkan bentuk data sekaligus mengambil isinya.
          Ini membuat kode validasi data, switch expression, dan pembacaan record/list menjadi lebih ringkas.
        </p>
        <div class="mermaid mermaid-compact">
        flowchart LR
          Data["Data Masuk"] --> Match{"Cocok Pattern?"}
          Match -->|Ya| Extract["Ambil Nilai"]
          Match -->|Tidak| Fallback["Gunakan Default"]
          Extract --> Result["Kode Lebih Jelas"]
          Fallback --> Result

          style Data fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
          style Match fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
          style Extract fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
          style Fallback fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre>void main() {
  final user = ('Nisa', 18);
  final (name, age) = user;

  final status = switch (age) {
    &lt; 13 => 'anak',
    &lt; 18 => 'remaja',
    _ => 'dewasa',
  };

  print('$name adalah $status');
}</pre>
          </div>
        </div>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-exclamation-triangle"></i> Catatan</div>
          <p>Pattern sangat kuat, tetapi jangan dipaksakan untuk semua kasus. Untuk pemula, mulai dari destructuring record dan switch expression dulu.</p>
        </div>
      `
    },
    {
      title: "Enhanced Enum & Class Modifiers",
      category: "Modern Dart 3",
      icon: "fas fa-cubes",
      content: `
        <p class="text-content">
          Dart modern membuat enum lebih kaya dan class lebih terkontrol.
          <strong>Enhanced enum</strong> bisa punya field, constructor, dan getter. <strong>Class modifiers</strong> seperti <code>interface</code>, <code>base</code>, <code>final</code>, dan <code>sealed</code> membantu membatasi cara class diwariskan atau diimplementasikan.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre>enum Role {
  admin('Akses penuh'),
  teacher('Kelola materi'),
  student('Belajar materi');

  final String label;
  const Role(this.label);
}

sealed class Result {}

class Success extends Result {
  final String message;
  Success(this.message);
}

class Failure extends Result {
  final String reason;
  Failure(this.reason);
}</pre>
          </div>
        </div>
        <table class="comparison-table">
          <thead><tr><th>Modifier</th><th>Makna singkat</th><th>Contoh penggunaan</th></tr></thead>
          <tbody>
            <tr><td><code>interface</code></td><td>Class lain boleh implement API-nya.</td><td>Kontrak repository/service.</td></tr>
            <tr><td><code>base</code></td><td>Turunan harus menjaga relasi inheritance.</td><td>Framework internal.</td></tr>
            <tr><td><code>final</code></td><td>Tidak bisa diwarisi dari luar library.</td><td>Model yang tidak ingin diperluas.</td></tr>
            <tr><td><code>sealed</code></td><td>Daftar turunan dibatasi di library yang sama.</td><td>State, result, event.</td></tr>
          </tbody>
        </table>
      `
    }
  ],
  robust: [
    {
      title: "Exception, Assert, dan Finally",
      category: "Robust Code",
      icon: "fas fa-shield-alt",
      content: `
        <p class="text-content">
          Kode yang baik tidak hanya berjalan saat kondisi ideal, tetapi juga jelas saat terjadi masalah.
          Dart mendukung <code>throw</code>, <code>try</code>, <code>on</code>, <code>catch</code>, <code>rethrow</code>, <code>finally</code>, dan <code>assert</code>.
        </p>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre>int parseScore(String input) {
  final score = int.tryParse(input);

  if (score == null) {
    throw FormatException('Nilai harus angka');
  }

  assert(score >= 0, 'Score tidak boleh negatif');
  return score;
}

void main() {
  try {
    print(parseScore('90'));
  } on FormatException catch (e) {
    print('Format salah: \${e.message}');
  } catch (e, stackTrace) {
    print('Error tidak terduga: $e');
    print(stackTrace);
  } finally {
    print('Validasi selesai');
  }
}</pre>
          </div>
        </div>
        <div class="info-box warning">
          <div class="info-box-title"><i class="fas fa-bug"></i> Assert bukan validasi production</div>
          <p><code>assert</code> dipakai untuk mengecek asumsi saat development/debug. Untuk input user, file, API, atau data luar, tetap gunakan validasi normal dan exception yang jelas.</p>
        </div>
      `
    },
    {
      title: "Async vs Isolate",
      category: "Concurrency",
      icon: "fas fa-microchip",
      content: `
        <p class="text-content">
          <strong>async-await</strong> membuat operasi tunggu seperti network/file menjadi non-blocking, tetapi tetap berjalan pada isolate utama.
          Untuk pekerjaan CPU berat, gunakan <strong>isolate</strong> agar pekerjaan besar tidak mengganggu respons aplikasi.
        </p>
        <div class="mermaid">
        flowchart TD
          Task["Pekerjaan"] --> Check{"Jenis pekerjaan?"}
          Check -->|"Menunggu I/O"| Async["Future / async-await"]
          Check -->|"CPU berat"| Iso["Isolate.run"]
          Async --> UI["UI tetap responsif"]
          Iso --> UI

          style Task fill:#0175c2,stroke:#13b9fd,stroke-width:2px,color:#fff
          style Check fill:#8338ec,stroke:#1de9b6,stroke-width:2px,color:#fff
          style Async fill:#1de9b6,stroke:#1de9b6,stroke-width:2px,color:#000
          style Iso fill:#ff006e,stroke:#1de9b6,stroke-width:2px,color:#fff
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Dart</span>
          </div>
          <div class="code-content">
<pre>import 'dart:isolate';

int heavySum(List&lt;int&gt; values) {
  return values.reduce((a, b) => a + b);
}

Future&lt;void&gt; main() async {
  final values = List.generate(1000000, (index) => index);

  final total = await Isolate.run(() {
    return heavySum(values);
  });

  print(total);
}</pre>
          </div>
        </div>
      `
    }
  ],
  tugas: [
    {
      title: "Latihan Mandiri: Validator Modern",
      category: "Tugas",
      icon: "fas fa-tasks",
      content: `
        <p class="text-content">
          Buat mini project CLI bernama <strong>modern_validator</strong>. Tujuannya melatih records, enum, pattern, exception, dan testing kecil.
        </p>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              Buat enum <code>Role</code> dengan nilai <code>admin</code>, <code>teacher</code>, dan <code>student</code>. Tambahkan label pada setiap role.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              Buat function <code>parseUser</code> yang menerima <code>Map&lt;String, Object?&gt;</code> dan mengembalikan record named <code>({String name, int age, Role role})</code>.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              Gunakan pattern atau switch expression untuk menentukan kategori umur: anak, remaja, atau dewasa.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              Jika input tidak valid, lempar <code>FormatException</code>. Tangani error dengan <code>try-catch-finally</code>.
            </div>
          </div>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-lang">Target Output</span>
          </div>
          <div class="code-content">
<pre>Nama: Raka
Umur: 17
Kategori: remaja
Role: Belajar materi
Validasi selesai</pre>
          </div>
        </div>
      `
    }
  ]
};
