
const translations = {
  en: { brand:"Shadow Vanguards", login:"Login", register:"Register", dashboard:"Dashboard", punishBoard:"Punishment Board", appeal:"Appeal", report:"Report", shop:"Shop", adminPanel:"Admin", ownerPanel:"Owner", submit:"Submit", add:"Add", reason:"Reason", name:"Name", cart:"Cart" },
  zh: { brand:"Shadow Vanguards", login:"登入", register:"註冊", dashboard:"控制台", punishBoard:"懲處排行榜", appeal:"上訴", report:"投訴", shop:"商城", adminPanel:"管理員", ownerPanel:"擁有者", submit:"送出", add:"新增", reason:"原因", name:"名稱", cart:"購物車" }
};
function getLang(){ return localStorage.getItem('lang') || 'zh' }
function setLang(lang){ localStorage.setItem('lang', lang); applyI18n() }

function buildTopbar(){
  if(document.querySelector('.topbar')) return;
  const top = document.createElement('div');
  top.className = 'topbar';
  top.innerHTML = `
    <div class="brand">
      <img src="assets/SV_GRAFITTI.png" alt="logo" />
      <div>
        <div style="font-size:1.05rem" data-i18n="brand">Shadow Vanguards</div>
        <div class="badge">Dark Ops Interface</div>
      </div>
    </div>
    <div class="actions">
      <a class="link" href="dashboard.html" data-i18n="dashboard">控制台</a>
      <select id="langSelect">
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>`;
  document.body.prepend(top);
  document.getElementById('langSelect').value = getLang();
  document.getElementById('langSelect').addEventListener('change', (e)=> setLang(e.target.value));
}
function buildFooter(){
  const c = document.querySelector('.container'); if(!c) return;
  const f = document.createElement('div'); f.className='footer';
  f.innerHTML = `<img src="assets/SV_GRAFITTI.png" alt="logo"><div>© 2025 Shadow Vanguards</div>`;
  c.appendChild(f);
}
function applyI18n(){
  const dict = translations[getLang()] || translations.zh;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n'); if(dict[key]) el.textContent = dict[key];
  });
}

function lsGet(key, fallback){ try{ return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)) }catch(e){ return fallback } }
function lsSet(key, val){ localStorage.setItem(key, JSON.stringify(val)) }

document.addEventListener('DOMContentLoaded', ()=>{ buildTopbar(); applyI18n(); buildFooter(); });
