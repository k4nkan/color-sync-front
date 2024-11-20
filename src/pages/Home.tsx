import ForPc from "./ForPc";
import ForSmartphone from "./ForSmartphone";

import TestPage from "./testPage";

import useMedia from "use-media";

export default function Home() {
  const App = () => {
    const isWide = useMedia({ minWidth: "550px" });
    const size = isWide ? true : false;
    return size;
  };

  const Size = App();

  return Size === true ? <ForPc /> : <TestPage/>;
}
