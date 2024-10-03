const { uploadPhoto, createUser } = require('./utils');

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((msg) => ({ photo: msg[0], user: msg[1] }))
    .catch((msg) => ({ photo: msg[0], user: msg[1] }));
}
