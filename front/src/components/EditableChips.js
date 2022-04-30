import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import React, { useCallback, useState } from 'react';

export default function EditableChips({ chipDatas, onAdd, onRemove }) {
  const [open, setOpen] = useState(false);
  const [skillInput, setSkillInput] = useState('');

  let dialogError = '';
  if (skillInput.length > 10) {
    dialogError = '10자까지만 입력할 수 있습니다';
  } else if (skillInput.length === 0) {
    dialogError = '입력해주세요.';
  }

  const handleOpen = useCallback(() => {
    if (chipDatas.length >= 3) {
      alert('3개까지만 추가할 수 있습니다.');
      return;
    }
    setOpen(true);
    setSkillInput('');
  }, [chipDatas]);

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClose = () => {
    if (dialogError.length === 0) {
      setOpen(false);
      onAdd(skillInput);
    }
  };

  const handleInputSkill = useCallback(e => {
    setSkillInput(e.target.value);
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={1}>
        {chipDatas.map((chip, idx) => (
          <Chip key={idx} label={chip} onDelete={onRemove(chip)} />
        ))}
        <IconButton size="small" onClick={handleOpen}>
          <AddIcon color="action" />
        </IconButton>
      </Stack>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>기술 추가</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            error={dialogError.length !== 0}
            id="skill"
            label="추가할 기술 입력"
            helperText={dialogError}
            fullWidth
            variant="standard"
            value={skillInput}
            onChange={handleInputSkill}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>취소</Button>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
