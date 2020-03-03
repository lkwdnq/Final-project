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





            //SECOND SLIDER
            const red2 = document.getElementById("redcube2");
            const yellow2 = document.getElementById("yellowcube2");
            const green2 = document.getElementById("greencube2");
            const orange2 = document.getElementById("orangecube2");
            const black2 = document.getElementById("blackcube2");
            const slider2 = document.getElementById("slider2");
            
            
            var sectionIndex = 0;
            
            slider2.children.length = "5";
            
            function reset2() {
                for (var i = 0; i < slider2.children.length; i++) {
                  slider2.children[i].style.zIndex = 0;
                  slider2.children[i].style.opacity = 0;
                }
            }
            
            red2.addEventListener('click', function() { 
                reset2();
                  sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                  slider2.children[sectionIndex].style.zIndex = 2;
                  slider2.children[sectionIndex].style.opacity = 1;
            });  
            
            yellow2.addEventListener('click', function() { 
                reset2();
                  sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                  slider2.children[sectionIndex].style.zIndex = 2;
                  slider2.children[sectionIndex].style.opacity = 1;
            });
            
            green2.addEventListener('click', function() { 
                reset2();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                  slider2.children[sectionIndex].style.zIndex = 2;
                  slider2.children[sectionIndex].style.opacity = 1;
            });  
            orange2.addEventListener('click', function() { 
                reset2();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                  slider2.children[sectionIndex].style.zIndex = 2;
                  slider2.children[sectionIndex].style.opacity = 1;
            });  
            black2.addEventListener('click', function() { 
                reset2();
                  sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                  slider2.children[sectionIndex].style.zIndex = 2;
                  slider2.children[sectionIndex].style.opacity = 1;
            }); 




                        //THIRD SLIDER
                        const red3 = document.getElementById("redcube3");
                        const yellow3 = document.getElementById("yellowcube3");
                        const green3 = document.getElementById("greencube3");
                        const orange3 = document.getElementById("orangecube3");
                        const black3 = document.getElementById("blackcube3");
                        const slider3 = document.getElementById("slider3");
                        
                        
                        var sectionIndex = 0;
                        
                        slider3.children.length = "5";
                        
                        function reset3() {
                            for (var i = 0; i < slider3.children.length; i++) {
                              slider3.children[i].style.zIndex = 0;
                              slider3.children[i].style.opacity = 0;
                            }
                        }
                        
                        red3.addEventListener('click', function() { 
                            reset3();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider3.children[sectionIndex].style.zIndex = 2;
                              slider3.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow3.addEventListener('click', function() { 
                            reset3();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider3.children[sectionIndex].style.zIndex = 2;
                              slider3.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green3.addEventListener('click', function() { 
                            reset3();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider3.children[sectionIndex].style.zIndex = 2;
                              slider3.children[sectionIndex].style.opacity = 1;
                        });  
                        orange3.addEventListener('click', function() { 
                            reset3();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider3.children[sectionIndex].style.zIndex = 2;
                              slider3.children[sectionIndex].style.opacity = 1;
                        });  
                        black3.addEventListener('click', function() { 
                            reset3();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                              slider3.children[sectionIndex].style.zIndex = 2;
                              slider3.children[sectionIndex].style.opacity = 1;
                        }); 





                        //FOURTH    SLIDER
                        const red4 = document.getElementById("redcube4");
                        const yellow4 = document.getElementById("yellowcube4");
                        const green4 = document.getElementById("greencube4");
                        const orange4 = document.getElementById("orangecube4");
                        const black4 = document.getElementById("blackcube4");
                        const slider4 = document.getElementById("slider4");
                        
                        
                        var sectionIndex = 0;
                        
                        slider4.children.length = "5";
                        
                        function reset4() {
                            for (var i = 0; i < slider4.children.length; i++) {
                              slider4.children[i].style.zIndex = 0;
                              slider4.children[i].style.opacity = 0;
                            }
                        }
                        
                        red4.addEventListener('click', function() { 
                            reset4();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider4.children[sectionIndex].style.zIndex = 2;
                              slider4.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow4.addEventListener('click', function() { 
                            reset4();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider4.children[sectionIndex].style.zIndex = 2;
                              slider4.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green4.addEventListener('click', function() { 
                            reset4();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider4.children[sectionIndex].style.zIndex = 2;
                              slider4.children[sectionIndex].style.opacity = 1;
                        });  
                        orange4.addEventListener('click', function() { 
                            reset4();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider4.children[sectionIndex].style.zIndex = 2;
                              slider4.children[sectionIndex].style.opacity = 1;
                        });  




                        //FIFTH    SLIDER
                        const red5 = document.getElementById("redcube5");
                        const yellow5 = document.getElementById("yellowcube5");
                        const green5 = document.getElementById("greencube5");
                        const orange5 = document.getElementById("orangecube5");
                        const black5 = document.getElementById("blackcube5");
                        const slider5 = document.getElementById("slider5");
                        
                        
                        var sectionIndex = 0;
                        
                        slider5.children.length = "4";
                        
                        function reset5() {
                            for (var i = 0; i < slider5.children.length; i++) {
                              slider5.children[i].style.zIndex = 0;
                              slider5.children[i].style.opacity = 0;
                            }
                        }
                        
                        red5.addEventListener('click', function() { 
                            reset5();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider5.children[sectionIndex].style.zIndex = 2;
                              slider5.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow5.addEventListener('click', function() { 
                            reset5();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider5.children[sectionIndex].style.zIndex = 2;
                              slider5.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green5.addEventListener('click', function() { 
                            reset5();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider5.children[sectionIndex].style.zIndex = 2;
                              slider5.children[sectionIndex].style.opacity = 1;
                        });  
                        orange5.addEventListener('click', function() { 
                            reset5();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider5.children[sectionIndex].style.zIndex = 2;
                              slider5.children[sectionIndex].style.opacity = 1;
                        });




                        //SIXTH    SLIDER
                        const red6 = document.getElementById("redcube6");
                        const yellow6 = document.getElementById("yellowcube6");
                        const green6 = document.getElementById("greencube6");
                        const orange6 = document.getElementById("orangecube6");
                        const black6 = document.getElementById("blackcube6");
                        const slider6 = document.getElementById("slider6");
                        
                        
                        var sectionIndex = 0;
                        
                        slider6.children.length = "5";
                        
                        function reset6() {
                            for (var i = 0; i < slider6.children.length; i++) {
                              slider6.children[i].style.zIndex = 0;
                              slider6.children[i].style.opacity = 0;
                            }
                        }
                        
                        red6.addEventListener('click', function() { 
                            reset6();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider6.children[sectionIndex].style.zIndex = 2;
                              slider6.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow6.addEventListener('click', function() { 
                            reset6();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider6.children[sectionIndex].style.zIndex = 2;
                              slider6.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green6.addEventListener('click', function() { 
                            reset6();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider6.children[sectionIndex].style.zIndex = 2;
                              slider6.children[sectionIndex].style.opacity = 1;
                        });  
                        orange6.addEventListener('click', function() { 
                            reset6();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider6.children[sectionIndex].style.zIndex = 2;
                              slider6.children[sectionIndex].style.opacity = 1;
                        });





                        //SEVENTH    SLIDER
                        const red7 = document.getElementById("redcube7");
                        const yellow7 = document.getElementById("yellowcube7");
                        const green7 = document.getElementById("greencube7");
                        const orange7 = document.getElementById("orangecube7");
                        const gray7 = document.getElementById("graycube7");
                        const black7 = document.getElementById("blackcube7");
                        const slider7 = document.getElementById("slider7");
                        
                        
                        
                        
                        var sectionIndex = 0;
                        
                        slider7.children.length = "5";
                        
                        function reset7() {
                            for (var i = 0; i < slider7.children.length; i++) {
                              slider7.children[i].style.zIndex = 0;
                              slider7.children[i].style.opacity = 0;
                            }
                        }
                        
                        red7.addEventListener('click', function() { 
                            reset7();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider7.children[sectionIndex].style.zIndex = 2;
                              slider7.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow7.addEventListener('click', function() { 
                            reset7();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider7.children[sectionIndex].style.zIndex = 2;
                              slider7.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green7.addEventListener('click', function() { 
                            reset7();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider7.children[sectionIndex].style.zIndex = 2;
                              slider7.children[sectionIndex].style.opacity = 1;
                        });  
                        orange7.addEventListener('click', function() { 
                            reset7();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider7.children[sectionIndex].style.zIndex = 2;
                              slider7.children[sectionIndex].style.opacity = 1;
                        });
                        black7.addEventListener('click', function() { 
                            reset7();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                              slider7.children[sectionIndex].style.zIndex = 2;
                              slider7.children[sectionIndex].style.opacity = 1;
                        });





                        //EIGHTH    SLIDER
                        const red8 = document.getElementById("redcube8");
                        const yellow8 = document.getElementById("yellowcube8");
                        const green8 = document.getElementById("greencube8");
                        const orange8 = document.getElementById("orangecube8");
                        const black8 = document.getElementById("blackcube8");
                        const slider8 = document.getElementById("slider8");
                        
                        
                        var sectionIndex = 0;
                        
                        slider8.children.length = "5";
                        
                        function reset8() {
                            for (var i = 0; i < slider8.children.length; i++) {
                              slider8.children[i].style.zIndex = 0;
                              slider8.children[i].style.opacity = 0;
                            }
                        }
                        
                        red8.addEventListener('click', function() { 
                            reset8();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider8.children[sectionIndex].style.zIndex = 2;
                              slider8.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow8.addEventListener('click', function() { 
                            reset8();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider8.children[sectionIndex].style.zIndex = 2;
                              slider8.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green8.addEventListener('click', function() { 
                            reset8();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider8.children[sectionIndex].style.zIndex = 2;
                              slider8.children[sectionIndex].style.opacity = 1;
                        });  
                        orange8.addEventListener('click', function() { 
                            reset8();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider8.children[sectionIndex].style.zIndex = 2;
                              slider8.children[sectionIndex].style.opacity = 1;
                        });
                      





                        //NINTH    SLIDER
                        const red9 = document.getElementById("redcube9");
                        const yellow9 = document.getElementById("yellowcube9");
                        const green9 = document.getElementById("greencube9");
                        const orange9 = document.getElementById("orangecube9");
                        const black9 = document.getElementById("blackcube9");
                        const slider9 = document.getElementById("slider9");
                        
                        
                        var sectionIndex = 0;
                        
                        slider9.children.length = "5";
                        
                        function reset9() {
                            for (var i = 0; i < slider9.children.length; i++) {
                              slider9.children[i].style.zIndex = 0;
                              slider9.children[i].style.opacity = 0;
                            }
                        }
                        
                        red9.addEventListener('click', function() { 
                            reset9();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider9.children[sectionIndex].style.zIndex = 2;
                              slider9.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow9.addEventListener('click', function() { 
                            reset9();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider9.children[sectionIndex].style.zIndex = 2;
                              slider9.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green9.addEventListener('click', function() { 
                            reset9();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider9.children[sectionIndex].style.zIndex = 2;
                              slider9.children[sectionIndex].style.opacity = 1;
                        });  
                        orange9.addEventListener('click', function() { 
                            reset9();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider9.children[sectionIndex].style.zIndex = 2;
                              slider9.children[sectionIndex].style.opacity = 1;
                        });
                        black9.addEventListener('click', function() { 
                            reset9();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                              slider9.children[sectionIndex].style.zIndex = 2;
                              slider9.children[sectionIndex].style.opacity = 1;
                        });   






                        //TENTH    SLIDER
                        const red10 = document.getElementById("redcube10");
                        const yellow10 = document.getElementById("yellowcube10");
                        const green10 = document.getElementById("greencube10");
                        const orange10 = document.getElementById("orangecube10");
                        const black10 = document.getElementById("blackcube10");
                        const slider10 = document.getElementById("slider10");
                        
                        
                        var sectionIndex = 0;
                        
                        slider10.children.length = "5";
                        
                        function reset10() {
                            for (var i = 0; i < slider10.children.length; i++) {
                              slider10.children[i].style.zIndex = 0;
                              slider10.children[i].style.opacity = 0;
                            }
                        }
                        
                        red10.addEventListener('click', function() { 
                            reset10();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider10.children[sectionIndex].style.zIndex = 2;
                              slider10.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow10.addEventListener('click', function() { 
                            reset10();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider10.children[sectionIndex].style.zIndex = 2;
                              slider10.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green10.addEventListener('click', function() { 
                            reset10();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider10.children[sectionIndex].style.zIndex = 2;
                              slider10.children[sectionIndex].style.opacity = 1;
                        });  
                        orange10.addEventListener('click', function() { 
                            reset10();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider10.children[sectionIndex].style.zIndex = 2;
                              slider10.children[sectionIndex].style.opacity = 1;
                        });





                        //ELEVENTH    SLIDER
                        const red11 = document.getElementById("redcube11");
                        const yellow11 = document.getElementById("yellowcube11");
                        const green11 = document.getElementById("greencube11");
                        const orange11 = document.getElementById("orangecube11");
                        const black11 = document.getElementById("blackcube11");
                        const slider11 = document.getElementById("slider11");
                        
                        
                        var sectionIndex = 0;
                        
                        slider11.children.length = "5";
                        
                        function reset11() {
                            for (var i = 0; i < slider11.children.length; i++) {
                              slider11.children[i].style.zIndex = 0;
                              slider11.children[i].style.opacity = 0;
                            }
                        }
                        
                        red11.addEventListener('click', function() { 
                            reset11();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider11.children[sectionIndex].style.zIndex = 2;
                              slider11.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow11.addEventListener('click', function() { 
                            reset11();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider11.children[sectionIndex].style.zIndex = 2;
                              slider11.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green11.addEventListener('click', function() { 
                            reset11();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider11.children[sectionIndex].style.zIndex = 2;
                              slider11.children[sectionIndex].style.opacity = 1;
                        });  
                        orange11.addEventListener('click', function() { 
                            reset11();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider11.children[sectionIndex].style.zIndex = 2;
                              slider11.children[sectionIndex].style.opacity = 1;
                        });
                        black11.addEventListener('click', function() { 
                            reset11();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 4 : 4 ;
                              slider11.children[sectionIndex].style.zIndex = 2;
                              slider11.children[sectionIndex].style.opacity = 1;
                        });   



                        //TWELVETH    SLIDER
                        const red12 = document.getElementById("redcube12");
                        const yellow12 = document.getElementById("yellowcube12");
                        const green12 = document.getElementById("greencube12");
                        const orange12 = document.getElementById("orangecube12");
                        const black12 = document.getElementById("blackcube12");
                        const slider12 = document.getElementById("slider12");
                        
                        
                        var sectionIndex = 0;
                        
                        slider12.children.length = "5";
                        
                        function reset12() {
                            for (var i = 0; i < slider12.children.length; i++) {
                              slider12.children[i].style.zIndex = 0;
                              slider12.children[i].style.opacity = 0;
                            }
                        }
                        
                        red12.addEventListener('click', function() { 
                            reset12();
                              sectionIndex = (sectionIndex < 0) ? sectionIndex + 0 : 0;
                              slider12.children[sectionIndex].style.zIndex = 2;
                              slider12.children[sectionIndex].style.opacity = 1;
                        });  
                        
                        yellow12.addEventListener('click', function() { 
                            reset12();
                              sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 1;
                              slider12.children[sectionIndex].style.zIndex = 2;
                              slider12.children[sectionIndex].style.opacity = 1;
                        });
                        
                        green12.addEventListener('click', function() { 
                            reset12();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 2 : 2;
                              slider12.children[sectionIndex].style.zIndex = 2;
                              slider12.children[sectionIndex].style.opacity = 1;
                        });  
                        orange12.addEventListener('click', function() { 
                            reset12();
                              sectionIndex = (sectionIndex < 1) ? sectionIndex + 3 : 3;
                              slider12.children[sectionIndex].style.zIndex = 2;
                              slider12.children[sectionIndex].style.opacity = 1;
                        }); 
                        function change1(){
                            window.location.href = 'indexphoto1.html';
                          }
                          function change2(){
                            window.location.href = 'indexphoto2.html';
                          }
                          function change3(){
                            window.location.href = 'indexphoto3.html';
                          }
                          function change4(){
                            window.location.href = 'indexphoto4.html';
                          }
                          function change5(){
                            window.location.href = 'indexphoto5.html';
                          }
                          function change6(){
                            window.location.href = 'indexphoto6.html';
                          }
                          function change7(){
                            window.location.href = 'indexphoto7.html';
                          }
                          function change8(){
                            window.location.href = 'indexphoto8.html';
                          }
                          function change9(){
                            window.location.href = 'indexphoto9.html';
                          }
                          function change10(){
                            window.location.href = 'indexphoto10.html';
                          }
