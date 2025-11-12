

export const ProductCard = () => {
  return (
    <div className="card" >
        <div className="bg-secondary rounded-circle m-auto mt-3" style={{width: "80px", height: "80px"}}></div>
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-secondary">View details</a>
        </div>
    </div>
  )
}
