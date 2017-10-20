// import { find, propEq } from 'ramda';
import axios from 'axios';

const AxiosPort = 4200;

// const users = [
//   { id: '1', firstName: 'Bill', age: 20 },
//   { id: '2', firstName: 'Alex', age: 40 },
//   { id: '3', firstName: 'Nick', age: 40 },
// ];

export default {
  Query: {
    hello: (parent, args, context) => 'hiii',
    user: (parent, { id }, context) => axios.get(`http://localhost:${AxiosPort}/users/${id}`).then(res => res.data),
    company: (parent, args, context) => axios.get(`http://localhost:${AxiosPort}/companies/${args.id}`).then(res=>res.data),
  },
  User: {
    company: (parent, args, context) => axios.get(`http://localhost:${AxiosPort}/companies/${parent.companyId}`).then(res=>res.data),
  },
  Company: {
    user: (parent, args, context) => axios.get(`http://localhost:${AxiosPort}/companies/${parent.id}/users`).then(res=>res.data),
  }
};

