<?php
class SessionManager {
    public static function closeSession() {
        // Start the session if not already started
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Unset all session variables
        $_SESSION = array();

        // Destroy the session
        session_destroy();
        echo "<meta http-equiv=Refresh content=0;url=/login>";
    }
}

// To close the session, call the closeSession() method
SessionManager::closeSession();


?>


<a href="/login">return</a>