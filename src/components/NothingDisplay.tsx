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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 16 }} color="#8e44ad">
          Nothing to display...
        </Typography>

        <Typography
          sx={{ mt: 2.5, fontWeight: "600" }}
          variant="h4"
          component="div"
        >
          Select an item to display
        </Typography>

        <Typography
          sx={{ mt: 2.5, maxWidth: 450, fontSize: "18px" }}
          color="text.secondary"
        >
          Select and item from the master view to display details in the detail
          view.
        </Typography>
      </CardContent>
    </Card>
  );
}
