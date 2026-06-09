import { Card, CardContent, Typography, Chip, Stack} from "@mui/material";

export default function NotificationCard({ notification,viewed,onOpen}) {
  console.log(notification);
  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer",
        borderLeft: viewed
          ? "4px solid #ccc"
          : "4px solid #1976d2"
      }}
      onClick={onOpen}
    >
      <CardContent>

        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">
            {notification.Type}
          </Typography>

          {!viewed && (
            <Chip
              label="NEW"
              color="primary"
              size="small"
            />
          )}
        </Stack>

        <Typography sx={{ mt: 1 }}>
          {notification.Message}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {notification.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
}