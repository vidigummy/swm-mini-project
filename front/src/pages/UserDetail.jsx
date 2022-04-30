import { Paper, Grid, Box, Chip, Typography, Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import profile_img from '../assets/images/user.png';

const getUserDetail = userId =>
  axios.get('/mock/users.json').then(res => res.data.users.filter(user => user.id === userId));

const UserDetail = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useQuery('getUserDetail', () => getUserDetail(params.id));

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70vw',
        margin: 'auto',
        marginTop: '5em',
      }}
    >
      <Grid
        container
        sx={{
          marginBottom: '2em',
        }}
      >
        {/* 이름, 본인 분야, 팀 매칭 여부 */}

        <Grid item xs={3}>
          <img alt="사용자 이미지" src={profile_img} style={{ width: '128px', height: 'auto' }} />
        </Grid>

        <Grid item xs={9} sm container>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Grid item xs>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="subtitle1" component="div" gutterBottom>
                  {data[0].name}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  {data[0].ownSkills.map((skill, idx) => (
                    <Chip key={idx} color="primary" label={skill} />
                  ))}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Phone: {data[0].phone}
                </Typography>

                {data[0].match ? (
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      color: 'green',
                    }}
                  >
                    🟢 매칭 완료
                  </Typography>
                ) : (
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      color: 'red',
                    }}
                  >
                    🔴 매칭 중
                  </Typography>
                )}
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        {/* 구하는사람 분야 */}
        <Paper
          elevation={3}
          sx={{
            padding: '25px',
          }}
        >
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              🙌 원하는 팀원 기술 스택
            </Typography>

            {data[0].wantSkills.map((skill, idx) => (
              <Chip key={idx} color="primary" label={skill} />
            ))}
          </Grid>

          {/* 본인소개 */}
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              👋 자기 소개
            </Typography>

            <Typography variant="body1" gutterBottom>
              {data[0].intro}
            </Typography>
          </Grid>

          {/* 희망 프로젝트 주제 */}
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              🚀 희망 프로젝트
            </Typography>

            <Typography variant="body1" gutterBottom>
              {data[0].project}
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid
        container
        sx={{
          justifyContent: 'center',
          marginTop: '2em',
        }}
      >
        <Link to="/">
          <Button variant="contained">이전으로</Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default UserDetail;
