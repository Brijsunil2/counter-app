const CounterListItem = ({ counter }) => {
  return (
    <tr>
      <td>{counter.text}</td>
      <td>{counter.count}</td>
    </tr>
  )
}

export default CounterListItem;