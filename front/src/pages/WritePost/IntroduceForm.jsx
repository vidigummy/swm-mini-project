import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import EditableChips from '../../components/EditableChips';

export default function AddressForm({ user, setUser }) {
  const onInputChange = e => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRemoveNeeds = useCallback(
    data => () => {
      setUser(user => ({ ...user, needs: user.needs.filter(need => need !== data) }));
    },
    []
  );

  const handleAddNeeds = useCallback(need => {
    setUser(user => ({ ...user, needs: user.needs.concat(need) }));
  }, []);

  const handleRemoveSkills = useCallback(
    data => () => {
      setUser(user => ({ ...user, skills: user.skills.filter(skill => skill !== data) }));
    },
    []
  );

  const handleAddSkills = useCallback(skill => {
    setUser(user => ({ ...user, skills: user.skills.concat(skill) }));
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        소개작성
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField id="name" name="name" value={user.name} fullWidth disabled variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="contact" name="contact" value={user.contact} fullWidth disabled variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="wish_topic"
            name="wish_topic"
            label="희망 프로젝트 주제"
            fullWidth
            variant="standard"
            value={user.wish_topic}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>보유 기술</Typography>
        </Grid>
        <Grid item xs={12}>
          <EditableChips chipDatas={user.needs} onAdd={handleAddNeeds} onRemove={handleRemoveNeeds} />
        </Grid>
        <Grid item xs={12}>
          <Typography>필요한 기술</Typography>
        </Grid>
        <Grid item xs={12}>
          <EditableChips chipDatas={user.skills} onAdd={handleAddSkills} onRemove={handleRemoveSkills} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="introduce"
            name="introduce"
            label="자기소개"
            fullWidth
            multiline
            rows={10}
            value={user.introduce}
            onChange={onInputChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
