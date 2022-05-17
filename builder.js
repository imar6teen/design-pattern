#! node
class BuilderURL {
  constructor(url) {
    this.url = url;
    this.params = {};
  }
  addParam(key, value) {
    this.params[key] = value;
    return this;
  }
  build() {
    let url = this.url;
    let params = this.params;
    let paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      url += "?";
      for (let i = 0; i < paramKeys.length; i++) {
        let key = paramKeys[i];
        let value = params[key];
        url += key + "=" + value;
        if (i < paramKeys.length - 1) {
          url += "&";
        }
      }
    }
    return url;
  }
}

const url = new BuilderURL("http://google.com")
  .addParam("q", process.argv[2])
  .build();

console.log(url);
