import Link from 'next/link';
import { useTable } from 'react-table';

export default function Table({ columns, data }) {
  const {
    rows,
    prepareRow,
    headerGroups,
    getTableProps,
    getTableBodyProps,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr className='border_bottom' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr className='border_bottom' {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                <Link href={`/coins/${row.original.col2.props.children[2]}`}>
                  <a>
                    {cell.render('Cell')}
                  </a>
                </Link>
                </td>
              })}  
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
