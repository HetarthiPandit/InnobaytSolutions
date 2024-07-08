export default function DataServices({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="col p-3" key={item.title}>
          <div className="d-flex gap-3">
            <div>
              <img src={item.image} width={item?.imageSize || 100} alt="Image" />
            </div>
            <div className="d-flex flex-column">
              <h3 className="h6 fw-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
