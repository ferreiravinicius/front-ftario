import { useStyletron } from 'baseui';
import * as React from 'react';

export interface ListProps {
  
}
 
const List: React.FC<ListProps> = ({ children }) => {

  const [css, theme] = useStyletron();

  const stList = css({
    margin: 0,
    padding: 0,
    fontFamily: theme.typography.font300.fontFamily,
  });

  return (
    <ul className={stList}>
      {children}
    </ul>
  );
}
 
export default List;