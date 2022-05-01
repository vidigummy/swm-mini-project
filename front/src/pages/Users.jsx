import { Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    id: 0,
    name: '이정훈',
    description: '저 뽑아주세요.',
    skills: ['React', 'Typescript', 'AI'],
  },
  {
    id: 1,
    name: '이현',
    description: 'hrebjgdrbgdxkjgxhdbgdkhjgbxhjdrgxdrgdgrgxdr',
    skills: ['React', 'Typescript'],
  },
];

const skills = ['프론트엔드', '백엔드', '모바일(Android)', '모바일(iOS)', 'AI', '블록체인/융합', '디바이스'];

export default function Users() {
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(0);

  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);
  };

  const handleMatchChange = event => {
    setSelectedMatch(event.target.value);
  };

  useEffect(() => {
    console.log(`match: ${selectedMatch} , skill: ${selectedSkill}`);
  }, [selectedSkill, selectedMatch]);

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            SWM People
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            차린건 없지만 둘러보고 가세요.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <Link to="/post" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Add</Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">팀 매칭</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedMatch}
            label="Team Matched"
            onChange={handleMatchChange}
          >
            <MenuItem value="">선택</MenuItem>
            <MenuItem value={0}>매칭 중</MenuItem>
            <MenuItem value={1}>매칭 완료</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-multiple-checkbox-label">기술스택</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedSkill}
            onChange={handleSkillChange}
            input={<OutlinedInput label="기술스택" />}
            renderValue={selected => selected.join(', ')}
          >
            {skills.map(skill => (
              <MenuItem key={skill} value={skill}>
                <Checkbox checked={selectedSkill.indexOf(skill) > -1} />
                <ListItemText primary={skill} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {cards.map(user => (
            <Grid item key={user.id} xs={12} sm={6} md={4}>
              <Link to={`/user/${user.id}`}>
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    sx={{
                      height: '300px',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.name}
                    </Typography>
                    <Typography>{user.description}</Typography>
                    <CardActions>
                      <Stack direction="row" spacing={1}>
                        {user.skills.map((skill, idx) => (
                          <Chip label={skill} color="primary" key={idx} />
                        ))}
                      </Stack>
                    </CardActions>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
