export function encodeUrl(url) {
    return url.replace(/[\\|/]/g,"|")
}

export function decodeUrl(url) {
    return url.replace(/\|/g,"/")
}
