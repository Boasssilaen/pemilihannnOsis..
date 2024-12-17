// Inisialisasi jumlah suara
let votes = [0, 0, 0];

// Fungsi untuk mencatat suara
function vote(candidate) {
    // Tambahkan suara untuk kandidat yang dipilih
    votes[candidate - 1]++;
    
    // Perbarui hasil di layar
    document.getElementById(`votes1`).textContent = votes[0];
    document.getElementById(`votes2`).textContent = votes[1];
    document.getElementById(`votes3`).textContent = votes[2];
    
    // Tampilkan pesan sukses
    alert(`Anda telah memilih Kandidat ${candidate}. Terima kasih atas partisipasi Anda!`);
}
