import { Component, Input } from "@angular/core";

import { Errors } from "../core";

@Component({
  selector: "app-list-errors",
  templateUrl: "./list-errors.component.html",
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: any) {
    this.formattedErrors = Object.keys(errorList.errors || {}).map(
      (key) => `${key} ${errorList.errors[key].message}`
    );
    console.log(errorList);
  }

  get errorList() {
    return this.formattedErrors;
  }
}
