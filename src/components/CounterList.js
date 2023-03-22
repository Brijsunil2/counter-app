import CounterListItem from "./CounterListItem"

const CounterList = ({ counters }) => {
  return (
    <div className="container pt-4">

      <table className="table">
        <tbody>
          {
            counters.map((counter) => (
              <CounterListItem key={counter.id} counter={counter} />
            ))
          }
        </tbody>
      </table>
     </div>
  )
}

export default CounterList