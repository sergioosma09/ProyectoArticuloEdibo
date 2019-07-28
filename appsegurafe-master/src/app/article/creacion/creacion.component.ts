import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ArticleService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {
  [x: string]: any;
 articleForm: FormGroup;

  constructor(private fb:FormBuilder, private articleService:ArticleService) { }

  ngOnInit() {
    this.createArticleForm();
  }
  createArticleForm(){
    this.articleForm = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      journal: ['', Validators.required],
      year:['', Validators.required],
      volume: ['', Validators.required],
      number: ['', Validators.required],
      articleNumber: ['', Validators.required],
      url: ['', Validators.required],
      issn: ['', Validators.required],
      abstract: ['', Validators.required],
      doi: ['', Validators.required],
    });
  }
  createArticle(){
    let miArticleItem = eval(this.articleForm.value);
    console.log(miArticleItem);
    miArticleItem.year = Number(miArticleItem.year);
    miArticleItem.volume = Number(miArticleItem.volume);
    miArticleItem.number = Number(miArticleItem.number);
    miArticleItem.articleNumber = Number(miArticleItem.articleNumber);

    this.articleService.createArticleItem(this.articleForm.value).subscribe(dato => {
      console.log(dato);
    });
  }
}
