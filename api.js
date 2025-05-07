export const getSurah=async()=>{
    const data=await fetch(`https://quranapi.pages.dev/api/surah.json`);
    const res=data.json();
    return res;
}
