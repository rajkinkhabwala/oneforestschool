import { type UploadResponse, type FileLoader, type UploadAdapter } from '@ckeditor/ckeditor5-upload/src';
import { Storage } from 'aws-amplify';

interface UploadConfig {
    storage: typeof Storage,
    namePrefix?: string
}

export class Adapter implements UploadAdapter{

    
	public loader: FileLoader;
	
	public options: UploadConfig;

	private xhr?: XMLHttpRequest;

    constructor(loader: FileLoader, options: UploadConfig) {
      this.loader = loader;
      this.options = options;
    }


  
    public async upload(): Promise<UploadResponse> {
        return this.loader.file
        .then( () => new Promise( ( resolve, reject ) => {
            this._sendRequest(resolve, reject);
        } ) );
    }
  
    /**
	 * Aborts the upload process.
	 *
	 * @see module:upload/filerepository~UploadAdapter#abort
	 */
	public abort(): void { 
		if( this.xhr ){
			this.xhr.abort()
		}
	}
  
    private _sendRequest(resolve: any, reject: any) {
      this.loader.file
        .then((file) => {
          // Prepare the form data.
          const storage = this.options.storage;
          const filename = this.options.namePrefix + file!.name;
          const extension = file!.name.slice(file!.name.lastIndexOf(".") + 1);
          let mimeType;
          switch (extension) {
            case "svg":
              mimeType = "image/svg+xml";
              break;
            case "jpg":
              mimeType = "image/jpeg";
              break;
            case "png":
              mimeType = "image/png";
              break;
          }
          storage
            .put(filename, file, { contentType: mimeType })
            .then((result) => {
              const key = result.key;
              storage.get(key).then((data) => {
                const i = data.indexOf("?");
                const uri = data.slice(0, i);
                resolve({
                  default: uri,
                });
              });
            });
        })
        .catch(reject);
    }
  }