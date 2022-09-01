function solve(obj) {

    const methodsPattern = /^(GET|POST|DELETE|CONNECT)$/;
    const versionPattern = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/;
    const uriPattern = /^([a-zA-Z0-9.]+|\*)$/;
    const messagePattern = /^[^<>\\&'"]*$/;


    if (!methodsPattern.test(obj.method) ||
        !obj.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method')
    };
    if (!uriPattern.test(obj.uri) ||
        !obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI')
    };

    if (!versionPattern.test(obj.version) ||
        !obj.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version')
    };

    if (!messagePattern.test(obj.message) ||
        !obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message')
    };



    return obj;
}
