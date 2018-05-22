import {Component, OnInit} from "@angular/core";
import {Proposition} from "../@shared/types";
import {PropositionService} from "../@shared/services/proposition.service";

@Component({
  selector: 'propositions',
  template: `<h1>Propositions</h1>`
})

export class PropositionsComponent implements OnInit{
  constructor(private propositionService: PropositionService){}

  ngOnInit() {
    this.propositionService.getPropositions().subscribe(res => {
      console.log(res);
    });
  }
}