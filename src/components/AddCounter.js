const AddCounter = () => {
  return (
    <div className="container p-3 border">
      <div className="row g-3">
        <div className="col-5">
          <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
        </div>
        <div className="col-5">
          <input type="text" className="form-control" placeholder="Count" aria-label="Count" />
        </div>
        <div className="col">
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default AddCounter