const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((ms) => {
    console.log(`${ms[0].body} ${ms[1].firstName} ${ms[1].lastName}`);
  }).catch(() => {
    console.log(Error('Signup system offline'));
  });
}
