import {Observable}from 'rxjs';
import {Injectable,Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import {SearchResult} from  '../models/searchResult.model';
/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
@Injectable()
export class YouTubeService {
    constructor(public http: Http) {
    }

    search(query: string): Observable<SearchResult[]> {
        let params: string = [
            `q=${query}`,
            `key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');
        let queryUrl: string = `https://www.googleapis.com/youtube/v3/search?${params}`;
        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    // console.log("raw item", item); // uncomment if you want to debug
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.high.url
                    });
                });
            });
    }
}
