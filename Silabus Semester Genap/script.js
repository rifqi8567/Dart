// Basis Data 32 Pertemuan Silabus Dart Semester Genap
const meetingsData = [
  {
    no: 1,
    topic: "Orientasi Kelas & Kontrak Belajar",
    chapter: "Lainnya",
    babIndex: 0,
    jp: 2,
    competence: "Memahami aturan kelas, kontrak belajar, alur belajar, dan penilaian.",
    activity: "Penjelasan sistem penilaian, tata tertib, instalasi portal materi, dan pengenalan roadmap belajar.",
    assessment: "Observasi keaktifan & kesepakatan belajar",
    details: "Pertemuan perdana ini berfokus untuk menyamakan persepsi, menjelaskan aturan kelas, pembagian kelompok, kriteria kelulusan, dan cara menggunakan portal belajar Dart Masterclass.",
    code: `// Contoh Kontrak Belajar & Struktur Folder Project Dart
// Biasanya project Dart mengikuti struktur berikut:
//
// my_project/
// ├── .dart_tool/      <- Cache Dart (dibuat otomatis)
// ├── bin/             <- Berisi file eksekusi utama (main.dart)
// ├── lib/             <- Berisi kode modul/library utama
// ├── test/            <- Berisi file pengujian (unit testing)
// └── pubspec.yaml     <- File konfigurasi project & dependency
//
void main() {
  print("Selamat datang di Kelas Pemrograman Dart Kelas 10B!");
  print("Mari sepakati kontrak belajar: Hadir tepat waktu & aktif praktik!");
}`
  },
  {
    no: 2,
    topic: "Bab 1: Sejarah & Fitur Utama Dart",
    chapter: "Bab 1",
    babIndex: 1,
    jp: 2,
    competence: "Menjelaskan pengertian Dart, sejarah, dan keunggulan ekosistemnya.",
    activity: "Membahas penemu Dart (Lars Bak & Kasper Lund), compiler JIT vs AOT, dan keunggulan Single-threaded Event Loop.",
    assessment: "Tanya jawab lisan & keaktifan diskusi",
    details: "Belajar latar belakang Dart yang dikembangkan oleh Google, perannya dalam Flutter, dan bagaimana kompilasi JIT (Just-In-Time) membantu reload cepat saat development sedangkan AOT (Ahead-Of-Time) membuat aplikasi rilis berjalan sangat kencang.",
    code: `// Kenapa harus Dart? Ini 3 Fitur Utamanya:
void main() {
  // 1. Type Safety (Keamanan tipe data)
  String nama = "Ustadz Reifqi";
  
  // 2. Multi-platform (Bisa dicompile ke ARM, Intel, Web, dll.)
  print("Kompilasi AOT (Cepat saat Rilis) & JIT (Cepat saat Dev)");
  
  // 3. Garbage Collected (Alokasi & pembersihan memori otomatis)
  print("Memori aman berkat pengelolaan otomatis oleh runtime Dart!");
}`
  },
  {
    no: 3,
    topic: "Bab 1: Setup Workspace & Hello World",
    chapter: "Bab 1",
    babIndex: 1,
    jp: 2,
    competence: "Menyiapkan workspace coding lokal dan menjalankan program Dart pertama.",
    activity: "Instalasi Dart SDK di Windows, konfigurasi ekstensi VS Code, uji coba DartPad, dan menulis fungsi print pertama.",
    assessment: "Praktik individu (Menjalankan Hello World lokal)",
    details: "Mempraktikkan cara install Dart SDK, mengatur Environment Variable di Windows, memasang ekstensi Dart di VS Code, dan menjalankan perintah 'dart run' di terminal.",
    code: `// Program Pertama: Hello World!
// void main() adalah pintu masuk (entry point) program Dart.
void main() {
  // Perintah print() digunakan untuk mencetak tulisan ke terminal/layar
  print("Hello World!"); 
  print("Saya siap menguasai pemrograman Dart semester ini!");
}`
  },
  {
    no: 4,
    topic: "Bab 2: Struktur Kode Dart Dasar",
    chapter: "Bab 2",
    babIndex: 2,
    jp: 2,
    competence: "Memahami struktur anatomi program Dart, perbedaan Expression dan Statement.",
    activity: "Menganalisis kegunaan void main(), top-level variables, block code ({ }), dan menguji penulisan expression & statement.",
    assessment: "Analisis & pembetulan error struktur kode",
    details: "Membahas aturan penulisan huruf besar/kecil (case sensitive), titik koma (;) sebagai akhir statement, serta penggunaan kurung kurawal untuk membatasi block code program.",
    code: `// Struktur Dasar Dart
// 1. Import Library (Opsional)
import 'dart:math';

// 2. Top-Level Variable (Variabel di luar fungsi)
String namaSekolah = "Madrasah IT";

// 3. Fungsi Utama (Main Function)
void main() {
  // ini adalah statement (perintah untuk dieksekusi)
  int angka1 = 10; 
  int angka2 = 20;
  
  // ini adalah expression (sesuatu yang menghasilkan nilai)
  int hasil = angka1 + angka2; 
  
  print("Hasil penjumlahan: $hasil");
}`
  },
  {
    no: 5,
    topic: "Bab 2: Komentar & Standar Clean Code",
    chapter: "Bab 2",
    babIndex: 2,
    jp: 2,
    competence: "Menerapkan berbagai jenis komentar kode dan standar pemformatan clean code.",
    activity: "Menulis komentar dokumentasi (///), komentar multi-baris, dan melakukan perapian kode otomatis dengan perintah 'dart format'.",
    assessment: "Review kerapian kode & dokumentasi praktik",
    details: "Komentar yang baik membantu orang lain membaca kode kita. Dart memiliki tool 'dart format' yang otomatis merapikan jarak spasi dan baris sesuai standar Effective Dart.",
    code: `// 1. Single-line Comment (Komentar satu baris untuk catatan singkat)

/*
 * 2. Multi-line Comment
 * Digunakan untuk menulis catatan panjang atau menonaktifkan kode sementara.
 */

/// 3. Documentation Comment (Sangat disarankan di Dart!)
/// Digunakan untuk mendokumentasikan fungsi/kelas. 
/// Jika kita arahkan kursor di VS Code, teks ini akan muncul sebagai dokumentasi bantuan.
void hitungLuas() {
  // TODO: Implementasi rumus luas persegi panjang
  print("Fungsi ini untuk menghitung luas");
}`
  },
  {
    no: 6,
    topic: "Bab 3: Variabel, Type Inference & Dynamic",
    chapter: "Bab 3",
    babIndex: 3,
    jp: 2,
    competence: "Mendeklarasikan variabel dengan tipe data eksplisit (statis) maupun implisit (var & dynamic).",
    activity: "Eksperimen perbedaan deklarasi tipe eksplisit (String, int) vs keyword 'var' vs tipe fleksibel 'dynamic'.",
    assessment: "Latihan deklarasi variabel dan pelacakan tipe data",
    details: "Dart memiliki fitur Type Inference (otomatis mendeteksi tipe data ketika variabel diisi pertama kali jika memakai 'var'). Berbeda dengan 'dynamic', tipe datanya bisa berubah-ubah bahkan setelah dideklarasikan.",
    code: `void main() {
  // 1. Deklarasi Eksplisit (Tipe ditentukan di awal)
  String nama = "Rifqi";
  int umur = 17;
  
  // 2. Type Inference (Dart menebak: var ini adalah double)
  var ipk = 3.85; 
  // ipk = "Sempurna"; // ERROR! Karena ipk sudah dideteksi sebagai double
  
  // 3. Dynamic (Bebas berganti tipe data - gunakan seperlunya)
  dynamic dataAcak = 100;
  print("Data mula-mula: $dataAcak (Tipe: \${dataAcak.runtimeType})");
  
  dataAcak = "Sekarang jadi teks";
  print("Data sekarang: $dataAcak (Tipe: \${dataAcak.runtimeType})");
}`
  },
  {
    no: 7,
    topic: "Bab 3: final vs const, late, dan Scope",
    chapter: "Bab 3",
    babIndex: 3,
    jp: 2,
    competence: "Menerapkan variabel konstan (final & const), inisialisasi tertunda (late), dan memahami lingkup variabel (scope).",
    activity: "Menganalisis perbedaan runtime-const (final) vs compile-time const (const), pengujian keyword 'late', serta blok lingkup variabel.",
    assessment: "Kuis logika scope variabel & pembatasan akses",
    details: "Belajar mengunci nilai agar tidak bisa diubah. 'const' dikunci saat program dikompilasi, sedangkan 'final' dikunci saat baris kodenya dieksekusi di runtime. Keyword 'late' menunda inisialisasi variabel sampai ia dipanggil pertama kali.",
    code: `void main() {
  // 1. Final (Nilai ditentukan saat program berjalan/runtime)
  final DateTime waktuSekarang = DateTime.now();
  
  // 2. Const (Nilai harus sudah pasti saat kompilasi)
  const double pi = 3.14159;
  
  // 3. Late (Inisialisasi tertunda, berguna untuk hemat memori)
  late String deskripsiBerat;
  print("Mempersiapkan variabel late...");
  deskripsiBerat = "Data berat baru dihitung sekarang!"; // Baru diinisialisasi
  print(deskripsiBerat);
  
  // 4. Scope (Lingkup akses)
  {
    int variabelDalam = 99;
    print("Bisa diakses di dalam blok: $variabelDalam");
  }
  // print(variabelDalam); // ERROR! Variabel dalam tidak dikenal di luar blok
}`
  },
  {
    no: 8,
    topic: "Bab 4: Tipe Data int, double, num, String, bool",
    chapter: "Bab 4",
    babIndex: 4,
    jp: 2,
    competence: "Menggunakan tipe data angka (int, double, num), teks (String), dan boolean (bool).",
    activity: "Menerapkan tipe data num untuk menampung angka bulat & desimal, manipulasi method String, dan pengkondisian boolean.",
    assessment: "Latihan konversi dan manipulasi tipe data dasar",
    details: "Membahas tipe data bawaan Dart. Tipe data 'num' adalah induk dari 'int' dan 'double', membolehkan variabel menyimpan desimal maupun bilangan bulat bergantian.",
    code: `void main() {
  // 1. Tipe data num (Bisa int, bisa double)
  num beratBadan = 65;
  print("Berat awal: $beratBadan");
  beratBadan = 65.5; // Valid karena bertipe num
  print("Berat sekarang: $beratBadan");
  
  // 2. Manipulasi String sederhana
  String nama = "  MuhaMMad reifqi  ";
  print("Original: '\$nama'");
  print("Bersih & Huruf Kecil: '\${nama.trim().toLowerCase()}'");
  
  // 3. Boolean (Hanya true atau false)
  bool apakahLulus = true;
  print("Status Kelulusan: $apakahLulus");
}`
  },
  {
    no: 9,
    topic: "Bab 4: Interpolation, Raw String & Casting",
    chapter: "Bab 4",
    babIndex: 4,
    jp: 2,
    competence: "Melakukan manipulasi teks tingkat lanjut (interpolation, multiline, raw string) dan casting tipe data.",
    activity: "Praktik menulis String interpolation (\${expression}), multiline string, raw string (r''), serta parsing angka ke string dan sebaliknya.",
    assessment: "Tugas manipulasi String & parsing data input",
    details: "String interpolation mempermudah penyisipan variabel dalam teks. Raw string berguna untuk menulis string tanpa memproses karakter escape seperti \\n. Casting/parsing digunakan untuk mengubah tipe data (misalnya teks input masukan user menjadi angka).",
    code: `void main() {
  // 1. String Interpolation (Memasukkan variabel ke dalam String)
  int harga = 50000;
  print("Harga barang: Rp\${harga} (Diskon 10% = Rp\${harga * 0.9})");
  
  // 2. Raw String (Abaikan karakter backslash / escape)
  String folderBiasa = "C:\\new_folder\\data.txt"; // \\n dibaca baris baru!
  String folderRaw = r"C:\new_folder\data.txt";  // Karakter ditulis mentah-mentah
  print("Biasa: \$folderBiasa");
  print("Raw: \$folderRaw");
  
  // 3. Parsing (Konversi String ke Angka)
  String teksAngka = "250";
  int angka = int.parse(teksAngka);
  print("Hasil parsing + 50: \${angka + 50}");
  
  // 4. Casting (Menggunakan kata kunci 'as')
  dynamic data = "Halo";
  String teks = data as String;
  print("Panjang teks: \${teks.length}");
}`
  },
  {
    no: 10,
    topic: "Bab 5: Operator Aritmatika & Assignment",
    chapter: "Bab 5",
    babIndex: 5,
    jp: 2,
    competence: "Menerapkan operator perhitungan aritmatika dan penugasan (assignment) di Dart.",
    activity: "Menggunakan operator pembagian integer (~/), sisa bagi (%), operator increment/decrement, dan operator penugasan singkat (+=, *=, ??=).",
    assessment: "Latihan membuat program kasir sederhana",
    details: "Mempelajari cara melakukan operasi matematika dasar. Dart memiliki operator pembagian unik (~/) yang langsung membulatkan hasil pembagian menjadi integer (tanpa koma).",
    code: `void main() {
  // 1. Operator Aritmatika Dasar
  int a = 10;
  int b = 3;
  
  print("Pembagian Biasa (double): \${a / b}"); // Hasil: 3.3333...
  print("Pembagian Bulat (int): \${a ~/ b}");  // Hasil: 3 (Dibulatkan ke bawah)
  print("Sisa Bagi (Modulo): \${a % b}");      // Hasil: 1 (Sisa pembagian)
  
  // 2. Operator Increment (Penambahan satu)
  int counter = 5;
  counter++; // sekarang jadi 6
  print("Counter: \$counter");
  
  // 3. Compound Assignment (Singkatan operasi)
  int tabungan = 100000;
  tabungan += 50000; // Sama dengan: tabungan = tabungan + 50000;
  print("Total tabungan: Rp\$tabungan");
}`
  },
  {
    no: 11,
    topic: "Bab 5: Operator Relasional & Logika",
    chapter: "Bab 5",
    babIndex: 5,
    jp: 2,
    competence: "Menerapkan operator pembanding (relasional) dan logika keputusan.",
    activity: "Membandingkan nilai (==, !=, <, >) dan menggunakan gerbang logika (&&, ||, !) untuk mengevaluasi kondisi majemuk.",
    assessment: "Kuis logika kelayakan SIM / kelulusan nilai",
    details: "Operator relasional menghasilkan nilai boolean true/false. Gerbang logika digunakan untuk menggabungkan beberapa kondisi pembanding (misalnya: siswa harus lulus ujian teori DAN ujian praktik untuk mendapat sertifikat).",
    code: `void main() {
  int nilaiTeori = 80;
  int nilaiPraktik = 70;
  bool kehadiranBagus = true;
  
  // Operator Relasional
  bool lulusTeori = nilaiTeori >= 75;
  bool lulusPraktik = nilaiPraktik >= 75;
  
  // Operator Logika
  // && (DAN): Kedua kondisi harus true
  bool lulusAkademik = lulusTeori && lulusPraktik;
  
  // || (ATAU): Salah satu kondisi true sudah cukup
  // ! (TIDAK): Membalikkan nilai boolean
  bool dapetDispensasi = !lulusAkademik && kehadiranBagus;
  
  print("Apakah lulus akademik? \$lulusAkademik");
  print("Apakah layak mendapat dispensasi/remidi? \$dapetDispensasi");
}`
  },
  {
    no: 12,
    topic: "Bab 6: Percabangan if-else dan Ternary",
    chapter: "Bab 6",
    babIndex: 6,
    jp: 2,
    competence: "Membuat alur percabangan program menggunakan blok if-else dan Ternary Operator.",
    activity: "Menyusun struktur pengkondisian bertingkat (if, else if, else) dan menyederhanakan kode menggunakan Ternary Operator (? :).",
    assessment: "Praktik menulis sistem penentuan predikat nilai (A, B, C, D)",
    details: "Percabangan membolehkan program mengambil keputusan berbeda berdasarkan kondisi yang dipenuhi. Ternary operator adalah versi satu baris dari if-else sederhana, berguna untuk mempersingkat kode.",
    code: `void main() {
  int nilai = 82;
  
  // 1. Percabangan Standar (if - else if - else)
  String predikat;
  if (nilai >= 90) {
    predikat = "A (Sangat Baik)";
  } else if (nilai >= 80) {
    predikat = "B (Baik)";
  } else if (nilai >= 70) {
    predikat = "C (Cukup)";
  } else {
    predikat = "D (Kurang)";
  }
  print("Predikat nilai Anda: \$predikat");
  
  // 2. Ternary Operator (kondisi ? jika_true : jika_false)
  bool apakahLulus = (nilai >= 70) ? true : false;
  print("Status Lulus: \${apakahLulus ? 'LULUS' : 'REMIDI'}");
}`
  },
  {
    no: 13,
    topic: "Bab 6: Switch-Case, Switch Expression & Try-Catch",
    chapter: "Bab 6",
    babIndex: 6,
    jp: 2,
    competence: "Menerapkan switch expression modern (Dart 3+) dan penanganan error (exception handling).",
    activity: "Merancang switch-case tradisional, membandingkan dengan Switch Expression modern, serta menangani error menggunakan blok try-catch-finally.",
    assessment: "Latihan membuat menu interaktif anti-crash",
    details: "Mempelajari switch-case yang lebih bersih untuk membandingkan satu variabel dengan banyak nilai konstan. Dart 3 memperkenalkan Switch Expression yang sangat ringkas dan mengembalikan nilai langsung. Ditambah dengan try-catch agar program tidak langsung mati (crash) jika terjadi error tak terduga.",
    code: `void main() {
  // 1. Switch Expression Modern (Dart 3+)
  String kodeHari = "SEN";
  String namaHari = switch (kodeHari) {
    "SEN" => "Senin",
    "SEL" => "Selasa",
    "RAB" => "Rabu",
    _     => "Hari Lainnya" // '_' bertindak sebagai default/fallback
  };
  print("Kode \$kodeHari adalah hari \$namaHari");
  
  // 2. Penanganan Error (Try-Catch)
  try {
    int angka = 10;
    int pembagi = 0;
    int hasil = angka ~/ pembagi; // Ini akan menimbulkan error pembagian dengan nol!
    print("Hasil pembagian: \$hasil");
  } catch (error) {
    print("Oops! Terjadi error: \$error");
  } finally {
    print("Blok finally: Bagian ini akan selalu dijalankan apa pun yang terjadi.");
  }
}`
  },
  {
    no: 14,
    topic: "Bab 7: Perulangan for, while, do-while, break/continue",
    chapter: "Bab 7",
    babIndex: 7,
    jp: 2,
    competence: "Mengontrol perulangan program dengan struktur for, while, do-while, serta kata kunci break dan continue.",
    activity: "Menulis kode perulangan naik & turun, membandingkan while vs do-while (minimal berjalan 1x), serta mengendalikan alur loop dengan break/continue.",
    assessment: "Tugas membuat deret angka bilangan prima/ganjil",
    details: "Perulangan digunakan untuk mengeksekusi kode berulang kali secara efisien. Kata kunci 'break' digunakan untuk menghentikan perulangan sebelum waktunya, sedangkan 'continue' meleompati sisa perintah di iterasi aktif dan langsung lanjut ke iterasi berikutnya.",
    code: `void main() {
  // 1. Loop FOR (Sudah pasti jumlah perulangannya)
  print("Loop FOR:");
  for (int i = 1; i <= 3; i++) {
    print("Angka ke-\$i");
  }
  
  // 2. Loop WHILE (Diulang selama kondisi bernilai true)
  print("\\nLoop WHILE:");
  int counter = 1;
  while (counter <= 3) {
    print("Counter: \$counter");
    counter++;
  }
  
  // 3. Penggunaan Continue (Lompati angka genap)
  print("\\nPenggunaan Continue (Cetak Ganjil):");
  for (int x = 1; x <= 5; x++) {
    if (x % 2 == 0) {
      continue; // Lewati sisa kode di bawah, langsung ke iterasi x berikutnya
    }
    print("Ganjil: \$x");
  }
}`
  },
  {
    no: 15,
    topic: "Bab 7: Perulangan for-in dan forEach",
    chapter: "Bab 7",
    babIndex: 7,
    jp: 2,
    competence: "Melakukan iterasi atau pembacaan elemen koleksi data secara fungsional.",
    activity: "Membahas looping khusus data terstruktur (Collection) menggunakan perulangan for-in dan fungsional method forEach.",
    assessment: "Latihan mencetak dan memfilter list siswa",
    details: "Saat bekerja dengan banyak data di dalam List atau Set, kita tidak perlu lagi menggunakan indeks manual. Cukup pakai 'for-in' atau method 'forEach' untuk menyusuri seluruh elemen data dengan sintaks yang jauh lebih bersih.",
    code: `void main() {
  List<String> daftarSiswa = ["Rifqi", "Fahmi", "Ahmad", "Thufail"];
  
  // 1. Perulangan For-In (Sangat bersih untuk List/Set)
  print("Cetak dengan For-In:");
  for (var nama in daftarSiswa) {
    print("- Nama Siswa: \$nama");
  }
  
  // 2. Perulangan forEach (Gaya fungsional menggunakan Lambda)
  print("\\nCetak dengan forEach:");
  daftarSiswa.forEach((nama) => print("> Halo \$nama"));
}`
  },
  {
    no: 16,
    topic: "Bab 8: List & Set secara Mendalam",
    chapter: "Bab 8",
    babIndex: 8,
    jp: 2,
    competence: "Mengelola data berurutan (List) dan data unik tanpa duplikat (Set).",
    activity: "Menerapkan penambahan/penghapusan data List, spread operator (...), collection-if, collection-for, dan pencarian data di dalam Set.",
    assessment: "Praktik membuat aplikasi kelola data absensi siswa",
    details: "Koleksi data sangat penting. List menyimpan data berurutan dengan indeks (boleh ada duplikat). Set menyimpan data acak yang unik (otomatis menolak data duplikat), sangat cepat untuk pencarian keberadaan data.",
    code: `void main() {
  // 1. List (Mendukung data duplikat & berurutan)
  List<String> hobi = ["Membaca", "Coding", "Coding"]; // "Coding" muncul 2x
  hobi.add("Olahraga");
  print("Daftar Hobi: \$hobi (Panjang: \${hobi.length})");
  
  // 2. Set (Menjamin data selalu unik / tidak ada duplikat)
  Set<int> nomorUnik = {1, 2, 3, 3, 2, 4}; // Angka duplikat otomatis diabaikan
  nomorUnik.add(5);
  nomorUnik.add(1); // Mencoba menambah angka yang sudah ada
  print("Set Nomor Unik: \$nomorUnik"); // Output: {1, 2, 3, 4, 5}
  
  // 3. Spread Operator (...) & Collection-If
  bool tambahHobiBaru = true;
  List<String> hobiTambahan = ["Traveling", if (tambahHobiBaru) "Gaming"];
  List<String> semuaHobi = [...hobi, ...hobiTambahan];
  print("Semua Hobi Gabungan: \$semuaHobi");
}`
  },
  {
    no: 17,
    topic: "Bab 8: Map & Queue secara Mendalam",
    chapter: "Bab 8",
    babIndex: 8,
    jp: 2,
    competence: "Mengelola data berpasangan key-value (Map) dan antrean double-ended (Queue).",
    activity: "Mendeklarasikan Map, memodifikasi value berdasarkan key, iterasi Map, dan mensimulasikan antrean FIFO/LIFO menggunakan Queue.",
    assessment: "Latihan mengelola kamus kata / antrean tiket",
    details: "Map menyimpan data dalam bentuk pasangan kunci-nilai (key-value), mirip kamus. Queue adalah koleksi antrean yang efisien untuk memasukkan atau mengeluarkan data dari ujung depan maupun ujung belakang secara cepat.",
    code: `import 'dart:collection';

void main() {
  // 1. Map (Format Key-Value, Key harus unik!)
  Map<String, String> kamusIt = {
    "SDK": "Software Development Kit",
    "IDE": "Integrated Development Environment",
    "API": "Application Programming Interface"
  };
  kamusIt["AOT"] = "Ahead-Of-Time"; // Menambah data baru
  print("Kamus IDE: \${kamusIt["IDE"]}");
  
  // 2. Queue (Antrean Double-Ended)
  Queue<String> antrean = Queue();
  antrean.addLast("Siswa A"); // Masuk antrean dari belakang
  antrean.addLast("Siswa B");
  antrean.addFirst("Ustadz (Prioritas)"); // Masuk antrean dari depan
  
  print("Daftar Antrean: \$antrean");
  
  String dilayani = antrean.removeFirst(); // Mengambil data pertama
  print("Dilayani sekarang: \$dilayani");
  print("Sisa antrean: \$antrean");
}`
  },
  {
    no: 18,
    topic: "Penilaian Tengah Semester (PTS)",
    chapter: "Lainnya",
    babIndex: 0,
    jp: 2,
    competence: "Mengukur tingkat pemahaman kognitif dan keterampilan praktis siswa hingga materi Koleksi.",
    activity: "Ujian tertulis teori fundamental dan ujian praktik langsung membuat aplikasi kalkulator konversi suhu/mata uang.",
    assessment: "Nilai ujian PTS (Bobot 25% total)",
    details: "Evaluasi tengah semester untuk memastikan siswa telah menguasai logika dasar (variabel, tipe data, operator, percabangan, perulangan, dan koleksi data) sebelum masuk ke bab lanjutan OOP & Asynchronous.",
    code: `// Kisi-kisi Praktik PTS: Membuat Kalkulator BMI Sederhana
// Kriteria Penilaian: Validasi input angka, perhitungan rumus, dan if-else kategori BMI.
void main() {
  double beratKg = 70.0;
  double tinggiMeter = 1.75;
  
  double bmi = beratKg / (tinggiMeter * tinggiMeter);
  String kategori = "";
  
  if (bmi >= 25.0) {
    kategori = "Kelebihan Berat Badan";
  } else if (bmi >= 18.5) {
    kategori = "Normal (Ideal)";
  } else {
    kategori = "Kekurangan Berat Badan";
  }
  
  print("Hasil Analisis PTS:");
  print("BMI Anda: \${bmi.toStringAsFixed(2)} - Kategori: \$kategori");
}`
  },
  {
    no: 19,
    topic: "Bab 9: Fungsi Dasar & Positional Parameter",
    chapter: "Bab 9",
    babIndex: 9,
    jp: 2,
    competence: "Membuat fungsi modular, memahami return value, dan parameter posisional wajib/opsional.",
    activity: "Mendeklarasikan fungsi tanpa return (void) vs mengembalikan nilai, serta mendefinisikan parameter opsional menggunakan kurung siku [ ].",
    assessment: "Praktik pemecahan kode menjadi modular",
    details: "Fungsi mempermudah pengorganisasian kode agar tidak ditulis berulang-ulang (DRY: Don't Repeat Yourself). Parameter posisional opsional membolehkan sebuah parameter tidak diisi saat fungsi dipanggil.",
    code: `// Fungsi dengan Parameter Posisional Opsional (dibungkus [ ])
// Jika tidak diisi, parameter opsional akan bernilai null atau nilai defaultnya
void perkenalkan(String nama, [String? kotaAsal, String pekerjaan = "Pelajar"]) {
  print("Halo, saya \$nama.");
  if (kotaAsal != null) {
    print("Saya berasal dari \$kotaAsal.");
  }
  print("Pekerjaan saya: \$pekerjaan");
}

void main() {
  // Panggilan 1: Hanya mengisi parameter wajib
  perkenalkan("Fahmi");
  
  print("---");
  // Panggilan 2: Mengisi semua parameter berdasarkan posisinya secara berurutan
  perkenalkan("Thufail", "Semarang", "Mobile Developer");
}`
  },
  {
    no: 20,
    topic: "Bab 9: Named Parameter & Default Value",
    chapter: "Bab 9",
    babIndex: 9,
    jp: 2,
    competence: "Membuat fungsi dengan named parameters yang aman menggunakan kata kunci required dan default value.",
    activity: "Merancang fungsi dengan parameter bernama { }, mewajibkan parameter tertentu, dan memberikan nilai bawaan.",
    assessment: "Latihan kustomisasi parameter pembuatan avatar/produk",
    details: "Named parameters membolehkan argumen diisi tanpa memperhatikan urutannya saat memanggil fungsi, cukup dengan menyebutkan nama parameternya. Ini sangat mempermudah pembacaan kode, terutama di Flutter.",
    code: `// Named Parameter dibungkus kurung kurawal { }
// Parameter wajib menggunakan kata kunci 'required'
// Parameter opsional diberi nilai default agar aman
void cetakUndangan({
  required String namaTamu,
  required String tanggal,
  String lokasi = "Aula Utama Madrasah",
}) {
  print("Menyiapkan undangan untuk: \$namaTamu");
  print("Waktu: \$tanggal");
  print("Tempat: \$lokasi");
}

void main() {
  // Kita bisa mengisi parameter tanpa peduli urutan deklarasinya!
  cetakUndangan(
    tanggal: "25 Mei 2026",
    namaTamu: "Bapak Ahmad",
    // lokasi tidak diisi, otomatis memakai nilai default
  );
}`
  },
  {
    no: 21,
    topic: "Bab 10: Arrow, Inner, & Anonymous Function (Lambda)",
    chapter: "Bab 10",
    babIndex: 10,
    jp: 2,
    competence: "Menulis fungsi ekspresi singkat, fungsi lokal, dan fungsi tanpa nama (lambda).",
    activity: "Eksperimen sintaks arrow (=>), membuat inner function untuk menyembunyikan logika lokal, dan menulis anonymous function sebagai callback.",
    assessment: "Refactoring kode fungsi standar menjadi lambda ringkas",
    details: "Mempelajari variasi penulisan fungsi di Dart. Arrow function menyederhanakan fungsi satu baris. Inner function membatasi fungsi agar hanya dikenal di dalam fungsi induknya. Anonymous function (fungsi tanpa nama) sangat berguna untuk dilewatkan ke fungsi lain.",
    code: `void main() {
  // 1. Arrow Function (Shorthand syntax =>)
  int tambah(int x, int y) => x + y;
  print("Hasil tambah: \${tambah(5, 5)}");

  // 2. Inner Function (Fungsi di dalam fungsi)
  void hitungPangkatDua(int angka) {
    int hasil = angka * angka;
    print("Pangkat dua dari \$angka adalah \$hasil");
  }
  hitungPangkatDua(4); // Bisa dipanggil di sini
  
  // 3. Anonymous Function (Fungsi tanpa nama / Lambda)
  var cetakKapital = (String teks) {
    return teks.toUpperCase();
  };
  print(cetakKapital("belajar dart seru"));
}
// hitungPangkatDua(5); // ERROR! Di luar main() fungsi ini tidak dikenal.`
  },
  {
    no: 22,
    topic: "Bab 10: Higher-Order Functions & Closures",
    chapter: "Bab 10",
    babIndex: 10,
    jp: 2,
    competence: "Menerapkan Higher-Order Functions pada koleksi data dan memahami cara kerja Closures.",
    activity: "Mendeklarasikan fungsi yang menerima/mengembalikan fungsi lain, memanipulasi List menggunakan map(), where(), reduce(), dan menganalisis closure.",
    assessment: "Tugas pemrosesan data daftar nilai menggunakan gaya fungsional",
    details: "Higher-Order Function adalah fungsi yang menerima fungsi lain sebagai parameter atau mengembalikannya sebagai return value. Closures adalah fungsi di dalam fungsi yang dapat menangkap (capture) dan mengingat variabel di lingkup induknya meskipun fungsi induk selesai dieksekusi.",
    code: `// Higher-Order Function: Menerima fungsi sebagai parameter
void prosesAngka(int angka, int Function(int) operasi) {
  int hasil = operasi(angka);
  print("Hasil operasi angka \$angka adalah: \$hasil");
}

void main() {
  // Panggilan HOF dengan mengirim fungsi kuadrat
  prosesAngka(5, (x) => x * x);
  
  // Penerapan HOF pada List: filter & map
  List<int> nilai = [50, 70, 85, 90, 60, 100];
  
  // filter nilai >= 75 lalu kalikan 10
  var nilaiBagus = nilai
      .where((n) => n >= 75)
      .map((n) => n * 10)
      .toList();
  print("Nilai bagus terproses: \$nilaiBagus");
  
  // Closure: Fungsi mengingat variabel luar
  Function pembuatPenambah(int nilaiAwal) {
    return (int angkaBaru) => nilaiAwal + angkaBaru;
  }
  var tambahSepuluh = pembuatPenambah(10);
  print("Hasil Closure: \${tambahSepuluh(5)}"); // 10 + 5 = 15
}`
  },
  {
    no: 23,
    topic: "Bab 11: Null Safety & Nullable vs Non-Nullable",
    chapter: "Bab 11",
    babIndex: 11,
    jp: 2,
    competence: "Memahami konsep keselamatan data dari nilai kosong (null pointer exception).",
    activity: "Menganalisis bahaya Null Pointer Exception, perbedaan tipe data default non-nullable dengan nullable yang ditandai tanda tanya (?).",
    assessment: "Identifikasi & perbaikan bug kode rawan null",
    details: "Sound Null Safety diperkenalkan Dart untuk mendeteksi potensi error akibat nilai null saat kompilasi (compile-time), bukan saat program sudah di tangan pengguna (runtime). Secara bawaan, semua variabel di Dart adalah non-nullable (tidak boleh null) kecuali dideklarasikan dengan tanda tanya di belakang tipe datanya.",
    code: `void main() {
  // 1. Secara default: Non-Nullable (Tidak boleh kosong)
  String nama = "Thufail";
  // nama = null; // ERROR! Kompiler langsung menolak

  // 2. Nullable: Boleh berisi null (Ditandai dengan akhiran '?')
  String? namaBelakang;
  namaBelakang = "Fahmi";
  namaBelakang = null; // Valid / Boleh
  
  print("Nama depan: \$nama");
  print("Nama belakang: \$namaBelakang");
}`
  },
  {
    no: 24,
    topic: "Bab 11: Operator Null-aware & Flow Analysis",
    chapter: "Bab 11",
    babIndex: 11,
    jp: 2,
    competence: "Menggunakan operator null-aware dan memahami alur flow analysis untuk promosi tipe data.",
    activity: "Menerapkan operator safe access (?.), default value (??), null-aware assignment (??=), force operator (!), dan flow analysis type promotion.",
    assessment: "Latihan memvalidasi input data null dari API tiruan",
    details: "Belajar menangani data yang mungkin null secara aman tanpa menyebabkan program crash. Flow analysis di Dart cukup pintar: jika kita melakukan pengecekan apakah variabel null menggunakan if, Dart akan otomatis mempromosikan variabel tersebut menjadi non-nullable di dalam blok if tersebut.",
    code: `void main() {
  String? namaTamu;
  
  // 1. Operator ?. (Akses aman: jika null, kembalikan null, tidak crash)
  print("Panjang nama: \${namaTamu?.length}");
  
  // 2. Operator ?? (Pemberi nilai default jika bernilai null)
  String namaCetak = namaTamu ?? "Tamu Anonim";
  print("Halo, \$namaCetak");
  
  // 3. Flow Analysis & Type Promotion
  String? pesanPenting = "Ada pesan baru!";
  
  if (pesanPenting != null) {
    // Di dalam blok ini, pesanPenting otomatis dipromosikan 
    // dari String? (nullable) menjadi String (non-nullable) biasa.
    print("Isi pesan: \${pesanPenting.toUpperCase()}"); // Aman tanpa ?.
  }
}`
  },
  {
    no: 25,
    topic: "Bab 12: OOP Part 1: Class, Object, & Member",
    chapter: "Bab 12",
    babIndex: 12,
    jp: 2,
    competence: "Menerapkan konsep pemrograman berorientasi objek dasar pada pembuatan kelas, objek, dan properti.",
    activity: "Membuat cetak biru (class), instansiasi objek baru (new), membuat properti privat (_), serta menyusun getter & setter kustom.",
    assessment: "Latihan membuat kelas data mahasiswa terenkapsulasi",
    details: "Pemrograman Berorientasi Objek (OOP) membagi kode program ke dalam kelas-kelas independen yang menyimpan data (fields) dan fungsi (methods). Enkapsulasi melindungi data sensitif dengan menggunakan properti privat yang diawali dengan garis bawah (_) dan hanya bisa diakses lewat Getter & Setter.",
    code: `// Kelas Siswa
class Siswa {
  String nama; // Properti publik
  int _nilai = 0; // Properti privat (diawali '_'), tidak bisa diakses dari file lain

  // Konstruktor sederhana
  Siswa(this.nama);

  // Custom Setter dengan validasi
  set setNilai(int nilaiBaru) {
    if (nilaiBaru >= 0 && nilaiBaru <= 100) {
      _nilai = nilaiBaru;
    } else {
      print("Error: Nilai harus di antara 0 - 100!");
    }
  }

  // Custom Getter untuk membaca nilai privat
  int get getNilai => _nilai;
}

void main() {
  // Membuat objek/instansiasi dari kelas Siswa
  var siswa1 = Siswa("Rifqi Fahmi");
  siswa1.setNilai = 85; // Memanggil setter
  
  print("Siswa: \${siswa1.nama}");
  print("Nilai: \${siswa1.getNilai}"); // Memanggil getter
}`
  },
  {
    no: 26,
    topic: "Bab 12: Konstruktor Kelas (Default, Named, Redirecting, Factory)",
    chapter: "Bab 12",
    babIndex: 12,
    jp: 2,
    competence: "Merancang berbagai jenis konstruktor kelas untuk fleksibilitas instansiasi objek.",
    activity: "Menerapkan Default Constructor, Named Constructor, Redirecting Constructor, Const Constructor, dan Factory Constructor.",
    assessment: "Praktik membuat kelas konfigurasi database dengan pola Factory",
    details: "Konstruktor adalah metode khusus yang dipanggil saat membuat objek. Dart menyediakan Named Constructor untuk memberi nama berbeda pada pembuat objek, Const Constructor untuk objek imut yang hemat memori, dan Factory Constructor yang tidak harus selalu membuat objek baru (bisa mengembalikan objek yang sudah ada).",
    code: `class Point {
  final double x;
  final double y;

  // 1. Default Constructor
  Point(this.x, this.y);

  // 2. Named Constructor (Konstruktor bernama khusus)
  Point.nol()
      : x = 0,
        y = 0;

  // 3. Redirecting Constructor (Mengoper tugas ke konstruktor lain)
  Point.hanyaX(double koordinatX) : this(koordinatX, 0);
}

class Database {
  // 4. Factory Constructor (Berguna untuk Singleton/membagikan instansi yang sama)
  static final Database _instance = Database._internal();
  
  Database._internal(); // Private constructor

  factory Database() {
    return _instance; // Selalu mengembalikan objek yang sama
  }
}

void main() {
  var p1 = Point(3, 4);
  var pNol = Point.nol();
  var pX = Point.hanyaX(5);
  
  var db1 = Database();
  var db2 = Database();
  print("Apakah db1 dan db2 merujuk objek yang sama? \${identical(db1, db2)}"); // true
}`
  },
  {
    no: 27,
    topic: "Bab 13: Pewarisan (Inheritance) & Overriding",
    chapter: "Bab 13",
    babIndex: 13,
    jp: 2,
    competence: "Menerapkan konsep pewarisan kelas dari superclass ke subclass serta memodifikasi perilakunya.",
    activity: "Membuat turunan kelas dengan kata kunci extends, memanggil konstruktor induk dengan super, dan menimpa method dengan dekorator @override.",
    assessment: "Latihan menyusun hierarki kelas kendaraan/karyawan",
    details: "Pewarisan membolehkan kelas anak (subclass) mewarisi seluruh properti dan fungsi kelas induk (superclass). Subclass dapat menyesuaikan cara kerja fungsi induk dengan cara menimpa fungsinya memakai dekorator '@override'.",
    code: `// Superclass (Kelas Induk)
class Hewan {
  String nama;
  Hewan(this.nama);

  void bersuara() {
    print("Hewan bersuara...");
  }
}

// Subclass (Kelas Anak) mewarisi Hewan
class Kucing extends Hewan {
  // Memanggil konstruktor superclass menggunakan super()
  Kucing(String nama) : super(nama);

  // Menimpa method induk (Overriding)
  @override
  void bersuara() {
    print("\$nama mengeong: Meow Meow!");
  }
}

void main() {
  var peliharaan = Kucing("Kitty");
  peliharaan.bersuara(); // Menjalankan versi kucing yang sudah dioverride
}`
  },
  {
    no: 28,
    topic: "Bab 13: Abstract Class, Interface, Mixin & Extension",
    chapter: "Bab 13",
    babIndex: 13,
    jp: 2,
    competence: "Menerapkan abstraksi, antarmuka kontrak, mixin fungsional, dan extension methods.",
    activity: "Menulis abstract class, mengimplementasikan antarmuka implisit (implements), memasang mixin (with), dan membuat extension method utility.",
    assessment: "Praktik mengintegrasikan modular OOP lengkap",
    details: "Abstract class adalah kelas konsep yang tidak bisa dibuat objeknya secara langsung dan wajib diturunkan. Di Dart, setiap kelas secara implisit dapat bertindak sebagai Interface (kontrak). Mixin membolehkan kita menyisipkan kode/fungsi ke dalam kelas tanpa hubungan pewarisan. Extension methods digunakan untuk menambahkan method baru ke tipe data yang sudah ada.",
    code: `// 1. Abstract Class & Implicit Interface
abstract class Drivable {
  void jalan(); // Abstract method (tanpa isi)
}

// 2. Mixin (Fungsi modular mandiri)
mixin TurboEngine {
  void aktifkanTurbo() => print("Turbo aktif! Melaju kencang!");
}

// Menggunakan extends, implements (interface), dan dengan mixin (with)
class Mobil extends Object with TurboEngine implements Drivable {
  @override
  void jalan() {
    print("Mobil balap meluncur di sirkuit...");
  }
}

// 3. Extension Method (Menambah fungsi baru ke kelas String bawaan Dart)
extension KustomString on String {
  String dapatkanKarakterPertama() => this.isNotEmpty ? this[0] : "";
}

void main() {
  var mobilSaya = Mobil();
  mobilSaya.jalan();
  mobilSaya.aktifkanTurbo(); // Berkat Mixin
  
  print("Dart".dapatkanKarakterPertama()); // Berkat Extension Method (Hasil: D)
}`
  },
  {
    no: 29,
    topic: "Bab 14: Generics & Manajemen Package pub.dev",
    chapter: "Bab 14",
    babIndex: 14,
    jp: 2,
    competence: "Membuat kelas/metode generik serta mengelola dependency library luar melalui pubspec.yaml.",
    activity: "Menulis generic class <T>, membatasi tipe generik (extends), konfigurasi file pubspec.yaml, dan mempraktikkan import package luar.",
    assessment: "Latihan membuat Secure Box Generik & integrasi package intl",
    details: "Generics membolehkan pembuatan kelas atau metode yang tipe datanya bisa diatur saat dipakai, meningkatkan keamanan tipe data tanpa menduplikasi kode. Selain itu, siswa diajarkan menggunakan pub.dev untuk mengimpor pustaka (package) buatan developer lain guna mempermudah pembuatan aplikasi.",
    code: `// Kelas Generik dengan parameter <T>
// Kita bisa membatasi tipe dengan <T extends num> jika hanya ingin menerima angka
class KotakPenyimpanan<T> {
  T _konten;
  KotakPenyimpanan(this._konten);

  T ambilKonten() => _konten;
  void gantiKonten(T kontenBaru) {
    _konten = kontenBaru;
  }
}

// Contoh konfigurasi pubspec.yaml untuk mengambil package eksternal:
// dependencies:
//   intl: ^0.18.0   <- Package format tanggal dan angka lokal indonesia

void main() {
  // Kotak yang khusus menyimpan String
  var kotakTeks = KotakPenyimpanan<String>("Surat Rahasia");
  print("Kotak teks berisi: \${kotakTeks.ambilKonten()}");

  // Kotak yang khusus menyimpan int
  var kotakAngka = KotakPenyimpanan<int>(12345);
  print("Kotak angka berisi: \${kotakAngka.ambilKonten()}");
}`
  },
  {
    no: 30,
    topic: "Bab 15: Asynchronous Programming & Unit Testing",
    chapter: "Bab 15",
    babIndex: 15,
    jp: 2,
    competence: "Menulis kode asynchronous non-blocking (Future, async-await) dan menulis pengujian unit otomatis.",
    activity: "Membuat delay dengan Future, menulis program async-await, mendengarkan Stream, dan menyusun test case menggunakan package 'test'.",
    assessment: "Tugas menulis unit test komprehensif fungsi logika matematika",
    details: "Menguasai cara menangani operasi berat di background (seperti unduh data) dengan Future dan async-await agar aplikasi tidak hang. Terakhir, mempelajari Unit Testing untuk mengetes fungsi program secara otomatis guna menjamin kebebasan dari bug.",
    code: `// Simulasi Ambil Data Asynchronous dari Server (Memakan waktu 2 detik)
Future<String> ambilDataLaporan() async {
  await Future.delayed(Duration(seconds: 2));
  return "Data Laporan Semester Genap";
}

// Contoh Unit Test (Memerlukan package test)
// import 'package:test/test.dart';
// void main() {
//   test('Pengujian String Laporan', () async {
//     var hasil = await ambilDataLaporan();
//     expect(hasil, equals("Data Laporan Semester Genap"));
//   });
// }

void main() async {
  print("Memulai download laporan...");
  // await menghentikan eksekusi baris bawah sampai data laporan siap dikembalikan
  String laporan = await ambilDataLaporan(); 
  print("Laporan Diterima: \$laporan");
}`
  },
  {
    no: 31,
    topic: "Pengembangan Project Akhir (Workshop)",
    chapter: "Lainnya",
    babIndex: 0,
    jp: 2,
    competence: "Merancang dan mengimplementasikan project aplikasi mandiri berbasis Dart CLI.",
    activity: "Bimbingan mandiri/kelompok, strukturisasi project, pembagian modular file, dan implementasi CRUD.",
    assessment: "Progress checkpoint & penilaian arsitektur kode",
    details: "Sesi workshop di mana siswa secara berkelompok menggarap proyek akhir nyata berupa aplikasi CLI (Command Line Interface), misalnya: Sistem Toko Kasir, Aplikasi CRUD Manajemen Siswa, atau Kuis Pintar berbasis Terminal.",
    code: `// Struktur Standard Kerangka Kerja (Framework) Project Akhir CLI
// project_akhir/
// ├── bin/
// │   └── main.dart            <- Loop interaktif menu pilihan user
// ├── lib/
// │   ├── models/siswa.dart    <- Model data cetakan siswa
// │   ├── services/crud.dart   <- Logika tambah, baca, edit, hapus data
// │   └── utils/helper.dart    <- Fungsi validasi input teks/angka
// └── pubspec.yaml

void main() {
  print("=== WORKSHOP PROJECT AKHIR ===");
  print("Kerjakan project Anda sesuai dengan standar arsitektur bersih!");
}`
  },
  {
    no: 32,
    topic: "Presentasi Project Akhir & PAS",
    chapter: "Lainnya",
    babIndex: 0,
    jp: 2,
    competence: "Mempresentasikan produk perangkat lunak dan menghadapi evaluasi komprehensif akhir semester.",
    activity: "Demo aplikasi kelompok di depan kelas, sesi tanya jawab dengan pengajar, refleksi akhir kelas, dan pengisian Penilaian Akhir Semester.",
    assessment: "Ujian PAS Praktik (Produk + Presentasi = Bobot 35%)",
    details: "Pertemuan penutup semester genap. Siswa menyajikan proyek akhir mereka, menjelaskan arsitektur kode yang dibuat, fitur-fitur, cara kerja, dan menerima umpan balik untuk pengembangan portofolio pemrograman mereka.",
    code: `// Lembar Evaluasi Presentasi Project Akhir:
// 1. Fungsionalitas (Apakah program berjalan bebas bug? - Skor 1-100)
// 2. Kualitas Kode (Apakah menerapkan OOP, Clean Code, & Null Safety? - Skor 1-100)
// 3. UI/UX CLI (Apakah navigasi menu terminal ramah pengguna? - Skor 1-100)
// 4. Kerja Sama & Presentasi (Apakah mampu menjelaskan logika kodenya? - Skor 1-100)

void main() {
  print("Selamat! Anda telah menyelesaikan seluruh rangkaian belajar Pemrograman Dart Semester Genap!");
  print("Teruslah belajar, menulis kode, dan bersiaplah masuk ke dunia Flutter Mobile App Development!");
}`
  }
];

// Inisialisasi Halaman
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline(meetingsData);
  renderTable(meetingsData);
  setupTabs();
  setupFilters();
  setupDrawer();
  setupStats();
  apply3DTiltEffect();
  window.addEventListener("resize", apply3DTiltEffect);
});

// Setup Statistik Belajar
function setupStats() {
  const totalMeetings = meetingsData.length;
  const totalChapters = 15; // 15 Bab
  const totalJP = meetingsData.reduce((acc, curr) => acc + curr.jp, 0);
  
  // Update UI Stats
  document.getElementById("stat-meetings").innerText = totalMeetings;
  document.getElementById("stat-chapters").innerText = totalChapters;
  document.getElementById("stat-jp").innerText = totalJP + " JP";
}

// Setup Tab Switcher
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      
      // Toggle active button
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Toggle active content
      tabContents.forEach(content => {
        content.classList.remove("active");
        if (content.id === target + "-tab") {
          content.classList.add("active");
        }
      });
      
      // Re-apply tilt effect since tab switch changes visibility/layout
      apply3DTiltEffect();
    });
  });
}

// Render Timeline View
function renderTimeline(data) {
  const timelineContainer = document.querySelector(".timeline-container");
  if (!timelineContainer) return;
  
  timelineContainer.innerHTML = "";
  
  if (data.length === 0) {
    timelineContainer.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>Tidak ada pertemuan yang sesuai dengan pencarian atau filter.</p></div>`;
    return;
  }
  
  data.forEach((meeting, idx) => {
    const item = document.createElement("div");
    item.className = `timeline-item fade-in-up`;
    item.style.animationDelay = `${idx * 0.04}s`;
    
    // Kategori color class
    let categoryClass = "cat-other";
    if (meeting.chapter.startsWith("Bab")) {
      const num = parseInt(meeting.chapter.replace("Bab ", ""));
      if (num <= 5) categoryClass = "cat-fundamental";
      else if (num <= 10) categoryClass = "cat-intermediate";
      else if (num <= 13) categoryClass = "cat-oop";
      else categoryClass = "cat-advanced";
    }
    
    item.innerHTML = `
      <div class="timeline-dot ${categoryClass}">
        <span>${meeting.no}</span>
      </div>
      <div class="timeline-card" onclick="openMeetingDetails(${meeting.no})">
        <div class="timeline-card-header">
          <span class="badge ${categoryClass}">${meeting.chapter}</span>
          <span class="jp-badge"><i class="far fa-clock"></i> ${meeting.jp} JP</span>
        </div>
        <h3 class="meeting-title">Pertemuan ${meeting.no}: ${meeting.topic}</h3>
        <p class="meeting-short-desc">${meeting.competence}</p>
        <div class="card-footer">
          <span class="tap-hint"><i class="fas fa-code"></i> Klik untuk Contoh Kode & Detail</span>
        </div>
      </div>
    `;
    timelineContainer.appendChild(item);
  });
  
  // Re-apply tilt effect since new timeline card elements were generated
  apply3DTiltEffect();
}

// Render Table View
function renderTable(data) {
  const tableBody = document.querySelector(".syllabus-table tbody");
  if (!tableBody) return;
  
  tableBody.innerHTML = "";
  
  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" class="table-empty"><i class="fas fa-search"></i><br>Tidak ada data pertemuan ditemukan</td></tr>`;
    return;
  }
  
  data.forEach(meeting => {
    const tr = document.createElement("tr");
    tr.onclick = () => openMeetingDetails(meeting.no);
    
    // Kategori color class
    let categoryClass = "cat-other";
    if (meeting.chapter.startsWith("Bab")) {
      const num = parseInt(meeting.chapter.replace("Bab ", ""));
      if (num <= 5) categoryClass = "cat-fundamental";
      else if (num <= 10) categoryClass = "cat-intermediate";
      else if (num <= 13) categoryClass = "cat-oop";
      else categoryClass = "cat-advanced";
    }
    
    tr.innerHTML = `
      <td class="text-center font-bold" style="color: var(--aqua);">${meeting.no}</td>
      <td>
        <span class="badge ${categoryClass}" style="font-size: 0.72rem; padding: 4px 8px; margin-bottom: 4px; display: inline-block;">${meeting.chapter}</span>
        <div class="font-bold text-white">${meeting.topic}</div>
      </td>
      <td>${meeting.competence}</td>
      <td class="hidden-mobile">${meeting.activity}</td>
      <td class="hidden-mobile">${meeting.assessment}</td>
      <td class="text-center font-bold" style="color: var(--cyan);">${meeting.jp} JP</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Setup Filters & Search
function setupFilters() {
  const searchInput = document.getElementById("search-meeting");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  let currentSearch = "";
  let currentFilter = "all";
  
  const applyFilterAndSearch = () => {
    let filtered = meetingsData;
    
    // 1. Filter Kategori
    if (currentFilter !== "all") {
      filtered = filtered.filter(meeting => {
        if (currentFilter === "fundamental") {
          if (!meeting.chapter.startsWith("Bab")) return false;
          const num = parseInt(meeting.chapter.replace("Bab ", ""));
          return num <= 5;
        }
        if (currentFilter === "intermediate") {
          if (!meeting.chapter.startsWith("Bab")) return false;
          const num = parseInt(meeting.chapter.replace("Bab ", ""));
          return num > 5 && num <= 10;
        }
        if (currentFilter === "oop") {
          if (!meeting.chapter.startsWith("Bab")) return false;
          const num = parseInt(meeting.chapter.replace("Bab ", ""));
          return num > 10 && num <= 13;
        }
        if (currentFilter === "advanced") {
          if (!meeting.chapter.startsWith("Bab")) return false;
          const num = parseInt(meeting.chapter.replace("Bab ", ""));
          return num > 13 && num <= 15;
        }
        if (currentFilter === "other") {
          return !meeting.chapter.startsWith("Bab");
        }
        return true;
      });
    }
    
    // 2. Search Filter
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(meeting => 
        meeting.topic.toLowerCase().includes(q) || 
        meeting.competence.toLowerCase().includes(q) || 
        meeting.activity.toLowerCase().includes(q) || 
        meeting.chapter.toLowerCase().includes(q)
      );
    }
    
    // Re-render
    renderTimeline(filtered);
    renderTable(filtered);
  };
  
  // Search keyup
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    applyFilterAndSearch();
  });
  
  // Filter Button click
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilterAndSearch();
    });
  });
}

// Setup Drawer (Laci Samping Detail Pertemuan)
function setupDrawer() {
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");
  
  if (overlay) {
    overlay.addEventListener("click", closeDrawer);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }
  
  // Keyboard ESC to close drawer
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });
}

function openMeetingDetails(no) {
  const meeting = meetingsData.find(m => m.no === no);
  if (!meeting) return;
  
  // Isi data drawer
  document.getElementById("drawer-meet-no").innerText = meeting.no;
  document.getElementById("drawer-title").innerText = meeting.topic;
  
  // Kategori Badge
  const badgeContainer = document.getElementById("drawer-badge-container");
  badgeContainer.innerHTML = "";
  
  let categoryClass = "cat-other";
  if (meeting.chapter.startsWith("Bab")) {
    const num = parseInt(meeting.chapter.replace("Bab ", ""));
    if (num <= 5) categoryClass = "cat-fundamental";
    else if (num <= 10) categoryClass = "cat-intermediate";
    else if (num <= 13) categoryClass = "cat-oop";
    else categoryClass = "cat-advanced";
  }
  
  badgeContainer.innerHTML = `
    <span class="badge ${categoryClass}">${meeting.chapter}</span>
    <span class="jp-badge"><i class="far fa-clock"></i> ${meeting.jp} JP</span>
  `;
  
  // Detail Deskripsi
  document.getElementById("drawer-desc").innerHTML = `<p>${meeting.details}</p>`;
  
  // Kompetensi & Kegiatan
  document.getElementById("drawer-competence").innerHTML = `<li>${meeting.competence}</li>`;
  document.getElementById("drawer-activity").innerHTML = `<li>${meeting.activity}</li>`;
  document.getElementById("drawer-assessment").innerHTML = `<li>${meeting.assessment}</li>`;
  
  // Render Code Block dengan Custom Syntax Highlighting
  const codePre = document.getElementById("drawer-code-content");
  if (meeting.code) {
    codePre.innerHTML = highlightDartCode(meeting.code);
    document.querySelector(".drawer-code-block").style.display = "block";
  } else {
    document.querySelector(".drawer-code-block").style.display = "none";
  }
  
  // Setup Link Ke Slide
  const slideLinkBtn = document.getElementById("drawer-slide-link");
  if (meeting.babIndex > 0) {
    slideLinkBtn.href = `../Bab ${meeting.babIndex} dart/index.html`;
    slideLinkBtn.style.display = "inline-flex";
  } else {
    slideLinkBtn.style.display = "none";
  }
  
  // Munculkan drawer & overlay
  document.getElementById("detail-drawer").classList.add("open");
  document.getElementById("drawer-overlay").classList.add("active");
  document.body.style.overflow = "hidden"; // Kunci scroll layar utama
}

function closeDrawer() {
  document.getElementById("detail-drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("active");
  document.body.style.overflow = ""; // Aktifkan kembali scroll
}

// Custom Syntax Highlighting Sederhana untuk Dart
function highlightDartCode(code) {
  // Meloloskan karakter HTML
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Aturan regex untuk highlight
  const rules = [
    // Komentar (//...)
    { regex: /(\/\/[^\n]*)/g, tag: "comment" },
    // String ('...' atau "...")
    { regex: /('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g, tag: "string" },
    // Angka
    { regex: /\b(\d+(?:\.\d+)?)\b/g, tag: "number" },
    // Boolean
    { regex: /\b(true|false)\b/g, tag: "boolean" },
    // Tipe Data
    { regex: /\b(void|int|double|num|String|bool|dynamic|var|List|Set|Map|Queue|DateTime|Point|Database|Kucing|Hewan|Siswa|Object|Drivable|KotakPenyimpanan)\b/g, tag: "type" },
    // Keyword Kontrol & OOP
    { regex: /\b(import|class|extends|implements|with|mixin|extension|on|factory|static|final|const|late|required|this|super|override|get|set|return|new|if|else|switch|case|default|try|catch|finally|throw|for|in|while|do|break|continue|as|is|async|await|yield)\b/g, tag: "keyword" },
    // Deklarasi Fungsi (sebelum tanda kurung buka '(' )
    { regex: /\b([a-zA-Z_]\w*)(?=\()/g, tag: "function" }
  ];
  
  // Terapkan penanda span dinamis berdasarkan urutan rules
  // Catatan: Untuk menghindari bentrok markup, rules diterapkan dengan tokenisasi sederhana
  // Di sini kita menerapkan regex sederhana pada string utuh:
  rules.forEach(rule => {
    escaped = escaped.replace(rule.regex, (match) => {
      // Pastikan tidak membungkus ulang tag HTML yang sudah terpasang
      if (match.startsWith("&lt;span") || match.startsWith("&lt;/span")) return match;
      return `<span class="${rule.tag}">${match}</span>`;
    });
  });
  
  return escaped;
}

// 3D Tilt Effect on cards (Hero, Stats, Timeline, Assessment Cards)
function apply3DTiltEffect() {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll(".hero, .stat-card, .timeline-card, .assess-card");
  
  if (isMobile) {
    // Reset/clean styles on mobile devices to prevent glitchy transformations
    cards.forEach(card => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
    return;
  }

  cards.forEach(card => {
    // Prevent duplicate event listener registration
    if (card.dataset.hasTilt === "true") return;
    card.dataset.hasTilt = "true";
    
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position inside element
      const y = e.clientY - rect.top;  // y position inside element
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate rotation degrees (-10deg to +10deg)
      const rotateX = ((height / 2 - y) / (height / 2)) * 10;
      const rotateY = ((x - width / 2) / (width / 2)) * 10;
      
      // Apply 3D transform rotation & scaling
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Subtle glowing shadow that tilts according to cursor movement
      const shadowX = -rotateY * 1.2;
      const shadowY = rotateX * 1.2;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 242, 254, 0.2)`;
    });
    
    card.addEventListener("mouseleave", () => {
      // Smoothly reset transformations
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.boxShadow = "";
    });
  });
}
