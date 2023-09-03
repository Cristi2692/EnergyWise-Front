import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)({
    fontSize: '0.9rem',
    color: 'blue',
    textDecoration: 'none',
    '&:hover': {
      color: '#9C27B0',
    },
  });