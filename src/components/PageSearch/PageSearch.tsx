'use client';

import { useState } from 'react';

import Search from '../Search/Search';
import React from 'react';

const PageSearch = () => {
  const [spaTypeFilter, setSpaTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Search
      spaTypeFilter={spaTypeFilter}
      searchQuery={searchQuery}
      setSpaTypeFilter={setSpaTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default PageSearch;
