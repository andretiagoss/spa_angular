import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {

constructor(private http: HttpClient) { }

    // API fake gerada com JSON Server e o arquivo produtos.json
	//Ref.: https://www.npmjs.com/package/json-server
    protected UrlServiceV1: string = "http://localhost:3000/";

    // Utiliza o call Observable para aguardar o resultado e serializar no objeto do tipo Produto
    obterProdutos() : Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}