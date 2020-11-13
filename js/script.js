 
     	
function animateValue(obj, start, end, duration) {
	 
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1025);
     obj.innerHTML = Math.floor(Math.random() * Math.floor(progress * (end - start) + start));     
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
const obj1 = document.getElementById("value1");
const obj2 = document.getElementById("value2");
const obj3 = document.getElementById("value3");
const obj4 = document.getElementById("value4");
const obj5 = document.getElementById("value5");
const obj6 = document.getElementById("value6");
const obj7 = document.getElementById("value7");
const obj8 = document.getElementById("value8");
animateValue(obj, 1000, 800, 9000);
animateValue(obj1, 1000, 900, 6000);
animateValue(obj2, 5000, 3500, 9000);
animateValue(obj3, 10000, 9500, 12000);
animateValue(obj4, 15000, 14000, 15000);
animateValue(obj5, 20000, 50, 18000);
animateValue(obj6, 25000, 75, 21000);
animateValue(obj7, 3000, 352, 24000);
animateValue(obj8, 40000, 968, 27000);
	 

  setTimeout(function(){
        obj.classList.add('zoomout');
    }, 50);

    setTimeout(function(){
        obj1.classList.add('zoomout');
    }, 100);
       setTimeout(function(){
        obj2.classList.add('zoomout');
    }, 200);
          setTimeout(function(){
        obj3.classList.add('zoomout');
    }, 1000);
             setTimeout(function(){
        obj4.classList.add('zoomout');
    }, 1500);
                setTimeout(function(){
        obj5.classList.add('zoomout');
    }, 3000);
                   setTimeout(function(){
        obj6.classList.add('zoomout');
    }, 4500);
                      setTimeout(function(){
        obj7.classList.add('zoomout');
    }, 6000);
                         setTimeout(function(){
        obj8.classList.add('zoomout');
    }, 8000);

   setTimeout(function(){
        obj.classList.add('remove');
    }, 2500);
    setTimeout(function(){
        obj1.classList.add('remove');
    }, 3500);
 