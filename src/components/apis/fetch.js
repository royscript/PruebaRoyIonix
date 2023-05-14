export default async function (url, updateEndPoint = '', method = 'GET') {
    const server = 'https://www.reddit.com/r/';
    var errores = '';
    try {
        const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
        };
        if (method === 'GET' || method === 'HEAD') {
            options.body = null;
        } else if (Object.keys(params).length > 0) {
            options.body = JSON.stringify(params);
        }
        return await fetch(`${server}${url}${updateEndPoint}`, options);
    } catch (error) {
        errores = error.message;
        return errores;
    }
}