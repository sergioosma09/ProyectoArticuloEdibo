import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/models/article';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      author: {
        title: 'Author'
      },
      title: {
        title: 'Title'
      },
      journal: {
        title: 'Journal'
      },
      year: {
        title: 'Year'
      }
    }
  };

  articlesList: Array<IArticle>;
  articleItemSelected: IArticle=undefined;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticlesList();
  }
  getArticlesList(){
    this.articleService.getArticlesList().subscribe(data => {
      this.articlesList = data;
    })
  }
  deleteArticle(article){
    console.log(article);
    this.articleService.deleteArticle(article.id).subscribe (data => {
      this.getArticlesList();
    });
  }
  setArticleItemSelected(articleItem){
    this.articleItemSelected=articleItem;
  }

}

