import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => {
      values.map((res) => (
        {
          status: res.status,
          value: res.status === 'fulfilled' ? res.value : `Error: ${res.reason.message}`,
        }));
    });
}
