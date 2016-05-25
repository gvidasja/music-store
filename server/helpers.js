var helpers = {
    insertData: (query, object) => {
        for (var property in object) {
            object[property] = object[property] || null;
        }

        query = query
            .replace(/'{(\w*)}'/g, (match, key) => object[key] ? `'${object[key]}'` : null)
            .replace(/{(\w*)}/g, (match, key) => object[key] || null);

        return query;
    }
};

module.exports = helpers;