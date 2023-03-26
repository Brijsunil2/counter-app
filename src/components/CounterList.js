import CounterListItem from "./CounterListItem"

const CounterList = ({ counters, updCount, deleteCounter }) => {
  return (
    <div className="container pt-4">

      <table className="table">
        <tbody>
          {
            counters.map((counter) => (
              <CounterListItem 
                key={counter.id} 
                counter={counter} 
                updCount={updCount}
                deleteCounter={deleteCounter}
              />
            ))
          }
        </tbody>
      </table>
     </div>
  )
}

export default CounterList