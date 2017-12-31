<template>
  <div class="header">
      <div class="logo">
        <!-- <a>Tarantula</a> -->
        <a style="height:40px;width:40px;display:block;">
          <img src="public/images/logo.png" alt="no logo image" style="width:inherit;height:inherit;"/>
        </a>
      </div>
      <div class="horizontal-bar">
        <ul>
          <li><a>Products</a>
            <ul class="">
              <li><a>Website Development</a>
                <ul class="">
                  <li><a>Static Design</a></li>
                  <li><a>Dynamic Design</a></li>
                  <li><a>Mobile Version</a></li>
                </ul>
              </li>
              <li><a>Mobile App Development</a>
                <ul class="">
                  <li><a>Android</a></li>
                  <li><a>IOS Devices</a></li>
                </ul>
              </li>
              <li><a>E-Commerce Integration</a>
              </li>
              <li><a>Content Management</a></li>
              <li><a>Database Management</a></li>
              <li><a>Cloud Storage</a></li>
              <li><a>Animation Videos</a></li>
              <li><a>Logo Design</a></li>
              <li><a>Web Analytics</a></li>
            </ul>
          </li>
          <li><a>Services</a>
            <ul class="">
              <li><a>Website Renovation</a>
                <ul class="">
                  <li><a>Web Layout Redesign</a></li>
                  <li><a>Web Content</a></li>
                  <li><a>Improve Web Security</a></li>
                  <li><a>E-Commerce Plugin</a></li>
                  <li><a>Social Media Advertisements</a></li>
                  <li><a>Forms, Feedback, Rating,  Polls</a></li>
                </ul>
              </li>
              <li><a>Website Maintenance</a>
                <ul class="">
                  <li><a>Debugging</a></li>
                  <li><a>Upgrade</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a>Offers</a>
            <ul class="">
              <li><a>Free Corporate Email </a></li>
              <li><a>Social Media Marketing</a></li>
              <li><a>Free Blog</a></li>
            </ul>
          </li>
          <li><a>Process &amp; Prices</a>
            <ul class="">
              <li><a>Website Development</a></li>
              <li><a>Website Renovation</a></li>
              <li><a>Website Maintenance</a></li>
            </ul>
          </li>
          <li><a>Type of Websites</a>
            <ul class="">
            <li><a>Product Marketing</a></li>
            <li><a>Photography</a></li>
            <li><a>Online transactions</a></li>
            <li><a>Image/Video Gallery</a></li>
            <li><a>Personal Portfolio Websites</a></li>
            </ul>
          </li>
          <li><a>Platform</a>
            <ul class="">
              <li><a>Windows</a></li>
              <li><a>Apple iOS</a></li>
              <li><a>Mobile </a></li>
            </ul>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background-color: black;
  color: white;
  display: flex;  
  height:10%;
  /* align-items: center; */
  border-bottom: 2px green solid;
  position: fixed;
  width: 100%;
  z-index: 100;
  opacity: 0.8;
}
.header .logo{
  flex-grow: 1;
}
.header .logo a{
  position: relative;
  top: 25%;
}
.header .horizontal-bar{
  flex-grow: 1;
}  
/* first level start */
.horizontal-bar ul {
  list-style-type: none;
  margin:0;
  padding:0;
  height: 100%;
  width: 100%;
  
}

.horizontal-bar > ul > li {
  display: inline-block;
}

.horizontal-bar > ul > li{
  /* padding: 2%; */
  height: 100%;
}
.horizontal-bar > ul > li > a{
  position: relative;
  top: 40%;
}
.horizontal-bar  ul  li{
  opacity: 1;
}
.horizontal-bar  ul  li  a{
  padding: 4px; 
}
.horizontal-bar  > ul > li > a:hover {
  background-color: #868282;
}

.horizontal-bar  > ul > li ul{
  /* opacity: 0.7; */
  z-index: 10;
}
/* first level end */

/* second level start */
.horizontal-bar  > ul > li > ul li a:hover {
  border-bottom: 1px solid yellow;
}
.horizontal-bar > ul > li > ul {
  display:none; 
  border-top: 1px solid blue;
  height: auto;
  position: absolute;
  background-color: black;
  top: 100%;
  flex-wrap: wrap;
}

.horizontal-bar > ul > li:nth-child(1) > ul {
  width: 450px;
   /* display: flex;  */
}
.horizontal-bar > ul > li:nth-child(2) > ul {
  width: 430px;
   /* display: flex;  */
}
.horizontal-bar > ul > li:nth-child(3) > ul {
  width: 200px;
}
.horizontal-bar > ul > li:nth-child(4) > ul {
  width: 170px;
}
.horizontal-bar > ul > li:nth-child(5) > ul {
  width: 210px;
}
.horizontal-bar > ul > li:nth-child(6) > ul {
  width: 100px;
}
/* second level end */
.horizontal-bar > ul > li:nth-child(1) > ul > li ul{
  margin-bottom: 5%;
  padding:4%;
}

.horizontal-bar > ul > li:nth-child(2) > ul > li ul{
  margin-bottom: 5%;
  padding:4%;
}

.horizontal-bar > ul > li:nth-child(3) > ul {
  padding-bottom:0.5%;
}

.horizontal-bar > ul > li:nth-child(4) > ul {
  padding-bottom:0.5%;
}

.horizontal-bar > ul > li:nth-child(5) > ul {
  padding-bottom:0.5%;
}

.horizontal-bar > ul > li:nth-child(6) > ul {
  padding-bottom:0.5%;
}

.horizontal-bar > ul > li > ul li{
  padding:2%;
  flex-grow: 1;
  width: 200px;
} 
.horizontal-bar > ul > li:nth-child(1) > ul li{
  padding:2%;
  flex-grow: 1;
  width: 200px;
} 
.horizontal-bar > ul > li:nth-child(2) > ul li{
  padding:2%;
  flex-grow: 1;
  width: 220px;
} 
.horizontal-bar > ul > li:nth-child(2) > ul > li:nth-child(2){
  width: 120px;
}


.horizontal-bar > ul > li:nth-child(1):hover > ul {
  display: flex;
}
.horizontal-bar > ul > li:nth-child(2):hover > ul {
  display: flex;
}
.horizontal-bar > ul > li:nth-child(3):hover > ul {
  display: block;
}
.horizontal-bar > ul > li:nth-child(4):hover > ul {
  display: block;
}
.horizontal-bar > ul > li:nth-child(5):hover > ul {
  display: block;
}
.horizontal-bar > ul > li:nth-child(6):hover > ul {
  display: block;
}


.horizontal-bar > ul > li:nth-child(1):hover > ul > li > ul{
  display: block;
}
.horizontal-bar > ul > li:nth-child(2):hover > ul > li > ul{
  display: block;
}

</style>
