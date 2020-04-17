 /*
        function cliq(data) {
          if (data==1){
            document.getElementById('login').style.display='block';
            document.getElementById('signin').style.display='none';
            document.getElementById('submit').style.display='none';
          }
          else if (data==2) {
            document.getElementById('signin').style.display='block';
            document.getElementById('login').style.display='none';
            document.getElementById('submit').style.display='none';
          }  
          else if (data==3){
            document.getElementById('submit').style.display='block';
            document.getElementById('signin').style.display='none';
            document.getElementById('login').style.display='none';
          }
          else{
            document.getElementById('submit').style.display='none';
            document.getElementById('signin').style.display='none';
            document.getElementById('login').style.display='none';
          }
        }
        */
       $(document).ready(function(){
        $('#log').click(function(){
          $('#login').show();
          $('#signin').hide();
          $('#submit').hide();
        });
        $('#sig').click(function(){
          $('#login').hide();
          $('#signin').show();
          $('#submit').hide();
        });
        $('#sub').click(function(){
          $('#login').hide();
          $('#signin').hide();
          $('#submit').show();
        });
        $('#for').click(function(){
          $('#login').hide();
          $('#signin').hide();
          $('#submit').hide();
        });
      });