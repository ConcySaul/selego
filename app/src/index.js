import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import SocketProvider from "./utils/socketContext";


// import ReduxToastr from "react-redux-toastr";
// import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import store from "./redux/store";
import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Toaster />
    {/* <ReduxToastr timeOut={1500} transitionIn="fadeIn" transitionOut="fadeOut" /> */}
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
