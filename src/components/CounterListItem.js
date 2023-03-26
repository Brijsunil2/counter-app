import { CiCirclePlus, CiCircleMinus ,CiCircleRemove } from "react-icons/ci";
const CounterListItem = ({ counter }) => {
  return (
    <tr className="px-4">
      <td>
        {counter.text}
      </td>
      <td>
        {counter.count}
      </td>
      <td className="w-25">
        <CiCirclePlus
          style={{ color: 'green', cursor: 'pointer' }} 
        />
        &emsp;
        <CiCircleMinus
          style={{ color: 'red', cursor: 'pointer' }} 
        />
        &emsp;&emsp;&emsp;&emsp;
        <CiCircleRemove
          className=""
          style={{ color: 'red', cursor: 'pointer' }} 
        />
      </td>
    </tr>
  )
}

export default CounterListItem;
