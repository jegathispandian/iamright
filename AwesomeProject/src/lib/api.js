
class Api {
  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
    };
  }

  static get(url) {
    return this.get(url, null);
  }
  static get(url, header) {
    return this.xhr(url, null, 'GET', header);
  }

  static put(url, params) {
    return this.put(url, params, null);
  }
  static put(url, params, header) {
    return this.xhr(url, params, 'PUT', header);
  }

  static post(url, params) {
    return this.post(url, params, null);
  }
  static post(url, params, header) {
    return this.xhr(url, params, 'POST', header);
  }

  static patch(url, params) {
    return this.patch(url, params, null);
  }

  static patch(url, params, header) {
    return this.xhrNocontent(url, params, 'PATCH', header);
  }
  static postNoContent(url, params) {
    return this.postNoContent(url, params, null);
  }
  static postNoContent(url, params, header) {
    return this.xhrNocontent(url, params, 'POST', header);
  }
  static delete(url, params) {
    return this.delete(url, params, null);
  }
  static delete(url, params, header) {
    return this.xhr(url, params, 'DELETE', header);
  }

  static xhr(url, params, verb, header) {
    return this.xhrNocontent(url, params, verb, header);
  }
  static xhrNocontent(url, params, verb, header) {
    console.log(url);
    const options = Object.assign({ method: verb }, params ?
      { body: JSON.stringify(params) } : null);
    options.headers = header ? header : Api.headers();
    return fetch(url, options).then((response) => {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then((responseJson) => {
         return responseJson;
       })
      }
      console.log('UNEXPECTED_CODE_BLOCK_REACHED');
      return response;
    }
    ).catch((error) => {
      console.log(error);
    });
  }
}

export default Api;
