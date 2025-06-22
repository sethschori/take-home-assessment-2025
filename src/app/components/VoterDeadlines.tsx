'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Filter from './Filter';
import Table from './Table';

function VoterDeadlines({ deadlines }) {
  const [quickFilterText, setQuickFilterText]: [string, Dispatch<SetStateAction<string>>] = useState('');

  return (
    <>
      <Filter
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
      />
      <Table
        deadlines={deadlines}
        quickFilterText={quickFilterText}
      />
    </>
  );
}

export default VoterDeadlines;
