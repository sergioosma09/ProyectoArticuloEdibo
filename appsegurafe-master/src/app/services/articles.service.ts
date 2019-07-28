import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private urlArticle = "http://localhost:3000/articles/list";
  private urlCreateArticle = "http://localhost:3000/articles/create";
  private urlDeleteArticle = "http://localhost:3000/articles/delete/";
  
  constructor(private httpClient: HttpClient) { }
  getArticlesList():Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json; charset=utf-8');
    return this.httpClient.get(this.urlArticle,{headers:headers})
     }
     createArticleItem(article):Observable<any>{
      const headers = new HttpHeaders();
      headers.set('Content-Type','application/json; charset=utf-8');
      return this.httpClient.post(this.urlCreateArticle,article,{headers:headers})
       }
    deleteArticle(id){
        const headers = new HttpHeaders();
      headers.set('Content-Type','application/json; charset=utf-8');
      return this.httpClient.delete(this.urlDeleteArticle+id, {headers:headers});
    }
}