function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("line3").classList.toggle('active');
    document.getElementById("line4").classList.toggle('active');
    document.getElementById("btn").classList.toggle('active');
    document.getElementById("line1").classList.toggle('active');
    document.getElementById("line2").classList.toggle('active');
   };  
function toggleCartbar(){
    document.getElementById("cartsidebar").classList.toggle('active');
    document.getElementById("triangle").classList.toggle('active');
};
const red = document.getElementById("redcube");
            const yellow = document.getElementById("yellowcube");
            const green = document.getElementById("greencube");
            const orange = document.getElementById("orangecube");
            const black = document.getElementById("blackcube");
            const blue = document.getElementById("bluecube");
            const slider = document.getElementById("slider");
            
            
            var sectionIndex = 0;
            
            slider.children.length = "5";
            
            function reset() {
                for (var i = 0; i < slider.children.length; i++) {
                  slider.children[i].style.zIndex = 0;
                  slider.children[i].style.opacity = 0;
                }
            }
            
            red.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });  
            
            yellow.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });
            
            green.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });  
            orange.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });  
            black.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });
            blue.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 5 : 5 ;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            }); 



            red.addEventListener('click', function() { 
                reset();
                  sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                  slider.children[sectionIndex].style.zIndex = 2;
                  slider.children[sectionIndex].style.opacity = 1;
            });  