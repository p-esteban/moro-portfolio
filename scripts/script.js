document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
  
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });

  

  WebFont.load({
    google: {
        families: ["Inconsolata:400,700", "Outfit:300,regular,500,600,700"]
    }
});

!function(o, c) {
  var n = c.documentElement
    , t = " w-mod-";
  n.className += t + "js",
  ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);


window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-H1VX31Z0JG', {
    'anonymize_ip': false
});

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-H1VX31Z0JG');


window.addEventListener("mousemove", (e)=>{
  let cursors = [...document.getElementsByClassName("cursor")].concat([...document.getElementsByClassName("cursor-s")]);
  for (let cursor of cursors) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
      console.log(e);
      console.log(cursor);
  }
}
);


document.addEventListener("mousemove", (e) => {
  let cursors = [...document.getElementsByClassName("cursor")].concat([...document.getElementsByClassName("cursor-s")]);
  for (let cursor of cursors) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
      console.log(e);
      console.log(cursor);
  }
}
);

document.addEventListener("mousemove", (e) => {
  let cursors = [...document.getElementsByClassName("cursor")].concat([...document.getElementsByClassName("cursor-s")]);
  for (let cursor of cursors) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
      console.log(e);
      console.log(cursor);
  }
}
);