// Fungsi untuk menampilkan pop-up
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "flex"; // Menampilkan pop-up
}

// Fungsi untuk menutup pop-up
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none"; // Menyembunyikan pop-up
}


      function changeLanguage() {
    const language = document.getElementById("language").value;
    const title = document.getElementById("title");
    const paragraph = document.getElementById("paragraph");
    const judul = document.getElementById("judul");
    const bab = document.getElementById("bab");
    const bab1 = document.getElementById("bab1");
    const bab2 = document.getElementById("bab2");
    const bab3 = document.getElementById("bab3");
    const bab4 = document.getElementById("bab4");
    const bab5 = document.getElementById("bab5");
    const bab6 = document.getElementById("bab6");
    const bab7 = document.getElementById("bab7");
    const bab8 = document.getElementById("bab8");
    const list = document.getElementById("list");
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");
    const list3 = document.getElementById("list3");
    const game11 = document.getElementById("game11");
    const game12 = document.getElementById("gam12");
    const game21 = document.getElementById("game21");
    const game22 = document.getElementById("game22");
    const start = document.getElementById("start");


    if (language === "id") {
        title.textContent = "Sejarah";
        paragraph.textContent = "Mari mengenal Masa-masa Di Indonesia";
        judul.textContent = "Masa-masa";
        bab.textContent = "Masa Berburu";
        bab1.textContent = "Masa Mengumpulkan Makanan";
        bab2.textContent = "Masa Bercocok Tanam";
        bab3.textContent = "Masa Perundagian";
        bab4.textContent = "Masa Aksara";
        bab5.textContent = "Masa Kerajaan Hindu";
        bab6.textContent = "Masa Kerajaan Buddha";
        bab7.textContent = "Masa Kerajaan Islam";
        bab8.textContent = "kesimpulan";
        list.textContent = "Hal Yang DiPelajari";
        list1.textContent = "Masa-masa di Indonesia";
        list2.textContent = "Masa Berburu - perudagian";
        list3.textContent = "Masa praaksara-aksara";
        game11.textContent = "Jawab pertanyaan dan lihat skor anda";
        game12.textContent = "kesimpulan";
        game21.textContent = "kesimpulan";
        game22.textContent = "kesimpulan";
        start.textContent = "MULAI";
        
    } else if (language === "en") {
        title.textContent = "History";
        paragraph.textContent = "Let's Get to Know the Times in Indonesia";
        judul.textContent = "Time Period";
        bab.textContent = "Hunting Period";
        bab1.textContent = "Food Gathering Period";
        bab2.textContent = "Planting Season";
        bab3.textContent = "Bronze Age";
        bab4.textContent = "Literacy Period";
        bab5.textContent = "Hindu Kingdom Period";
        bab6.textContent = "Buddhist Kingdom Period";
        bab7.textContent = "The Islamic Kingdom Period";
        bab8.textContent = "Conclusion";
        list.textContent = "Things Learned";
        list1.textContent = "Times In Indonesia";
        list2.textContent = "Hunting Period - trade";
        list3.textContent = "Prehistoric period";
        game11.textContent = "Answer the questions and see your score";
        game12.textContent = "kesimpulan";
        game21.textContent = "kesimpulan";
        game22.textContent = "kesimpulan";
        start.textContent = "START";
      
    } else if (language === "jp") {
        title.textContent = "歴史";
        paragraph.textContent = "インドネシアの時代を知ろう";
        judul.textContent = "時期";
        bab.textContent = "狩猟期間";
        bab1.textContent = "食料採取期間";
        bab2.textContent = "農耕期";
        bab3.textContent = "立法期間";
        bab4.textContent = "文学の時代";
        bab5.textContent = "ヒンドゥー王国時代";
        bab6.textContent = "仏教王国時代";
        bab7.textContent = "イスラム帝国の時代";
        bab8.textContent = "結論";
        list.textContent = "学んだこと";
        list1.textContent = "インドネシアの時間";
        list2.textContent = "狩猟期間 - 狩猟";
        list3.textContent = "未識字期";
        game11.textContent = "質問に答えてスコアを確認する";
        game12.textContent = "kesimpulan";
        game21.textContent = "kesimpulan";
        game22.textContent = "kesimpulan";
        start.textContent = "始める";
    }
}

    if (window.innerWidth > 768) {
        alert("Halaman ini hanya dapat dibuka di perangkat mobile.");
        document.body.innerHTML = ""; // Kosongkan halaman jika bukan mobile
    }



