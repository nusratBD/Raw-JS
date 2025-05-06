const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("ayahModal");
const closeBtn = document.querySelector(".close");
const modalSurahTitle = document.getElementById("modalSurahTitle");
const modalAyahArabic = document.getElementById("modalAyahArabic");
const modalAyahEnglish = document.getElementById("modalAyahEnglish");
document.addEventListener("DOMContentLoaded", async () => {
    await fetch(`https://quranapi.pages.dev/api/surah.json`)
        .then(res => res.json())
        .then(res => {
            //Configure Fuse.js
            const fuse = new Fuse(res, {
                keys: ["surahName"],
                threshold: 0.7,
            });
            document.getElementById("searchBtn").addEventListener("click", () => {
                const input = searchInput.value.trim();
                if (input === "") return;
                const verseNumber = input.match(/\d+/);
                const surahName = input.replace(/\d+/, '').trim();
                const verseIndex = parseInt(verseNumber[0]) - 1;
                const result = fuse.search(surahName);
                res.forEach(async (s, i) => {
                    if (s.surahName == result[0].item.surahName) {
                        await fetch(`https://quranapi.pages.dev/api/${i + 1}.json`)
                            .then(res => res.json())
                            .then(data => {
                                const arabic = data.arabic1;
                                const english = data.english;
                                console.log(arabic[verseIndex]);
                                console.log(english[verseIndex]);
                                if(arabic[verseIndex]&&english[verseIndex]){
                                    modalSurahTitle.textContent = `${result[0].item.surahName} - Ayah ${verseIndex + 1}`;
                                modalAyahArabic.textContent = arabic[verseIndex];
                                modalAyahEnglish.textContent = english[verseIndex];
                                modal.style.display = "block";
                                }else{
                                    modalSurahTitle.textContent = "Please Enter The Right Surah & Ayah";
                                    modalAyahArabic.textContent = "";
                                modalAyahEnglish.textContent = "";
                                    modal.style.display = "block";
                                }
                                
                            });
                    }
                });
            });

        })
});
const closeModel=()=>{
    modal.style.display="none";
    searchInput.value="";
}

