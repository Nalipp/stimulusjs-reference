import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('connecting....');
  }

  static targets = [ "password", "errorcontainer", "errormessage", "successmessage" ];

  validate() {
    const password = this.passwordTarget.value;
    if (password.length < 4) {
      this.errorcontainerTarget.hidden = false;
      this.successmessageTarget.hidden = true;
      this.errormessageTarget.innerHTML = "password too short";
    } else {
      this.successmessageTarget.hidden = false;
      this.errorcontainerTarget.hidden = true;
    }
  }
}
