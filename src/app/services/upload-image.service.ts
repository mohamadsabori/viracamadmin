import {Injectable} from '@angular/core';
import {ViracamserviceService} from '../viracamservice.service';

@Injectable()
export class UploadImageService {
  filesToUpload: Array<File>;

  constructor(private service: ViracamserviceService) {
    this.filesToUpload = [];
  }

  upload(productId: number) {
    this.makeFileRequest(this.service.baseUrl + '/product/add/image?id=' + productId, [], this.filesToUpload).then(
      (result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      }
    );
    this.filesToUpload = [];
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload.push(fileInput.target.files[0]);
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('image uploaded successfully!');
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url, true);
      // xhr.setRequestHeader()
      xhr.send(formData);
    });
  }

}
