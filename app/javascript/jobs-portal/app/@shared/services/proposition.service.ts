import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Proposition} from "../types";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class PropositionService {
  private propositionsUrl = '/api/v1/propositions';

  constructor(private http: HttpClient) {}

  // getPropositions(): Observable<Proposition[]> {
  //   return this.http.get<Proposition[]>(this.propositionsUrl)
  //     .pipe(
  //       tap(propositions => console.log(propositions)),
  //       catchError(this.handleError())
  //     );
  // }

  getPropositions() {
    return this.http.get(this.propositionsUrl)
      .pipe(
        tap(propositions => console.log(propositions))
      );
  }

  handleError() {
    // TODO
  }
}