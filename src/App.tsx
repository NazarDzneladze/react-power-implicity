import { Navigation } from "./components/Navigation/Navigation";
import { Slider } from "./components/Slider/Slider";
import "./app.scss";

export const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Slider />
    </div>
  );
};
