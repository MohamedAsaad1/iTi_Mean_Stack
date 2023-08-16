import { Component, OnInit } from '@angular/core';
import { AkaMovieserviceService } from '../aka-movieservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aka-movie',
  templateUrl: './aka-movie.component.html',
  styleUrls: ['./aka-movie.component.css']
})
export class AkaMovieComponent implements OnInit {
  videos:any;
  movie: any;

  constructor( public stream:AkaMovieserviceService,private route:ActivatedRoute){ }
  ngOnInit(): void {
    
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.stream.getVideo(id).subscribe({next:data =>{
      this.videos = data
      console.log(this.videos)
      
    }})
    this.stream.getMovieById(id).subscribe({next:(data):void =>{
        this.movie = data
    }})
    
  }


}
