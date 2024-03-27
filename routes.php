<?php

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################


// Redirect /index.php to /



// Static GET
// In the URL -> http://localhost
// The output -> Index

get('/', '/index.php');
get('/SHARED/header.php', '/SHARED/header.php');
get('/translations/load_translations.php', '/translations/load_translations.php');
get('/translations/getLanguage.php', '/translations/getLanguage.php');
get('/SHARED/footer.php', '/SHARED/footer.php');
get('/zmentures/introduction', '/zmentures#introduction_OG');
get('/SERVER/getSessionData.php', '/SERVER/getSessionData.php');
post('/login', '/SERVER/login.php');
get('../SHARED/header.php', '../SHARED/header.php');
get('/SERVER/logout.php', '/SERVER/logout.php');
post('/register', '/SERVER/register.php');
get('/login', '/SERVER/login.php');
get('/language.php', '/language.php');
get('/translations/getLanguage.js', '/translations/getLanguage.js');
get('/translations/language.php', '/translations/language.php');get('', '');

get('/zmentures', '/zmejelov_basic.php');
get('/Zmejelov_1869', '/zmejelov_og.php');
get('/Cra*kelov', '/zmejelov_speed_run.php');
get('/TheFinalRage', '/zmejelov_mcqueen.php');
get('/CityZmentures', '/ZMEJELOV_njam_njam.php');


any('/404','/errors/404.php');
