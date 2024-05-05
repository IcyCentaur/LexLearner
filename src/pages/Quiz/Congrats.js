import * as React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import quiz from "../../api/make_quiz";

function CongratulationsModal({
  open,
  onClose,

  score,
}) {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Congratulations!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You've won! Your score: {score}/10
        </Typography>
        <Button sx={{ mt: 2 }} onClick={onClose}>
          Retry
        </Button>
        <Button sx={{ mt: 2 }} onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default CongratulationsModal;
