import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-apply',
  templateUrl: './how-to-apply.component.html',
  styleUrls: ['./how-to-apply.component.css']
})
export class HowToApplyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // continue() {}
  continue=()=>{
    this.router.navigateByUrl('/mortgage/mortgage-options')
    console.log("how")
  }

}