let theme = 'dark';

function init(){
    // Force dark theme
    localStorage.setItem('theme', 'dark');

    let storedTheme = localStorage.getItem('theme');
    if(storedTheme) theme = storedTheme;
    document.body.classList.add(theme);
    showIcon(theme);

    // listen for theme change
    let themeBtns = document.querySelectorAll('.theme-btn');
    console.log(themeBtns);
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("btn clicked");
            toggleDark();
        })
    })

    // set comments theme
    let t = setTimeout(()=> {
        setCommentsTheme(theme);
        const commentsLoading =  document.querySelector('.comments-loading');
        if(commentsLoading) commentsLoading.classList.add('hidden');
        const comments = document.querySelector('.comments');
        if(comments) comments.classList.remove('hidden');
        clearTimeout(t)
    }, 3000)
}

function isDark(){
    return localStorage.getItem('theme') === 'dark';
}

function toggleDark(){
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark') theme = 'light';
    else theme = 'dark';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    showIcon(theme);
    setCommentsTheme(theme)
}

function showIcon(theme){
    const lightIcons = document.querySelectorAll('.light-icon');
    const darkIcons = document.querySelectorAll('.dark-icon');

    if(theme == 'dark'){
        lightIcons.forEach(icon => icon.style.display = "none");
        darkIcons.forEach(icon => icon.style.display = "block");
    }else{
        lightIcons.forEach(icon => icon.style.display = "block");
        darkIcons.forEach(icon => icon.style.display = "none");
    }
}

function setCommentsTheme(theme){
    const commentsRoot = document.querySelector('#ghost-comments-root')
    if(commentsRoot) commentsRoot.querySelectorAll('iframe').forEach(iframe => {
        const ghostDisplay = iframe.contentWindow.document.querySelector('.ghost-display');
        if(ghostDisplay){
            ghostDisplay.classList.remove('dark')
            ghostDisplay.classList.remove('light')
            ghostDisplay.classList.add(theme)
        }
    })
}

export default {
    init,
    isDark,
    toggleDark
}