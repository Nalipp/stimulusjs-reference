import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log('connecting...', this.element); 
  }

  static targets = [ "source", "write" ];

  copy() {
    console.log('this.sourceTarget...', this.sourceTarget.value)
    navigator.clipboard.writeText(this.sourceTarget.value)
    this.writeTarget.innerHTML = "coppied to clipboard";
  }
}
