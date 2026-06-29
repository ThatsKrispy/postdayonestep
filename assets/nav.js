// Shared nav behaviour
(function(){
  const tg=document.getElementById('navToggle'),nl=document.getElementById('navLinks');
  if(tg&&nl){
    tg.addEventListener('click',()=>{
      const o=nl.classList.toggle('open');
      tg.classList.toggle('open');
      tg.setAttribute('aria-expanded',o);
    });
    nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nl.classList.remove('open');tg.classList.remove('open');
    }));
  }
  // Active link highlight
  const path=location.pathname.replace(/\/$/,'');
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=a.getAttribute('href').replace(/\/$/,'');
    if(href===path||(path===''&&href==='/index.html'))a.classList.add('active');
  });
  document.getElementById('yr')&&(document.getElementById('yr').textContent=new Date().getFullYear());
})();
