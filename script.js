(function(){
  var menu=document.getElementById('menuToggle');
  var nav=document.querySelector('.desktop-nav');
  if(menu&&nav){
    menu.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
      });
    });
  }
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
      });
    },{threshold:.12});
    reveals.forEach(function(el){observer.observe(el);});
  }else{reveals.forEach(function(el){el.classList.add('visible');});}
  var device=document.getElementById('productDevice');
  var visual=document.getElementById('heroVisual');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(device&&visual&&!reduce&&window.matchMedia('(pointer:fine)').matches){
    visual.addEventListener('pointermove',function(e){
      var r=visual.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5;
      var y=(e.clientY-r.top)/r.height-.5;
      device.style.animationPlayState='paused';
      device.style.transform='rotateY('+(-14+x*8)+'deg) rotateX('+(6-y*6)+'deg) rotateZ('+( -1.5+x*1.8)+'deg) translateY('+(y*-9)+'px)';
    });
    visual.addEventListener('pointerleave',function(){
      device.style.animationPlayState='running';
      device.style.transform='';
    });
  }
})();