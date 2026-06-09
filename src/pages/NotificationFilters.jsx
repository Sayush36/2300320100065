import {FormControl,InputLabel,Select,MenuItem} from "@mui/material";

export default function NotificationFilters({
  type,
  setType
}) {
  return (
    <FormControl fullWidth>
      <InputLabel>
        Notification Type
      </InputLabel>

      <Select
        value={type}
        label="Notification Type"
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>
      </Select>
    </FormControl>
  );
}