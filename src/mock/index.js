import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

 mock.onGet('/api/module').reply(200, require('./datas/module.json'))

// mock.onGet('/api/module').reply(function(config) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (Math.random() > 0.1) {
//         resolve([200,require('./datas/module.json')]);
//       } else {
//         resolve([500, { success: false } ]);
//       }
//     }, 500);
//   });
// });

// axios.get('/api/module')
//   .then(function(response) {
//     console.log('测试页面内容c');

//   }.catch(function(){
//     console.log('测试页面内容e');
//   })
// );

export default mock
