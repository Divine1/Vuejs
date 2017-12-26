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
                      <li><a>Course1</a>
                        <ul>
                            <li>
                                <a>Coursex</a>
                            </li>
                            <li>
                                <a>Coursey</a>
                            </li>
                            <li>
                                <a>Coursez</a>
                            </li>
                        </ul>
                      </li>
                      <li> <a>Course2</a>
                        <ul>
                            <li><a>Lion</a></li>
                            <li><a>Tiger</a></li>
                            <li><a>Fool</a></li>
                        </ul>

                      </li>
                      <li><a>Course3</a></li>
                  </ul>
              </li>
              <li>
                  <a>Competitions</a>
                  <ul>
                      <li><a>Select City</a></li>
                      <li><a>Chennai</a></li>
                      <li><a>Madurai</a></li>
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

/* .toolbar > ul > li > ul > li {
    height: 30px;
} */
.toolbar > ul > li > ul > li > a{
    display: block;
    padding: 10px;
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
    margin-top: -38.4px;
}

/* .toolbar > ul > li > ul > li > ul > li{
    height: 30px;
}
 */
.toolbar > ul > li > ul > li > ul > li > a{
    display: block;
    padding: 10px;
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
