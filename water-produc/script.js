// AOS Initialization
AOS.init({
    duration: 800,
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Tap to top functionality
const tapToTop = document.querySelector('.tap-to-top');
const water = document.querySelector('.water');

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    water.style.height = `${scrollPercent}%`;
    
    if (window.scrollY > 300) {
        tapToTop.classList.add('visible');
    } else {
        tapToTop.classList.remove('visible');
    }
});

tapToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Google Maps Integration
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 41.0082, lng: 28.9784 }, // İstanbul koordinatları
    });

    // Örnek bayiler
    const bayiler = [
        { lat: 41.0082, lng: 28.9784, title: "Merkez Bayi" },
        { lat: 41.0422, lng: 28.9924, title: "Şişli Bayi" },
        // Diğer bayiler eklenebilir
    ];

    bayiler.forEach(bayi => {
        new google.maps.Marker({
            position: { lat: bayi.lat, lng: bayi.lng },
            map: map,
            title: bayi.title
        });
    });
}

// Şehir-İlçe Bağımlı Select
document.getElementById('sehir')?.addEventListener('change', function() {
    const ilce = document.getElementById('ilce');
    ilce.innerHTML = '<option value="">İlçe Seçin</option>';
    
    if (this.value === 'istanbul') {
        const ilceler = ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar'];
        ilceler.forEach(i => {
            const option = document.createElement('option');
            option.value = i.toLowerCase();
            option.textContent = i;
            ilce.appendChild(option);
        });
    }
    // Diğer şehirler için ilçeler eklenebilir
});
