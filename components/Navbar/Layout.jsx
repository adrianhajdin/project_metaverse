'use client';

import React from 'react';

import { Box } from './Box';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    {children}
  </Box>
);
