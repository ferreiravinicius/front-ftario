import * as React from 'react';
import FilterForm from '../components/molecules/filter-form/filter-form';
import Filter from '../components/organisms/filter/filter';
import HideableSideTemplate from '../components/templates/hideable-side/hideable-side-template';

export default function Home() {
  return (
    <HideableSideTemplate
      isSideOpen
      mainContent={<>Teste</>}
      sideContent={<Filter form={<FilterForm />} />}
    />
  );
}