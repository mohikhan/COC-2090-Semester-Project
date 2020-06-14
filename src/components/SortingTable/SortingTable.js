import React, { useContext } from "react";
import { Table, Bar, AlgorithmName } from "./SortingTable.styled";
import { Flipper, Flipped } from "react-flip-toolkit";
import SortingContext from "context/Sorting";
import ThemeContext from "context/Theme";

const SortingTable = () => {
  const { array, config } = useContext(SortingContext);
  const { colors } = useContext(ThemeContext);

  const renderArray = () =>
    array.currentArray.map(({ value, selected}, index) => {
      return (
        <Flipped
          key={index}
          flipId={value}
          shouldFlip={() => config.isAnimating}
        >
          <Bar
            key={value}
            selected={selected}
            height={`${(value / array.currentArray.length) * 90}%`}
            width={`${100 / array.currentArray.length}%`}
            barTopColor={colors.barTop}
            barBottomColor={colors.barBottom}
            barBorderColor={colors.barBorder}
            selectedColor={colors.selectedBar}
          />
        </Flipped>
      );
    });

  return (
    <Flipper spring="stiff" flipKey={JSON.stringify(array.currentArray)}>
      <Table backgroundColor={colors.background}>
        <AlgorithmName>{config.algorithm}</AlgorithmName>
        {renderArray()}
      </Table>
    </Flipper>
  );
};

export default SortingTable;
