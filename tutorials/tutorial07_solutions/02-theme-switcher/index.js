function defaultTheme() {
    document.querySelector('body').className = '';
};

function oceanTheme() {
   document.querySelector('body').className = 'ocean';
};

function desertTheme() {
   document.querySelector('body').className = 'desert';
};

function highContrastTheme() {
    document.querySelector('body').className = 'high-contrast';
}; 


document.querySelector('#default').addEventListener('click', defaultTheme); 
document.querySelector('#ocean').addEventListener('click', oceanTheme); 
document.querySelector('#desert').addEventListener('click', desertTheme); 
document.querySelector('#high-contrast').addEventListener('click', highContrastTheme); 
