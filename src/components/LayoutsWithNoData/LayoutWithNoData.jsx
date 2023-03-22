import { withNoData } from 'fgb-ui-components';

const Empty = (props) => {
  return <div {...props}></div>
}
export const LayoutWithNoData = withNoData(Empty);