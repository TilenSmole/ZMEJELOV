<?php
class generalData { 

   
    public function __construct() {
        
    }


    function start_session() {
        session_start();
        $_SESSION['open'] = TRUE;
   }
   
   function close_session() {
      session_write_close();
      $_SESSION['open'] = FALSE;
   }
   
   function destroy_session() {
      session_destroy();
      $_SESSION['open'] = FALSE;
   }
   
   function session_status() {
      if (isset($_SESSION['open'])) {
         return($_SESSION['open']);
      }
      
   }







}






?>
