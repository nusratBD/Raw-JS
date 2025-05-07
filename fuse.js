import { getSurah } from "./api.js";
const modal = document.getElementById("ayahModal");
const closeBtn = document.querySelector(".close");
const searchInput = document.getElementById("searchInput");
const modalSurahTitle = document.getElementById("modalSurahTitle");
const modalAyahArabic = document.getElementById("modalAyahArabic");
const modalAyahEnglish = document.getElementById("modalAyahEnglish");
    getSurah().then(res => {
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
                const result = fuse.search(surahName);
                if(result.length==0){
                    message("Please Enter The Right Surah Name.","","");
                        return;
                }
                if(!verseNumber){
                    message("You Didn't Enter Ayah Number.","","");
                        return;
                }
                const verseIndex = parseInt(verseNumber[0]) - 1;
                res.forEach(async (s, i) => {
                    if (s.surahName == result[0].item.surahName) {
                        await fetch(`https://quranapi.pages.dev/api/${i + 1}.json`)
                            .then(res => res.json())
                            .then(data => {
                                const arabic = data.arabic1;
                                const english = data.english;
                                // console.log(arabic[verseIndex]);
                                // console.log(english[verseIndex]);
                                if(arabic[verseIndex]&&english[verseIndex]){
                                    message(`${result[0].item.surahName} - Ayah ${verseIndex + 1}`, arabic[verseIndex],english[verseIndex])
                                }
                                else{
                                    message("Your Ayah Number doesn't exist to the Surah.","","");
                                }
                            });
                    }                   
                });
                
            });
    })

    const message=(message,arabic,english)=>{
    modalSurahTitle.textContent = message;
    modalAyahArabic.textContent = arabic;
    modalAyahEnglish.textContent = english;
    modal.style.display = "block";
}
document.getElementById("close").addEventListener("click",()=>{
    modal.style.display="none";
})

