import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllOrdered from './component/orderedItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatedOrdred from './component/updateOrdered';
import CompletedItems from './component/completedItems';
import OrderTraking from './component/orderTracking';

function App() {
  return (
    <BrowserRouter>
      <Routes>

            <Route
              path="/orderedItems"
              element={<AllOrdered />}
            />

            <Route
              path="/update/:id"
              element={<UpdatedOrdred />}
            />

            <Route
              path="/CompletedItems"
              element={<CompletedItems />}
            />

            <Route
              path="/OrderTraking"
              element={<OrderTraking />}
            />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
