let currentLight = 0;

const lights = document.querySelectorAll('.light');

// Fungsi untuk menyalakan lampu sesuai urutan
function changeLight() {
    // Matikan semua lampu terlebih dahulu
    lights.forEach(light => light.style.opacity = '0.3');

    // Nyalakan lampu sesuai urutan
    lights[currentLight].style.opacity = '1';

    // Pindah ke lampu berikutnya
    currentLight = (currentLight + 1) % lights.length;
}

// Atur interval untuk mengganti lampu setiap detik
setInterval(changeLight, 1000);