<?php



/*

Plugin Name: add-personal-info

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
	<script async src='http://vlad-khvostov.ru/wp-content/plugins/add-personal-info/add-personal-info.js'></script>

	<link rel='stylesheet' href='http://vlad-khvostov.ru/wp-content/plugins/add-personal-info/add-personal-info.css'>



	";

}

add_action('wp_footer', 'addScript' );

?>
