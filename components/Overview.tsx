import React from 'react';

interface OverviewProps {
  list: any;
}
const Overview = ({ list }: OverviewProps): React.ReactElement => {
  return (
    <table>
      {list.map(({ name, type }: any) => (
        <tr key={1}>
          <td>
            <strong>{name}</strong>
          </td>
          <td>{type}</td>
        </tr>
      ))}
    </table>
  );
};

export default Overview;
