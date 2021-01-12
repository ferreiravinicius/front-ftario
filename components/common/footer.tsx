import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import * as React from 'react';
import { BiHeart } from "react-icons/bi";

export interface FooterProps {
  
}
 
const Footer: React.FC<FooterProps> = () => {

  const [css, theme] = useStyletron();

  const stFooter = css({
    backgroundColor: theme.colors.backgroundTertiary,
    marginTop: theme.sizing.scale700,
    padding: theme.sizing.scale700,
    color: theme.colors.contentTertiary,
    fontFamily: theme.typography.ParagraphSmall.fontFamily,
    fontSize: theme.typography.ParagraphSmall.fontSize,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    boxShadow: theme.lighting.shadow400
  });

  const stFooterText = css({
    fontWeight: `lighter`,
    marginBottom: theme.sizing.scale100,
  });

  const stFooterLight = css({
    fontWeight: `lighter`,
    fontSize: theme.typography.ParagraphXSmall.fontSize,
  });

  return (
    <Block className={stFooter}>
      <Block className={stFooterText}>
        Made with love <BiHeart />
      </Block>
      <Block className={stFooterLight}>
        © 2021   Florestario, Inc.
      </Block>
    </Block>
  );
}
 
export default Footer;