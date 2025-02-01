// Ambil elemen-elemen penting
// Ambil elemen-elemen penting
const display = document.querySelector('.display'); // Layar kalkulator
const buttons = document.querySelectorAll('button'); // Semua tombol pada kalkulator

// Variabel untuk menyimpan ekspresi kalkulator
let currentExpression = "";

// Fungsi untuk memformat angka dengan titik sebagai pemisah ribuan
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi untuk memproses input tombol
function processInput(value) {
    if (value === "AC") {
        // Bersihkan ekspresi
        currentExpression = "";
    } else if (value === "DEL") {
        // Hapus karakter terakhir
        currentExpression = currentExpression.slice(0, -1);
    } else if (value === "=") {
        // Evaluasi ekspresi
        try {
            let result = eval(currentExpression); // Evaluasi ekspresi
            currentExpression = formatNumber(result); // Format hasil
        } catch (error) {
            currentExpression = "Error"; // Tampilkan 'Error' jika ekspresi tidak valid
        }
    } else {
        // Tambahkan nilai tombol ke ekspresi
        if (currentExpression === "Error") {
            currentExpression = ""; // Reset jika sebelumnya error
        }
        currentExpression += value;
    }

    // Tampilkan ekspresi atau hasil di layar
    display.value = currentExpression;
}

// Pasang event listener untuk setiap tombol
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value; // Ambil nilai dari atribut data-value
        processInput(value);
    });
});

