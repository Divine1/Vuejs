<template>
  <div id="header" class="header">
      <div class="logo">
          <a>LOGO</a>
      </div>
      <div class="toolbar">
          <ul>
              <li>
                  <a>Courses</a>
                  <ul>
                      <li>Course1
                        <ul>
                            <li>Coursex</li>
                            <li>Coursey</li>
                            <li>Coursez</li>
                        </ul>
                      </li>
                      <li>Course2
                        <ul>
                            <li>Lion</li>
                            <li>Tiger</li>
                            <li>Fool</li>
                        </ul>

                      </li>
                      <li>Course3</li>
                  </ul>
              </li>
              <li>
                  <a>Competitions</a>
                  <ul>
                      <li>Select City</li>
                      <li>Chennai</li>
                      <li>Madurai</li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#header{
  background-color: yellow;
}
.header{
  display: flex;
  /* height: 10%; */
  
}

.header .logo{
    background-color: aqua;
    flex:.1;
}
.header .logo{
    padding: 10px;
}
.toolbar{
    flex:2;
}

.toolbar ul{
    list-style-type: none;
    margin:0;
    padding: 0;
    
}
/* first level start */
.toolbar > ul {
    display: flex;
    
    background-color: green;
}
.toolbar > ul > li{
    width: 110px;
}
.toolbar > ul > li:hover{
    background-color: greenyellow;
}

.toolbar > ul > li > a{
    display: block;
    padding: 10px;
}
/* first level end */

/* second level start*/
.toolbar > ul > li > ul{
    display: none;
    position: absolute;
    top: 38px;
    width: 110px;
    background-color: blue;
}

.toolbar > ul > li > ul > li {
    height: 30px;
}
.toolbar > ul > li > ul > li:hover {
    background-color: pink;
}
.toolbar > ul > li:hover > ul{
    display: block;
}
/* second level end*/

/* third level start*/
.toolbar > ul > li > ul > li > ul{
    display: none;
    position: absolute;
    left: 110px;
    width: 110px;
    background-color: orange;
    margin-top: -18px;
}

.toolbar > ul > li > ul > li > ul > li{
    height: 30px;
}
.toolbar > ul > li > ul > li > ul > li:hover{
    background-color: grey;
}

.toolbar > ul > li:hover > ul > li:hover > ul{
    display: block;
}
/* third level end*/

.toolbar > ul > li ul{
    z-index: 1;
}
</style>
