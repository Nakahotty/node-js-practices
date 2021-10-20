const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl'];
const selectedLanguage = process.argv[2];

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
    console.log('The specified language is not supported');
    process.exit(1);
}

// the loaded module (dynamic name)
const translationModule = `./strings-${selectedLanguage}.js`; 
console.log(translationModule);

// the function in then executes when the promise resolves strings is the module namespace
import(translationModule)
.then((strings) => {
    console.log(strings.HELLO);        
    // strings.sayHello('Nasko');
});