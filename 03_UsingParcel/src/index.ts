import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);
console.log('User Added.');

const company = new Company();
console.log(company);
console.log('Company Added.');

const lat0 = (user.location.lat + company.location.lat) / 2;
const lng0 = (user.location.lng + company.location.lng) / 2;
const customMap = new CustomMap();
customMap.LoadMap('map', lat0, lng0);
console.log('Map Added.');

setTimeout(() => {
  customMap.addMarker(user);
  customMap.addMarker(company);
}, 3000);

console.log('Done.');
