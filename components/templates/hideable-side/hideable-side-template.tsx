import * as React from "react";
import MainPage from "../main-page/main-page-template";
import { MainContainer, SideContainer, TemplateContainer } from "./css";
export interface HideableSideTemplateProps {
  isSideOpen: boolean;
  mainContent: React.ReactNode;
  sideContent: React.ReactNode;
}

const HideableSideTemplate: React.FC<HideableSideTemplateProps> = ({
  sideContent,
  mainContent,
  isSideOpen = true,
}) => {
  return (
    <MainPage>
      <TemplateContainer>
        <SideContainer open={isSideOpen}>
          {sideContent}
        </SideContainer>
        <MainContainer>
          {mainContent}
        </MainContainer>
      </TemplateContainer>
    </MainPage>
  );
};

export default HideableSideTemplate;
