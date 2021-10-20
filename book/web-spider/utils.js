import path from 'path'
import { URL } from 'url'
import slug from 'slug'

// http://www.example.com
export const urlToFilename = url => {
    const parsedUrl = new URL(url);
    const urlPath = parsedUrl.pathname.split('/')
    .filter(component => {
        return component !== ''
    })
    .map(component => {
        return slug(component, {remove: null})
    })
    .join('/');

    let filename = path.join(parsedUrl.hostname, urlPath);
    console.log(filename);

    if (!path.extname(filename).match(/htm/)) {
        filename += '.html';
    }

    return filename;
}