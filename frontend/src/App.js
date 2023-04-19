import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import AllOrdered from './component/orderedItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatedOrdred from './component/updateOrdered';
import CompletedItems from './component/completedItems';
import OrderTraking from './component/orderTracking';
import Signin from './sithanga/scenes/SignIn/index'
import Header from './sithanga/scenes/dashboard/header'
import Dash from './sithanga/scenes/dashboard/dash'
import Signup from './sithanga/scenes/signup/index'







function App() {
  return (
    <div>
    <Toaster position="top-center" reverseOrder={true} />
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

            <Route
              path="/signin"
              element={<Signin />}
            />

            <Route
              path="/header"
              element={<Header />}
            />

            <Route
              path="/dash"
              element={<Dash />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

      </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
