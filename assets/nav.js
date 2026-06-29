(function(){
  // Mobile nav
  var tg=document.getElementById('navToggle'),nl=document.getElementById('navLinks');
  if(tg&&nl){
    tg.addEventListener('click',function(){
      var open=nl.classList.toggle('open');
      tg.setAttribute('aria-expanded',open);
      tg.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    nl.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        nl.classList.remove('open');
        tg.setAttribute('aria-expanded','false');
        tg.setAttribute('aria-label','Open menu');
      });
    });
    // Close on Escape
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&nl.classList.contains('open')){
        nl.classList.remove('open');
        tg.setAttribute('aria-expanded','false');
        tg.setAttribute('aria-label','Open menu');
        tg.focus();
      }
    });
  }

  // Active nav link
  var path=location.pathname.replace(/\/$/,'');
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href=(a.getAttribute('href')||'').replace(/\/$/,'');
    if(href===path||(path===''&&(href===''||href==='/'))){ 
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });

  // Footer year
  var yr=document.getElementById('yr');
  if(yr) yr.textContent=new Date().getFullYear();

  // Newsletter forms
  document.querySelectorAll('.newsletter').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var input=form.querySelector('input[type=email]');
      var msg=form.parentElement.querySelector('.newsletter-msg');
      if(!msg){msg=document.createElement('p');msg.className='newsletter-msg';form.after(msg);}
      if(input&&input.value){
        msg.textContent='Thanks for subscribing! We\'ll be in touch.';
        msg.className='newsletter-msg success';
        input.value='';
      } else {
        msg.textContent='Please enter a valid email address.';
        msg.className='newsletter-msg error';
      }
    });
  });
})();
