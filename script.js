const loader=document.getElementById('loader');const hideLoader=()=>loader.classList.add('hidden');window.addEventListener('load',()=>setTimeout(hideLoader,800));setTimeout(hideLoader,2600);
const slides=[...document.querySelectorAll('.phone-screen img')],dots=[...document.querySelectorAll('.dot')];let current=0;function showSlide(n){current=n;slides.forEach((s,i)=>s.classList.toggle('active',i===n));dots.forEach((d,i)=>d.classList.toggle('active',i===n))}let cycle=setInterval(()=>showSlide((current+1)%slides.length),4600);dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);clearInterval(cycle);cycle=setInterval(()=>showSlide((current+1)%slides.length),4600)}));
const lang=document.getElementById('lang');let locale='ar';lang.addEventListener('click',()=>{locale=locale==='ar'?'en':'ar';document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.innerHTML=el.dataset[locale]});lang.textContent=locale==='ar'?'EN':'عربي';document.title=locale==='ar'?'راحتي | منزل أنظف وحياة أسهل':'Rahati | A cleaner home, an easier life'});
document.getElementById('menu').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
// ضع روابط الحسابات الرسمية بعد إنشائها، واترك القيمة فارغة إذا لم ينشأ الحساب بعد.
const RAHATI_SOCIAL_LINKS = {
  instagram: '', // example: https://www.instagram.com/your_official_account/
  tiktok: ''     // example: https://www.tiktok.com/@your_official_account
};
document.querySelectorAll('[data-social]').forEach((a) => {
  const url = (RAHATI_SOCIAL_LINKS[a.dataset.social] || '').trim();
  const isOfficial = (a.dataset.social === 'instagram' && /^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?(?:\?.*)?$/.test(url)) ||
    (a.dataset.social === 'tiktok' && /^https:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9._]+\/?(?:\?.*)?$/.test(url));
  if (isOfficial) { a.href = url; a.classList.remove('social-pending'); a.title = a.dataset.social === 'instagram' ? 'افتح حساب راحتي على إنستجرام' : 'افتح حساب راحتي على تيك توك'; }
  else { a.removeAttribute('href'); a.removeAttribute('target'); a.setAttribute('aria-disabled', 'true'); a.addEventListener('click', (e) => e.preventDefault()); }
});
