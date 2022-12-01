import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReport } from "../service/api";

export const CreateReport = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
  const [state, setState] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    mutation.mutate(state);
    setState({});
  };

  return (
    <div className="w-full">
      <h1 className="pb-2">Create report</h1>
      <div className="flex flex-col">
        <TextField
          name="temperature"
          value={state?.temperature ?? ""}
          label="Temperature"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          name="unit"
          value={state?.unit ?? ""}
          label="Unit"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          name="city"
          value={state?.city ?? ""}
          label="City"
          variant="filled"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Add report
        </Button>
      </div>
    </div>
  );
};
