export default function cards(props) {
  return (
    <div>
      <img src={props.imageUrl} width={250} alt="Avatar" />
      <div>
        <h4>
          <b>{props.Uname}</b>
        </h4>
        <p>{props.des}</p>
      </div>
    </div>
  );
}
