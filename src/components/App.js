import React from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "hooks/useSorting";
import useTheme from "hooks/useTheme";
import ThemeContext from "context/Theme";
import SortingContext from "context/Sorting";
import Menu from "./Menu/Menu";

const defaultValues = {
  algorithm: "Insertion Sort",
  arraySize: 25,
  interval: 200,
};

const App = () => {
  const { array, actions, config } = useSorting(defaultValues);
  const { colors, handlers } = useTheme();

  return (
    <ThemeContext.Provider value={{ colors, handlers }}>
            <h1 style={{height:'60px', color:'white',textAlign:"center", fontSize:'40px'}}>MOHIUDDEEN KHAN</h1>
      <SortingContext.Provider value={{ array, actions, config }}>
        <SortingTable />
        <Menu />
      </SortingContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
