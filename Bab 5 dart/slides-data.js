// ===== Slides Data =====
const slidesData = {

    // ==================== LIST ====================
    list: [
        {
            content: `
                <h2>📋 List - Penjelasan</h2>
                <p><strong>List</strong> adalah koleksi terurut dari item-items. List di Dart bisa berisi elemen dengan tipe data yang sama atau berbeda (dynamic). List dimulai dari <strong>index 0</strong>.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">List&lt;TipeData&gt; namaList = [elemen1, elemen2, elemen3];
// atau
var namaList = [elemen1, elemen2, elemen3];</code></pre>

                <div class="info-box">
                    <h4>💡 Poin Penting</h4>
                    <ul>
                        <li>List terurut berdasarkan index (dimulai dari 0)</li>
                        <li>Bisa berisi duplikat</li>
                        <li>Bisa berisi berbagai tipe data (dynamic)</li>
                    </ul>
                </div>
            `
        },
        {
            content: `
                <h2>📋 List - Membuat List</h2>
                
<pre><code class="language-dart">void main() {
  // List dengan tipe data spesifik
  List&lt;String&gt; buah = ['Apel', 'Jeruk', 'Mangga'];

  // List dengan tipe data angka
  List&lt;int&gt; angka = [1, 2, 3, 4, 5];

  // List dynamic (bisa berbagai tipe)
  var campur = ['Teks', 123, true, null];

  // List kosong dengan tipe tertentu
  List&lt;double&gt; nilai = [];

  print(buah); // [Apel, Jeruk, Mangga]
  print(angka.length); // 5
}</code></pre>

                <div class="info-box tip">
                    <h4>✅ Tips</h4>
                    <p>Gunakan <code>List&lt;TipeData&gt;</code> untuk type safety yang lebih baik!</p>
                </div>
            `
        },
        {
            content: `
                <h2>📋 List - Akses & Modifikasi</h2>
                
<pre><code class="language-dart">void main() {
  List&lt;String&gt; warna = ['Merah', 'Hijau', 'Biru'];

  // Mengakses elemen
  print(warna[0]); // Merah
  print(warna[2]); // Biru
  print(warna.first); // Merah
  print(warna.last); // Biru

  // Memodifikasi elemen
  warna[1] = 'Kuning';
  print(warna); // [Merah, Kuning, Biru]

  // Mengecek panjang
  print(warna.length); // 3
}</code></pre>

                <table>
                    <tr><th>Property/Method</th><th>Fungsi</th></tr>
                    <tr><td><code>list[index]</code></td><td>Akses elemen di index</td></tr>
                    <tr><td><code>.first</code></td><td>Elemen pertama</td></tr>
                    <tr><td><code>.last</code></td><td>Elemen terakhir</td></tr>
                    <tr><td><code>.length</code></td><td>Jumlah elemen</td></tr>
                </table>
            `
        },
        {
            content: `
                <h2>📋 List - Menambah & Menghapus</h2>
                
<pre><code class="language-dart">void main() {
  List&lt;String&gt; hewan = ['Kucing', 'Anjing'];

  // Menambah di akhir
  hewan.add('Burung');
  
  // Menambah beberapa sekaligus
  hewan.addAll(['Ikan', 'Kelinci']);
  
  // Menambah di posisi tertentu
  hewan.insert(1, 'Hamster');

  // Menghapus elemen tertentu
  hewan.remove('Burung');
  
  // Menghapus berdasarkan index
  hewan.removeAt(0);
  
  // Menghapus elemen terakhir
  hewan.removeLast();
}</code></pre>

                <table>
                    <tr><th>Method</th><th>Fungsi</th></tr>
                    <tr><td><code>.add()</code></td><td>Tambah di akhir</td></tr>
                    <tr><td><code>.addAll()</code></td><td>Tambah beberapa</td></tr>
                    <tr><td><code>.insert(i, el)</code></td><td>Tambah di posisi i</td></tr>
                    <tr><td><code>.remove()</code></td><td>Hapus elemen</td></tr>
                    <tr><td><code>.removeAt()</code></td><td>Hapus di index</td></tr>
                </table>
            `
        },
        {
            content: `
                <h2>📋 List - Method Penting & Iterasi</h2>
                
<pre><code class="language-dart">void main() {
  List&lt;int&gt; nilai = [85, 90, 78, 92, 88];

  // Mengecek keberadaan
  print(nilai.contains(90)); // true

  // Mencari index
  print(nilai.indexOf(78)); // 2

  // Mengurutkan
  nilai.sort(); // ascending
  nilai.sort((a, b) =&gt; b.compareTo(a)); // descending

  // Iterasi dengan for-in
  for (var item in nilai) {
    print(item);
  }

  // Iterasi dengan forEach
  nilai.forEach((item) =&gt; print(item));

  // Map untuk transformasi
  var doubled = nilai.map((n) =&gt; n * 2).toList();

  // Where untuk filter
  var genap = nilai.where((n) =&gt; n % 2 == 0).toList();
}</code></pre>
            `
        }
    ],

    // ==================== SET ====================
    set: [
        {
            content: `
                <h2>🔢 Set - Penjelasan</h2>
                <p><strong>Set</strong> adalah koleksi item unik yang tidak terurut. Set tidak mengizinkan duplikasi dan sangat efisien untuk operasi pencarian.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">Set&lt;TipeData&gt; namaSet = {elemen1, elemen2};
// atau
var namaSet = &lt;TipeData&gt;{};</code></pre>

                <div class="info-box warning">
                    <h4>⚠️ Perhatian</h4>
                    <p><code>{}</code> tanpa tipe = <strong>Map</strong>, bukan Set!</p>
<pre><code class="language-dart">var mapKosong = {};      // ini Map
var setKosong = &lt;int&gt;{}; // ini Set</code></pre>
                </div>
            `
        },
        {
            content: `
                <h2>🔢 Set - Keunikan Elemen</h2>
                
<pre><code class="language-dart">void main() {
  // Set dengan tipe data spesifik
  Set&lt;int&gt; angkaUnik = {1, 2, 3, 4, 5};
  print(angkaUnik); // {1, 2, 3, 4, 5}

  // Set otomatis menghapus duplikat!
  Set&lt;int&gt; denganDuplikat = {1, 2, 2, 3, 3, 3, 4};
  print(denganDuplikat); // {1, 2, 3, 4}

  // Set kosong
  var buah = &lt;String&gt;{};
}</code></pre>

                <div class="info-box tip">
                    <h4>✅ Kapan Pakai Set?</h4>
                    <ul>
                        <li>Perlu menyimpan nilai unik</li>
                        <li>Perlu cek keberadaan elemen dengan cepat</li>
                        <li>Perlu menghilangkan duplikat dari List</li>
                    </ul>
                </div>
            `
        },
        {
            content: `
                <h2>🔢 Set - Operasi Dasar</h2>
                
<pre><code class="language-dart">void main() {
  Set&lt;String&gt; buah = {};

  // Menambah elemen
  buah.add('Apel');
  buah.add('Jeruk');
  buah.add('Mangga');
  buah.add('Apel'); // Tidak ditambahkan (duplikat)

  print(buah); // {Apel, Jeruk, Mangga}
  print(buah.length); // 3

  // Menambah beberapa sekaligus
  buah.addAll(['Pisang', 'Anggur']);

  // Menghapus elemen
  buah.remove('Jeruk');

  // Mengecek keberadaan
  print(buah.contains('Apel')); // true
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔢 Set - Konversi dengan List</h2>
                
<pre><code class="language-dart">void main() {
  // List ke Set (menghilangkan duplikat)
  List&lt;int&gt; arrayAngka = [1, 2, 2, 3, 4, 4, 5];
  Set&lt;int&gt; setAngka = arrayAngka.toSet();
  print(setAngka); // {1, 2, 3, 4, 5}

  // Set ke List
  List&lt;int&gt; listDariSet = setAngka.toList();
  print(listDariSet); // [1, 2, 3, 4, 5]

  // Menghilangkan duplikat dari List
  List&lt;String&gt; nama = ['Andi', 'Budi', 'Andi', 'Citra'];
  List&lt;String&gt; namaUnik = nama.toSet().toList();
  print(namaUnik); // [Andi, Budi, Citra]
}</code></pre>

                <div class="info-box tip">
                    <h4>💡 Trick: Hapus Duplikat</h4>
                    <p><code>list.toSet().toList()</code> = List tanpa duplikat!</p>
                </div>
            `
        },
        {
            content: `
                <h2>🔢 Set - Operasi Set</h2>
                
<pre><code class="language-dart">void main() {
  Set&lt;int&gt; setA = {1, 2, 3, 4};
  Set&lt;int&gt; setB = {3, 4, 5, 6};

  // Union (gabungan)
  var union = setA.union(setB);
  print('Union: ' + union.toString());

  // Intersection (irisan)
  var intersection = setA.intersection(setB);
  print('Intersection: ' + intersection.toString());

  // Difference (selisih)
  var difference = setA.difference(setB);
  print('Difference: ' + difference.toString());
}</code></pre>

                <table>
                    <tr><th>Operasi</th><th>Hasil</th></tr>
                    <tr><td><code>.union()</code></td><td>Semua elemen dari kedua set</td></tr>
                    <tr><td><code>.intersection()</code></td><td>Elemen yang sama</td></tr>
                    <tr><td><code>.difference()</code></td><td>Elemen hanya di set pertama</td></tr>
                </table>
            `
        }
    ],

    // ==================== MAP ====================
    map: [
        {
            content: `
                <h2>🗺️ Map - Penjelasan</h2>
                <p><strong>Map</strong> adalah koleksi pasangan <strong>key-value</strong> (kunci-nilai). Key bersifat unik, sedangkan value bisa duplikat.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">Map&lt;KeyType, ValueType&gt; namaMap = {
  key1: value1, 
  key2: value2
};
// atau
var namaMap = &lt;KeyType, ValueType&gt;{};</code></pre>

                <div class="info-box">
                    <h4>💡 Poin Penting</h4>
                    <ul>
                        <li>Key harus unik</li>
                        <li>Value bisa duplikat</li>
                        <li>Cocok untuk data yang memiliki identifier</li>
                    </ul>
                </div>
            `
        },
        {
            content: `
                <h2>🗺️ Map - Membuat Map</h2>
                
<pre><code class="language-dart">void main() {
  // Map dengan tipe data spesifik
  Map&lt;String, String&gt; siswa = {
    'nama': 'Budi',
    'kelas': '11 IPA',
    'sekolah': 'SMA Negeri 1'
  };
  print(siswa);

  // Map dengan tipe berbeda
  Map&lt;String, dynamic&gt; produk = {
    'nama': 'Laptop',
    'harga': 8000000,
    'stok': 10,
    'tersedia': true
  };
  print(produk);

  // Map kosong
  var nilai = &lt;String, int&gt;{};
}</code></pre>
            `
        },
        {
            content: `
                <h2>🗺️ Map - Akses & Modifikasi</h2>
                
<pre><code class="language-dart">void main() {
  Map&lt;String, int&gt; umur = {
    'Andi': 17,
    'Budi': 18,
    'Citra': 17
  };

  // Mengakses nilai
  print(umur['Andi']); // 17
  print(umur['Deni']); // null (key tidak ada)

  // Menambah data baru
  umur['Deni'] = 19;

  // Mengupdate nilai
  umur['Andi'] = 18;

  // Menghapus data
  umur.remove('Budi');

  // Mengecek key & value
  print(umur.containsKey('Citra')); // true
  print(umur.containsValue(17)); // true

  // Ukuran Map
  print(umur.length); // 3
}</code></pre>
            `
        },
        {
            content: `
                <h2>🗺️ Map - Iterasi</h2>
                
<pre><code class="language-dart">void main() {
  Map&lt;String, int&gt; nilai = {
    'Matematika': 85,
    'Fisika': 90,
    'Kimia': 88
  };

  // Iterasi keys
  for (var key in nilai.keys) {
    print(key);
  }

  // Iterasi values
  for (var value in nilai.values) {
    print(value);
  }

  // Iterasi key-value dengan forEach
  nilai.forEach((key, value) {
    print(key + ': ' + value.toString());
  });

  // Menggunakan entries
  for (var entry in nilai.entries) {
    print(entry.key + ': ' + entry.value.toString());
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>🗺️ Map - Nested Map</h2>
                
<pre><code class="language-dart">void main() {
  // Map bersarang
  Map&lt;String, Map&lt;String, dynamic&gt;&gt; mahasiswa = {
    'M001': {
      'nama': 'Andi Pratama',
      'jurusan': 'Informatika',
      'ipk': 3.75
    },
    'M002': {
      'nama': 'Siti Nurhaliza',
      'jurusan': 'Sistem Informasi',
      'ipk': 3.85
    }
  };

  // Akses nested data
  print(mahasiswa['M001']?['nama']); // Andi Pratama
  print(mahasiswa['M002']?['ipk']); // 3.85

  // Iterasi nested map
  mahasiswa.forEach((nim, data) {
    print('NIM: ' + nim);
    print('Nama: ' + data['nama']);
    print('---');
  });
}</code></pre>
            `
        }
    ],

    // ==================== SYMBOL ====================
    symbol: [
        {
            content: `
                <h2>🔣 Symbol - Penjelasan</h2>
                <p><strong>Symbol</strong> adalah identifier unik yang digunakan untuk metadata dan reflection. Symbol berguna untuk menghindari konflik nama.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">Symbol namaSymbol = #namaIdentifier;</code></pre>

                <div class="info-box">
                    <h4>💡 Kapan Pakai Symbol?</h4>
                    <ul>
                        <li>Konstanta yang tidak berubah</li>
                        <li>Key untuk Map tanpa konflik dengan String</li>
                        <li>Event types dan routing identifiers</li>
                        <li>Reflection dan metadata</li>
                    </ul>
                </div>
            `
        },
        {
            content: `
                <h2>🔣 Symbol - Membuat Symbol</h2>
                
<pre><code class="language-dart">void main() {
  // Membuat Symbol
  Symbol sym1 = #halo;
  Symbol sym2 = #halo;
  Symbol sym3 = #dunia;

  print(sym1); // Symbol("halo")
  
  // Symbol dengan nama sama = sama
  print(sym1 == sym2); // true
  print(sym1 == sym3); // false

  // Symbol dari String
  var symFromString = Symbol('greeting');
  print(symFromString); // Symbol("greeting")
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔣 Symbol - Dalam Map</h2>
                
<pre><code class="language-dart">void main() {
  // Menggunakan Symbol sebagai key
  Map&lt;Symbol, String&gt; konfigurasi = {
    #nama: 'Aplikasi Saya',
    #versi: '1.0.0',
    #author: 'Developer'
  };

  print(konfigurasi[#nama]); // Aplikasi Saya
  print(konfigurasi[#versi]); // 1.0.0

  // Symbol mencegah konflik dengan string key
  Map&lt;dynamic, String&gt; campuran = {
    'nama': 'String key',
    #nama: 'Symbol key'
  };

  print(campuran['nama']); // String key
  print(campuran[#nama]); // Symbol key
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔣 Symbol - Untuk Konstanta</h2>
                
<pre><code class="language-dart">// Symbol sering digunakan untuk konstanta
class EventType {
  static const Symbol onStart = #onStart;
  static const Symbol onStop = #onStop;
  static const Symbol onPause = #onPause;
}

void main() {
  Symbol currentEvent = EventType.onStart;

  if (currentEvent == EventType.onStart) {
    print('Aplikasi dimulai');
  } else if (currentEvent == EventType.onStop) {
    print('Aplikasi dihentikan');
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔣 Symbol - Use Case Praktis</h2>
                
<pre><code class="language-dart">// Symbol untuk routing identifiers
class Routes {
  static const Symbol home = #home;
  static const Symbol profile = #profile;
  static const Symbol settings = #settings;
}

void navigateTo(Symbol route) {
  if (route == Routes.home) {
    print('Navigasi ke Home');
  } else if (route == Routes.profile) {
    print('Navigasi ke Profile');
  }
}

// Symbol untuk event types
Map&lt;Symbol, Function&gt; eventHandlers = {
  #onClick: () =&gt; print('Button clicked'),
  #onHover: () =&gt; print('Mouse hover'),
  #onSubmit: () =&gt; print('Form submitted'),
};

void main() {
  navigateTo(Routes.home);
  eventHandlers[#onClick]?.call();
}</code></pre>
            `
        }
    ],

    // ==================== IF ELSE ====================
    ifelse: [
        {
            content: `
                <h2>🔀 If & Else - Penjelasan</h2>
                <p><strong>If dan Else</strong> adalah struktur kontrol untuk membuat keputusan. Kode dijalankan berdasarkan kondisi <code>true</code> atau <code>false</code>.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">if (kondisi) {
  // kode jika kondisi true
} else if (kondisi2) {
  // kode jika kondisi2 true
} else {
  // kode jika semua kondisi false
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔀 If & Else - If Sederhana</h2>
                
<pre><code class="language-dart">void main() {
  int usia = 18;

  // If sederhana
  if (usia &gt;= 17) {
    print('Anda sudah boleh memiliki SIM');
  }

  // If-Else
  int nilai = 75;

  if (nilai &gt;= 75) {
    print('Lulus');
  } else {
    print('Tidak Lulus');
  }

  // Output: Anda sudah boleh memiliki SIM
  // Output: Lulus
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔀 If & Else - If-Else If-Else</h2>
                
<pre><code class="language-dart">void main() {
  int score = 85;
  String grade;

  if (score &gt;= 90) {
    grade = 'A';
  } else if (score &gt;= 80) {
    grade = 'B';
  } else if (score &gt;= 70) {
    grade = 'C';
  } else if (score &gt;= 60) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  print('Grade: ' + grade); // Grade: B
}</code></pre>
            `
        },
        {
            content: `
                <h2>🔀 If & Else - Nested If</h2>
                
<pre><code class="language-dart">void main() {
  bool sudahLogin = true;
  bool isPremium = true;

  if (sudahLogin) {
    if (isPremium) {
      print('Akses penuh diberikan');
    } else {
      print('Akses terbatas');
    }
  } else {
    print('Silakan login terlebih dahulu');
  }

  // Output: Akses penuh diberikan
}</code></pre>

                <div class="info-box warning">
                    <h4>⚠️ Hindari Nested If Terlalu Dalam</h4>
                    <p>Jika terlalu banyak nested if, pertimbangkan refactor dengan early return atau switch case.</p>
                </div>
            `
        },
        {
            content: `
                <h2>🔀 If & Else - Operator Logika</h2>
                
<pre><code class="language-dart">void main() {
  String username = 'admin';
  String password = '12345';

  // AND (&&) - semua kondisi harus true
  if (username == 'admin' && password == '12345') {
    print('Login berhasil');
  }

  // OR (||) - salah satu kondisi true
  String hari = 'Sabtu';
  if (hari == 'Sabtu' || hari == 'Minggu') {
    print('Akhir pekan!');
  }

  // NOT (!) - membalik boolean
  bool sudahBayar = false;
  if (!sudahBayar) {
    print('Silakan lakukan pembayaran');
  }
}</code></pre>

                <table>
                    <tr><th>Operator</th><th>Nama</th><th>Kondisi True</th></tr>
                    <tr><td><code>&&</code></td><td>AND</td><td>Semua true</td></tr>
                    <tr><td><code>||</code></td><td>OR</td><td>Salah satu true</td></tr>
                    <tr><td><code>!</code></td><td>NOT</td><td>Membalik nilai</td></tr>
                </table>
            `
        },
        {
            content: `
                <h2>🔀 If & Else - Ternary Operator</h2>
                
<pre><code class="language-dart">void main() {
  int umur = 20;

  // Ternary operator
  // kondisi ? nilaiJikaTrue : nilaiJikaFalse
  String status = (umur &gt;= 18) ? 'Dewasa' : 'Belum Dewasa';
  print(status); // Dewasa

  // Nested ternary (tidak disarankan jika kompleks)
  int nilai = 85;
  String grade = (nilai &gt;= 90) ? 'A' :
                 (nilai &gt;= 80) ? 'B' :
                 (nilai &gt;= 70) ? 'C' : 'D';
  print('Grade: ' + grade); // Grade: B

  // Null-aware operator (??)
  String? nama;
  String tampilNama = nama ?? 'Nama tidak tersedia';
  print(tampilNama);

  // If-null assignment (??=)
  int? angka;
  angka ??= 10; // Assign jika null
  print(angka); // 10
}</code></pre>
            `
        }
    ],

    // ==================== SWITCH ====================
    switch: [
        {
            content: `
                <h2>🎛️ Switch Case - Penjelasan</h2>
                <p><strong>Switch Case</strong> adalah alternatif dari If-Else untuk memeriksa nilai tunggal terhadap multiple case. Lebih mudah dibaca ketika ada banyak kondisi.</p>
                
                <h3>Sintaks Dasar</h3>
<pre><code class="language-dart">switch (ekspresi) {
  case nilai1:
    // kode
    break;
  case nilai2:
    // kode
    break;
  default:
    // kode jika tidak ada yang cocok
}</code></pre>
            `
        },
        {
            content: `
                <h2>🎛️ Switch Case - Contoh Dasar</h2>
                
<pre><code class="language-dart">void main() {
  int hari = 3;
  String namaHari;

  switch (hari) {
    case 1:
      namaHari = 'Senin';
      break;
    case 2:
      namaHari = 'Selasa';
      break;
    case 3:
      namaHari = 'Rabu';
      break;
    case 4:
      namaHari = 'Kamis';
      break;
    case 5:
      namaHari = 'Jumat';
      break;
    case 6:
      namaHari = 'Sabtu';
      break;
    case 7:
      namaHari = 'Minggu';
      break;
    default:
      namaHari = 'Hari tidak valid';
  }

  print(namaHari); // Rabu
}</code></pre>
            `
        },
        {
            content: `
                <h2>🎛️ Switch Case - Multiple Cases</h2>
                
<pre><code class="language-dart">void main() {
  String bulan = 'Februari';

  switch (bulan) {
    case 'Desember':
    case 'Januari':
    case 'Februari':
      print('Musim: Hujan');
      break;
    case 'Maret':
    case 'April':
    case 'Mei':
      print('Musim: Peralihan');
      break;
    case 'Juni':
    case 'Juli':
    case 'Agustus':
      print('Musim: Kemarau');
      break;
    default:
      print('Musim: Peralihan');
  }
  // Output: Musim: Hujan
}</code></pre>

                <div class="info-box tip">
                    <h4>💡 Tips</h4>
                    <p>Gunakan multiple cases untuk menggabungkan kondisi yang memiliki hasil sama!</p>
                </div>
            `
        },
        {
            content: `
                <h2>🎛️ Switch Case - Kalkulator</h2>
                
<pre><code class="language-dart">void main() {
  String operator = '+';
  double a = 10, b = 5;
  double hasil;

  switch (operator) {
    case '+':
      hasil = a + b;
      break;
    case '-':
      hasil = a - b;
      break;
    case '*':
      hasil = a * b;
      break;
    case '/':
      if (b != 0) {
        hasil = a / b;
      } else {
        print('Error: Tidak bisa membagi dengan 0');
        return;
      }
      break;
    default:
      print('Operator tidak valid');
      return;
  }

  print(a.toString() + ' ' + operator + ' ' + b.toString() + ' = ' + hasil.toString());
}</code></pre>
            `
        },
        {
            content: `
                <h2>🎛️ Switch Case - Dart 3 Pattern Matching</h2>
                
<pre><code class="language-dart">void main() {
  // Switch expression (Dart 3)
  int angka = 2;
  String hasil = switch (angka) {
    1 =&gt; 'Satu',
    2 =&gt; 'Dua',
    3 =&gt; 'Tiga',
    _ =&gt; 'Lainnya'
  };
  print(hasil); // Dua

  // Switch dengan range
  int nilai = 85;
  String grade = switch (nilai) {
    &gt;= 90 && &lt;= 100 =&gt; 'A',
    &gt;= 80 && &lt; 90 =&gt; 'B',
    &gt;= 70 && &lt; 80 =&gt; 'C',
    &gt;= 60 && &lt; 70 =&gt; 'D',
    _ =&gt; 'E'
  };
  print('Grade: ' + grade); // Grade: B
}</code></pre>

                <div class="info-box">
                    <h4>🆕 Dart 3 Features</h4>
                    <ul>
                        <li><code>=&gt;</code> untuk return langsung</li>
                        <li><code>_</code> sebagai default</li>
                        <li>Pattern matching dengan range</li>
                    </ul>
                </div>
            `
        }
    ],

    // ==================== BREAK CONTINUE ====================
    breakContinue: [
        {
            content: `
                <h2>⏭️ Break & Continue - Penjelasan</h2>
                <ul>
                    <li><strong>Break</strong>: Menghentikan loop sepenuhnya dan keluar</li>
                    <li><strong>Continue</strong>: Melewati iterasi saat ini, lanjut ke berikutnya</li>
                </ul>
                
                <h3>Sintaks</h3>
<pre><code class="language-dart">// Break - keluar dari loop
for (int i = 0; i &lt; 10; i++) {
  if (kondisi) break;
}

// Continue - skip ke iterasi berikutnya
for (int i = 0; i &lt; 10; i++) {
  if (kondisi) continue;
  // kode ini di-skip jika continue
}</code></pre>
            `
        },
        {
            content: `
                <h2>⏭️ Break - Dalam Loop</h2>
                
<pre><code class="language-dart">void main() {
  // Mencari angka tertentu
  print('Mencari angka 5:');
  for (int i = 1; i &lt;= 10; i++) {
    if (i == 5) {
      print('Angka 5 ditemukan!');
      break; // Berhenti saat menemukan 5
    }
    print(i);
  }

  // Output:
  // 1
  // 2
  // 3
  // 4
  // Angka 5 ditemukan!
}</code></pre>

                <div class="info-box">
                    <h4>💡 Kapan Pakai Break?</h4>
                    <p>Gunakan break ketika sudah menemukan yang dicari atau perlu berhenti di tengah loop.</p>
                </div>
            `
        },
        {
            content: `
                <h2>⏭️ Continue - Dalam Loop</h2>
                
<pre><code class="language-dart">void main() {
  // Melewati angka genap, print ganjil saja
  print('Angka ganjil dari 1-10:');
  for (int i = 1; i &lt;= 10; i++) {
    if (i % 2 == 0) {
      continue; // Lewati angka genap
    }
    print(i);
  }
  // Output: 1, 3, 5, 7, 9

  // Filter siswa yang lulus
  List&lt;int&gt; nilaiSiswa = [85, 45, 90, 60, 75, 50, 95];
  
  print('Siswa yang lulus (nilai &gt;= 70):');
  for (var nilai in nilaiSiswa) {
    if (nilai &lt; 70) continue; // Skip nilai &lt; 70
    print('Nilai: ' + nilai.toString());
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>⏭️ Break - Dalam Switch</h2>
                
<pre><code class="language-dart">void main() {
  int pilihan = 2;

  switch (pilihan) {
    case 1:
      print('Pilihan 1');
      break; // Keluar dari switch
    case 2:
      print('Pilihan 2');
      break;
    case 3:
      print('Pilihan 3');
      break;
    default:
      print('Pilihan tidak valid');
  }
}</code></pre>

                <div class="info-box warning">
                    <h4>⚠️ Penting!</h4>
                    <p>Dart mengharuskan <code>break</code> di akhir setiap case. Tanpa break akan error!</p>
                </div>
            `
        },
        {
            content: `
                <h2>⏭️ Nested Loop - Break & Continue</h2>
                
<pre><code class="language-dart">void main() {
  // Break dalam nested loop (keluar inner loop saja)
  for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
      if (i == 2 && j == 2) {
        break; // Keluar dari inner loop saja
      }
      print('i: ' + i.toString() + ', j: ' + j.toString());
    }
  }

  // Continue dalam nested loop
  for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
      if (i == 2 && j == 2) {
        continue; // Lewati iterasi ini saja
      }
      print('i: ' + i.toString() + ', j: ' + j.toString());
    }
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>⏭️ Labeled Break & Continue</h2>
                
<pre><code class="language-dart">void main() {
  // Labeled break - keluar dari outer loop
  outerLoop:
  for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
      if (i == 2 && j == 2) {
        print('Breaking outer loop');
        break outerLoop; // Keluar dari outer loop!
      }
      print('i: ' + i.toString() + ', j: ' + j.toString());
    }
  }

  // Labeled continue - lanjut ke outer loop
  outerLoop2:
  for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
      if (j == 2) {
        continue outerLoop2; // Lanjut ke iterasi outer
      }
      print('i: ' + i.toString() + ', j: ' + j.toString());
    }
  }
}</code></pre>

                <div class="info-box tip">
                    <h4>💡 Labeled Statement</h4>
                    <p>Gunakan label untuk mengontrol loop mana yang ingin di-break atau di-continue dalam nested loop.</p>
                </div>
            `
        }
    ],

    // ==================== MINI PROJECTS ====================
    miniProjects: [
        {
            content: `
                <h2>💻 Mini Project 1: Daftar Belanja</h2>
                <p><strong>Deskripsi:</strong> Program untuk mengelola daftar belanja dengan fitur tambah, hapus, dan cek duplikat.</p>
                
                <h3>Fitur:</h3>
                <ul>
                    <li>✅ <strong>List</strong> untuk menyimpan daftar belanja</li>
                    <li>✅ <strong>Set</strong> untuk mengecek dan menghapus duplikat</li>
                    <li>✅ <strong>If-Else</strong> untuk validasi input</li>
                    <li>✅ <strong>Loop dengan break/continue</strong> untuk pencarian</li>
                </ul>
                
<pre><code class="language-dart">class DaftarBelanja {
  List&lt;String&gt; items = [];
  Set&lt;String&gt; itemsUnik = {};

  void tambahItem(String item) {
    if (item.isEmpty) {
      print('Item tidak boleh kosong!');
      return;
    }
    if (itemsUnik.contains(item)) {
      print(item + ' sudah ada dalam daftar!');
      return;
    }
    items.add(item);
    itemsUnik.add(item);
    print(item + ' berhasil ditambahkan.');
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>💻 Mini Project 2: Sistem Penilaian</h2>
                <p><strong>Deskripsi:</strong> Program untuk menghitung nilai siswa dan menentukan grade.</p>
                
                <h3>Fitur:</h3>
                <ul>
                    <li>✅ <strong>Map</strong> untuk menyimpan data siswa (nama: nilai)</li>
                    <li>✅ <strong>Switch Case</strong> untuk menentukan grade</li>
                    <li>✅ <strong>If-Else</strong> untuk status kelulusan</li>
                    <li>✅ <strong>Loop</strong> untuk memproses semua siswa</li>
                </ul>
                
<pre><code class="language-dart">class SistemPenilaian {
  Map&lt;String, int&gt; dataSiswa = {};

  String tentukanGrade(int nilai) {
    return switch (nilai) {
      &gt;= 90 && &lt;= 100 =&gt; 'A',
      &gt;= 80 && &lt; 90 =&gt; 'B',
      &gt;= 70 && &lt; 80 =&gt; 'C',
      &gt;= 60 && &lt; 70 =&gt; 'D',
      _ =&gt; 'E'
    };
  }

  String tentukanStatus(int nilai) {
    return nilai &gt;= 70 ? 'LULUS' : 'TIDAK LULUS';
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>💻 Mini Project 3: Sistem Inventory</h2>
                <p><strong>Deskripsi:</strong> Program untuk mengelola inventory barang dengan kode unik.</p>
                
                <h3>Fitur:</h3>
                <ul>
                    <li>✅ <strong>List of Maps</strong> untuk menyimpan data barang</li>
                    <li>✅ <strong>If-Else</strong> untuk validasi stok</li>
                    <li>✅ <strong>Break</strong> untuk pencarian barang</li>
                    <li>✅ <strong>Symbol</strong> untuk konstanta kategori</li>
                </ul>
                
<pre><code class="language-dart">class Inventory {
  List&lt;Map&lt;String, dynamic&gt;&gt; barangList = [];
  
  static const Symbol elektronik = #elektronik;
  static const Symbol makanan = #makanan;

  void updateStok(String nama, int jumlah) {
    var barang = cariBarang(nama);
    if (barang == null) {
      print('Barang tidak ditemukan.');
      return;
    }
    int stokBaru = barang['stok'] + jumlah;
    if (stokBaru &lt; 0) {
      print('Stok tidak mencukupi!');
      return;
    }
    barang['stok'] = stokBaru;
  }
}</code></pre>
            `
        },
        {
            content: `
                <h2>💻 Mini Project 4: Kalkulator Menu</h2>
                <p><strong>Deskripsi:</strong> Kalkulator sederhana dengan menu menggunakan switch case dan validasi input.</p>
                
                <h3>Fitur:</h3>
                <ul>
                    <li>✅ <strong>Switch Case</strong> untuk memilih operasi</li>
                    <li>✅ <strong>If-Else</strong> untuk validasi input</li>
                    <li>✅ <strong>Loop dengan break</strong> untuk menu</li>
                    <li>✅ <strong>Continue</strong> untuk error handling</li>
                </ul>
                
<pre><code class="language-dart">class Kalkulator {
  List&lt;String&gt; riwayat = [];

  void jalankan() {
    while (true) {
      tampilkanMenu();
      String? pilihan = stdin.readLineSync();
      
      if (pilihan == '8') {
        print('Terima kasih!');
        break;
      }
      
      switch (pilihan) {
        case '1': hasil = a + b; break;
        case '2': hasil = a - b; break;
        case '3': hasil = a * b; break;
        case '4':
          if (b == 0) { print('Error!'); continue; }
          hasil = a / b;
          break;
        default: print('Invalid'); continue;
      }
    }
  }
}</code></pre>
            `
        }
    ],

    // ==================== TUGAS RUMAH ====================
    tugasRumah: [
        {
            content: `
                <h2>📝 Panduan Umum & Best Practices</h2>
                
                <h3>🧠 Code Organization</h3>
<pre><code class="language-dart">// 1. Imports
import 'dart:io';
import 'dart:math';

// 2. Constants
const int MAX_ATTEMPTS = 5;

// 3. Classes
class MyClass { }

// 4. Main function
void main() { }</code></pre>

                <h3>📋 Naming Convention</h3>
                <table>
                    <tr><th>Jenis</th><th>Style</th><th>Contoh</th></tr>
                    <tr><td>Class</td><td>PascalCase</td><td><code>ContohClass</code></td></tr>
                    <tr><td>Variable & Function</td><td>camelCase</td><td><code>namaVariabel</code></td></tr>
                    <tr><td>Constant</td><td>lowerCamelCase</td><td><code>maxAttempts</code></td></tr>
                    <tr><td>Private</td><td>underscore prefix</td><td><code>_privateVar</code></td></tr>
                </table>

                <h3>💡 Tips Mengerjakan Tugas</h3>
                <ul>
                    <li>Kolaborasi dan diskusi dengan teman</li>
                    <li>Gunakan <code>print()</code> untuk debugging</li>
                    <li>Test setiap bagian sebelum lanjut ke fitur berikutnya</li>
                    <li>Kerjakan satu fitur dalam satu waktu</li>
                </ul>
            `
        },
        {
            content: `
                <h2>📝 Tugas 1: Aplikasi To-Do List</h2>
                
                <h3>📌 Deskripsi</h3>
                <p>Buat aplikasi to-do list dengan fitur <strong>prioritas</strong> dan <strong>status</strong>.</p>

                <h3>🔧 Requirements</h3>
                <ul>
                    <li><strong>List</strong> untuk menyimpan tasks</li>
                    <li><strong>Map</strong> untuk menyimpan kategori tasks</li>
                    <li><strong>Set</strong> untuk tag unik</li>
                    <li><strong>If-Else</strong> untuk validasi</li>
                    <li><strong>Switch</strong> untuk prioritas (Tinggi, Sedang, Rendah)</li>
                    <li><strong>Break/Continue</strong> untuk pencarian dan filter</li>
                </ul>

                <h3>📦 Struktur Data</h3>
<pre><code class="language-dart">class Task {
  int id;
  String judul;
  String prioritas;    // Tinggi, Sedang, Rendah
  String kategori;
  bool selesai;
  Set&lt;String&gt; tags;
  DateTime tanggalDibuat;

  Task({
    required this.id,
    required this.judul,
    required this.prioritas,
    required this.kategori,
    this.selesai = false,
    Set&lt;String&gt;? tags,
  }) : tags = tags ?? {},
       tanggalDibuat = DateTime.now();
}</code></pre>

                <h3>✅ Fitur yang Harus Ada</h3>
                <ol>
                    <li>Tambah, edit, hapus task</li>
                    <li>Tandai selesai/belum selesai</li>
                    <li>Filter berdasarkan status & prioritas</li>
                    <li>Cari task berdasarkan kata kunci</li>
                    <li>Statistik tugas</li>
                </ol>
            `
        },
        {
            content: `
                <h2>📝 Tugas 2: Sistem Perpustakaan</h2>
                
                <h3>📌 Deskripsi</h3>
                <p>Buat sistem manajemen perpustakaan dengan fitur <strong>peminjaman buku</strong>.</p>

                <h3>🔧 Requirements</h3>
                <ul>
                    <li><strong>List</strong> untuk daftar buku</li>
                    <li><strong>Map</strong> untuk data peminjaman (ID buku : peminjam)</li>
                    <li><strong>Set</strong> untuk genre buku</li>
                    <li><strong>Symbol</strong> untuk status buku</li>
                    <li><strong>If-Else</strong> untuk cek ketersediaan</li>
                    <li><strong>Switch</strong> untuk kategori usia</li>
                    <li><strong>Break</strong> untuk berhenti saat buku ditemukan</li>
                </ul>

                <h3>📦 Struktur Data</h3>
<pre><code class="language-dart">class Buku {
  String id;
  String judul;
  String pengarang;
  String genre;
  String kategoriUsia;  // Anak, Remaja, Dewasa
  int tahunTerbit;
  bool tersedia;
}

class DataPeminjaman {
  String namaPeminjam;
  DateTime tanggalPinjam;
  DateTime? tanggalKembali;
}</code></pre>

                <h3>✅ Fitur yang Harus Ada</h3>
                <ol>
                    <li>Tambah dan hapus buku</li>
                    <li>Pinjam & kembalikan buku</li>
                    <li>Cari berdasarkan judul/pengarang</li>
                    <li>Filter berdasarkan genre & kategori usia</li>
                    <li>Daftar peminjam terlambat (&gt;7 hari)</li>
                    <li><strong>Bonus:</strong> Rating, review, denda keterlambatan</li>
                </ol>
            `
        },
        {
            content: `
                <h2>📝 Tugas 3: Aplikasi Kasir</h2>
                
                <h3>📌 Deskripsi</h3>
                <p>Buat sistem kasir dengan fitur <strong>keranjang belanja</strong> dan <strong>promo</strong>.</p>

                <h3>🔧 Requirements</h3>
                <ul>
                    <li><strong>List</strong> untuk keranjang belanja</li>
                    <li><strong>Map</strong> untuk daftar produk (kode: data)</li>
                    <li><strong>Set</strong> untuk kode promo yang valid</li>
                    <li><strong>If-Else</strong> untuk validasi stok dan promo</li>
                    <li><strong>Switch</strong> untuk metode pembayaran</li>
                    <li><strong>Break/Continue</strong> untuk proses pembayaran</li>
                </ul>

                <h3>💰 Rumus & Promo</h3>
<pre><code class="language-dart">// Rumus Total
Total = (Subtotal - Diskon) + BiayaAdmin

// Biaya Admin per Metode
// E-Wallet: Rp 1.000
// Credit: 2% dari subtotal  
// Debit & Cash: 0%

// Kode Promo
// MEMBER25 = 25% (min. Rp100.000)
// HEMAT15 = 15%
// DISKON20 = 20%
// DISKON10 = 10%</code></pre>

                <h3>✅ Fitur yang Harus Ada</h3>
                <ol>
                    <li>Tampilkan daftar produk</li>
                    <li>Tambah & hapus item dari keranjang</li>
                    <li>Hitung subtotal & total</li>
                    <li>Input promo dan metode pembayaran</li>
                    <li>Proses pembayaran & kembalian</li>
                    <li>Cetak struk dan history transaksi</li>
                </ol>
            `
        },
        {
            content: `
                <h2>📝 Tugas 4: Game Tebak Angka</h2>
                
                <h3>📌 Deskripsi</h3>
                <p>Buat game tebak angka dengan <strong>level kesulitan</strong>, <strong>sistem skor</strong>, dan <strong>leaderboard</strong>.</p>

                <h3>🔧 Requirements</h3>
                <ul>
                    <li><strong>List</strong> untuk riwayat tebakan</li>
                    <li><strong>Map</strong> untuk leaderboard</li>
                    <li><strong>Set</strong> untuk angka yang sudah ditebak</li>
                    <li><strong>Symbol</strong> untuk status game</li>
                    <li><strong>If-Else</strong> untuk validasi & logika</li>
                    <li><strong>Switch</strong> untuk level kesulitan</li>
                    <li><strong>Break</strong> untuk berhenti saat menang</li>
                    <li><strong>Continue</strong> untuk tebakan invalid</li>
                </ul>

                <h3>🎮 Level Kesulitan</h3>
                <table>
                    <tr><th>Level</th><th>Range</th><th>Percobaan</th><th>Multiplier</th></tr>
                    <tr><td>Mudah</td><td>1-50</td><td>10x</td><td>1x</td></tr>
                    <tr><td>Sedang</td><td>1-100</td><td>7x</td><td>2x</td></tr>
                    <tr><td>Sulit</td><td>1-200</td><td>5x</td><td>3x</td></tr>
                </table>

                <h3>📊 Rumus Skor</h3>
<pre><code class="language-dart">int hitungSkor(int sisaPercobaan, String level, 
               bool bonus3Percobaan, bool tanpaHint) {
  int baseScore = sisaPercobaan * 100;
  
  int multiplier = switch(level) {
    'Mudah' =&gt; 1,
    'Sedang' =&gt; 2,
    'Sulit' =&gt; 3,
    _ =&gt; 1
  };
  
  int skor = baseScore * multiplier;
  if (bonus3Percobaan) skor += 500;  // Menang &lt;=3 percobaan
  if (tanpaHint) skor += 200;         // Tidak pakai hint
  
  return skor;
}</code></pre>

                <h3>✅ Fitur yang Harus Ada</h3>
                <ol>
                    <li>Pilih level (Mudah, Sedang, Sulit)</li>
                    <li>Gameplay tebak angka dengan hint</li>
                    <li>Sistem skor & leaderboard top 10</li>
                    <li>Validasi input & riwayat tebakan</li>
                    <li>Opsi main lagi</li>
                </ol>
            `
        }
    ]
};
