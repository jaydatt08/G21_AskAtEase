import "./App.css";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp"; // It's fine to import but not necessary unless you use it
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";
import Gemini from "./Components/Gemini";

import QHeader from "./Components/QHeader";

import AddPost from "./Components/AddPost";
import Header from "./Components/MainHeader";
import LeftSection from "./Components/mainleftpart";
import ProfilePage from "./Components/ProfilePage";

// import WidgetContent from './Components/WidgetContent';


function App() {
  return (
    <>

      <div>
        {/* <Sidebar /> */}
        {/* <Gemini /> */}
        {/* <Login></Login> */}
        {/* <Login/> */}
        {/* <SignUp /> */}
        <QHeader />
      </div>

//       <ProfilePage />

    </>
  );
}

export default App;
