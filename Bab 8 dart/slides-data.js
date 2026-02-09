// Dart PPT - Slides Data
// Module: Higher Order Function, Anonymous Function, Scope

const slidesData = {
  // ==================== MODULE 1: HIGHER ORDER FUNCTION ====================
  higherOrderFunction: {
    title: "Higher Order Function",
    icon: "🚀",
    color: "#0175C2",
    slides: [
      {
        title: "Higher Order Function",
        subtitle: "Fungsi yang Powerful & Fleksibel",
        type: "title",
        content: `
          <div class="intro-box">
            <h3>📖 Apa itu Higher Order Function?</h3>
            <p>Higher Order Function adalah fungsi yang dapat:</p>
            <ul>
              <li>✅ Menerima fungsi lain sebagai <strong>parameter</strong></li>
              <li>✅ Mengembalikan fungsi sebagai <strong>hasil</strong></li>
            </ul>
            <p class="highlight">Konsep ini memungkinkan kode yang lebih <em>fleksibel</em> dan <em>reusable</em>!</p>
          </div>
        `,
      },
      {
        title: "Fungsi sebagai Parameter",
        subtitle: "Contoh 1",
        type: "code",
        content: `
          <p>Fungsi dapat menerima fungsi lain sebagai parameter:</p>
          <pre><code class="language-dart">// Fungsi yang menerima fungsi lain sebagai parameter
void executeOperation(int a, int b, Function operation) {
  var result = operation(a, b);
  print('Hasil: \$result');
}

// Fungsi-fungsi yang akan digunakan
int tambah(int x, int y) => x + y;
int kali(int x, int y) => x * y;

void main() {
  executeOperation(5, 3, tambah);  // Output: Hasil: 8
  executeOperation(5, 3, kali);    // Output: Hasil: 15
}</code></pre>
          <div class="output-box">
            <strong>Output:</strong><br>
            Hasil: 8<br>
            Hasil: 15
          </div>
        `,
      },
      {
        title: "Fungsi Mengembalikan Fungsi",
        subtitle: "Contoh 2",
        type: "code",
        content: `
          <p>Fungsi dapat mengembalikan fungsi lain:</p>
          <pre><code class="language-dart">Function createMultiplier(int multiplier) {
  return (int value) => value * multiplier;
}

void main() {
  var kaliDua = createMultiplier(2);
  var kaliTiga = createMultiplier(3);

  print(kaliDua(5));   // Output: 10
  print(kaliTiga(5));  // Output: 15
}</code></pre>
          <div class="output-box">
            <strong>Output:</strong><br>
            10<br>
            15
          </div>
          <div class="tip-box">
            💡 <strong>Tips:</strong> Pattern ini sangat berguna untuk membuat factory functions!
          </div>
        `,
      },
      {
        title: "Higher Order Function pada List",
        subtitle: "Contoh 3 - map(), where(), forEach()",
        type: "code",
        content: `
          <pre><code class="language-dart">void main() {
  List<int> angka = [1, 2, 3, 4, 5];

  // map() adalah higher order function
  var hasilKali2 = angka.map((n) => n * 2).toList();
  print(hasilKali2);  // Output: [2, 4, 6, 8, 10]

  // where() adalah higher order function untuk filter
  var angkaGenap = angka.where((n) => n % 2 == 0).toList();
  print(angkaGenap);  // Output: [2, 4]

  // forEach() adalah higher order function
  angka.forEach((n) => print('Angka: \$n'));
}</code></pre>
          <div class="info-grid">
            <div class="info-card">
              <h4>map()</h4>
              <p>Transform setiap item</p>
            </div>
            <div class="info-card">
              <h4>where()</h4>
              <p>Filter berdasarkan kondisi</p>
            </div>
            <div class="info-card">
              <h4>forEach()</h4>
              <p>Iterasi setiap item</p>
            </div>
          </div>
        `,
      },
      {
        title: "Mini Project 1",
        subtitle: "Sistem Filter Data Mahasiswa",
        type: "project",
        content: `
          <pre><code class="language-dart">class Mahasiswa {
  String nama;
  int umur;
  double ipk;

  Mahasiswa(this.nama, this.umur, this.ipk);

  @override
  String toString() => '\$nama (Umur: \$umur, IPK: \$ipk)';
}

List<Mahasiswa> filterMahasiswa(
  List<Mahasiswa> mahasiswa,
  bool Function(Mahasiswa) kriteria
) {
  return mahasiswa.where(kriteria).toList();
}

void main() {
  List<Mahasiswa> daftarMahasiswa = [
    Mahasiswa('Andi', 20, 3.5),
    Mahasiswa('Budi', 22, 3.8),
    Mahasiswa('Citra', 19, 3.2),
    Mahasiswa('Dewi', 21, 3.9),
    Mahasiswa('Eko', 23, 3.0),
  ];

  // Filter mahasiswa dengan IPK >= 3.5
  var mahasiswaPrestasi = filterMahasiswa(
    daftarMahasiswa,
    (m) => m.ipk >= 3.5
  );

  print('Mahasiswa Berprestasi (IPK >= 3.5):');
  mahasiswaPrestasi.forEach(print);
}</code></pre>
        `,
      },
      {
        title: "Mini Project 2",
        subtitle: "Kalkulator dengan Custom Operation",
        type: "project",
        content: `
          <pre><code class="language-dart">double kalkulator(double a, double b, 
    double Function(double, double) operasi) {
  return operasi(a, b);
}

void main() {
  // Definisikan berbagai operasi sebagai anonymous function
  var tambah = (double x, double y) => x + y;
  var kurang = (double x, double y) => x - y;
  var kali = (double x, double y) => x * y;
  var bagi = (double x, double y) => y != 0 ? x / y : 0;
  var pangkat = (double x, double y) {
    double hasil = 1;
    for (int i = 0; i < y; i++) {
      hasil *= x;
    }
    return hasil;
  };

  double num1 = 10;
  double num2 = 5;

  print('\$num1 + \$num2 = \${kalkulator(num1, num2, tambah)}');
  print('\$num1 - \$num2 = \${kalkulator(num1, num2, kurang)}');
  print('\$num1 * \$num2 = \${kalkulator(num1, num2, kali)}');
  print('\$num1 / \$num2 = \${kalkulator(num1, num2, bagi)}');
  print('\$num1 ^ \$num2 = \${kalkulator(num1, num2, pangkat)}');
}</code></pre>
        `,
      },
    ],
  },

  // ==================== MODULE 2: ANONYMOUS FUNCTION ====================
  anonymousFunction: {
    title: "Anonymous Function",
    icon: "🎭",
    color: "#13B9FD",
    slides: [
      {
        title: "Anonymous Function",
        subtitle: "Fungsi Tanpa Nama",
        type: "title",
        content: `
          <div class="intro-box">
            <h3>📖 Apa itu Anonymous Function?</h3>
            <p>Anonymous Function (fungsi anonim) adalah fungsi yang <strong>tidak memiliki nama</strong>.</p>
            <p>Disebut juga: <code>lambda function</code> atau <code>closure</code></p>
            <div class="syntax-box">
              <h4>Sintaks:</h4>
              <pre><code class="language-dart">// Full syntax
(parameter) {
  // kode fungsi
}

// Arrow syntax (satu baris)
(parameter) => ekspresi</code></pre>
            </div>
          </div>
        `,
      },
      {
        title: "Anonymous Function Sederhana",
        subtitle: "Contoh 1",
        type: "code",
        content: `
          <pre><code class="language-dart">void main() {
  // Anonymous function disimpan dalam variabel
  var salam = (String nama) {
    return 'Halo, \$nama!';
  };

  print(salam('Budi'));  // Output: Halo, Budi!

  // Versi arrow function (lebih singkat)
  var salamSingkat = (String nama) => 'Halo, \$nama!';
  print(salamSingkat('Ani'));  // Output: Halo, Ani!
}</code></pre>
          <div class="comparison-box">
            <div class="compare-item">
              <h4>Full Syntax</h4>
              <code>(param) { return value; }</code>
            </div>
            <div class="compare-arrow">→</div>
            <div class="compare-item">
              <h4>Arrow Syntax</h4>
              <code>(param) => value</code>
            </div>
          </div>
        `,
      },
      {
        title: "Anonymous Function sebagai Parameter",
        subtitle: "Contoh 2",
        type: "code",
        content: `
          <pre><code class="language-dart">void main() {
  List<String> buah = ['Apel', 'Mangga', 'Jeruk'];

  // Menggunakan anonymous function
  buah.forEach((item) {
    print('Saya suka \$item');
  });

  // Versi lebih singkat dengan arrow
  buah.forEach((item) => print('Saya suka \$item'));
}</code></pre>
          <div class="output-box">
            <strong>Output:</strong><br>
            Saya suka Apel<br>
            Saya suka Mangga<br>
            Saya suka Jeruk
          </div>
          <div class="tip-box">
            💡 Anonymous function sangat umum digunakan sebagai callback!
          </div>
        `,
      },
      {
        title: "Multiple Parameter",
        subtitle: "Contoh 3",
        type: "code",
        content: `
          <pre><code class="language-dart">void main() {
  var kalkulasi = (int a, int b, String operasi) {
    switch (operasi) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 0;
    }
  };

  print(kalkulasi(10, 5, '+'));  // Output: 15
  print(kalkulasi(10, 5, '*'));  // Output: 50
}</code></pre>
          <div class="output-box">
            <strong>Output:</strong><br>
            15<br>
            50
          </div>
        `,
      },
      {
        title: "Mini Project",
        subtitle: "Text Processor dengan Chain of Operations",
        type: "project",
        content: `
          <pre><code class="language-dart">class TextProcessor {
  String text;

  TextProcessor(this.text);

  TextProcessor apply(String Function(String) operation) {
    text = operation(text);
    return this;
  }

  String get result => text;
}

void main() {
  var toUpperCase = (String s) => s.toUpperCase();
  var addPrefix = (String s) => '>>> \$s';
  var addSuffix = (String s) => '\$s <<<';

  String inputText = 'Belajar Dart Itu Menyenangkan';

  var hasil = TextProcessor(inputText)
      .apply(toUpperCase)
      .apply(addPrefix)
      .apply(addSuffix)
      .result;
  
  print(hasil);
  // Output: >>> BELAJAR DART ITU MENYENANGKAN <<<
}</code></pre>
        `,
      },
    ],
  },

  // ==================== MODULE 3: SCOPE ====================
  scope: {
    title: "Scope",
    icon: "🔭",
    color: "#0553B1",
    slides: [
      {
        title: "Scope",
        subtitle: "Cakupan Variabel",
        type: "title",
        content: `
          <div class="intro-box">
            <h3>📖 Apa itu Scope?</h3>
            <p>Scope menentukan di mana suatu variabel dapat <strong>diakses</strong> dalam program.</p>
            <div class="scope-types">
              <div class="scope-item global">
                <h4>🌍 Global Scope</h4>
                <p>Dapat diakses dari mana saja</p>
              </div>
              <div class="scope-item local">
                <h4>📦 Local Scope</h4>
                <p>Hanya dalam fungsi tersebut</p>
              </div>
              <div class="scope-item block">
                <h4>🧱 Block Scope</h4>
                <p>Dalam blok kode (if, for, dll)</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "Global vs Local Scope",
        subtitle: "Contoh 1",
        type: "code",
        content: `
          <pre><code class="language-dart">// Global scope
String namaGlobal = 'Global Variable';
int umurGlobal = 25;

void tampilkanInfo() {
  // Local scope
  String namaLokal = 'Local Variable';

  print(namaGlobal);  // ✅ Bisa akses global
  print(namaLokal);   // ✅ Bisa akses local
}

void main() {
  tampilkanInfo();
  print(namaGlobal);  // ✅ Bisa akses global
  // print(namaLokal); // ❌ ERROR! Tidak bisa akses local
}</code></pre>
          <div class="rule-box">
            <h4>⚠️ Aturan Penting:</h4>
            <ul>
              <li>Inner scope <strong>dapat</strong> akses outer scope</li>
              <li>Outer scope <strong>TIDAK dapat</strong> akses inner scope</li>
            </ul>
          </div>
        `,
      },
      {
        title: "Block Scope",
        subtitle: "Contoh 2",
        type: "code",
        content: `
          <pre><code class="language-dart">void main() {
  int x = 10;  // Scope main

  if (x > 5) {
    int y = 20;  // Scope if block
    print('x: \$x');  // ✅ Bisa akses x
    print('y: \$y');  // ✅ Bisa akses y
  }

  print('x: \$x');  // ✅ Bisa akses x
  // print('y: \$y'); // ❌ ERROR! y hanya ada di dalam if

  for (int i = 0; i < 3; i++) {
    int z = i * 2;  // Scope for block
    print('z: \$z');
  }

  // print('i: \$i'); // ❌ ERROR! i hanya ada di dalam for
}</code></pre>
        `,
      },
      {
        title: "Variable Shadowing",
        subtitle: "Contoh 3",
        type: "code",
        content: `
          <pre><code class="language-dart">int angka = 100;  // Global

void main() {
  print('Global angka: \$angka');  // Output: 100

  int angka = 50;  // Local (shadowing global)
  print('Local angka: \$angka');   // Output: 50

  {
    int angka = 25;  // Block scope (shadowing local)
    print('Block angka: \$angka'); // Output: 25
  }

  print('Kembali ke local: \$angka');  // Output: 50
}</code></pre>
          <div class="warning-box">
            ⚠️ <strong>Shadowing:</strong> Jika ada nama variabel yang sama, yang lebih <em>inner</em> akan digunakan!
          </div>
        `,
      },
      {
        title: "Closure",
        subtitle: "Contoh 4 - Anonymous Function dengan Scope",
        type: "code",
        content: `
          <pre><code class="language-dart">Function createCounter() {
  int count = 0;  // Variabel ini "ditangkap" oleh closure

  return () {
    count++;
    return count;
  };
}

void main() {
  var counter1 = createCounter();
  var counter2 = createCounter();

  print(counter1());  // Output: 1
  print(counter1());  // Output: 2
  print(counter1());  // Output: 3

  print(counter2());  // Output: 1 (counter terpisah!)
  print(counter2());  // Output: 2
}</code></pre>
          <div class="tip-box">
            💡 <strong>Closure</strong> = anonymous function yang "mengingat" variabel dari scope luarnya!
          </div>
        `,
      },
      {
        title: "Mini Project",
        subtitle: "Shopping Cart dengan Scope Management",
        type: "project",
        content: `
          <pre><code class="language-dart">class ShoppingCart {
  List<Map<String, dynamic>> _items = [];
  double _diskon = 0;

  void addItem(String nama, int jumlah, double harga) {
    _items.add({'nama': nama, 'jumlah': jumlah, 'harga': harga});
    print('✓ Ditambahkan: \$nama x\$jumlah');
  }

  void setDiskon(double persen) {
    _diskon = persen;
  }

  Function get hitungTotal {
    return () {
      double subtotal = 0;
      _items.forEach((item) {
        subtotal += item['jumlah'] * item['harga'];
      });
      double diskonAmount = subtotal * (_diskon / 100);
      return {'subtotal': subtotal, 'diskon': diskonAmount,
              'total': subtotal - diskonAmount};
    };
  }
}

void main() {
  var cart = ShoppingCart();
  cart.addItem('Buku Dart', 2, 50000);
  cart.addItem('Laptop', 1, 5000000);
  cart.setDiskon(10);
  print(cart.hitungTotal()); // {subtotal: 5100000, ...}
}</code></pre>
        `,
      },
    ],
  },

  // ==================== TUGAS RUMAH ====================
  tugasRumah: {
    title: "Tugas Rumah",
    icon: "📝",
    color: "#6C63FF",
    slides: [
      {
        title: "Tugas 1",
        subtitle: "Sistem Penilaian Ujian",
        type: "homework",
        content: `
          <div class="task-box">
            <h3>📝 Deskripsi Tugas</h3>
            <p>Buat program sistem penilaian dengan fitur:</p>
            <ul>
              <li>Input daftar nilai siswa</li>
              <li>Filter siswa berdasarkan status kelulusan (nilai >= 75)</li>
              <li>Hitung rata-rata nilai</li>
              <li>Cari nilai tertinggi dan terendah</li>
              <li>Gunakan higher order function dan anonymous function</li>
            </ul>
          </div>
          <pre><code class="language-dart">class Siswa {
  String nama;
  double nilai;
  // ... tambahkan constructor dan method
}

void main() {
  List<Siswa> daftarSiswa = [
    // ... isi dengan data siswa
  ];

  // Gunakan where() untuk filter
  // Gunakan reduce() atau fold() untuk perhitungan
  // Buat anonymous function untuk setiap operasi
}</code></pre>
        `,
      },
      {
        title: "Tugas 2",
        subtitle: "Todo List Manager dengan Priority",
        type: "homework",
        content: `
          <div class="task-box">
            <h3>📝 Deskripsi Tugas</h3>
            <p>Buat aplikasi todo list dengan fitur:</p>
            <ul>
              <li>Tambah task dengan priority (tinggi, sedang, rendah)</li>
              <li>Filter task berdasarkan priority</li>
              <li>Sort task berdasarkan priority atau deadline</li>
              <li>Mark task sebagai selesai</li>
              <li>Gunakan closure untuk menyimpan state internal</li>
            </ul>
          </div>
          <pre><code class="language-dart">class Task {
  String judul;
  String priority; // 'tinggi', 'sedang', 'rendah'
  bool selesai;
  DateTime? deadline;
}

class TodoManager {
  List<Task> _tasks = [];

  void tambahTask(Task task) { /* ... */ }

  List<Task> filterByPriority(String priority) {
    // Gunakan where dengan anonymous function
  }

  Function get sortByPriority {
    // Return anonymous function untuk sorting
  }
}</code></pre>
        `,
      },
      {
        title: "Tugas 3",
        subtitle: "String Validator Builder",
        type: "homework",
        content: `
          <div class="task-box">
            <h3>📝 Deskripsi Tugas</h3>
            <p>Buat sistem validasi string yang fleksibel:</p>
            <ul>
              <li>Cek panjang minimum dan maksimum</li>
              <li>Cek apakah mengandung angka</li>
              <li>Cek apakah mengandung huruf kapital</li>
              <li>Cek apakah mengandung karakter spesial</li>
              <li>Bisa menggabungkan multiple validasi</li>
            </ul>
          </div>
          <pre><code class="language-dart">typedef Validator = bool Function(String);

class StringValidatorBuilder {
  List<Validator> _validators = [];

  StringValidatorBuilder minLength(int length) {
    _validators.add((s) => s.length >= length);
    return this;
  }

  StringValidatorBuilder hasNumber() {
    // Tambahkan validator untuk cek angka
    return this;
  }

  bool validate(String input) {
    // Jalankan semua validator
  }
}

void main() {
  var passwordValidator = StringValidatorBuilder()
      .minLength(8)
      .hasNumber()
      .hasUpperCase();

  print(passwordValidator.validate('Password123')); // true
}</code></pre>
        `,
      },
      {
        title: "Tugas 4",
        subtitle: "Data Transformation Pipeline",
        type: "homework",
        content: `
          <div class="task-box">
            <h3>📝 Deskripsi Tugas</h3>
            <p>Buat sistem pipeline untuk transformasi data:</p>
            <ul>
              <li>Membaca list data mentah</li>
              <li>Melakukan transformasi bertahap (map, filter, sort)</li>
              <li>Setiap transformasi adalah function yang bisa di-chain</li>
              <li>Gunakan scope untuk menyimpan intermediate results</li>
              <li>Output hasil transformasi dalam format yang rapi</li>
            </ul>
          </div>
          <div class="tip-box">
            💡 <strong>Hints:</strong>
            <ul>
              <li>Buat class <code>Pipeline</code> dengan method chaining</li>
              <li>Gunakan <code>List.map()</code>, <code>List.where()</code>, <code>List.sort()</code></li>
              <li>Store intermediate results dalam private variables</li>
              <li>Implement <code>toString()</code> untuk output yang rapi</li>
            </ul>
          </div>
        `,
      },
    ],
  },

  // ==================== KESIMPULAN ====================
  kesimpulan: {
    title: "Kesimpulan",
    icon: "📌",
    color: "#FF6B6B",
    slides: [
      {
        title: "Kesimpulan",
        subtitle: "Ringkasan Materi",
        type: "summary",
        content: `
          <div class="summary-grid">
            <div class="summary-card hof">
              <div class="icon">🚀</div>
              <h3>Higher Order Function</h3>
              <p>Fungsi yang dapat menerima atau mengembalikan fungsi lain.</p>
              <p class="benefit">✨ Membuat kode lebih fleksibel dan reusable</p>
            </div>
            <div class="summary-card anon">
              <div class="icon">🎭</div>
              <h3>Anonymous Function</h3>
              <p>Fungsi tanpa nama yang berguna untuk operasi sekali pakai.</p>
              <p class="benefit">✨ Ideal sebagai parameter untuk HOF</p>
            </div>
            <div class="summary-card scope">
              <div class="icon">🔭</div>
              <h3>Scope</h3>
              <p>Menentukan aksesibilitas variabel dalam program.</p>
              <p class="benefit">✨ Pahami global, local, dan block scope</p>
            </div>
          </div>
          <div class="final-message">
            <h3>🎉 Selamat!</h3>
            <p>Anda telah mempelajari konsep-konsep penting dalam pemrograman functional di Dart!</p>
          </div>
        `,
      },
    ],
  },
};

// Export for use
if (typeof module !== "undefined" && module.exports) {
  module.exports = slidesData;
}
