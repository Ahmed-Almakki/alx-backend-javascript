const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  const promm = await Promise.all([uploadPhoto(), createUser()]).then((ms) => {
    console.log(`${ms[0].body} ${ms[1].firstName} ${ms[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
  return promm;
}
