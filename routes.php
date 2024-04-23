<?php

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################
// Static GET
// In the URL -> http://localhost
// The output -> Index

get('zmejelov.azurewebsites.net/', 'zmejelov.azurewebsites.net/firstPage.php');
get('zmejelov.azurewebsites.net/SHARED/header.php', 'zmejelov.azurewebsites.net/SHARED/header.php');
get('/translations/load_translations.php', '/translations/load_translations.php');
get('/translations/getLanguage.php', '/translations/getLanguage.php');
get('/SHARED/footer.php', '/SHARED/footer.php');
get('/zmentures/introduction', '/zmentures#introduction_OG');
get('/SERVER/getSessionData.php', '/SERVER/getSessionData.php');
post('/login', '/SERVER/login.php');
get('../SHARED/header.php', '../SHARED/header.php');
get('/SERVER/logout.php', '/SERVER/logout.php');
post('/register', '/SERVER/register.php');
get('/register', '/SERVER/register.php');
get('/login', '/SERVER/login.php');
get('/language.php', '/language.php');
get('/translations/language.php', '/translations/language.php');
//get('/translations/language.php?language=en', '/translations/language.php?language=en');
get('/translations/language.php?language', '/translations/language.php?language');
//get('/translations/language.php?language=slo', '/translations/language.php?language=slo');
get('/zmentures', '/zmejelov_basic.php');
get('/Zmejelov1869', '/zmejelov_og.php');
get('/Crackelov', '/zmejelov_speed_run.php');
get('/TheFinalRage', '/zmejelov_mcqueen.php');
get('zmejelov.azurewebsites.net/CityZmentures', 'zmejelov.azurewebsites.net/ZMEJELOV_njam_njam.php');
get('zmejelov.azurewebsites.net/intro', 'zmejelov.azurewebsites.net/index.php');
get('/user', '/user.php');
post('zmejelov.azurewebsites.net/zmentures', 'zmejelov.azurewebsites.net/zmejelov_basic.php');
get('/contact', '/SHARED/contact.php');



any('/404','/errors/404.php');
