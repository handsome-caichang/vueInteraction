import { getUploadToken } from "../../api/jie.js";
export const fileUploadMixin = {
  methods: {
    getAppToken() {
      return getUploadToken().then(res => {
        if (res.errorCode == 0) {
          return res.data;
        } else {
          return Promise.reject();
        }
      });
    },
    send(vf, fileObj, name) {
      this.getAppToken().then(appToken => {
        vf.cancelID = app.oss.uploadFile({
          stsServer: "https://fs.xiaogj.com",
          token: appToken,
          file: vf.file,
          type: "image",
          progress: p => {
            // console.log(p)
            vf.progress = p.percent;
          },
          success: uploadFile => {
            console.log(uploadFile.url);
            fileObj[name] = uploadFile.url;
            var fileInfo = {
              // 小写的type是给应用层做区分用的，其它字段传给后端;
              type: "file",
              FileLength: uploadFile.size,
              Name: uploadFile.name,
              FilePath: uploadFile.url,
              MD5: uploadFile.md5,
              Ext: uploadFile.ext
            };
            Object.assign(vf, fileInfo);
            vf.fileInfo = fileInfo;
            vf.status = 2;
            vf.resolve(fileInfo);
          },
          fail: error => {
            vf.status = 0;
            if (error.code === 600) {
              // app.alert(error.msg).then(() => {
              //     this.currentfiles = this.currentfiles.filter(item => {
              //         return item != vf
              //     })
              // })
            } else {
              // app.toast('error', '上传文件失败,请重试。')
            }
          }
        });
      });
    },
    createFileObj(file) {
      let o = {
        FileLength: null,
        Name: null,
        FilePath: null,
        ThumbPath: null,
        Durations: null,
        MD5: null,
        Width: null,
        Height: null,
        file: file,
        status: 1,
        progress: "0%"
      }; // 上传状态，0:上传失败, 1:上传中, 2: 上传成功
      o.promise = new Promise(rsv => (o.resolve = rsv));
      return o;
    }
  }
};
