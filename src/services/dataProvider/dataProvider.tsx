import simpleRestProvider from "ra-data-simple-rest";
import { DataProvider } from "react-admin";
import addUploadFeature from "./addUploadFeature";
import axios from "axios";

import api from "../axios";

const dataProvider = simpleRestProvider(
  `${process.env.REACT_APP_DATA_PROVIDER}`
);

const convertFileToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const addTagsSearchSupport = (dataProvider: DataProvider) => ({
  ...dataProvider,
  getList: (resource: string, params: any) => {
    return api
      .get(resource, {
        params: params,
      })
      .then(
        (res) => {
          return Promise.resolve({
            data: res.data.data,
            total: res.data.total,
          });
        },
        (err) => {
          return Promise.reject(new Error(err.message));
        }
      );
  },

  getMany: (resource: string, params: any) => {
    return api.get(resource).then(
      (res) => {
        return Promise.resolve({
          data: res.data.data,
        });
      },
      (err) => {
        return Promise.reject(new Error(err.message));
      }
    );
  },

  getManyReference: (resource: string, params: any) => {
    return api
      .get(resource, {
        params: params,
      })
      .then(
        (res) => {
          return Promise.resolve({
            data: res.data.data,
            total: res.data.total,
          });
        },
        (err) => {
          return Promise.reject(new Error(err.message));
        }
      );
  },

  getOne: (resource: string, params: any) => {
    return api.get(resource + "/" + params.id).then(
      (res) => {
        return Promise.resolve({ data: res.data.data });
      },
      (err) => {
        return Promise.reject(new Error(err.message));
      }
    );
  },

  create: (resource: string, params: any) => {
    if (!params.data.image) {
      var form_data = new FormData();

      for (var key in params.data) {
        if (Array.isArray(params.data[key])) {
          form_data.append(key, JSON.stringify(params.data[key]));
        } else {
          form_data.append(key, params.data[key]);
        }
      }

      return api.post(resource, form_data).then(
        async (res) => {
          if (resource == "chat") {
            await api
              .post(`${process.env.REACT_APP_WHATSAPP_URL}/send`, params.data)
              .then(async (res_message) => {
                if (res_message.data.status == 200) {
                  form_data.append("id", res.data.data.id);
                  form_data.append("action", res_message.data.message);

                  await api.post(resource, form_data);
                }
              });
          }

          return Promise.resolve({ data: res.data.data });
        },
        (err) => {
          return Promise.reject(new Error(err.message));
        }
      );
    }

    const newPictures = params.data.image.filter(
      (p: any) => p.rawFile instanceof File
    );

    const formerPictures = params.data.image.filter(
      (p: any) => !(p.rawFile instanceof File)
    );

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64) => ({
          src: picture64,
          // title: `${params.data.title}`,
        }))
      )
      .then((transformedNewPictures) => {
        var form_data = new FormData();
        var base64imageArray = [...transformedNewPictures];

        var data = {
          ...params.data,
          imagestring: JSON.stringify(base64imageArray),
        };

        for (var key in data) {
          form_data.append(key, data[key]);
        }

        return api.post(resource, form_data).then(
          (res) => {
            return Promise.resolve({ data: res.data.data });
          },
          (err) => {
            return Promise.reject(new Error(err.message));
          }
        );
      });
  },

  update: (resource: string, params: any) => {
    if (!params.data.imageupdate) {
      var form_data = new FormData();

      for (var key in params.data) {
        if (Array.isArray(params.data[key])) {
          form_data.append(key, JSON.stringify(params.data[key]));
        } else {
          form_data.append(key, params.data[key]);
        }
      }

      return api.post(resource, form_data).then(
        (res) => {
          return Promise.resolve({ data: res.data.data });
        },
        (err) => {
          return Promise.reject(new Error(err.message));
        }
      );
    } 

    const newPictures = params.data.imageupdate.filter(
      (p: any) => p.rawFile instanceof File
    );

    const formerPictures = params.data.imageupdate.filter(
      (p: any) => !(p.rawFile instanceof File)
    );

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64) => ({
          src: picture64,
          // title: `${params.data.title}`,
        }))
      )
      .then((transformedNewPictures) => {
        var form_data = new FormData();
        var base64imageArray = [...transformedNewPictures];

        var data = {
          ...params.data,
          imagestring: JSON.stringify(base64imageArray),
        };

        for (var key in data) {
          form_data.append(key, data[key]);
        }

        return api.post(resource, form_data).then(
          (res) => {
            return Promise.resolve({ data: res.data.data });
          },
          (err) => {
            return Promise.reject(new Error(err.message));
          }
        );
      });
  },

  delete: (resource: string, params: any) => {
    return api.delete(resource + "/" + params.id).then(
      (res) => {
        return Promise.resolve({ data: params.id });
      },
      (err) => {
        return Promise.reject(new Error(err.message));
      }
    );
  },

  deleteMany: (resource: string, params: any) => {
    params.ids.forEach((id: any) => {
      api.delete(resource + "/" + id);
    });
    return Promise.resolve({ data: params.ids });
  },
});

const uploadCapableDataProvider = addUploadFeature(
  addTagsSearchSupport(dataProvider)
);

const sometimesFailsDataProvider = new Proxy(uploadCapableDataProvider, {
  get: (target, name) => (resource: string, params: any) => {
    if (typeof name === "symbol" || name === "then") {
      return;
    }

    return uploadCapableDataProvider[name](resource, params);
  },
});

const delayedDataProvider = new Proxy(sometimesFailsDataProvider, {
  get: (target, name, self) =>
    name === "then" // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
      ? self
      : (resource: string, params: any) =>
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve(
                  sometimesFailsDataProvider[name as string](resource, params)
                ),
              500
            )
          ),
});

interface ResponseError extends Error {
  status?: number;
}

export default delayedDataProvider;
