import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() data: Post;

  constructor() { }

  ngOnInit() {
  }

  loveIt(): void {
    this.data.loveIts++;
  }

  dontLoveIt(): void {
    this.data.loveIts--;
  }

}
