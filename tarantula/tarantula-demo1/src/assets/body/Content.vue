<template>
  <div id="content">
      <section class="section section-light sectionone">
          <h2>OPTIMIZED FOR MOBILE DEVICES</h2>
          <h4>Thefox is Retina Ready, we only use sharp retina graphics ! Your website will always looks beautiful on all Retina-Displays and other High-Resolution Screens. All theme assets are Retina Ready so no need to worry!
          </h4>
      </section>
      <div class="details1">
          <div class="details1_1">
              <div class="details1_1_child">
                  <h4>Fully Retina Ready</h4>
                  <h6>
                      Thefox is Retina Ready, we only use sharp retina graphics ! Your website will always looks beautiful on any devices.
                    </h6>
              </div>
              <div  class="details1_1_child">
                <h4>Special Mobile Design</h4>
                <h6>TheFox got the option ready for Mobile device, you will be able to custom the appearance of the mobile design.
                </h6>
              </div>
              <div  class="details1_1_child">
                <h4>Disable Element on Mobile</h4>
                <h6>TheFox also gives you the possibility to disable or hide some elements when the user check the site from a mobile device
                </h6>
              </div>
          </div>
          <div class="image details1_2" id="details1_image" :class="{ showobjects : showobjects}"></div>
          <div  class="details1_3">
              <div  class="details1_3_child" >
                  <h4>Custom Mobile Menu</h4>
                  <h6>We give you the possibility to custom the Mobile Menu appearance, color and position from the theme options
                    </h6>
              </div>
              <div  class="details1_3_child" >
                <h4>Swipe Ready</h4>
                <h6>Most of the element are swipe ready, the users can easily go through your site even from their mobiles or tablets
                </h6>
              </div>
              <div  class="details1_3_child" >
                <h4>CSS3 Animation Ready</h4>
                <h6>TheFox comes with a bunch of CSS3 animations for all the modules and shortcodes that are included in the package
                </h6>
              </div>
          </div>
      </div>

      <div class="pimg1" >
          <div class="ptext">
              <div class="border pimg1_border" :style="img1style">
                  Image One text
              </div>
          </div>
      </div>
      <section class="section section-light">
          <h2>Section one</h2>
          <p>This section has all details about products</p>
      </section>
       <div class="pimg2">
          <div class="ptext">
              <div class="border">
                  Image two text
              </div>
          </div>
      </div>
      <section class="section section-dark">
          <h2>Section Two</h2>
          <p>This section has all details about products</p>
      </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showobjects : false,
            img1style : {}
        }
    },
  methods : {
    screenadjusted(e){
       console.log("scrolled method invoked");
       console.log("window height"+e.target.innerHeight);
       console.log("window width"+e.target.innerWidth);
    },
    scrolled(e){
      console.log("scrolled method started");
  /*     console.log("scrollTop: "+document.documentElement.scrollTop);
      console.log("largewindow: "+(document.getElementById("details1_image").offsetTop - (window.innerHeight/1.5)));
      console.log("offsetTop: "+document.getElementById("details1_image").offsetTop);
      console.log("window.height: "+(window.innerHeight));
      console.log("window.height divided: "+(window.innerHeight/1.5)); */


      if(document.documentElement.scrollTop > 
      (document.getElementById("details1_image").offsetTop - (window.innerHeight/2)))
      {
        console.log("body >");
        this.showobjects = true;
      }

// showdetails

/* console.log("+++++++details1_1: "+document.getElementsByClassName("details1_1")[0].offsetTop);
console.log("window.innerHeight/2: "+(window.innerHeight/2));
console.log("++++++++window.innerHeight: "+(window.innerHeight)); */
    if(document.documentElement.scrollTop > 
    (document.getElementsByClassName("details1_1")[0].offsetTop - (window.innerHeight/2))) {
        
        console.log("details1_1 reached");

        document.getElementsByClassName("details1_1")[0].childNodes.forEach(function(data,index){
            console.log(data.className);
            if(data.className == "details1_1_child"){
                console.log("in div details1_1_child");
                setTimeout(function(){
                    console.log("in setimeout details1_1_child");
                    data.className="showdetails";
                },(300 *(index+1)));
            }
        });

    }

if(document.documentElement.scrollTop > 
    (document.getElementsByClassName("details1_3")[0].offsetTop - (window.innerHeight/2))) {
        
        console.log("details1_3 reached");

        document.getElementsByClassName("details1_3")[0].childNodes.forEach(function(data,index){
            console.log(data.className);
            if(data.className == "details1_3_child"){
                console.log("in div details1_3_child");
                setTimeout(function(){
                    console.log("in setimeout details1_3_child");
                    data.className="showdetails";
                },(300 *(index+1)));
            }
        });

    }

console.log("scrollTop: "+document.documentElement.scrollTop);
console.log("pimg1_border: "+(document.getElementsByClassName("pimg1_border")[0].offsetTop));
console.log("++++++++ny4: "+(document.documentElement.scrollTop/4));

    if(document.documentElement.scrollTop > document.getElementsByClassName("pimg1_border")[0].offsetTop){
        //this.img1style = {color : "yellow"};
       // this.img1style = {transform : "translate(0px,"+(document.documentElement.scrollTop/4)+"px )"};
    }
    

      console.log("scrolled method ended");
    }
  },
  created(){
    window.addEventListener('resize', this.screenadjusted);
    window.addEventListener('scroll', this.scrolled);
    
  }
}
</script>

<style>
#content{
    height:auto;
    width: auto;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
}

.sectionone{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sectionone h4{
    width: 64%;
}
/* http://test-tarantula.s3-website.us-east-2.amazonaws.com */
#content .pimg1{
    background-image: url('/public/images/parallax/parallax1.jpeg');
    min-height: 400px;
}
#content .pimg2{
    background-image: url('/public/images/parallax/parallax3.jpeg');
    min-height: 400px;
}

.pimg1,.pimg2{
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
}
.section{
    text-align: center;
    
    min-height: 300px;
}
.section-light{
    background-color: #f4f4f4;
    color:#666;
    width: 100%;
}
.section-dark{
    background-color: #282e34;
    color:#ddd;
    width: 100%;
}
.ptext{
    position: absolute;
    top:50%;
    width: 100%;
    text-align: center;
    color:#000;
    font-size: 27px;
    letter-spacing: 8px;
}
.ptext .border{
    background-color: #111;
    color: #fff;
    padding: 20px 0px;
    transition: all 0.300s ease-in;
    display: inline-block;
}
.ptext .border:hover{
    background-color: aqua;
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d;
    transform: translateZ(20px);
    transition: all 0.300s ease-out;
    
}
.section{
    position: relative;
}
.section h2{
    display: inline-block;
    transition: all 1s ease-out;
    
}
.section h2:hover {
    background-color: yellow;
    transform: perspective(1000px) translateZ(100px);
    transition: all 1s ease-in;
}
@media (max-width: 568px){
    .pimg1,.pimg2{
        background-attachment: scroll;
    }
}

#content .details1{
    display: flex;
    
}
#content .details1 div{
    flex:1;
}
#content .details1 >  div:nth-child(1){
    text-align: right;
}

#content .details1 div:nth-child(2){
    flex:2;
}
.details1 .image{
    background-image: url('/public/images/apple.png');
     position: relative;
     background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    opacity : 0;
    transform: translateX(-30px);
    transition: all 0.3s ease-in-out;
}

.details1 .image.showobjects{
  opacity: 1;
  transform: translateX(0px);
}

.details1_1 > div , .details1_3 > div{
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.3s ease-in-out;
}

.details1_1 > div.showdetails , .details1_3 > div.showdetails {
    opacity: 1;
    transform: translateX(0px);
}

</style>
