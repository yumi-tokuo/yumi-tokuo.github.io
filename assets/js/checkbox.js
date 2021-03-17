function toggleTheme() { 
    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == 'assets/css/main.css') { 
      theme.setAttribute('href', 'assets/css/dark-main.css'); 
    } else { 
      theme.setAttribute('href', 'assets/css/main.css'); 
    }
}
