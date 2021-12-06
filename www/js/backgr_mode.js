		// Код плагина работы в фоновой вкладке андроида (cordova-plugin-background-mode)
document.addEventListener('deviceready', function () {

    // Android customization
    // To indicate that the app is executing tasks in background and being paused would disrupt the user.
    // The plug-in has to create a notification while in background - like a download progress bar.
    cordova.plugins.backgroundMode.setDefaults({ 
        title:  'Тренировка не закончена',
        text:   'Возвращайтесь к упражнению',
   });

    // Enable background mode
    cordova.plugins.backgroundMode.enable();



}, false);
		
		
		
		
    