import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((ms) => {
    console.log(`${ms[0].body} ${ms[1].firstName} ${ms[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
