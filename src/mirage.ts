import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        { 
          id: 1, 
          title: 'Aluguel', 
          category: 'Casa', 
          amount: 200, 
          type: 'deposit', 
          createdAt: new Date() 
        }
      ],
    });
  }, 

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  },
});
