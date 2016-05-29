var helpers = {
    insertData: ( query, object ) => {
        for( var property in object ) {
            object[ property ] = object[ property ] || null;
        }

        query = query
            .replace( /'{(\w*)}'/g, ( match, key ) => object[ key ] ? `'${object[ key ]}'` : null )
            .replace( /{(\w*)}/g, ( match, key ) => object[ key ] || null );

        return query;
    },


    insertConditions: ( query, data ) => {
        var conditions = Object.keys( data )
            .filter( key => data[key].data )
            .map( key => `${key}s.${data[ key ].field} = ${data[ key ].data}` )
            .join( ' and ' );

        return query.replace( '[where]', conditions ? ` where ${conditions}` : '' );
    }
};

module.exports = helpers;