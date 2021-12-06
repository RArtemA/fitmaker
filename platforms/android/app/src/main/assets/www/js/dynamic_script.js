

// Заменяем этим скриптом скрипт приложения в хедере. Тогда адрес будет браться из localstorage для src  localstorage

   //     <script type="text/javascript" src="../../js/dynamic_script.js"></script>


// Динамически добавляем файл с программой используя в пути параметр username из localstorage
var url = "https://fitmaker.app/rosolov_fitness_app/people/" + localStorage.getItem("username") + "/prilog.js";
document.write("<script src='" + url + "'><\/script>");


   
