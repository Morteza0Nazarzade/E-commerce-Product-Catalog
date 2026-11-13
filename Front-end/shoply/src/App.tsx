import { Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome to Shoply!
          </Typography>

          <Typography color="text.secondary">
            Your e-commerce project is ready.
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
