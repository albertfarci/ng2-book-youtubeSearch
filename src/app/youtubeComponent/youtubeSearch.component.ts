import {Component} from "@angular/core";
import {SearchResult} from  '../models/searchResult.model';
@Component({
    selector: 'youtube-search',
    templateUrl: 'youtubeSearch.component.html'
})
export class YouTubeSearchComponent {
    results: SearchResult[];

    updateResults(results: SearchResult[]): void {
        this.results = results;
        console.log("results:", this.results); // uncomment to take a look
    }
}
