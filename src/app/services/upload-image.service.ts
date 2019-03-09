import {Injectable} from '@angular/core';

@Injectable()
export class UploadImageService {
  private baseUrl: String = '/ViraCamServer';
  filesToUpload: Array<File>;

  constructor() {
    this.filesToUpload = [];
  }

  upload(productId: number) {
    console.log('Start upload to server');
    this.makeFileRequest(this.baseUrl + '/product/add/image?id=' + productId, [], this.filesToUpload).then(
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
