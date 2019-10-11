import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer-dialog',
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.scss']
})
export class TrailerDialogComponent implements OnInit {
   videoUrl:any;
   urlSafe: SafeResourceUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public sanitizer: DomSanitizer) { 
    
   this.videoUrl=this.data.trailer
   this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

  }
  //console.log(this.data);
  


  ngOnInit() {
  }

}
