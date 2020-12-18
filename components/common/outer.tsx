import { useStyletron } from 'baseui';
import * as React from 'react';

export interface OuterProps {
  alignItems?: "flex-start" | "flex-end" | "center"
}

export const Outer: React.FC<OuterProps> = ({ children, alignItems = "center" }) => {
  
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({ 
        background: theme.colors.backgroundWarning,
        display: "flex",
        justifyContent: "center",
        alignItems: alignItems, //if need to center
        height: "100vh",
      })}
    >
      <div
        className={css({
          borderRadius: ".5em",
          background: theme.colors.background,
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          "@media screen and (max-width: 768px)": {
            width: "100vw",
            alignItems: "flex-start",
          },
        })}
      >
        {children}
      </div>
    </div>
  );
};


// interface InnerProps {
//   justify?: "flex-start" | "center" | "flex-end";
//   marginTop?: boolean;
//   column?: boolean;
// }

// const Inner: React.FunctionComponent<InnerProps> = ({
//   column,
//   justify,
//   children,
//   marginTop,
// }) => {
//   const [css, theme] = useStyletron();
//   return (
//     <div
//       className={css({
//         width: "100%",
//         display: "flex",
//         marginTop: marginTop ? "1em" : "0em",
//         justifyContent: justify || "flex-start",
//         flexDirection: column ? "column" : "row",
//       })}
//     >
//       {children}
//     </div>
//   );
// };