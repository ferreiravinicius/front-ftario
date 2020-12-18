import { Block } from "baseui/block";
import { NumberedStep, ProgressSteps } from "baseui/progress-steps";
import { Paragraph1, Paragraph2, Paragraph3 } from "baseui/typography";
import * as React from "react";
import { Outer } from "../../components/common/outer";
import GenusStep from "../../components/register/genus";

export interface RegisterAquaticPlantProps {}

const RegisterAquaticPlant: React.FC<RegisterAquaticPlantProps> = () => {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
    setStep(current => (current + 1));
  }

  const backStep = () => {
    setStep(current => (current - 1));
  }

  return (
    <Outer>
      <Block alignSelf="center">
        <ProgressSteps current={step}>
          <NumberedStep title="Genus">
            <Block paddingRight="1em">
              <Paragraph2>
                First we need to know wich genus this plant belongs.
              </Paragraph2>
              <GenusStep nextStep={() => nextStep()} />
            </Block>
          </NumberedStep>
          <NumberedStep title="Specie"></NumberedStep>
        </ProgressSteps>
      </Block>
    </Outer>
  );
};

export default RegisterAquaticPlant;
