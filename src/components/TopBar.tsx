import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorSwitcher } from "./ColorSwitcher";
import { Todo, useTodoContext } from "../store";

function TopBar() {
  const { load } = useTodoContext();
  // Here fetching some defult entries
  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      .then((tds: Todo[]) => load(tds));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
