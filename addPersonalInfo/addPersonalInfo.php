<?php



/*

Plugin Name: addPersonalInfo

Description: Подключает JS файл со скриптом в котором описана логика отображения персональных данных (фото и ссылки на соц сети)

Version: 1.0

Author: Влад Хвостов

Author URI: https://github.com/campykid

Plugin URI: http://vlad-khvostov.ru/

*/



function addScript ()

{

	echo "
	// Атрибут asunc запрещает браузеру блокировать загрузку страницы, если скрипт не грузится 
	<script async src='wp-content/plugins/addPersonalInfo/addPersonalInfo.js'></script>

	<link rel='stylesheet' href='wp-content/plugins/addPersonalInfo/addPersonalInfo.css'>



	";

}

add_action('wp_footer', 'addScript' );

?>
