import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

export default function Location({ text }) {
  return (
    <div className="pin">
      <PlaceRoundedIcon />
      <p className="pin-text">{text}</p>
    </div>
  );
}
