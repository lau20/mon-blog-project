import { Component } from '@angular/core';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {
      content: 'Exercitation occaecat culpa tempor occaecat eu elit elit ullamco cupidatat enim consectetur esse. Eiusmod enim nostrud mollit irure amet ut culpa. Culpa non excepteur officia ea.',
      loveIts: 2,
      title: 'Mon premier post',
      createdAt: new Date()
    },
    {
      content: 'Exercitation occaecat culpa tempor occaecat eu elit elit ullamco cupidatat enim consectetur esse. Eiusmod enim nostrud mollit irure amet ut culpa. Culpa non excepteur officia ea.',
      loveIts: -2,
      title: 'Mon deuxième post',
      createdAt: new Date()
    },
    {
      content: 'Exercitation occaecat culpa tempor occaecat eu elit elit ullamco cupidatat enim consectetur esse. Eiusmod enim nostrud mollit irure amet ut culpa. Culpa non excepteur officia ea.',
      loveIts: 0,
      title: 'Encore un post',
      createdAt: new Date()
    }
  ];

}
