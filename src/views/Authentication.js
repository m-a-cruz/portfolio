import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Authentication() {
    const styles = {
        backgroundImage: "url(http://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-Abstract-Backgrounds-HD.jpg)",
        backgroundSize: 'cover', // This ensures the image covers the entire area
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Set a minimum height to cover the entire viewport
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      };
    return (
        <div style={styles}>
            {/* <Navigation /> */}
            <Outlet />
        </div>
    );
}
