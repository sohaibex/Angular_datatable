import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button/button.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PostModel } from 'src/app/models/Posts.model';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.css']
})


export class WizzardComponent implements OnInit {
  size: NzButtonSize = 'large';
  posts: PostModel[];
  constructor(private postsService: PostsService) { }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  getPosts() {
    this.postsService.getPosts().subscribe((data: any[]) => {
      console.log(data);
      this.posts = data;
    })

  }


  ngOnInit(): void {
    this.getPosts();
    console.log("hadi" + this.posts)
  }

}
