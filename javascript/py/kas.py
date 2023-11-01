# Input data rencana kegiatan dan anggaran sekolah

# Input data kegiatan
kegiatan = input("Masukkan nama kegiatan: ")
deskripsi = input("Masukkan deskripsi kegiatan: ")
tanggal = input("Masukkan tanggal kegiatan: ")
biaya = float(input("Masukkan biaya kegiatan: "))

# Input data anggaran
denda = float(input("Masukkan denda keterlambatan: "))
sponsor = float(input("Masukkan jumlah sponsor: "))
pemasukan_lainnya = float(input("Masukkan jumlah pemasukan lainnya: "))

# Hitung total anggaran
total_anggaran = biaya - denda + sponsor + pemasukan_lainnya

# Menampilkan data yang sudah diinputkan dan total anggaran
print("\nDATA KEGIATAN")
print("Nama kegiatan:", kegiatan)
print("Deskripsi kegiatan:", deskripsi)
print("Tanggal kegiatan:", tanggal)
print("Biaya kegiatan:", biaya)

print("\nDATA ANGGARAN")
print("Denda keterlambatan:", denda)
print("Jumlah sponsor:", sponsor)
print("Jumlah pemasukan lainnya:", pemasukan_lainnya)

print("\nTOTAL ANGGARAN")
print("Total anggaran:", total_anggaran)
