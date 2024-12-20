import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid #FEFAFE',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
};

const rowStyle = {
display:'flex',
gap:'5px',
alignItems:'center',
justifyContent:'center'
}

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
     {range(numRows).map((row)=>(
      <div key={row} style={rowStyle}>
        {range(numCols).map((col)=>(
          <div key={col} style={gridStyles} ></div>
        ))}
       </div>
     ))}
    </div>
  );
}

export default Grid;
