import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
