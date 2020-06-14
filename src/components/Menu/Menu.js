import React, { useContext, useEffect, useState } from "react";
import { checkIfMobile } from "utils/helpers";
import {
  MenuBody,
  Icons,
  ExpandedMenu,
  ExpandedTitle,
  ExpandedContent,
  Backdrop
} from "./Menu.styled";
import SortingOptionsTab from "../Tabs/SortingOptionsTab";
import SortingContext from "context/Sorting";
import useExpandedTabs from "hooks/useExpandedTabs";

const Menu = () => {
  const [setIsMobile] = useState(false);
  const { array, actions, config } = useContext(SortingContext);
  const { isExpanded, currentTab, toggleTab, closeTab } = useExpandedTabs();

  //Detects if user is using a mobile device and disables audio and reduces the default array count
  useEffect(() => {
    if (checkIfMobile()) {
      setIsMobile(true);
      config.setIsMuted(true);
      config.setArraySize(10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Switching between Play, Stop and Shuffle buttons
  const renderPlayControls = () => {
    if (array.isSorted) return <Icons.Shuffle onClick={actions.shuffle} />;
    if (array.isSorting)
      return (
        <Icons.Stop
          onClick={() => {
            actions.stop();
            actions.shuffle();
          }}
        />
      );
    return (
      <Icons.Play
        onClick={() => {
          actions.start();
          closeTab();
        }}
      />
    );
  };

  const renderTabs = tab => {
    return (
      <ExpandedContent>
        {tab === "Sorting Options" && <SortingOptionsTab closeTab={closeTab} />}
      </ExpandedContent>
    );
  };

  return (
    <>
      {isExpanded && <Backdrop onClick={closeTab} />}

      <MenuBody isExpanded={isExpanded}>
        {renderPlayControls()}
        <Icons.Options onClick={() => toggleTab("Sorting Options")} />
      </MenuBody>

      <ExpandedMenu isExpanded={isExpanded}>
        <ExpandedTitle>{currentTab}</ExpandedTitle>
        {renderTabs(currentTab)}
      </ExpandedMenu>
    </>
  );
};

export default Menu;
