import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freela',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'casa',
          type: 'withdraw',
          category: 'aluguel',
          amount: 1200,
          createdAt: new Date(),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', {
        ...data,
        createdAt: new Date(),
      });
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
