import dva from 'dva';
import './index.css';

const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
});
// 1. Initialize
// const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 载入单个Model
app.model(require('./models/products').default);

// 载入多个Model

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
