import { CiCirclePlus, CiCircleMinus ,CiCircleRemove } from "react-icons/ci";
const CounterListItem = ({ counter, updCount, deleteCounter }) => {
  const maxCount = 2147483647;
  const minCount = 0;

  const onClickDeleteCounter = (id) => {
    deleteCounter(id);
  }

  return (
    <tr className="px-4">
      <td>
        {counter.text}
      </td>
      <td>
        {counter.count}
      </td>
      <td className="w-25 prevent-select">
        <CiCirclePlus
          style={{ color: 'green', cursor: 'pointer' }} 
          onClick={() => counter.count < maxCount && updCount(counter.id, counter.count + 1)}
        />
        &emsp;
        <CiCircleMinus
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => counter.count > minCount && updCount(counter.id, counter.count - 1)}
        />
        &emsp;&emsp;&emsp;&emsp;
        <CiCircleRemove
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => onClickDeleteCounter(counter.id)}
          data-target='#exampleModalCenter' 
        />
      </td>
    </tr>
  )
}

export default CounterListItem;
