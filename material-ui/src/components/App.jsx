import {Button} from "@mui/material";

export const App = () => {
  return (
    <div>
      <Button color="secondary">
        Color
      </Button>

      <Button
        color="primary"
        variant="outlined"
      >
        Outline
      </Button>

      <Button
        color="primary"
        variant="contained"
      >
        Contained
      </Button>

      <Button
        color="primary"
        variant="contained"
        disableElevation
      >
        Disabled Elevation
      </Button>

      <Button
        color="primary"
        variant="contained"
        href="https://mui.com/"
      >
        Link
      </Button>

      <Button
        color="primary"
        variant="contained"
        fullWidth
      >
        Full Width
      </Button>

      <Button
        color="primary"
        variant="contained"
        size="small"
      >
        Small
      </Button>

      <Button
        color="primary"
        variant="contained"
        size="medium"
      >
        Medium
      </Button>

      <Button
        color="primary"
        variant="contained"
        size="large"
      >
        Large
      </Button>

    </div>
  );
}

