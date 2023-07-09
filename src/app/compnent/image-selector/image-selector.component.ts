import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Observable, Subscription} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements  OnInit{

constructor(private  storage : AngularFireStorage) {
}
  @Input()
  requiredFileType!:string;

  @Input() id!: string;

   fileName: string= "";
   uploadSub!: Subscription;
 uploadProgress!: number;

  @Output()
  fileDataReady = new EventEmitter<{id: string, fileData$: File}>();


  onFileSelected(event:any) {
    const file = event.target.files[0];

    this.fileName = file.name;
    // let task = this.storage.upload("yourimages/" + file.name, file);
    //
    // task.then( snapshot => {
    //   snapshot.ref.getDownloadURL().then(
    //     (url) => {
    //       console.log(url);
    //      // this.myForm.get(file.id)?.setValue(url);
    //     }
    //   )
    // })


    // Créer un observable pour streamer les données
    // au fur et à mesure du traitement du fichier



    // Souscrire à l'observable dans le composant parent
    this.fileDataReady.emit({id: this.id, fileData$: file });
  }

  // constructor(private  http: HttpClient) {}


  ngOnInit() {

  }
//   onFileSelected(event:any) {
// console.log(true)
//     const file:File = event.target.files[0];
//
//     console.log("file"+file.name)
//
//     if (file) {
// console.log("okkk")
//       this.fileName = file.name;
//
//       const formData = new FormData();
//
//       formData.append("thumbnail", file);
//
//       const upload$ = this.http.post("/api/thumbnail-upload", formData, {
//         reportProgress: true,
//         observe: 'events'
//       })
//         .pipe(
//           finalize(() => this.reset())
//         );
//
//       console.log("okkk")
//
//       this.uploadSub = upload$.subscribe(event => {
//         if (event.type == HttpEventType.UploadProgress) {
//           // @ts-ignore
//           this.uploadProgress = Math.round(100 * (event.loaded / event.total));
//         }
//       })
//     }
//   }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {

    this.uploadProgress = 0;
    // this.uploadSub = undefined;
  }
}
