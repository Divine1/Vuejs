<template>
  <div id="contactus">
      <div>Contact us</div>
      <div class="contactnumber"><a href="tel:9533827847">9533827847</a></div>
      <div>
          <div>Need clarification on anything?</div>
          <div>
              <textarea placeholder="Enter your queries" name="input-7-1" tabindex="0" aria-label="Enter your thoughts" rows="6" cols="40" style=""></textarea>
          </div>
          <div>Phonenumber</div>
          <div>Emailid</div>
          <div>submit 	&#128222;
 </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#contactus{
    flex-basis: 10%;
    background-color: brown;
}
#contactus textarea{
    background-color: white;
}
#contactus textarea:focus{
    background-color : #eca5bd;
}

#contactus .contactnumber a{
    text-decoration: none;
    color: black;
    background-color: #9a9ae8;
    line-height: 26px;
    display: inline-block;
}
#contactus .contactnumber a:before{
    content: "\1F4DE"
}
</style>
