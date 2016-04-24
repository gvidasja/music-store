import { AlbumsController } from "./albums/albums-controller";
import { AlbumsService } from "./albums/albums-service";
import { MusicStoreRouter } from "./router";

var MusicStore = angular.module('MusicStore', ['ngRoute', 'templates'])

    .config(MusicStoreRouter)

    .controller('AlbumsController', AlbumsController)

    .factory('AlbumsService', AlbumsService);