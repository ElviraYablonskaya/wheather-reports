import React from "react";
import Button from "@mui/material/Button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReport, getReports } from "../service/api";

export const Reports = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
  const { data } = useQuery({ queryKey: ["reports"], queryFn: getReports });

  const handleClick = (id) => () => {
    mutation.mutate(id);
  };

  return (
    <div className="mt-2">
      {data?.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2 mb-2">
          <div>{item.temperature}</div>
          <div>{item.date}</div>
          <div>{item.unit}</div>
          <div>{item.city}</div>
          <Button variant="contained" size="small" className="m-2">
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            className="m-2"
            onClick={handleClick(item.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
