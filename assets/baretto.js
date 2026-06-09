/* BARETTO DI BRERA — interações sutis */
(function(){
  if(location.search.indexOf('noanim')>-1){ document.documentElement.classList.add('noanim'); }
  /* Nav: sólida ao rolar */
  var nav = document.querySelector('.nav');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 40) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* Hambúrguer mobile */
  var burger = document.querySelector('.nav .burger');
  if(burger){
    burger.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
    document.querySelectorAll('.nav .links a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  }

  /* Reveal no scroll (baseado em getBoundingClientRect — robusto) */
  var items = [].slice.call(document.querySelectorAll('.reveal, .reveal-img'));
  function revealCheck(){
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for(var i=items.length-1; i>=0; i--){
      var el = items[i];
      var r = el.getBoundingClientRect();
      if(r.top < vh*0.88 && r.bottom > 0){
        el.classList.add('in');
        items.splice(i,1);
      }
    }
  }
  window.addEventListener('scroll', revealCheck, {passive:true});
  window.addEventListener('resize', revealCheck);
  revealCheck();
  setTimeout(revealCheck, 120);

  /* Ano no rodapé */
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });
})();
