var helpers = {
    insertData: (query, object) => {
        query = query
            .replace(/'{(\w*)}'/g, (match, key) => object[key] ? `'${object[key]}'` : null)
            .replace(/{(\w*)}/g, (match, key) => object[key] || null);

        return query;
    }
};

module.exports = helpers;