export default function TitleButton() {
  const Reload = () => {
    window.location.reload();
  };

  return (
    <div onClick={Reload}>
      <div>title</div>
    </div>
  );
}
