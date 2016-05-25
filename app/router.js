/* ngInject */
export function MusicStoreRouter( $routeProvider ) {
    $routeProvider.addRoutes = addRoutes;

    $routeProvider
        .addRoutes( 'Album' )
        .addRoutes( 'Artist' )
        .addRoutes( 'Discount' )
        .addRoutes( 'Order' )
        .addRoutes( 'Payment' )
        .addRoutes( 'Promo' )
        .addRoutes( 'RecordLabel' )
        .addRoutes( 'Track' )
        .addRoutes( 'User' )
        .otherwise({
            redirectTo: '/albums'
        });
}

function getRoutes( modulePascalCase, moduleCamelCase, moduleKebabCase ) {
    return {
        edit: {
            controller: `${modulePascalCase}Controller`,
            controllerAs: `${moduleCamelCase}`,
            templateUrl: `${moduleKebabCase}-edit.html`
        },
        list: {
            controller: `${modulePascalCase}sController`,
            controllerAs: `${moduleCamelCase}s`,
            templateUrl: `${moduleKebabCase}s-list.html`
        }
    }
}

function addRoutes( module ) {
    var modulePascalCase = module;
    var moduleCamelCase = module.split(/(?=[A-Z])/).map((str, i) => i == 0 ? str.toLowerCase() : str).join('');
    var moduleKebabCase = module.split(/(?=[A-Z])/).map(str => str.toLowerCase()).join('-');

    var routes = getRoutes( modulePascalCase, moduleCamelCase, moduleKebabCase );

    return this
        .when( `/${moduleKebabCase}s`, routes.list )
        .when( `/${moduleKebabCase}`, routes.edit )
        .when( `/${moduleKebabCase}/:id`, routes.edit );
}