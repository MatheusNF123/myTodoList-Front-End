import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth";
import Provider from "./Context/Provider";

import AppRoutes from "./routes";

function App() {
  return (
    <Provider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
