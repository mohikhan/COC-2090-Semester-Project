import React, { useContext } from "react";
import { Select, Label } from "styles/reusableStyles";
import SortingContext from "context/Sorting";

const SortingOptionsTab = ({ closeTab }) => {
  const { config } = useContext(SortingContext);

  const renderAlgorithmSelect = () => (
    <Label>
      Algorithm
      <Select
        value={config.algorithm}
        onChange={e => config.setAlgorithm(e.target.value)}
      >
        <option value={"Bubble Sort"}>Bubble Sort</option>
        <option value={"Insertion Sort"}>Insertion Sort</option>
        <option value={"Selection Sort"}>Selection Sort</option>
      </Select>
    </Label>
  );

  const renderCountSelect = () => (
    <Label>
      Count
      <Select
        value={config.arraySize}
        onChange={e => config.setArraySize(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
    </Label>
  );

  return (
    <form>
      {renderAlgorithmSelect()}
      {renderCountSelect()}
    </form>
  );
};

export default SortingOptionsTab;
