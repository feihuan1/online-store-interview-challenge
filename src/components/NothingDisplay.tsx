import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function NothingDisplay() {
  return (
    <Card
      sx={{
        minWidth: 275,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#8e44ad">
          Nothing to display...
        </Typography>

        <Typography sx={{ mt: 2.5 }} variant="h5" component="div">
          Select an item to display
        </Typography>

        <Typography sx={{ mt: 2.5, maxWidth: 350 }} color="text.secondary">
          Select and item from the master view to display details in the detail
          view.
        </Typography>
      </CardContent>
    </Card>
  );
}
