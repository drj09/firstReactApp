export default function cards(props) {
  return (
    <div class="card">
      <img src={props.imageUrl} width={250} alt="Avatar" />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}
