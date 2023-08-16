import { Component, OnInit } from '@angular/core';
import { AkaMovieserviceService } from '../aka-movieservice.service';
import { PageEvent } from '@angular/material';
export class SendingComponent {
  constructor(private  api :AkaMovieserviceService) {}
  hello(id:any){
    console.log(id)
  }

  

}

@Component({
  selector: 'app-aka-movies',
  templateUrl: './aka-movies.component.html',
  styleUrls: ['./aka-movies.component.css']
})
export class AkaMoviesComponent implements OnInit {
  Moives:any;
  listofpageSize=[5, 10, 25, 100]
  size:number=30
  totalItems:any;
  page:number=1;
  isloading:boolean = true; 
  constructor(public moviesApi :AkaMovieserviceService ) {}
  ngOnInit(): void {
    this.moviesApi.getLength().subscribe({next:length =>{
      this.totalItems = length.length
     }})
     this.moviesApi.getMovies(this.page,this.size).subscribe(
      {next:(movies) =>{
        this.Moives = movies
        this.isloading = false;

      }}
    )

  }

  test (id:any){
    console.log(id)
   }
  

  changePage(event:PageEvent){
    this.page = event.pageIndex + 1
    this.size = event.pageSize
      this.moviesApi.getLength().subscribe({next:length =>{
     this.totalItems = length.length
    }})
    this.moviesApi.getMovies(this.page,this.size).subscribe(
      {next:(movies) =>{
        this.Moives = movies
      }}
    )

  }
}
