# Что это
Ява-скрипт, с помощью которого можно размещать на веб-страницах "глаза" со зрачками, следящими за курсором мыши

# Установка
Разместить на странице: один или несколько &lt;div id="eyeX">&lt;/div>, где X - это порядковый номер от 1, ссылку на  основной скрипт-файл <script src="/eye-traking-j-script.js" type="text/javascript"></script>, следующий скрипт с настройками и  настроить местоположение зрачка(ов) на веб-cтранице с помощью margin-*<br>

function getCfg(s) {<br>
  switch (s) {<br>
    case "Hscope": return 50; // горизонтальный размах<br>
    case "Vscope": return 50; // вертикальный размах<br>
    case "dotHeight": return 30; // высота зрачка<br>
    case "eyes": return 2; // кол-во глаз<br>
    case "dotImg": return "dot.png"; // путь к зрачоку<br>
    case "ones": return true; // одна точка зрения<br>
    case "bg": return false; // фон зрачка<br>
    case "bgColor": return "#00ff00"; // цвет фона зрачка<br>
    case "len": return true; // большая точка фокуса<br>
    case "lenInt": return 200; // размер фокуса<br>
    default: return 0;<br>
  }<br>
}<br>

# Примеры
С точками взгляда в каждом глазе - <a href="http://atomofiron.clan.su/Bender/bender.html" target="_blank">Bender</a><br>
С общей(средней) точкой взгляда - <a href="http://atomofiron.clan.su/Anime/anime-demo.html" target="_blank">Anime</a>

# License
The MIT License.
