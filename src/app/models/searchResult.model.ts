/*
 This API key may or may not work for you. Your best bet is to issue your own
 API key by following these instructions:
 https://developers.google.com/youtube/registering_an_application#Create_API_Keys
 Here I've used a **server key** and make sure you enable YouTube.
 Note that if you do use this API key, it will only work if the URL in
 your browser is "localhost"
 */
export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id              = obj && obj.id             || null;
        this.title           = obj && obj.title          || null;
        this.description     = obj && obj.description    || null;
        this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
        this.videoUrl        = obj && obj.videoUrl       ||
            `https://www.youtube.com/watch?v=${this.id}`;
    }
}
