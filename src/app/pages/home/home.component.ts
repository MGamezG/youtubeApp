import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private youtubeServices:YoutubeService) { }

  ngOnInit(){
   this.youtubeServices.getVideos().subscribe(
    (response:any) =>{
    console.log(response);
   } );

  }

}
