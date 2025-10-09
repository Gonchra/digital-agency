import './Table.scss'
import clsx from 'clsx'

const Table = (props) => {
  const { className, headCells = [], rows = [] } = props

  return (
    <table className={clsx("table", className)}>
      <thead className="table__head">
        {headCells.map(({children, width}, index) => (
          <th
            className="table__head-cell"
            width={width}
            key={index}
          >
            {children}
          </th>
        ))}
      </thead>
      <tbody className="table__divider">
        <tr></tr>
      </tbody>
      <tbody className="table__body">
        {rows.map(({cells}, index) => (
            <tr className="table__row" key={index}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="table__row-cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Table