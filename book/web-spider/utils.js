import path, { parse } from 'path'
import { URL } from 'url'
import slug from 'slug'
import cheerio from 'cheerio';

const getLinkUrl = (currentUrl, elem) => {
    const parsedLink = new URL(elem.attribs.href || '', currentUrl);
    const currentParsedUrl = new URL(currentUrl);

    if (parsedLink.hostname !== currentParsedUrl.hostname ||
        parsedLink.pathname) {
            return null;
    }

    return parsedLink.toString();
};

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

export const getPageLinks = (currentUrl, body) => {
    return Array.from(cheerio.load(body)('a'))
        .map(elem => {
            return getLinkUrl(currentUrl, elem);
        })
        .filter(Boolean);
};