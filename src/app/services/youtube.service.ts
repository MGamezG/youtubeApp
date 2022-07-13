
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeURL:string='https://www.googleapis.com/youtube/v3'
  Part!:string;
  key:string='AIzaSyDmpL5Tr4Ql-WH-3-BM9OYmkjFALe6WGww';
  playlistId:string='UUJPoJe-yphbh-vzB-fLyLxg';
  // pageToken:string='EAAaBlBUOkNBUQ';
  pageToken!:string;
  maxResults!:number;

  constructor( private http:HttpClient) {}

  getVideos():any{
    const URL=`${this.youtubeURL}/playlistItems`;
    const params=new HttpParams()
    .set('part','snippet')
    .set('maxResults','12')
    .set('playlistId',this.playlistId)
    .set('key',this.key);
    return this.http.get(URL,{params})
  }
}
