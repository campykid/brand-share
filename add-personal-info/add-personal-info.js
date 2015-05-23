/**
 * Логика поведения при наведении курсора мыши на главный заголовок сайта.
 * Выезжает меню с ссылками(кнопками на соц. сети).
 */
var $ = jQuery;
$('document').ready(function  () {
		// Наличие контента
		var contentCreate = false;
		// Ссылки и инфо
		var info = {
			photo: '<img src="http://vlad-khvostov.ru/wp-content/uploads/2015/03/khvosotv.jpg"></img>',
			linked: {
				src: 'https://ru.linkedin.com/in/vladkhvostov',
				title: 'linkedin.com'
			},
			vk: {
				src: 'https://vk.com/campykid',
				title: 'vk.com'
			},
			github: {
				src: 'https://github.com/campykid',
				title: 'github.com'
			},
			
			/**
			 * Логика генерации ссылки 
			 */
			addLink: function (src, title) {
				var elem = document.createElement('button');
				elem.innerHTML = title
				elem.onclick = function () {
					window.open(src, '_blank');
				}
				return elem
			}
		}

	$('.site-branding').mouseenter(function () {
		if (!contentCreate) {
			// Обертка для выпадающего меню
			var wrapper = $('<div class="personal-info">');
			
			// Добавляет обертку в конец тега с главным заголовком
			$('.site-branding').append(wrapper);
			// Добавляет фото
			wrapper.append(info.photo);
			// Добавляет ссылку на ВК
			wrapper.append(info.addLink(info.vk.src, info.vk.title));
			// Добавляет ссылку на github
			wrapper.append( info.addLink(info.github.src, info.github.title));
			// Добавляет ссылку на ЛинкедИн
			wrapper.append( info.addLink(info.linked.src, info.linked.title));

			// Контент во истину создан
			contentCreate = true;
		};

		// Отображает информацию.
		$('.personal-info').slideDown(200);
	})
	// Скрывает информацию.
	$('.site-branding').mouseleave(function () {
		$('.personal-info').slideUp(200);
	})
})